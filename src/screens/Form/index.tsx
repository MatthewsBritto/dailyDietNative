import { Header } from '@components/Header'
import {Container, DateContainer, DateHourContainer, HourContainer, HeaderContainer,FormContainer, SeparatorContainer, Title, ContainerInput, Input} from './styles'
import { Body } from '@components/Body'
import { useTheme } from 'styled-components/native'
import { useEffect, useState } from 'react'
import { Button } from '@components/Button'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native'
import { checkAndCreateMeal } from '@storage/MealsDate/CreateMeal'
import { addNewMeal } from '@storage/MealsInfos/addNewMeal'
import { MealProps } from '@storage/MealsDate/MealStorageDTO'
import { TextInput } from 'react-native'

type FormProps = {
   type: 'NEUTRO' | 'GREEN' | 'RED' 
}

export function FormMeal() {

   const { COLORS } = useTheme()
   
   const [ title , setTitle ] = useState('')
   const [ description , setDescription ] = useState('')
   const [ date, setDate ] = useState('')
   const [ hour, setHour ] = useState('')
   const [ active, setActive] = useState([true, false])

   

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
               title:'Batatinha',
               time:'19:18',
               type:"OUT"
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
                  <ContainerInput>
                     <Title>
                        Nome
                     </Title>
                     <Input 
                        value={title}
                        onChangeText={setTitle}
                     /> 
                  </ContainerInput>

                  <ContainerInput>
                     <Title>
                        Descrição
                     </Title>
                     <Input 
                        value={description}
                        onChangeText={setDescription}
                        style={{height:120}} 
                      /> 
                     </ContainerInput>

                  <DateHourContainer>
                     <DateContainer>
                        <Title>
                           Data
                        </Title>

                        <Input 
                           value={date}
                           onChangeText={setDate}
                        /> 

                     </DateContainer>

                     <HourContainer>
                        <Title>
                         Hora
                        </Title>
                        <Input 
                           value={hour}
                           onChangeText={setHour}
                        /> 
                     </HourContainer>
                  </DateHourContainer>
               
                  <Title>Está dentro da dieta?</Title>
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