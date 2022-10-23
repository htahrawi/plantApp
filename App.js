import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import DetailsScreen from "./src/View/screeens/DetailsScreen";
import HomeScreen from "./src/View/screeens/HomeScreen";
import { StatusBar, Text, View } from "react-native";
import COLORS from './src/consts/colors';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
