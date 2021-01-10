/**
 * test/test.js
 * Basic tests for Auth system API
 */
const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;

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

describe('User registration', () => {
  let new_user = {}

  beforeEach(function(done){
    new_user = {
    "username"  : "johnWick",
    "email": "john@wick.com",
    "password": "Secret1*"
  }
  done() 
  });
  

  it('Should return 201 and confirmation for valid input', (done) => {

    chai.request(app).post('/register')
      .send(new_user)
        .then((res) => {
          expect(res).to.have.status(201);
          expect(res.body.message).to.be.equal("User created!");
          expect(res.body.errors.length).to.be.equal(0);
          console.log(res.body);
          done();
        }).catch(err => {
          console.log(err.message);
        })
  });

  it('Should return 422 and a message if the username is not valid', (done) => {
    new_user.username = ""
    chai.request(app).post('/register')
      .send(new_user)
        .then((res) => {
          expect(res).to.have.status(422);
          expect(res.body.message).to.be.equal("Invalid entry");
          expect(res.body.errors.length).to.be.equal(1);
          console.log(res.body);
          done();
        }).catch(err => {
          console.log(err.message);
        })
  });

  it('Should return 422 and a message if the email is not valid', (done) => {
    new_user.email = ""
    chai.request(app).post('/register')
      .send(new_user)
        .then((res) => {
          expect(res).to.have.status(422);
          expect(res.body.message).to.be.equal("Invalid entry");
          expect(res.body.errors.length).to.be.equal(1);
          console.log(res.body);
          done();
        }).catch(err => {
          console.log(err.message);
        })
  });
  
  it('Should return 422 and a message if the password is not valid', (done) => {
    new_user.password = "aaaa"
    chai.request(app).post('/register')
      .send(new_user)
        .then((res) => {
          expect(res).to.have.status(422);
          expect(res.body.message).to.be.equal("Invalid entry");
          expect(res.body.errors.length).to.be.equal(1);
          console.log(res.body);
          done();
        }).catch(err => {
          console.log(err.message);
        })
  });

})