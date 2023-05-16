import User from "../models/User"
export const postCheckUsername=async(req:any,res:any)=>{
    const {username} = req.body
    const exists = await User.exists({username});
    console.log(exists);
    console.log(username);
    if(exists){
        return res.status(400).send({ status:400})
    } else{
        return res.status(200).send({ status:200})
    }
    
}
export const getJoin=(req:any,res:any)=>{}
export const postJoin=async(req:any,res:any)=>{
    const {name,username,password,email} = req.body
    const exists = await User.exists({email});
    console.log(exists);
    if (exists) {
    return res.status(400).send( {   status:400,errorMessage: "This username/email is already taken"});
      }
    
    try {
        await User.create({
          name,
          username,
          password,     
          email,
        });
    return res.status(200).send({ status:200})
} catch (error :any) {
    return res.status(404).send( {
     status:404,
      errorMessage: error._message,
    });
}


  }
export const login=(req:any,res:any)=>res.send("Login") 