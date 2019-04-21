if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './components/Home';
import ManagerLogin from "./components/ManagerLogin";
import DriverLogin from "./components/DriverLogin";

const AppNavigator = createStackNavigator({
  home:Home,
  managerLogin:ManagerLogin,
  driverLogin:DriverLogin


},{
  initialRouteName:'home',
  headerMode:"none"
}
)

export default createAppContainer(AppNavigator)


