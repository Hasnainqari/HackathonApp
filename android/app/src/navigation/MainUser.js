import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Image } from '@react-navigation/native';
// import About from '../components/AdminHome';
import Cart from '../components/Cart';
import Account from '../components/Account';
import UserHome from '../components/UserHome';

const Tab = createBottomTabNavigator();

// const styles = StyleSheet.create({

// });
export default function MainUser() {
    return (
        <Tab.Navigator initialRouteName='UserHome'>
            <Tab.Screen options={{
                headerShown: false,
                tabBarActiveTintColor: '#61b846',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: 'HOME',
                // tabBarIcon: ({ focused, color, size }) => {
                //     return (<Image source={require('../assets/homeicon.png')} color={'green'} />);
                // },
            }}
                name="UserHome" component={UserHome} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarActiveTintColor: '#61b846',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: 'ADD ITEMS',
                // tabBarIcon: ({ focused, color, size }) => {
                //     return <Image source={require('../assets/additmadmin.png')} color={'green'} />;
                // }
            }} name="Cart" component={Cart} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarActiveTintColor: '#61b846',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: 'ACCOUNT',
                // tabBarIcon: ({ focused, color, size }) => {
                //     return <Image source={require('../assets/adminaccount.png')} color={'green'} />;
                // }
            }} name="Account" component={Account} />
        </Tab.Navigator>
    );
}