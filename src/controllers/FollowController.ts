import FollowingMiddleware from "../middlewares/followingMiddleware";
import User from "../models/User";

class  FollowController{
    public register(follower: User, userFollowed: User){
        if(!FollowingMiddleware.userExist(follower) || !FollowingMiddleware.userExist(userFollowed)){
            console.error("User not found");
            return;
        }

        if(!FollowingMiddleware.validateNotFollwingMyself(follower, userFollowed)) {
            console.error("You can't follow yourself.");
            return;
        }

        const followingList = follower.getFollowing();

        if(!followingList.includes(userFollowed)) {
            followingList.push(userFollowed);
        }
        
        console.log(`${follower.getDetails().username} it's following ${userFollowed.getDetails().username}`);
    }

    public showOnTerminal(user: User){
        const followerId = user.getDetails().id;
        const following = user.getFollowing();

        if(!following || following.length === 0){
            console.log(`${user.getDetails().username} currently follow nobody`)
        }
        else{
            console.log(`Users that ${user.getDetails().username} follow:`);
            following.forEach((followedUser) => {
                console.log(followedUser.getDetails().username)
            });
        }
    }
}

export default new FollowController()