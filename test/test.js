const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;
const faker = require("faker");
const UserModel = require("../api/model/UserModel");
const bcrypt = require("bcrypt");

chai.use(http);

const app = require("../app");

describe("App", () => {
  it("Should exists", () => {
    expect(app).to.be.a("function");
  });

  it("GET / should return 200 and message", (done) => {
    chai
      .request(app)
      .get("/")
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.contain("Hello World!");
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
});

describe("User registration", () => {
  let new_user = {};

  beforeEach(function (done) {
    new_user= {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()+"1M*",
    }
    done();
  });
  
  afterEach(function(done) {
    UserModel.findOneAndDelete({username:new_user.username},(err,user)=>{
      if(err){
        console.log("LogTest_UserRegistration: erreur de suppresion d'utilisateur");
      }else {
        console.log("LogTest_UserRegistration: utilisateur suprimé");
        done()
      }
    })
  })

  it("Should return 201 and confirmation for valid input", (done) => {
    chai
      .request(app)
      .post("/user/register")
      .send(new_user)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal("User created!");
        expect(res.body.errors.length).to.be.equal(0);
        expect(res.body.user._id).to.exist;
        expect(res.body.user.created_at).to.exist;
        bcrypt.compare(new_user.password,res.body.user.password,(err,result)=>{
          if(err){
            console.log("LogTest_UserRegistration: erreur de compare de password : " + err)
          }
          expect(result).to.be.equal(true)
        })
        console.log(res.body.tokens);
        expect(res.body.tokens).to.exist;
        done();
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  it("Should return 422 and a message if the username is not valid", (done) => {
    new_user.username = "";
    chai
      .request(app)
      .post("/user/register")
      .send(new_user)
      .then((res) => {
        expect(res).to.have.status(422);
        expect(res.body.message).to.be.equal("Invalid entry");
        expect(res.body.errors.length).to.be.equal(1);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  it("Should return 422 and a message if the email is not valid", (done) => {
    new_user.email = "";
    chai
      .request(app)
      .post("/user/register")
      .send(new_user)
      .then((res) => {
        expect(res).to.have.status(422);
        expect(res.body.message).to.be.equal("Invalid entry");
        expect(res.body.errors.length).to.be.equal(1);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  it("Should return 422 and a message if the password is not valid", (done) => {
    new_user.password = "aaaa";
    chai
      .request(app)
      .post("/user/register")
      .send(new_user)
      .then((res) => {
        expect(res).to.have.status(422);
        expect(res.body.message).to.be.equal("Invalid entry");
        expect(res.body.errors.length).to.be.equal(1);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  it("Should return 422 and a message if the username and email is not valid", (done) => {
    new_user.username = "a";
    new_user.email = "aaaa";
    chai
      .request(app)
      .post("/user/register")
      .send(new_user)
      .then((res) => {
        expect(res).to.have.status(422);
        expect(res.body.message).to.be.equal("Invalid entry");
        expect(res.body.errors.length).to.be.equal(2);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  
});

describe("User Update",() =>{

  const old_user = {
    username: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password()+"1M*",
  };
  let new_user = {}

  beforeEach(function (done) {
    UserModel.create(old_user,(err,user)=>{
      if(err){
        console.log("LogTest_UserUpdate: erreur de creation d'utilisateur"+ err);
      }else {
        console.log("LogTest_UserUpdate: utilisateur"+ user.username +" créé");
        new_user._id = user._id
        done()
      }
    })
  });

  afterEach(function(done) {
    UserModel.findOneAndDelete({username:new_user.username},(err)=>{
      if(err){
        console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
      }else {
        console.log("LogTest_UserUpdate: utilisateur suprimé");
        done()
      }
    })
  })

  it("Should return 200 and message with the data is valid",(done)=>{
    new_user.username = faker.name.firstName();
    new_user.email = faker.internet.email();
    new_user.password = faker.internet.password();
    chai
      .request(app)
      .put("/user/update/"+ new_user._id)
      .send(new_user)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal("update successful!");
        expect(res.body.errors.length).to.be.equal(0);
        expect(res.body.user.username).to.be.equal(new_user.username);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  
  
})

// describe("User delete", () => {
//   let new_user = {}
//   beforeEach(function (done) {
//     new_user = {
//       _id:faker.internet.password(),
//       username: faker.name.firstName(),
//       email: faker.internet.email(),
//       password: +"1M*m",
//     };
//     chai
//       .request(app)
//       .post("/user/register")
//       .send(new_user)
//       .then((res) => {
//         done();
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//     });
//   it("Should return 200 and message if user deleted", (done) => {
//     chai
//       .request(app)
//       .delete(`/user/delete/${new_user._id}`)
//       .send(new_user)
//       .then((res) => {
//         expect(res).to.have.status(201);
//         expect(res.body.message).to.be.equal(
//           "User " + req.body.user.username + " is deleted"
//         );
//         expect(res.body.errors.length).to.be.equal(0);
//         done();
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   });
// });
