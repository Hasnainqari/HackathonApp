import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
    const product = [
        {
            title: 'Grocery',
            image: require('../assets/one.png'),
        },
        {
            title: 'Vegetables',
            image: require('../assets/two.png'),
        },
        {
            title: 'Fruits',
            image: require('../assets/four.png'),
        },
        {
            title: 'Masala',
            image: require('../assets/three.png'),
        },
    ];

    const seconditems = [
        {
            title: 'meat',
            price: 'Rs.800-per kg',
            image: require('../assets/meat.png'),
            discription1: 'This is product description',
            discription2: 'This is abc product description',
        },
        {
            title: 'fish',
            price: 'Rs.800-per kg',
            image: require('../assets/fish.png'),
            discription1: 'This is product description',
            discription2: 'This is abc product description',
        },
        {
            title: 'Beef Qeema',
            price: 'Rs.800-per kg',
            image: require('../assets/beef.png'),
            discription1: 'This is product description',
            discription2: 'This is abc product description',
        },
        {
            title: 'meat',
            price: 'Rs.800-per kg',
            image: require('../assets/meat.png'),
            discription1: 'This is product description',
            discription2: 'This is abc product description',
        },
    ];

    return (
        // <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps="handled" scrollEnabled={true}>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <View style={styles.topview}>
                    <View style={styles.toptext}>
                        <Text style={styles.logotext}>SAYLANI WELFARE</Text>
                        <Text style={styles.logotext2}>DISCOUNT STORE</Text>
                    </View>
                    <MaterialCommunityIcons
                        name="cart-variant"
                        size={32}
                        color={'black'}
                    />
                </View>
                <Image
                    source={require('../assets/Grocery.png')}
                    style={styles.groceryimages}
                />

                <View style={styles.searching}>
                    <Fontisto
                        style={{ paddingLeft: 15 }}
                        name="search"
                        size={25}
                        color={'#BFBCBC'}
                    />
                    <TextInput
                        placeholder="Search by product name"
                        style={styles.search}
                        placeholderTextColor={'#BFBCBC'}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: '800', fontSize: 13, color: 'black' }}>
                        Shop by Categery
                    </Text>

                    <FlatList
                        horizontal
                        data={product}
                        renderItem={items => {
                            console.log(items.item.image);
                            return (
                                <View>
                                    <View style={styles.categeryborder}>
                                        <Image
                                            source={items.item.image}
                                            style={styles.categeryimage}
                                        />
                                        <Text
                                            style={{
                                                color: '#2DB34A',
                                                fontSize: 11,
                                                fontWeight: '600',
                                            }}>
                                            {items.item.title}

                                        </Text>
                                    </View>
                                </View>
                            );
                        }}
                    />

                    <View style={styles.secondlist}>
                        <FlatList
                            style={{ width: '100%', height: 250 }}
                            data={seconditems}
                            renderItem={items => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            marginTop: 20,
                                        }}>
                                        <View style={{ width: '40%' }}>
                                            <Image
                                                source={items.item.image}
                                                style={styles.image2}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                width: '60%',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                backgroundColor: 'yellow',
                                                height: 0,
                                            }}>
                                            <View
                                                style={{
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',

                                                    height: 30,
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: '700',
                                                        color: 'black',
                                                    }}>
                                                    {items.item.title}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: '700',
                                                        color: 'black',
                                                    }}>
                                                    {items.item.price}
                                                </Text>
                                            </View>

                                            <View
                                                style={{
                                                    width: '100%',
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontWeight: '400',
                                                            color: '#BFBFBF',
                                                            fontSize: 12,
                                                        }}>
                                                        {items.item.discription1}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontWeight: '400',
                                                            color: '#BFBFBF',
                                                            fontSize: 12,
                                                        }}>
                                                        {items.item.discription2}
                                                    </Text>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >

                                                        <View

                                                            style={{
                                                                width: 45,
                                                                height: 40,
                                                                borderRadius: 10,
                                                                backgroundColor: '#61B846',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                            }}>
                                                            <AntDesign name="plus" color="black" size={22} />
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    topview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    toptext: {
        alignSelf: 'center',
    },
    logotext: {
        color: '#61B846',
        fontSize: 23,
        fontWeight: '700',
    },
    logotext2: {
        color: '#024F9D',
        fontSize: 13,
        fontWeight: '600',
    },
    groceryimages: {
        width: '100%',
        height: 218,
        marginTop: 20,
        borderRadius: 15,
    },
    searching: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 37,
        width: '100%',
        backgroundColor: '#D9D9D9BF',
        borderRadius: 30,
        marginTop: 10,
    },
    categeryborder: { margin: 5, alignItems: 'center' },
    categeryimage: {
        width: 85,
        height: 49,
    },
    image2: {
        width: 115,
        height: 82,
        borderRadius: 15,
        evalution: 10,
    },
    secondlist: {
        width: '100%',
        marginTop: 20,
    },
});

export default Home;