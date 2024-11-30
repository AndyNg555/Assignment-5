import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import MainLayout from './src/layouts/MainLayout';
import { Text, Button } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <MainLayout>
    <Text>Welcome to the To-Do List App!</Text>
    <Button title="Go to About" onPress={() => navigation.navigate('About')} />
  </MainLayout>
);

const AboutScreen = () => {
  const appName = '';
  const developerName = 'Quan';

  return (
    <MainLayout>
      <Text>{`App Name: ${appName}`}</Text>
      <Text>{`Developer: ${developerName}`}</Text>
    </MainLayout>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'To-Do List' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
