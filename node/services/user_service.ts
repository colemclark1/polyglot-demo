import { User } from '../model/user'

class UserService {
    private users: User[] = new Array();

    constructor() {
        this.users.push(new User(1, "John Doe", "johndoe@xyz.com"))
        this.users.push(new User(2, "Kovit Nisar", "kovit.nisar@ibm.com"))
    }

    async get_all_user(): Promise<User[]> {
        // db call to get all the users
        return this.users;
    }

    async get_user_by_id(id: number): Promise<User> {
        return this.users[id - 1]
    }

    async create_user(name: string, email: string): Promise<User> {
        const user: User = new User(this.users.length, name, email)
        this.users.push(user);
        return user;
    }

    async update_user(id: number, name: string, email: string): Promise<User> {
        const user: User = new User(this.users.length, name, email)
        return user;
    }
}

export const userService = new UserService()

