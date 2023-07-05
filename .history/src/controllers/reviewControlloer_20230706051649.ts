import Review from "../models/Review";

export const postReview = async (req: any, res: any) => {
  const { content } = req.body;
  const { id } = req.params;
  const exists = await Review.exists({ id });
  if (exists) {
    await Review.updateOne({ id }, { $set: { content } });
    return res.status(200).send({ status: 200 });
  } else {
    try {
      await Review.create({ id, content });
      return res.status(200).send({ status: 200 });
    } catch (error: any) {
      console.log(error);
      return res.status(404).send({
        status: 404,
        errorMessage: error._message,
      });
    }
  }
};

export const getReview = async (req: any, res: any) => {
  const { id } = req.params;
  const review = await Review.findOne({ id: id });
  try {
    return res.status(200).send({ status: 200, review });
  } catch (error: any) {
    console.log(error);
    return res.status(404).send({
      status: 404,
      errorMessage: error._message,
    });
  }
};
