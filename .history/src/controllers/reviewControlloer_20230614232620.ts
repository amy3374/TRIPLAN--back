export const postReview = async (req: any, res: any) => {
  const { content } = req.body;
  const { id } = req.params;

  console.log(content + ", " + id);
};
