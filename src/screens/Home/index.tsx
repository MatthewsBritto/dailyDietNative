import { useNavigation } from "@react-navigation/native";
import { SectionList, StatusBar, Text, View } from "react-native";

import { Container,HeaderList, Title } from "./styles";

import { getAllMealsDate } from '@storage/MealsDate/GetAllMeals'

import { Card } from "@components/Card";
import { Header } from "@components/Header/index";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { useEffect, useState } from "react";


interface MealsProps  {
   date: string;
   data: {
      title: string;
      time: string;
      type: "IN" | "OUT";
   }[]
}

export function Home() {

   const [ data, setData ] = useState<MealsProps[]>([])
   
   // : MealsProps[]  = [
   //    { date: "28.09.2023", data:[
   //       {title: "X-TUDO", type: "OUT", time: "12:50"},
   //       {title: "Frutas", type: "IN", time: "22:00"},
   //    ]},
   //    { date: "29.09.2023", data:[
   //       {title: "PIZZA", type: "OUT", time: "21:30"},
   //       {title: "AVEIA", type: "IN", time: "10:00"},
   //    ]},
   //    { date: "30.09.2023", data:[
   //       {title: "PIZZA", type: "OUT", time: "21:30"},
   //       {title: "AVEIA", type: "IN", time: "10:00"},
   //    ]},
   // ]

   const { navigate } = useNavigation()

   async function fetchMealStored(){

      try {
         const date = await getAllMealsDate()

         // setData(date)

      } catch(error){
         throw error;

      }

   }

   function handleGoForm(){
      navigate("form",{ type:"NEUTRO" })
   }

   function handleGoToAnalytics(){
      navigate('analytics',{ percent: 65 })
   }

   // useEffect(() => { 
   //    fetchMealStored()
   // },[data])

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
            onPress={handleGoForm}
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
            renderSectionHeader={({ section }) =>	(
               <HeaderList>
                  {section.date}
               </HeaderList>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
               <View style={{marginTop:'50%',alignItems:'center'}}>
                  <Text>Que tal cadastrar uma refeição?</Text>
               </View>

             )}
           />
      </Container>
   )
}                