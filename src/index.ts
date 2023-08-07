import User from "./models/User";
import Tweet from "./models/Tweet";
import FollowController from "./controllers/FollowController";
import LikeController from "./controllers/LikeController";
import RetweetController from "./controllers/RetweetController";
import TweetController from "./controllers/TweetController";
import UserController from "./controllers/UserController";
import FeedController from "./controllers/FeedController";


console.log("TWITTER LOADING")

console.log("-------------- Creating your User -----------")

const user1 = new User("Lucas", "Lucas@gmail.com", "LucasSiki", 1234)
const user2 = new User("Pedro", "aaa@", "Pedroca", 1234)

UserController.register(user1)
UserController.register(user2)

console.log("-------------- Posting your first Tweet -----------")

const tweet1 = new Tweet("Hello word by Lucas", "normal")
const tweet2 = new Tweet("Opaa", "normal")

TweetController.register(user1, tweet1)
TweetController.register(user2, tweet2)

TweetController.tweetsList(user1)

console.log("-------------- See your tweets here -----------")

TweetController.showOnTerminal(user1, tweet1)

console.log("-------------- Follow others users -----------")

FollowController.register(user1, user2);
FollowController.register(user2, user1);


FollowController.showOnTerminal(user1);
FollowController.showOnTerminal(user2);

console.log("-------------- Like others users tweets -----------")
LikeController.register(user1, tweet2);
LikeController.register(user2, tweet1);

LikeController.showOnTerminal(tweet1);
LikeController.showOnTerminal(tweet2);
console.log("")

console.log("-------------- Retweet others users posts -----------")
RetweetController.retweetAnyTweet(user1, tweet2, "heyy")

console.log("")
console.log("------- This is your Feed. Enjoy it! ------")
FeedController.showOnTerminal(user1)