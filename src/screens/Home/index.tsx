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
import { PercentProps } from "@screens/Analytics";




export function Home() {

   const [ data, setData ] = useState<MealProps[]>([])
   const { navigate } = useNavigation()
   const [ percent, setPercent ] = useState<PercentProps>({inside:0,outside:0,percent:0})

   async function handleGoForm(){
      navigate("form",{ type:"NEUTRO" })
   }


   function percentCalculate() {

      let inside = 0 , outside = 0

      data.forEach((item) => {
         for (let i = 0; i < item.data.length; i++) {
            item.data[i].type ==='IN' ? inside+=1 : outside+=1
         }
         
      })

      let porcentagem =  inside * 100 / ( inside + outside )

      if (porcentagem){
         const percent = Number.parseFloat(porcentagem.toFixed(2))

         setPercent({
            inside,
            outside,
            percent
         })
      }
   }

   useEffect(() => { 
      async function FetchData() {
         const fetch = await getMealsInfosByDate();         
         setData(fetch);
      }
      FetchData();
      percentCalculate();

   },[data])


   return(
      <Container>
         <Header/>
         <Card 
            styled
            percent={percent.percent}
            title={`${percent.percent}%`}
            subTitle={"refeições dentro da dieta"}
            onPress={() => navigate('analytics', percent)}
         />
         <Title>Refeições</Title >
         <Button 
            onPress={() => handleGoForm()}
            text="Nova refeição"
            icon="Plus"
         />

         <SectionList
               sections={data}
               keyExtractor={(item) => (item.id)}
               renderItem={({ item }) => (
                  <Meal
                     id={item.id}
                     key={item.id}
                     time={item.time}
                     date={item?.date}
                     title={item.title}
                     description={item.description}
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