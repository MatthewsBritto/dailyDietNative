export type MealProps = {
   date: string;
   data: {
      title: string;
      description:string;
      time: string;
      type: "IN" | "OUT";
   }
}