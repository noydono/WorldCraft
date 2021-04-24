const userEntitie = require("../../../../core/entities/user"),
 userInterface = require("../../../../core/port/userInterface"),
 MongooseUser = require("../../odm/mongoose/schema/user")

module.exports = class extends userInterface {

  constructor() {
    super();
  }

  async create(user) {

    const { pseudo, email, password } = user;
    let mongooseUser;

    try {

      mongooseUser = new MongooseUser({ pseudo, email, password },(err,user)=>{

        if(err){
          throw new Error(err)
        }

      });

      await mongooseUser.save()
      await mongooseUser.generateAuthToken();

      return new userEntitie(
        mongooseUser._id,
        mongooseUser.pseudo,
        mongooseUser.email,
        null,
        mongooseUser.tokens[0]
      );

    } catch (exception) {

      return new userEntitie(
        mongooseUser._id,
        mongooseUser.pseudo,
        mongooseUser.email,
        null,
        null
      );

    }
  }

  async findByCredential(user){
    
    

      const email = user.email;
      const password = user.password;
      const mongooseUser = await MongooseUser.findByCredentials(email, password);
      const token = await mongooseUser.generateAuthToken();
    
      return new userEntitie(
        mongooseUser._id,
        mongooseUser.pseudo,
        mongooseUser.email,
        null,
        token,
        mongooseUser.isAdmin
      );


  }

};
