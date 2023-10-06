import { Header } from '@components/Header'
import { Container, Date, StatusIcon, StatusType, SubTitle,
    TextContainer, Title,HeaderContainer, ButtonContainer, SeparatorContainer} from './styles'
import { Body } from '@components/Body'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Dataprops, MealProps } from '@storage/MealsDate/MealStorageDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_DATE, MEALS_INFOS } from '@storage/storageConfig'



export function Review(){
   const { COLORS } = useTheme()

   const route = useRoute()

   const { id, description, time, title, type, date } = route.params as Dataprops
   
   const { navigate } = useNavigation()

   const [ colorHeader, setHeaderColor] = useState(type === "IN" ? 
      { background:COLORS.GREEN_LIGHT, color: COLORS.GREEN_DARK } : 
      { background:COLORS.RED_LIGTH, color: COLORS.RED_DARK })


   async function handleDeleteMeal() {
     
     try {
         const teste = await AsyncStorage.getItem(`${MEALS_INFOS}-04.10.2023`);

         if(teste){
            const json : MealProps = JSON.parse(teste)
            
            const listWithoutMealDeleted =  json.data.filter(item => item.id !== id);

            await AsyncStorage.setItem(`${MEALS_INFOS}-04.10.2023`, JSON.stringify(listWithoutMealDeleted))
         
            console.log('deletou')

            return navigate.
         }


         
      }catch(error){
         throw error
      }

   }

   return (
      <Container color={colorHeader.background}> 
         <StatusBar 
            backgroundColor={colorHeader.background}
            translucent
         />
         <HeaderContainer color={colorHeader.background}>
            <Header showButton text={"Refeição"} />
         </HeaderContainer>
         <Body>
            <>
               <SeparatorContainer>
                  <TextContainer>
                     <Title>
                        {title}
                     </Title>
                     <SubTitle>
                        {description}
                     </SubTitle>
                  </TextContainer>

                  <TextContainer>
                     <Date>
                        Data e hora
                     </Date>
                     <SubTitle>
                        { date } ás { time }
                     </SubTitle>
                  </TextContainer>

                  <TextContainer>
                     <StatusType>
                        <StatusIcon color={colorHeader.color} />
                        <SubTitle>
                           { type === "IN" ? 'dentro da dieta' : 'fora da dieta'}
                        </SubTitle>
                     </StatusType>
                  </TextContainer>

               </SeparatorContainer>
               <ButtonContainer >
                  <Button text='Editar refeição' icon='Pencil' />
                  <Button dark={false} text='Excluir refeição' icon='Trash' onPress={() => handleDeleteMeal()}/>
               </ButtonContainer>
            </>
         </Body>
      </Container>
   )
}