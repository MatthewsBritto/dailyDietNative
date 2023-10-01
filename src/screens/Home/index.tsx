import { Card } from "@components/Card";
import { Container,HeaderList, Title } from "./styles";
import { Header } from "@components/Header/index";
import { SectionList } from "react-native";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";


interface MealsProps  {
   date: string;
   data: {
      title: string;
      time: string;
      type: "IN" | "OUT";
   }[]
}

export function Home() {

   const data : MealsProps[]  = [
      { date: "28.09.2023", data:[
         {title: "X-TUDO", type: "OUT", time: "12:50"},
         {title: "Frutas", type: "IN", time: "22:00"},
      ]},
      { date: "29.09.2023", data:[
         {title: "PIZZA", type: "OUT", time: "21:30"},
         {title: "AVEIA", type: "IN", time: "10:00"},
      ]},
      { date: "30.09.2023", data:[
         {title: "PIZZA", type: "OUT", time: "21:30"},
         {title: "AVEIA", type: "IN", time: "10:00"},
      ]},
   ]

   return(
      <Container>
         <Header/>
         <Card 
            styled
            percent={90.86}
            title={"90.86%"}
            subTitle={"refeições dentro da dieta"}
         />
         <Title>Refeições</Title >
         <Button 
            onPress={() => {console.log('click')}}
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
           />
      </Container>
   )
}                