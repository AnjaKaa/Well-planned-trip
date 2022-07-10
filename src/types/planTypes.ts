export interface IIntent {
  id: string;
  title: string;
  address?: string;
  description?: string;
  spendings?: ISpending[]
}
export interface IPlan {
  planId: string,
  title: string,
  description: string,
  amountOfDays: number,
  intents: IIntent[],
  dateCreate: number,
  dateUpdate: number
}
export interface ISpending {
  title: string,
  cost?: number,
  currency?: string
}

