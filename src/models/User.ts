import bcrypt from "bcrypt"
import mongoose from "mongoose";

interface User{
    name : string;
    username:string;
    password : string;
    email:string;
}

const userSchema = new mongoose.Schema<User>({
    name : {type:String, required:true},
    username : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    
})

userSchema.pre('save',async function (params:any) {
    console.log("users password", this.password)
    this.password = await bcrypt.hash(this.password,5)
    console.log("hash password", this.password)
})

const User = mongoose.model("User",userSchema);

export default User;