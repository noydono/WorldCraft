const UserEntitie = require("../../../core/entities/userEntitie");
const userInterface = require("../../../core/port/userInterface")
module.exports = class extends userInterface {


    constructor() {
        super();
    }

    async add(userEntitie) {
        console.log("userRepositoryinMemory");
    }

    async getByAndUpdate(userEntity) {
        console.log("userRepositoryinMemory");
        
    }

    async getUserById(id) {
        console.log("userRepositoryinMemory");
       
    }

    async findUsers() {
        console.log("userRepositoryinMemory");
       
    }
}; 