import { Header } from '@components/Header'
import {Container, DateContainer, DateHourContainer, HourContainer, HeaderContainer,FormContainer, SeparatorContainer} from './styles'
import { Body } from '@components/Body'
import { InputForm } from '@components/Input'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { Button } from '@components/Button'

type FormProps = {
   type: 'NEUTRO' | 'GREEN' | 'RED' 
}

export function FormMeal({ type = 'NEUTRO' }:FormProps){

   const { COLORS } = useTheme()

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
   
   return (
      <Container>
         <HeaderContainer color={headerColor}>
            <Header showButton text='Nova Refeição' />
         </HeaderContainer>

         <Body>
            <SeparatorContainer>

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
                        />
                     </DateContainer>
                     <DateContainer>
                        <Button 
                           switchBtn 
                           text='Não'
                           type='OUTSIDE'
                        />
                     </DateContainer>
               </DateHourContainer>
               </FormContainer>

               <Button text='Cadastrar refeição' />
            
            </SeparatorContainer>
         </Body>

      </Container>
   )
}