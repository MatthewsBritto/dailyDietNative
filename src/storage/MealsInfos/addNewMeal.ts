import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@storage/MealsDate/MealStorageDTO";
import { MEALS_INFOS } from "@storage/storageConfig";

export async function addNewMeal( data: {} , date:string ) {

      // const MealObj = {
      //    date: date,
      //    data: data
      // }

      try {
         const fetch = await AsyncStorage.getItem(date);
         
         if(fetch) {
            // add mais informação aos dates
         }

         const storage = fetch ? JSON.parse(fetch) : {}

         const newStorage = JSON.stringify([...storage,data])

         // const stringObj = JSON.stringify(`${data}-${date}`, storage)

         await AsyncStorage.setItem(`${MEALS_INFOS}-${date}`, newStorage);

         console.log('talvez tenha funcionado')

      } catch (error) {

         throw error
      }



}