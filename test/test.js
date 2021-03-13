const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;
const faker = require("faker");
const UserModel = require("../app/models/UserModel");

chai.use(http);

const app = require("../server");

describe("App", () => {
    it("Should exists", () => {
        expect(app).to.be.a("function");
    });
    it("Env soit en test",(done)=>{
        expect(app.locals.settings.env).to.be.equal("test")
        done()
    })
});

describe("User registration", () => {

    let new_user = {
        username: "toto",
        email: faker.internet.email(),
        password: "1zodkengM*",
        isVerified: true
    };

   

    afterEach(function (done) {
        UserModel.deleteMany({
            username: new_user.username
        }, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_UserRegistration: " + err);
            } else {
                new_user = {
                    username: "toto",
                    email: faker.internet.email(),
                    password: "1zodkengM*",
                    isVerified: true
                };
                new__user_invited = {
                    username: "toto",
                    email: faker.internet.email(),
                }
                done();
            }
        });
    });

    it("retourne 201 si l'utilisateur et persisté", (done) => {
        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(201);
                expect(res.body.errors).to.not.exist
                expect(res.body._id).to.be.exist
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    
    it("retourne 422 si l'email existe dans la db", (done) => {
        new_user.email = "exist@exist.exi"
        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                expect(res.body.errors[0].email).to.be.equal("L'email existe déjà")
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })

    it("retourne 422 si username n'est pas valide", (done) => {
        new_user.username = "a",

            chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 422 si email n'est pas valide", (done) => {
        new_user.email = "aaaaa",

            chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 422 si le password n'est pas valide", (done) => {
        new_user.password = "1zodk"

        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
   

    it("retourne 422 si la username n'est pas existant", (done) => {
        delete new_user.username
        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                expect(res.body.errors[0].username).to.be.equal("Le pseudo et requis")
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 422 si la email n'est pas existant", (done) => {
        delete new_user.email;
        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                expect(res.body.errors[0].email).to.be.equal("L'email et requis")
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 422 si la password n'est pas existant", (done) => {
        delete new_user.password;
        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                expect(res.body.errors[0].password).to.be.equal("Le password et requis")
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    

    it("retourne 422 si deux ne pas valide", (done) => {
        delete new_user.username;
        delete new_user.email;
        chai
            .request(app)
            .post("/api/register")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(2);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });

});

describe("User login", () => {

    let new_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*",
    };

    beforeEach(function (done) {
        const user = new UserModel(new_user);
        user.save((err, user_saved) => {
            if (err) {
                console.log(
                    "LogTest_UserUpdate: erreur de creation d'utilisateur" + err
                );
            } else {
                new_user._id = user_saved._id
                done();
            }
        });
        user.generateAuthToken()
    });

    afterEach(function (done) {
        UserModel.findOneAndDelete({
            username: new_user.username
        }, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_UserRegistration: " + err);
            } else {
                new_user = {
                    username: faker.name.firstName(),
                    email: "noydono.dev.spam@gmail.com",
                    password: faker.internet.password() + "1M*",
                }
                done();
            }
        });
    });

    it("retourne 200 si les credentials sont valide", (done) => {
        chai
            .request(app)
            .post("/api/login")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body.token).to.exist;
                expect(res.body.user._id).to.be.equal(`${new_user._id}`)
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    });
    it("retourne 422 si l'email n'est pas valide", (done) => {
        new_user.email = "ea ";
        chai
            .request(app)
            .post("/api/login")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })
    it("retourne 422 si l'email n'est pas existant", (done) => {
        let credential = {
            password: faker.internet.password() + "1M*"
        }

        chai
            .request(app)
            .post("/api/login")
            .send(credential)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })
    it("retourne 422 si l'email n'existe pas dans la db", (done) => {
        new_user.email = "toto@toto.toto";
        chai
            .request(app)
            .post("/api/login")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                expect(res.body.errors[0].email).to.be.equal("L'email n'est pas existante")
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })
    it("retourne 422 si le password ne match pas", (done) => {
        new_user.password = "Toto1234*"
        chai
            .request(app)
            .post("/api/login")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })
    it("retourne 422 si le password n'est pas valid", (done) => {
        new_user.password = "toto";

        chai
            .request(app)
            .post("/api/login")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })
    it("retourne 422 si le password n'est pas existant", (done) => {
        let credential = {
            email: "noydono.dev.spam@gmail.com",
        }

        chai
            .request(app)
            .post("/api/login")
            .send(credential)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            })
    })
})

describe("User Update", () => {

    const old_user = {
        username: "toto",
        email: faker.internet.email(),
        password: "1zodkengM*"
    };
    let new_user = {};

    beforeEach(function (done) {
        UserModel.create(old_user, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_UserUpdate: erreur de creation d'utilisateur" + err
                );
            } else {
                new_user._id = user._id;
                done();
            }
        });
    });

    afterEach(function (done) {
        UserModel.findOneAndDelete({
            _id: new_user._id
        }, (err) => {
            if (err) {
                console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
            } else {
                new_user = {}
                done();
            }
        });
    });

    it("retourne 200 si les data sont valide et persisté", (done) => {

        new_user.username = "henry"
        new_user.email = faker.internet.email()
        new_user.password = "1azoeiada1*A"

        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body._id).to.be.equal(`${new_user._id}`)
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });

    it("retourne 200 si seulement l'username et envoyer", (done) => {

        new_user.username = "henry"
        
        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body._id).to.be.equal(`${new_user._id}`)
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 200 si seulement un email et envoyer", (done) => {

        
        new_user.email = faker.internet.email()
        
        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body._id).to.be.equal(`${new_user._id}`)
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 200 si seulement un password et envoyer", (done) => {

        new_user.password = "1azoeiada1*A"

        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body._id).to.be.equal(`${new_user._id}`)
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    

    it("retourne 422 si l'utilisateur n'est pas trouver", (done) => {
        new_user.username = "henry"
        new_user.email = faker.internet.email()
        new_user.password = "1azoeiada1*A"
        chai
            .request(app)
            .put("/api/update/123")
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors[0].update).to.be.equal("User introuvable");
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });

    it("retourne 422 si username n'est pas valide", (done) => {
        new_user.username = "<>"
        

        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 422 si la email n'est pas valide", (done) => {
        
        new_user.email = "<>"
        

        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    it("retourne 422 si la password n'est pas valide", (done) => {
        
        new_user.password = "1azo"

        chai
            .request(app)
            .put("/api/update/" + new_user._id)
            .send(new_user)
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors.length).to.be.equal(1);
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    

});

describe("User Delete", () => {

    let new_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*",
    };

    beforeEach(function (done) {
        UserModel.create(new_user, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_UserUpdate: erreur de creation d'utilisateur" + err
                );
            } else {

                new_user._id = user._id;
                done();
            }
        });
    });

    afterEach(function (done) {
        UserModel.findOneAndDelete({
            _id: new_user._id
        }, (err) => {
            if (err) {
                console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
            } else {
                new_user = {
                    username: faker.name.firstName(),
                    email: faker.internet.email(),
                    password: faker.internet.password() + "1M*",
                };
                done();
            }
        });
    });

    it("retourn 200 si l'utilisateur et supprimé", (done) => {

        chai
            .request(app)
            .delete("/api/delete/" + new_user._id)
            .send()
            .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body.errors).to.not.exist
                expect(`${new_user._id}`).to.be.equal(res.body._id)
                done()
            }).catch((err) => {
                console.log(err)
            })
    })

    it("retourne 422 si l'utilisateur n'est pas trouver", (done) => {
        chai
            .request(app)
            .delete("/api/delete/123")
            .send()
            .then((res) => {
                expect(res).to.have.status(422);
                expect(res.body.errors[0].delete).to.be.equal("User introuvable");
                done();
            })
            .catch((err) => {
                console.log(err);
            });
    });

    //je voudrais rajoute un check de id mongoose qui doit un 
    // hex de 24 charctere pour que findByIdAndDelete renvoie q'une erreur

})

describe("AddFriend", () => {

    let first_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*"
    };
    let second_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*"
    };

    beforeEach(function (done) {
        UserModel.create(first_user, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_UserUpdate: erreur de creation d'utilisateur" + err
                );
            } else {
                first_user._id = user._id;
                UserModel.create(second_user, (err, user) => {
                    if (err) {
                        console.log(
                            "LogTest_UserUpdate: erreur de creation d'utilisateur" + err
                        );
                    } else {
                        second_user._id = user._id;
                        done()
                    }
                });
            }
        });

    });

    afterEach(function (done) {

        UserModel.findOneAndDelete({
            _id: first_user._id
        }, (err) => {
            if (err) {
                console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
            } else {
                first_user = {
                    username: faker.name.firstName(),
                    email: faker.internet.email(),
                    password: faker.internet.password() + "1M*"
                };
                UserModel.findOneAndDelete({
                    _id: second_user._id
                }, (err) => {
                    if (err) {
                        console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
                    } else {
                        new_user = {
                            username: faker.name.firstName(),
                            email: faker.internet.email(),
                            password: faker.internet.password() + "1M*"
                        };
                        done();
                    }
                });
            }
        });

    });

    it("retourn 200 si l'ami et ajouté", (done) => {

        chai
            .request(app)
            .post("/api/friend/" + first_user._id)
            .send({
                _id: second_user._id,
                username: second_user.username
            })
            .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body.errors).to.not.exist
                done()
            }).catch((err) => {
                console.log(err);
            })
    })
    it("retourn 422 si l'une des id n'est pas correct", (done) => {

        chai
            .request(app)
            .post("/api/friend/123")
            .send({
                _id: second_user._id,
                username: second_user.username
            })
            .then((res) => {
                expect(res).to.have.status(422)
                expect(res.body.errors.length).to.be.equal(1)
                expect(res.body.errors[0].addFriend).to.be.equal("l'une ou les deux id ne sont pas correct")
                done()
            }).catch((err) => {
                console.log(err);
            })
    })
    it("retourn 422 si les deux id n'est pas correct", (done) => {

        chai
            .request(app)
            .post("/api/friend/123")
            .send({
                _id: "123"
            })
            .then((res) => {
                expect(res).to.have.status(422)
                expect(res.body.errors.length).to.be.equal(1)
                expect(res.body.errors[0].addFriend).to.be.equal("l'une ou les deux id ne sont pas correct")
                done()
            }).catch((err) => {
                console.log(err);
            })
    })

})

describe("Delete Friend", () => {
    let first_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*",
        race: "malais",
        food: "fourmis",
        age: 1,
        famille: "#fff"
    };
    let second_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*",
        race: "malais",
        food: "fourmis",
        age: 1,
        famille: "#fff"
    };

    beforeEach(function (done) {
        UserModel.create(first_user, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_FriendUpdate: Err beforeEach" + err
                );
            } else {
                first_user._id = user._id;

                UserModel.create(second_user, (err, user) => {
                    if (err) {
                        console.log(
                            "LogTest_FriendUpdate: Err beforeEach" + err
                        );
                    } else {
                        second_user._id = user._id;

                        UserModel.findByIdAndUpdate(first_user._id, {
                            $push: {
                                friends: {
                                    _id: second_user._id,
                                    _username: second_user.username,
                                }
                            }
                        }, {
                            new: true,
                        }, (err, user) => {
                            if (!err) {
                                done()
                            } else {
                                console.log(err)
                            }
                        })
                    }
                });
            }
        });
    });

    afterEach(function (done) {
        UserModel.findOneAndDelete({
            _id: first_user._id
        }, (err) => {
            if (err) {
                console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
            } else {

                first_user = {
                    username: faker.name.firstName(),
                    email: faker.internet.email(),
                    password: faker.internet.password() + "1M*"
                };
                UserModel.findOneAndDelete({
                    _id: second_user._id
                }, (err) => {
                    if (err) {
                        console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
                    } else {
                        second_user = {
                            username: faker.name.firstName(),
                            email: faker.internet.email(),
                            password: faker.internet.password() + "1M*"
                        };
                        done();
                    }
                });
            }
        });
    });

    it("retourn 200 si l'ami et suprimé", (done) => {

        chai
            .request(app)
            .put("/api/friend/" + first_user._id)
            .send({
                _id: second_user._id,
                username: second_user.username
            })
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            }).catch((err) => {
                console.log(err);
            })
    })

    it("retourn 422 si l'une des id n'est pas correct", (done) => {

        chai
            .request(app)
            .put("/api/friend/123")
            .send({
                _id: second_user._id,
                username: second_user.username
            })
            .then((res) => {
                expect(res).to.have.status(422)
                expect(res.body.errors.length).to.be.equal(1)
                expect(res.body.errors[0].removeFriend).to.be.equal("l'une ou les deux id ne sont pas correct")
                done()
            }).catch((err) => {
                console.log(err);
            })
    })
    it("retourn 422 si les deux id n'est pas correct", (done) => {

        chai
            .request(app)
            .put("/api/friend/123")
            .send({
                _id: "123"
            })
            .then((res) => {
                expect(res).to.have.status(422)
                expect(res.body.errors.length).to.be.equal(1)
                expect(res.body.errors[0].removeFriend).to.be.equal("l'une ou les deux id ne sont pas correct")
                done()
            }).catch((err) => {
                console.log(err);
            })
    })

})

describe("GetAllUser", () => {
    let first_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*"
    };
    let second_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*"
    };

    beforeEach(function (done) {
        UserModel.create(first_user, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_FriendUpdate: Err beforeEach" + err
                );
            } else {
                first_user._id = user._id;

                UserModel.create(second_user, (err, user) => {
                    if (err) {
                        console.log(
                            "LogTest_FriendUpdate: Err beforeEach" + err
                        );
                    } else {
                        second_user._id = user._id;
                        done()
                    }
                });
            }
        });


    });

    afterEach(function (done) {
        UserModel.findOneAndDelete({
            _id: first_user._id
        }, (err) => {
            if (err) {
                console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
            } else {

                first_user = {
                    username: faker.name.firstName(),
                    email: faker.internet.email(),
                    password: faker.internet.password() + "1M*"
                };
                UserModel.findOneAndDelete({
                    _id: second_user._id
                }, (err) => {
                    if (err) {
                        console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
                    } else {
                        second_user = {
                            username: faker.name.firstName(),
                            email: faker.internet.email(),
                            password: faker.internet.password() + "1M*"
                        };
                        done();
                    }
                });
            }
        });

    });

    it("retourn 200 avec tout les utilisateur", (done) => {

        chai
            .request(app)
            .get("/api/friend")
            .send()
            .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.have.lengthOf.above(0)
                done()
            }).catch((err) => {
                console.log(err);
            })
    })
})

describe("GetByIdAndretournFriend", () => {

    let first_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*"
    };
    let second_user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password() + "1M*"
    };

    beforeEach(function (done) {
        UserModel.create(first_user, (err, user) => {
            if (err) {
                console.log(
                    "LogTest_FriendUpdate: Err beforeEach" + err
                );
            } else {
                first_user._id = user._id;

                UserModel.create(second_user, (err, user) => {
                    if (err) {
                        console.log(
                            "LogTest_FriendUpdate: Err beforeEach" + err
                        );
                    } else {
                        second_user._id = user._id;
                        UserModel.findByIdAndUpdate(second_user._id, {
                            $push: {
                                friends: first_user._id
                            }
                        }, {
                            new: true,
                        }, (err, user) => {
                            if (!err) {
                                UserModel.findByIdAndUpdate(first_user._id, {
                                    $push: {
                                        friends: second_user._id
                                    }
                                }, {
                                    new: true,
                                }, (err, user) => {
                                    if (!err) {
                                        done()
                                    } else {
                                        console.log(err)
                                    }
                                })
                            } else {
                                console.log(err)
                            }
                        })
                    }
                });
            }
        });


    });

    afterEach(function (done) {
        UserModel.findOneAndDelete({
            _id: first_user._id
        }, (err) => {
            if (err) {
                console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
            } else {

                first_user = {
                    username: faker.name.firstName(),
                    email: faker.internet.email(),
                    password: faker.internet.password() + "1M*"
                };
                UserModel.findOneAndDelete({
                    _id: second_user._id
                }, (err) => {
                    if (err) {
                        console.log("LogTest_UserUpdate: erreur de suppresion d'utilisateur");
                    } else {
                        second_user = {
                            username: faker.name.firstName(),
                            email: faker.internet.email(),
                            password: faker.internet.password() + "1M*"
                        };
                        done();
                    }
                });
            }
        });

    });

    it("retourn 200 et retroun les amis de user", (done) => {

        chai
            .request(app)
            .get("/api/friend/" + first_user._id)
            .send({
                _id: second_user._id
            })
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            }).catch((err) => {
                console.log(err);
            })
    })

    it("retourn 422 si l'une des id n'est pas correct", (done) => {

        chai
            .request(app)
            .get("/api/friend/123")
            .send({
                _id: second_user._id
            })
            .then((res) => {
                expect(res).to.have.status(422)
                expect(res.body.errors.length).to.be.equal(1)
                expect(res.body.errors[0].getMyFriend).to.be.equal("l'une ou les deux id ne sont pas correct")
                done()
            }).catch((err) => {
                console.log(err);
            })
    })

    it("retourn 422 si les deux id n'est pas correct", (done) => {

        chai
            .request(app)
            .get("/api/friend/123")
            .send({
                _id: "123"
            })
            .then((res) => {
                expect(res).to.have.status(422)
                expect(res.body.errors.length).to.be.equal(1)
                expect(res.body.errors[0].getMyFriend).to.be.equal("l'une ou les deux id ne sont pas correct")
                done()
            }).catch((err) => {
                console.log(err);
            })
    })


})
