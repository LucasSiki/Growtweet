import User from "../models/User";
import validUser from "../middlewares/validUserMiddleware";
import users from "../data/users";

class UserController{
    public register(user: User): void{
        const userConfirmation = new validUser();

        if (!userConfirmation.userExist(user)){
            console.log("Unable to register the user. Please try again.")
            return;
        }
        users.push(user);
        console.log("User registered successfully! Welcome aboard!")
    }
}

export default new UserController()