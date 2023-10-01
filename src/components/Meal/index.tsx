import { Container, Hour, Status, StatusProps, Title} from './styles'

type MealProps = StatusProps & {
   time: string;
   title: string;
}

export function Meal({time, title, type='IN', ...rest} : MealProps) {
   return (
      <Container {...rest}>
         <Hour>{time}</Hour>
         <Title>{title}</Title>
         <Status type={type} />
      </Container>
   )
}