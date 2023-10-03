import { Header } from '@components/Header'
import {Container, DateContainer, DateHourContainer, HourContainer, HeaderContainer,FormContainer, SeparatorContainer} from './styles'
import { Body } from '@components/Body'
import { InputForm } from '@components/Input'
import { useTheme } from 'styled-components/native'
import { useEffect, useState } from 'react'
import { Button } from '@components/Button'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native'
import { checkAndCreateMeal } from '@storage/MealsDate/CreateMeal'
import { addNewMeal } from '@storage/MealsInfos/addNewMeal'
import { MealProps } from '@storage/MealsDate/MealStorageDTO'

type FormProps = {
   type: 'NEUTRO' | 'GREEN' | 'RED' 
}

export function FormMeal() {

   const [ active, setActive] = useState([true, false])
   const { COLORS } = useTheme()


   const { navigate } = useNavigation()
   const route = useRoute()

   const { type } = route.params as FormProps

   const [ headerColor, setHeaderColor] = useState(() => {
      if(type === 'NEUTRO'){
         return COLORS.GRAY_5
      }
      if(type === 'GREEN'){
         return COLORS.GREEN_LIGHT
      }
      if(type === 'RED'){
         return COLORS.RED_LIGTH
      }
   })
   
   function changeColorButton(buttonId:number){
      buttonId === 1 ? setActive([true,false]) : setActive([false,true])
   }

   async function finishedRegister() {
      const teste = new Date()

      try{
          const date = await checkAndCreateMeal(`${teste.getDate()}.${teste.getMonth() + 1}.${teste.getFullYear()}`);

            const obj = {
               title:'Testando',
               time:'17:40',
               type:"IN"
            }
            
            if(date){
               await addNewMeal(obj,date)
            }
         
         navigate('feedback', { type: 'GREEN'});

      } catch(error){
         throw error
      }
   }


   return (
      <Container color={headerColor}>
         <StatusBar 
            backgroundColor={headerColor}
            translucent
         />
         <HeaderContainer color={headerColor}>
            <Header showButton text='Nova Refeição'/>
         </HeaderContainer>

         <Body>
            <>
               <FormContainer>
                  <InputForm
                     title={'Nome'}
                  />
                  <InputForm
                     title={'Descrição'}
                     height={120}
                  />

                  <DateHourContainer>
                     <DateContainer>
                        <InputForm
                           title={'Data'}
                           
                           />
                     </DateContainer>

                     <HourContainer>
                        <InputForm
                           title={'Hora'}
                        />
                     </HourContainer>
                  </DateHourContainer>
               
               <InputForm title='Está dentro da dieta?' input={false}/>
               <DateHourContainer>
                     <DateContainer>
                        <Button 
                           switchBtn 
                           text='Sim'
                           onPress={() => changeColorButton(1)}
                           active={active[0]}
                           />
                     </DateContainer>
                     <DateContainer>
                        <Button 
                           switchBtn 
                           text='Não'
                           type='OUTSIDE'
                           onPress={() => changeColorButton(2)}
                           active={active[1]}
                        />
                     </DateContainer>
               </DateHourContainer>
               </FormContainer>

               <SeparatorContainer>
                  <Button text='Cadastrar refeição' onPress={finishedRegister} />
               </SeparatorContainer>   
            </>
         </Body>

      </Container>
   )
}