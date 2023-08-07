import User from "../models/User";
import users from "../data/users";
import Tweet from "../models/Tweet";
import Like from "../models/Like";

class LikeController{
    public register(user: User, tweet: Tweet){
        const userExist = users.find((item) => item.getDetails().id === user.getDetails().id);

        if (userExist){
            const like = new Like(user);
            tweet.like(user);
        }
    }

    public showOnTerminal(tweet: Tweet) {
        const likes = tweet.getDetails().likes;

        let likesTotal = "";

        if (likes.length === 0) {
            likesTotal = "No likes";
        } else if (likes.length === 1) {
            const whoLike = likes[0]?.getUsername();
            likesTotal = whoLike ? `@${whoLike} liked this Tweet` : "Unknown user liked this Tweet";
        } else {
            const whoLikedFirst = likes[0]?.getUsername();
            const otherLikes = likes.length - 1;

            likesTotal = whoLikedFirst
                ? `@${whoLikedFirst} and ${otherLikes} ${otherLikes === 1 ? "user liked your Tweet" : "users liked your Tweet"}`
                : `${otherLikes} ${otherLikes === 1 ? "user liked your Tweet" : "users liked your Tweet"}`;
        }
        return likesTotal;
    }
}

export default new LikeController();