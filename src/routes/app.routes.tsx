import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '@screens/Home'
import { Analytics } from '@screens/Analytics'
import { Feedback } from '@screens/Feedback'
import { FormMeal } from '@screens/Form'
import { Review } from '@screens/Review'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
   return (
      <Navigator screenOptions={ { headerShown: false } }>
         <Screen
            name="home"
            component={Home}
         /> 

         <Screen
            name="analytics"
            component={Analytics}
         />

         <Screen
            name="feedback"
            component={Feedback}
         />

         <Screen
            name="form"
            component={FormMeal}
         />

         <Screen
            name="review"
            component={Review}
         />
      </Navigator>
   )
}