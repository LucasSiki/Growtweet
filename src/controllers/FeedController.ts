import User from "../models/User";
import users from "../data/users";
import tweets from "../data/tweets";
import TweetController from "./TweetController";

class FeedController{
    public showOnTerminal(user: User) {
        const currentUser = users.find((item) => item.getDetails().id === user.getDetails().id);

    if (!currentUser) {
        console.log("User not found.");
        return;
    }

    const followedUserIds = currentUser.getFollowing().map((user) => user.getDetails().id);

    const tweetsFeed = tweets.filter((item) => item.getDetails().myTweetId === currentUser.getDetails().id || followedUserIds.includes(item.getDetails().myTweetId));
    tweetsFeed.forEach((item) => {
        const tweetAuthor = users.find((user) => user.getDetails().id === item.getDetails().myTweetId);
        if (tweetAuthor) {
            TweetController.showOnTerminal(tweetAuthor, item);
        }
    });
    }
}

export default new FeedController()