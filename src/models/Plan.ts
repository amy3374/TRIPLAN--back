import mongoose from "mongoose";

type ListItem = {
  id: string;
  item: string;
};

interface PlanData {
  [key: string]: any;
  id: string;
  day: number;
  items: ListItem[];
}

interface Plan {
  id:string;
  username: string;
  plan: PlanData;
  des: string;
  schedule: string;
  baggageList: ListItem[];
}

const planSchema = new mongoose.Schema<Plan>({
  id:{type:String,required:true},
  username: { type: String, required: true },
  des: { type: String, required: true },
  plan: { type: {}, required: true },
  schedule: { type: String, required: true },
  baggageList: { type: [], required: true },
});

const Plan = mongoose.model("Plan", planSchema);

export default Plan;
