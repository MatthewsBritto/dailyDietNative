import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@storage/MealsDate/MealStorageDTO";
import { MEALS_INFOS } from "@storage/storageConfig";

export async function addNewMeal( { data, date }:MealProps ) {

      try {
         // puxa informação de refeição para o mesmo dia data

         const fetch = await AsyncStorage.getItem(`${MEALS_INFOS}-${date}`); 
         
         const { type } = data

         if(fetch) {
            // add mais informação aos dados existentes
            

            const storage =  JSON.parse(fetch) 
            const newStorage = JSON.stringify([...storage, data]);
            await AsyncStorage.setItem(`${MEALS_INFOS}-${date}`, newStorage);
            
            
            return  type === 'IN' ? 'GREEN' : 'RED'
         }                 

         // Cria um novo registro de infos para o dia

         const newInfos = JSON.stringify([data])
         
         await AsyncStorage.setItem(`${MEALS_INFOS}-${date}`, newInfos)

         return  type === 'IN' ? 'GREEN' : 'RED'

      } catch (error) {

         throw error
      }



}