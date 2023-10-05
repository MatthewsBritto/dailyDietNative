import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DATE, MEALS_INFOS } from "./storageConfig";
import { MealProps } from "./MealsDate/MealStorageDTO";

export async function getMealsInfosByDate():Promise<MealProps[]>
{

   let mealsByDay : MealProps[] = []
   
   try {

         const fetchDates = await AsyncStorage.getItem(`${MEALS_DATE}`);

         

         if(fetchDates) {

            const jsonDates:any[] = JSON.parse(fetchDates)

            const dates = jsonDates.sort((a,b) => a > b ? 1 : 0)

            for (let i = 0 ; i < dates.length ; i++){
               
               let dateInfoString = await AsyncStorage.getItem(`${MEALS_INFOS}-${jsonDates[i]}`)
               
               if(dateInfoString){

                  mealsByDay.push(JSON.parse(dateInfoString))
               }
             
            }           

          return mealsByDay
         }

      return []

   }catch(error) {
      throw error;
   }
}