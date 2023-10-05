import { useNavigation } from "@react-navigation/native";
import { SectionList, StatusBar, Text, View } from "react-native";

import { Container,HeaderList, Title } from "./styles";

import { getAllMealsDate } from '@storage/MealsDate/GetAllMeals'

import { Card } from "@components/Card";
import { Header } from "@components/Header/index";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { useEffect, useState } from "react";
import { getMealsInfosByDate } from "@storage/getMealsInfosByDate";
import { MealProps } from "@storage/MealsDate/MealStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";




export function Home() {

   const [ data, setData ] = useState<MealProps[]>([])
   

   const { navigate } = useNavigation()


   async function handleGoForm(){
      navigate("form",{ type:"NEUTRO" })
   }


   function handleGoToAnalytics(){
      navigate('analytics',{ percent: 65 })
   }

   useEffect(() => { 

      async function Teste() {
         const teste = await getMealsInfosByDate();         
         // const teste = await AsyncStorage.clear();         
         setData(teste);
      }
      Teste();

   },[])


   return(
      <Container>
         <Header/>
         <Card 
            styled
            percent={90.86}
            title={"90.86%"}
            subTitle={"refeições dentro da dieta"}
            onPress={handleGoToAnalytics}
         />
         <Title>Refeições</Title >
         <Button 
            onPress={() => handleGoForm()}
            // onPress={() => console.log(data)}
            text="Nova refeição"
            icon="Plus"
         />

         <SectionList
               sections={data}
               keyExtractor={(item) => (item.title)}
               renderItem={({ item }) => (
                  <Meal
                     key={item.title}
                     time={item.time}
                     title={item.title}
                     type={item.type}
                     
                  />
               )}
               renderSectionHeader={({ section }) =>(
               <HeaderList>
                  {section.titleDate}
               </HeaderList>
               )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
               <View style={{marginTop:'50%', alignItems:'center'}}>
                  <Text>Que tal cadastrar uma refeição?</Text>
               </View>
             )}
         />

      </Container>
   )
}                