import { TouchableOpacityProps } from 'react-native';
import { ContainerWithColor, ContainerWithoutColor, Title, SubTitle,ContainerProps} from './styles'
import { ArrowIcon } from '@components/ArrowIcon';


type Props = TouchableOpacityProps &  ContainerProps & { 
   percent?:number, 
   styled?:boolean,
   title?:string,
   subTitle?:string
   icon?:boolean
}

export function Card({percent, styled = false, title, subTitle,
   icon=false, paddindTop = true ,...rest} : Props){

   return ( 
      <>
         { styled && percent? 
            <ContainerWithColor percent={percent} {...rest} paddindTop={paddindTop}>
               {icon ? <ArrowIcon type={percent > 50} /> : null}
               <Title>
                  {title ? title : null} 
               </Title>
               <SubTitle>
                  {subTitle ? subTitle : null}
               </SubTitle>
            </ContainerWithColor>
          :            
            <ContainerWithoutColor paddindTop={paddindTop}>
               <Title>
                  { title }  
               </Title>
               <SubTitle>
                  { subTitle }
               </SubTitle>
            </ContainerWithoutColor>
         }
      </>
      
   )
      
   
}