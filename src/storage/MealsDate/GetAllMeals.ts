import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_DATE, MEALS_INFOS } from '@storage/storageConfig'

export async function getAllMealsDate(){

   try {

      const dates = await AsyncStorage.getItem(`${MEALS_DATE}`)
      
      const datesJson: any[] = dates ? JSON.parse(dates) : []
            
      return datesJson


   } catch(error) {
   
      throw error;
   }

}