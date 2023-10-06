export interface Dataprops  {
   id:string;
   date:string;
   title: string;
   description:string;
   time: string;
   type: "IN" | "OUT";
}

export type MealProps = {
   titleDate: string;
   data: Dataprops[]
}