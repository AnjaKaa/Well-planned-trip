import { IPlan } from '../types/planTypes';
import { writePlanData, readAllPlans } from "../../firebase";

export const newPlan = (plan: IPlan): Promise<void> => writePlanData(plan);

export const getAllPlans = (): Promise<IPlan[]> => readAllPlans()
