export interface Dataprops  {
   title: string;
   description:string;
   time: string;
   type: "IN" | "OUT";
}

export type MealProps = {
   titleDate: string;
   data: Dataprops[]
}