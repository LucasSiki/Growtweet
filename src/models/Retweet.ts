import { v4 as useUuid } from 'uuid';
import User from './User';

class Retweet{
    private id: string;

    constructor(private post: string, private author: User, tweetOriginalId: string){
        this.id = useUuid();
    }

    public getDetails(){
        return{
            id: this.id,
            author: this.author,
            post: this.author.getDetails()
        }
    }
}

export default Retweet;