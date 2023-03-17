"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            // db call to get all the users
            return this.users;
        });
    }
    get_user_by_id(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users[id - 1];
        });
    }
    create_user(name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_1.User(this.users.length, name, email);
            this.users.push(user);
            return user;
        });
    }
    update_user(id, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_1.User(this.users.length, name, email);
            return user;
        });
    }
}
exports.userService = new UserService();
