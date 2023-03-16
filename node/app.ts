import express, { Express, Request, Response } from 'express'
import { userService } from './services/user_service';

const app: Express = express()

app.get('/hello-world', (req: Request, res: Response) => {
    res.send("Hello World");
});

// get all users
app.get('/users', (req: Request, res: Response) => {
    res.json(userService.get_all_user())
});

// get user by id
app.get('/user/:id', (req: Request, res: Response) => {
    res.send("User details requested for user id " + req.params.id)
});

// add new user
app.post('/user', (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.send("created user with name " + name + " and email " + email)
});

// updates user by id
app.put('/user/:id', (req: Request, res: Response) => {
    res.send("Updated User details for user id " + req.params.id)
});

app.listen('8080', () => {
    console.log("Server running on http://localhost:8080")
})