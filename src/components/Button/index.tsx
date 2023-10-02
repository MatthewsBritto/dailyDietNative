import { TouchableOpacityProps } from 'react-native';
import { ButtonProps, Container, StatusIcon, SwitchButton, Title, StatusIconProps} from './styles';
import { ReactNode, useState } from 'react';
import { Plus, Trash, PencilSimpleLine, IconProps } from 'phosphor-react-native'
import { useTheme } from 'styled-components';


type Props = TouchableOpacityProps & ButtonProps & StatusIconProps &{ 
   children?: ReactNode ;      
   text: string;
   icon?: 'Plus' | 'Trash' | 'Pencil'
   switchBtn?:boolean
   active?: boolean
}

export function Button({ dark = true, text, icon, switchBtn = false, type="INSIDE", active = false,...rest}:Props ){

   let Icon;

   const { COLORS } = useTheme();

   const colorButton:IconProps = {
     color: dark ?  COLORS.WHITE : COLORS.GRAY_1,
     size:18
   }

   switch (icon) {
      case 'Plus':
            Icon =  <Plus {...colorButton} />;
            break;
      case 'Trash': 
            Icon = <Trash {...colorButton}/>;
            break;
      case 'Pencil': 
            Icon = <PencilSimpleLine {...colorButton}/>; 
            break
      default: null; 
   }

   const colorProps = {
      backgroundColor: type === 'INSIDE' ? COLORS.GREEN_LIGHT : COLORS.RED_LIGTH,
      borderColor: type === 'INSIDE' ? COLORS.GREEN_DARK : COLORS.RED_DARK
   }
   return(
      <>
         { !switchBtn ? 

            <Container  {...rest} dark>
                  {Icon}            
               <Title dark>
                  {text}
               </Title>
            </Container>
            :
            <SwitchButton {...rest} active={active} colorProps={colorProps} >
               <StatusIcon type={type} />
               <Title>
                  {text}
               </Title>
            </SwitchButton>
         }

      </>
   )
}