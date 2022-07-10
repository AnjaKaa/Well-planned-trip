import { IPlan } from '../types/planTypes';
import { writePlanData, readAllPlans, updatePlanData } from "../../firebase";

export const newPlan = (plan: IPlan): Promise<void> => writePlanData(plan);
export const updatePlan = (plan: IPlan): Promise<void> => updatePlanData(plan);
export const getAllPlans = (): Promise<IPlan[]> => readAllPlans()
