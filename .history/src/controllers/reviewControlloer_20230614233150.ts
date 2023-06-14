import Review from "../models/Review";

export const postReview = async (req: any, res: any) => {
  const { content } = req.body;
  const { id } = req.params;

  try {
    await Review.create(id, content);
    return res.status(200).send({ status: 200 });
  } catch (error: any) {
    console.log(error);
    return res.status(404).send({
      status: 404,
      errorMessage: error._message,
    });
  }
};
