import users from "../data/users";
import User from "../models/User";

class FollowingMiddleware{
    public static validateNotFollwingMyself(follower: User, userFollowed: User): boolean{
        return follower.getDetails().id !== userFollowed.getDetails().id;
    }

    public static userExist(user: User): boolean{
        return users.some((item) => item.getDetails().id === user.getDetails().id)
    }
}

export default FollowingMiddleware;