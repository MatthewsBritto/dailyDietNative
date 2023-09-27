import { Percent } from "@components/Percent";
import { Container, Title } from "./styles";
import { Header } from "@components/Header";
import { View, Text } from "react-native";
import { Button } from "@components/Button";


export function Home (){
   return(
      <Container>
         <Header />
         <Percent percent={90.86}/>
         <Title>Refeições</Title >
         <Button 
            onPress={() => {console.log('click')}}
            text="Nova refeição"
          />
      </Container>
   )
}                