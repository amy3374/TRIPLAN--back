import Review from '../models/Review';

export const postReview = async (req: any, res: any) => {
  const { content } = req.body;
  const { id } = req.params;

  try{
    await Review.create(
        id,content)
        return res.status(200).send({status:200})
  }
 
};
