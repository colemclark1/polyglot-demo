import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/hello-world', (req: Request, res: Response) => {
    res.send("Hello World");
});

// get all users
app.get('/users', (req: Request, res: Response) => {
    // returns all users
});

// get user by id
app.get('/user/:id', (req: Request, res: Response) => {
    res.send("User details requested for user id " + req.params.id)
});

// add new user
app.post('/user', (req: Request, res: Response) => {
    const user = req.body;
    res.send("created user " + user)
});

// updates user by id
app.put('/user/:id', (req: Request, res: Response) => {
    res.send("Updated User details for user id " + req.params.id)
});

app.listen('8080', () => {
    console.log("Server running on http://localhost:8080")
})