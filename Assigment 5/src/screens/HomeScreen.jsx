import { Button, View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => (
  <MainLayout>
    <Text>To-Do List</Text>
    <Button title="Go to About" onPress={() => navigation.navigate('About')} />
  </MainLayout>
);

export default HomeScreen;
