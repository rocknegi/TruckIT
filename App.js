if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './components/Home';
import ManagerLogin from "./components/ManagerLogin";
import DriverLogin from "./components/DriverLogin";
import DriverScreen from "./components/DriverScreen";
import BottomNavigationBar from "./components/BottomNavigationBar";
import DriverScreenLayout from "./components/DriverScreenLayout";


const AppNavigator = createStackNavigator({
  home:Home,
  managerLogin:ManagerLogin,
  driverLogin:DriverLogin,
  driverScreen:DriverScreen,
  bottomNavigationBar:BottomNavigationBar,
  driverScreenLayout:DriverScreenLayout


},{
  initialRouteName:'home',
  headerMode:"none"
}
)

export default createAppContainer(AppNavigator)


