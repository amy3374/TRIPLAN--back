import axios from "axios";
import { v4 } from 'uuid';

export const generatePlanFromDescriptionAndSchedule = async (req: any, res: any, error: any)=>{
const {des, schedule} = req.body;
let messages = [
    { role: "system", content: "형식을 항상 일정하게" },
    {
      role: "user",
      content: `${des + schedule} 일별로  DAY : - 장소와 활동1(문장형태로) - 장소와 활동2 - 장소와 활동3  이런형식으로 사족은 생략해줘`,
    },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CHAT_GPT_API}`,
        "Content-Type": "application/json",
      },
    });
   
    const content = response.data.choices[0].message.content;

    const contentObj = toObject(content);

    return res.send(contentObj);

  } catch (error:any) {
    console.error(error.response.status);
    const contentObj = toObject(
      "DAY 1: -속초 해수욕장 -대포항에서 회 먹기 -청초호 산책 DAY 2: -속초 냉면먹기 -영랑호 산책 -영랑호 포차거리"
    );

    return res.status(error.response.status).send({contentObj, errorMessage: "chat GPT key가 만료되어 test_content(속초 1박 2일)가 전달되었습니다. "});
    
  }

}
    function toObject(content: string) {
        const days = content.split(/DAY [0-9]+:/).slice(1);
      
        const planObj = days.reduce((acc:any, dayContent, index) => {
          const id = v4();
          const items = dayContent
            .split("-")
            .slice(1)
            .map((item, i) => ({ id: v4(), item: item.trim(), time: i + 9 }));
      
          acc[id] = { id, day: index, items };
          return acc;
        }, {});
      
        console.log(planObj);
        return planObj;
      }


