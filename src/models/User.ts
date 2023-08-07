import { v4 as useUuid} from 'uuid';
import Tweet from './Tweet';
import tweets from '../data/tweets';

class User{
    private id: string;
    private following: User[] = []

    constructor (private name: string,private email: string, private username: string, private password: number){
        this.id = useUuid();
    }

    public getDetails(){
        return{
            id: this.id,
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
        };    
    }
    
    public addTweet(tweet: Tweet){
        tweet.setMyTweetId(this.getDetails().id);
        tweets.push(tweet);
    }

    public getFollowing(){
        return this.following
    }
}

export default User;