import User from "../models/User"
import bcrypt from "bcrypt"
export const postCheckUsername=async(req:any,res:any)=>{
    const {username} = req.body
    const exists = await User.exists({username});
    // console.log(exists);
    //console.log(username);
    if(exists){
        return res.status(400).send({ status:400})
    } else{
        return res.status(200).send({ status:200})
    }
    
}
export const getJoin=(req:any,res:any)=>{
  res.send("join")
}
export const postJoin=async(req:any,res:any)=>{
    const {name,username,password,email} = req.body
    const exists = await User.exists({email});
    //console.log(exists);
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
export const getLogin=(req:any,res:any)=>res.send("Login") 
export const postLogin = async (req:any,res:any) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send( {   status:400,errorMessage: "An account with this username does not exists."});
      }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    console.log(req.session)
    return res.status(400).send({ status:400,errorMessage: "An account with this username does not exists."
    });
  }else{
    req.session.save(function () {  // req.session.save(callback)은 사용하지 않아도 됨
      req.session.loggedIn = true;
      req.session.user = user;
      console.log(req.session)
      // post 요청에 대한 응답이기에 {data:null}이 되므로, {data: userInfo} 무의미하여 생략 가능
      return res.status(200).send({status:200,loggedIn:true,user})
    });
  }
  };
