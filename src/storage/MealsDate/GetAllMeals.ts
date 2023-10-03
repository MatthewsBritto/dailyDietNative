import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_DATE } from '@storage/storageConfig'
import { MealProps } from './MealStorageDTO'


export async function getAllMealsDate(){

   try {

      const storage = await AsyncStorage.getItem(MEALS_DATE);
      
      const dates: string[] = storage ? JSON.parse(storage) : []

      // @ignite-diet:date-[meals]

      return dates

   } catch(error) {
      
      throw error;
   }

}