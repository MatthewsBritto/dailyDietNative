import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@storage/MealsDate/MealStorageDTO";
import { MEALS_INFOS } from "@storage/storageConfig";

export async function addNewMeal( data: {} , date:string ) {

      // const MealObj = {
      //    date: date,
      //    data: data
      // }

      try {
         // puxa informação de refeição para o mesmo dia data
         const fetch = await AsyncStorage.getItem(`${MEALS_INFOS}-${date}`);
         
         if(fetch) {
            // add mais informação aos dates
            const storage =  JSON.parse(fetch) 
            const newStorage = JSON.stringify([...storage, data]);
            await AsyncStorage.setItem(`${MEALS_INFOS}-${date}`, newStorage);
            
            console.log(JSON.parse(newStorage));
         }



         
         


      } catch (error) {

         throw error
      }



}