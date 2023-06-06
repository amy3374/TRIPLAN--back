import Plan from "../models/Plan";

export const getSave = async (req: any, res: any) => {
  const plan = await Plan.find({});
  console.log(plan);

  return res.status(200).send({ status: 200, planData: plan });
};
export const postSave = async (req: any, res: any) => {
  const { plan, des } = req.body;

  console.log(req.body);

  try {
    await Plan.create({
      des,
      plan,
    });
    return res.status(200).send({ status: 200 });
  } catch (error: any) {
    return res.status(404).send({
      status: 404,
      errorMessage: error._message,
    });
  }
};
