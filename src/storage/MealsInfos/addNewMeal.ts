import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@storage/MealsDate/MealStorageDTO";

export async function addNewMeal( data: {} , date:string ) {

      const MealObj = {
         date: date,
         data: data
      }

      try {
         const fetch = await AsyncStorage.getItem(date);
         
         if(fetch) {
            return console.log(fetch)
         }

         return console.log('Não funcionou')
      } catch (error) {

         throw error
      }



}