import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import Reg from '../components/registration'

const drawer=createStackNavigator({
    Reg:{
        screen:Reg
    },
    Login:{
        screen:Login
    },
},{
   initialRoute:'Login'
});

export default createAppContainer(drawer);
