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
  username: string;
  plan: PlanData;
  des: string;
}

const planSchema = new mongoose.Schema<Plan>({
  des: { type: String, required: true },
  plan: { type: {}, required: true },
});

const Plan = mongoose.model("Plan", planSchema);

export default Plan;
