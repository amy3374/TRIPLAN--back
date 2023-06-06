import Plan from "../models/Plan";

export const getSave = async (req: any, res: any) => {
  const { username } = req.body;
  const plan = await Plan.findOne({ username: username });
  console.log(plan);

  return res.status(200).send({ status: 200, planData: plan });
};
export const postSave = async (req: any, res: any) => {
  const { plan, des, username } = req.body;

  console.log(req.body);

  try {
    await Plan.create({
      username,
      des,
      plan,
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
