import Plan from "../models/Plan";

export const getSave = async (req: any, res: any) => {
  const username = req.params.username;
  const plan = await Plan.find({ username });
  // console.log("plan",plan)
  return res.status(200).send({ status: 200, planData: plan });
};
export const postSave = async (req: any, res: any) => {
  const { username,des,plan,schedule,baggageList} = req.body;
  try {
    await Plan.create({
      username,
      des,
      plan,
      schedule,
      baggageList,
    });
    return res.status(200).send({ status: 200 });
  } catch (error: any) {
    console.log(error);
    return res.status(404).send({
      status: 404,
      errorMessage: error._message,
    });
  }
};
export const getMyPlan = async(req:any,res:any)=>{
  const id=req.params.id
 // console.log("id",id)
  const planDetail = await Plan.findOne({"_id": id });
  console.log("planDetail",planDetail)
  return res.status(200).send({ status: 200, planDetail});
}
export const postMyPlan=async(req:any,res:any)=>{
  const { username,des,plan,schedule,baggageList} = req.body;
  try {
    await Plan.create({
      username,
      des,
      plan,
      schedule,
      baggageList,
    });
    return res.status(200).send({ status: 200 });
  } catch (error: any) {
    console.log(error);
    return res.status(404).send({
      status: 404,
      errorMessage: error._message,
    });
  }
}
