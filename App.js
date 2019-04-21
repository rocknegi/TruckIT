if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './components/Home';

const AppNavigator = createStackNavigator({
  Home:Home
},{
  headerMode:"none"
}
)

export default createAppContainer(AppNavigator)


