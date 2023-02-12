import { View, Text, Image, StyleSheet } from 'react-native'
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Orders() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Pending', value: 'pending' },
        { label: 'In-Progress', value: 'in-progress' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' }
    ]);

    return (
        <View style={{ padding: 5 }}>
            {/* header */}
            < View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <IIcon
                        onPress={() => navigation.goBack()}
                        size={70}
                        color="#aaa"
                        style={{ marginLeft: -10 }}
                        name="chevron-back-sharp"
                    />
                    <Image
                        style={{ width: 70, height: 70, marginLeft: -20, borderRadius: 35, borderColor: 'black', borderWidth: 2 }}
                        source={require('../assets/profile.png')}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <View><Text>Mr. Ahmed</Text></View>
                    <View><Text>Admin</Text></View>
                </View>
            </View >

            <View style={{ width: '100%', height: 2, backgroundColor: '#aaa', marginTop: 10, marginBottom: 20 }}></View>

            {/* conditional if product show, it'll show other wise it will now show the product details */}
            {
                <Text style={{ marginBottom: 7 }}>Orders</Text>
            }
            <View >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{}}>Inzamam Malik</Text>
                    <Text>03123445566</Text>
                </View>

                <View>
                    <Text>just now - pending</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>2</Text>
                    <Text>x</Text>
                    <Text>ITEM Name</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Total</Text>
                    <Text>200.00</Text>
                </View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                <View style={{ width: '100%', height: 2, backgroundColor: '#afafaf', marginTop: 10 }}></View>
            </View>

        </View >
    )
}
