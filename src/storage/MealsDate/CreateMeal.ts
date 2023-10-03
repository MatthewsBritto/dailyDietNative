import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_DATE } from '@storage/storageConfig'
import { MealProps } from './MealStorageDTO'
import { getAllMealsDate } from "./GetAllMeals";

export async function checkAndCreateMeal( date:string ) {

   try {
      const dates =  await getAllMealsDate();
      const filter = dates.filter(item => item === date)

      if (filter) {

         return date;
      
      }

      const storage = JSON.stringify([...dates, date]);
      
      await AsyncStorage.setItem(MEALS_DATE, storage);
      
      console.log(storage);

   } catch(error) {
      
      throw error;
   }
}

// {
//    date: number
//    data: [{}]
// }