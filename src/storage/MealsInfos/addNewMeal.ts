import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dataprops, MealProps } from "@storage/MealsDate/MealStorageDTO";
import { MEALS_DATE, MEALS_INFOS } from "@storage/storageConfig";

export async function addNewMeal( titleDate:string , data:Dataprops ) {

      try {
         // puxa informação de refeição para o mesmo dia data

         // const fetch = await AsyncStorage.clear(); 
         const fetch = await AsyncStorage.getItem(`${MEALS_INFOS}-${titleDate}`);
         
         
         if(fetch) {
            // add mais informação aos dados existentes            
            
            const storage = JSON.parse(fetch); 
            
            const newStorage = [...storage.data, data]

            const StorageAtt = JSON.stringify({ titleDate , data: newStorage})

            await AsyncStorage.setItem(`${MEALS_INFOS}-${titleDate}`, StorageAtt);
            
            return  data.type === 'IN' ? 'GREEN' : 'RED'
            
         }                 

         // Cria um novo registro de infos para o dia

         const newInfos = JSON.stringify({titleDate, data:[data]})
         
         await AsyncStorage.setItem(`${MEALS_INFOS}-${titleDate}`, newInfos)

         return  data.type === 'IN' ? 'GREEN' : 'RED'


      } catch (error) {
         throw error
      }



}