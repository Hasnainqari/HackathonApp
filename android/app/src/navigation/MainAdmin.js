import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHome from '../components/AdminHome';
// import AddItems from '../components/AddItems';
import AdminAccount from '../components/AdminAccount';
import AddItems from '../components/AddItems'

const Tab = createBottomTabNavigator();

export default function MainAdmin() {
    return (
        <Tab.Navigator initialRouteName='AdminHome' >
            <Tab.Screen options={{ headerShown: false }} name="AdminHome" component={AdminHome} />
            <Tab.Screen options={{ headerShown: false }} name="AddItems" component={AddItems} />
            <Tab.Screen options={{ headerShown: false }} name="AdminAccount" component={AdminAccount} />
        </Tab.Navigator>
    );
}