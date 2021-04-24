const UserEntitie = require("../../../../core/entities/userEntitie");
const userInterface = require("../../../../core/port/userInterface")
module.exports = class extends userInterface {


    constructor() {
        super();
    }

    async add(userEntitie) {
        console.log("userRepositorySqLite");
    }

    async getByAndUpdate(userEntity) {
        console.log("userRepositorySqLite");
        
    }

    async getUserById(id) {
        console.log("userRepositorySqLite");
       
    }

    async findUsers() {
        console.log("userRepositorySqLite");
       
    }
}; 