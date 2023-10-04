import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_DATE } from '@storage/storageConfig'
import { MealProps } from './MealStorageDTO'
import { getAllMealsDate } from "./GetAllMeals";

export async function checkAndCreateMeal( date:string ) {

   try {
      const dates =  await getAllMealsDate();
      
      const alreadyHasDate = dates.includes(date)

      if (alreadyHasDate) {
         // entra aqui caso tenha o dia cadastrado

         console.log(`Já se encontra ${date} na lista`)

         return date;
      
      }

      const storage = JSON.stringify([...dates, date]);
      
      await AsyncStorage.setItem(MEALS_DATE, storage);
      
      console.log(`Cadastrou o dia ${date}`);

      return date;

   } catch(error) {
      
      throw error;
   }
}

// {
//    date: number
//    data: [{}]
// }