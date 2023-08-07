import { v4 as useUuid } from 'uuid';
import User from './User';
import Like from './Like';
import Retweet from './Retweet';

class Tweet{
    private id: string;
    private myTweetId: string = "";
    private likes: Like[] = [];
    private retweet: Retweet[] = [];

    constructor (private post: string, private type: "normal" | "retweet"){
        this.id = useUuid();
    }

    public getDetails(){
        return {
            id: this.id,
            post: this.post,
            type: this.type,
            myTweetId: this.myTweetId,
            likes: this.likes,
            retweets: this.retweet.map((retweet) => retweet.getDetails())
        };
    }

    public like(user: User){
        const like = new Like(user);
        this.likes.push(like);
    }

    public replyTweet(retweet: Retweet){
        this.retweet.push(retweet);
    }

    public setMyTweetId(myTweetId: string){
        this.myTweetId = myTweetId;
    }

    public getMyTweetId(){
        return this.myTweetId;
    }

    public getRetweet(){
        return this.retweet;
    }
}

export default Tweet;