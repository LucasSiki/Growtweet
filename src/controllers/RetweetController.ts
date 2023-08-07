import User from "../models/User";
import users from "../data/users";
import Tweet from "../models/Tweet";
import TweetController from "./TweetController";
import Retweet from "../models/Retweet";
import tweets from "../data/tweets";

class RetweetController{
    public retweetFormat(retweet: Retweet[], ident: string){
        let retweetInfos = "";

        retweet.forEach((retweet) => {
            const tweetAuthor = retweet.getDetails().author;
            const contentOnRetweet = retweet.getDetails().post;

            retweetInfos += `${ident}@${tweetAuthor}:  ${contentOnRetweet}`
        });
        return retweetInfos;
    }

    public retweetAnyTweet(user: User, mainTweet: Tweet, post: string){
        const currentUser = users.find((item) => item.getDetails().username === user.getDetails().username);

        if (currentUser){
            const retweetSomeTweet = new Tweet(post, "retweet");
            retweetSomeTweet.setMyTweetId(currentUser.getDetails().id);

            const retweet = new Retweet(post, user, mainTweet.getDetails().id);
            mainTweet.replyTweet(retweet);

            TweetController.register(user, retweetSomeTweet);

            const retweetInfos = this.retweetFormat(mainTweet.getRetweet(), "==> ")
            return retweetInfos;
        }
    }
}

export default new RetweetController()