import { useNavigation } from '@react-navigation/native';
import { Container, Hour, Status, StatusProps, Title} from './styles'

type MealProps = StatusProps & {
   time: string;
   title: string;
}

export function Meal({time, title, type='IN', ...rest} : MealProps) {

   const { navigate }  = useNavigation()

   function handleGoToReview(type:any){
      navigate('review', { type: type })
   }
   return (
      <Container  onPress={() => handleGoToReview(type)} {...rest}>
         <Hour>{time}</Hour>
         <Title>{title}</Title>
         <Status type={type} />
      </Container>
   )
}