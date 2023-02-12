import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Singup';
import GetStarted from '../screens/GetStarted.js';
import Home from '../screens/Home';
import Orders from '../components/Orders';
import MainUser from './MainUser';
import MainAdmin from './MainAdmin';
// import UserHome from '../components/UserHome';
// import AdminAccount from '../components/AdminAccount';


import EIcon from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'GetStarted'}>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />

        {/* <Stack.Screen name="AdminAccount" component={AdminAccount} /> */}
        {/* <Stack.Screen name="UserHome" component={UserHome} /> */}
        <Stack.Screen options={{ headerShown: false }} name="MainUser" component={MainUser} />
        <Stack.Screen options={{ headerShown: false }} name="MainAdmin" component={MainAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;



{/* <Stack.Screen name="Orders" component={Orders} /> */ }
{/* <Stack.Screen name="Home" component={Home}
          options={{ // title: 'Chat Application',
            statusBarColor: 'orange', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'orange',
            },
          }} */}
{/* /> */ }
{/* <Stack.Screen
          options={{
            title: 'Ghous Ahmed',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
            // headerRight: () => (
            //   <EIcon
            //     onPress={() => alert('Hello')}
            //     size={28}
            //     color="#fff"
            //     name="new-message"
            //   />
            // ),
            // headerLeft: () => <EIcon size={28} color="#fff" name="user" />,
          }}
          name="Chat"
          component={Chat}
        /> */}

