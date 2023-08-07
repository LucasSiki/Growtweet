import Tweet from "../models/Tweet";
import tweets from "../data/tweets";
import User from "../models/User";
import users from "../data/users";
import LikeController from "./LikeController";
import RetweetController from "./RetweetController";

class TweetController{
    public register(user: User, tweet: Tweet){
        const getUserId = users.find((item) => item.getDetails().id === user.getDetails().id);

        if (getUserId){
            user.addTweet(tweet);
            return tweet;
        }
        else{
            return null
        }
    }

    public showOnTerminal(user: User, tweet: Tweet){
        const getUsername = users.find((item) => item.getDetails().username === user.getDetails().username);

        if(getUsername){
            const tweetAuthor = getUsername.getDetails().username;
            const post = tweet.getDetails().post;
            let likes = LikeController.showOnTerminal(tweet);
            let retweet = RetweetController.retweetFormat(tweet.getRetweet(), "==> ")
            const showTweet = `@${tweetAuthor}: ${post} \n ( ${likes} )  |  ${retweet}`

            console.log(showTweet);
        }
    }

    public tweetsList(user: User){
        const userTweets = tweets.filter((tweet) => tweet.getMyTweetId() === user.getDetails().id);

        userTweets.forEach((tweet) => {
            this.showOnTerminal(user, tweet)
        });
    }
}

export default new TweetController()