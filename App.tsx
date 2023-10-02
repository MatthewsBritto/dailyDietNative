import { ThemeProvider } from 'styled-components';
import { StatusBar,ActivityIndicator } from 'react-native';
import  theme  from '@theme/index'
import { useFonts , NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Home } from '@screens/Home';
import { Analytics } from '@screens/Analytics';
import { FormMeal } from '@screens/Form';
import { Feedback } from '@screens/Feedback';
import { Review } from '@screens/Review';

export default function App() {

  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular,NunitoSans_700Bold})

  return (
    <ThemeProvider theme={ theme }>
      <StatusBar
        barStyle={'light-content'}
        // backgroundColor={'transparent'}
        // translucent
      />
      { fontsLoaded ? <Review /> : <ActivityIndicator/> }
    </ThemeProvider>
  );
}