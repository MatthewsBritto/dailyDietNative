export type MealProps = {
   date: string;
   data: {
      title: string;
      time: string;
      type: "IN" | "OUT";
   }[]
}