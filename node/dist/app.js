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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_service_1 = require("./services/user_service");
const app = (0, express_1.default)();
// load the cookie-parsing middleware
//app.use(cookieParser())
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Running Node.Js + Express + Typescript");
}));
app.get('/hello-world', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World");
}));
// get all users
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield user_service_1.userService.get_all_user();
    res.json(allUsers);
}));
// get user by id
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.userService.get_user_by_id(Number(req.params.id));
    res.json(user);
}));
// add new user
app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    res.send("created user with name " + name + " and email " + email);
}));
// updates user by id
app.put('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    res.send("Updated User details for user id " + req.params.id);
}));
app.listen('8080', () => {
    console.log("Server running on http://localhost:8080");
});
