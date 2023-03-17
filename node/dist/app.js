"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_service_1 = require("./services/user_service");
const app = (0, express_1.default)();
app.get('/hello-world', (req, res) => {
    res.send("Hello World");
});
// get all users
app.get('/users', (req, res) => {
    res.json(user_service_1.userService.get_all_user());
});
// get user by id
app.get('/user/:id', (req, res) => {
    res.send("User details requested for user id " + req.params.id);
});
// add new user
app.post('/user', (req, res) => {
    const { name, email } = req.body;
    res.send("created user with name " + name + " and email " + email);
});
// updates user by id
app.put('/user/:id', (req, res) => {
    res.send("Updated User details for user id " + req.params.id);
});
app.listen('8080', () => {
    console.log("Server running on http://localhost:8080");
});
