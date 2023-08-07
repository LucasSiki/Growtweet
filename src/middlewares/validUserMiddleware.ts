import users from "../data/users";
import User from "../models/User";

class validUser{
    public userExist(data: User): boolean {
        const usernameExist = users.find(
            (user) => user.getDetails().username === data.getDetails().username
        );
        if(usernameExist){
            return false
        } else {
            return true
        }
    }
}

export default validUser