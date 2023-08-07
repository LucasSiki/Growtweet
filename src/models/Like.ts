import { v4 as useUuid } from 'uuid'; 
import User from "../models/User";

class Like{
    private id: string;
    private username: string;

    constructor(user: User){
        this.id = useUuid();
        this.username = user.getDetails().username;
    }

    public getId(){
        return this.id;
    }

    public getUsername(){
        return this.username;
    }
}

export default Like;