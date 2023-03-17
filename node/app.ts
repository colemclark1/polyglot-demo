import express, { Express, Request, Response } from 'express'
import { userService } from './services/user_service';


const app: Express = express()

// load the cookie-parsing middleware
//app.use(cookieParser())

app.get('/', async (req: Request, res: Response) => {
    res.send("Running Node.Js + Express + Typescript");
});

app.get('/hello-world', async (req: Request, res: Response) => {
    res.send("Hello World");
});

// get all users
app.get('/users', async (req: Request, res: Response) => {
    const allUsers = await userService.get_all_user()
    res.json(allUsers)
});

// get user by id
app.get('/users/:id', async (req: Request, res: Response) => {
    const user = await userService.get_user_by_id(Number(req.params.id))
    res.json(user)
});

// add new user
app.post('/user', async (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.send("created user with name " + name + " and email " + email)
});

// updates user by id
app.put('/user/:id', async (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.send("Updated User details for user id " + req.params.id)
});

app.listen('8080', () => {
    console.log("Server running on http://localhost:8080")
})