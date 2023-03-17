"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.users = new Array();
        this.users.push(new user_1.User(1, "John Doe", "johndoe@xyz.com"));
        this.users.push(new user_1.User(2, "Kovit Nisar", "kovit.nisar@ibm.com"));
    }
    get_all_user() {
        return this.users;
    }
    get_user_by_id(id) {
        return this.users[id];
    }
    create_user(name, email) {
        const user = new user_1.User(this.users.length, name, email);
        this.users.push(user);
        return user;
    }
    update_user(id, name, email) {
        const user = new user_1.User(this.users.length, name, email);
        return user;
    }
}
exports.userService = new UserService();
