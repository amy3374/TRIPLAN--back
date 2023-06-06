import Plan from "../models/Plan";

export const getSave = async (req: any, res: any) => {
  const username = req.params.id;
  const plan = await Plan.find({ username });
  console.log(username);

  return res.status(200).send({ status: 200, planData: plan });
};
export const postSave = async (req: any, res: any) => {
  const { plan, des, username } = req.body;

  console.log(req.data);

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
