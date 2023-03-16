import { User } from '../model/user'

class UserService {
    private users: User[] = new Array();

    constructor() {
        this.users.push(new User(1, "John Doe", "johndoe@xyz.com"))
        this.users.push(new User(2, "Kovit Nisar", "kovit.nisar@ibm.com"))
    }

    get_all_user(): User[] {
        return this.users;
    }

    get_user_by_id(id: number): User {
        return this.users[id]
    }

    create_user(name: string, email: string): User {
        const user: User = new User(this.users.length, name, email)
        this.users.push(user);
        return user;
    }

    update_user(id: number, name: string, email: string): User {
        const user: User = new User(this.users.length, name, email)
        return user;
    }
}

export const userService = new UserService()

