import { useNavigation } from '@react-navigation/native';
import { Container, Hour, Status, StatusProps, Title} from './styles'
import { Dataprops } from '@storage/MealsDate/MealStorageDTO';



export function Meal({date, time, title, type='IN', description, id, ...rest} : Dataprops) {

   const { navigate }  = useNavigation()

   function handleGoToReview(){
      const obj: Dataprops = {
         id:id,
         title:title,
         description:description,
         date:date,
         time:time,
         type:type,
      }
      navigate('review', obj )
   }
   return (
      <Container  onPress={() => handleGoToReview()} {...rest}>
         <Hour>{time}</Hour>
         <Title>{title}</Title>
         <Status type={type} />
      </Container>
   )
}