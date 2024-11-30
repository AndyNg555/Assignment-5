import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const appName = 'My To-Do App';
  const developerName = 'Your Name';

  return (
    <MainLayout>
      <Text>{`App Name: ${appName}`}</Text>
      <Text>{`Developer: ${developerName}`}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
