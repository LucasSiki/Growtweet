import { v4 as useUuid } from 'uuid';

class Tweet{
    private id: string;
    constructor (private post: string, private type: "normal" | "reply"){
        this.id = useUuid();
    }

    public getDetails(){
        return{
            id: this.id,
            post: this.post,
            type: this.type
        };
    }
}

export default Tweet;