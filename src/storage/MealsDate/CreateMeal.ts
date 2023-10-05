import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_DATE } from '@storage/storageConfig'
import { MealProps } from './MealStorageDTO'
import { getAllMealsDate } from "./GetAllMeals";

export async function checkAndCreateMeal( title:string ) {

   try {
      const dates =  await getAllMealsDate();
      
      const alreadyHasDate = dates.includes(title)

      if (alreadyHasDate) {
         // entra aqui caso tenha o dia cadastrado

         console.log(`Já se encontra ${title} na lista`)

         return title;
      
      }

      const storage = JSON.stringify([...dates, title]);
      
      await AsyncStorage.setItem(MEALS_DATE, storage);
      
      console.log(`Cadastrou o dia ${title}`);

      return title;

   } catch(error){
      
      throw error;
   }
}

// {
//    date: number
//    data: [{}]
// }