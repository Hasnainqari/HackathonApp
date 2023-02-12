import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

let ht = 0.78 // of width
let wd = 250

export default function GetStarted({ navigation }) {
    return (
        <View>
            <View style={styles.logo}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/LogologoSplash.png')}
                />
                <Text style={styles.textStyle}>SAYLANI WELFARE</Text>
                <Text style={styles.textStyle2}>ONLINE DISCOUNT STORE</Text>

                <TouchableOpacity
                    style={styles.buttonDiv}
                    onPress={() => {
                        console.log("abc")
                        navigation.replace('Login')
                    }
                    }
                >
                    <Text style={styles.button}>GET STARTED</Text>
                </TouchableOpacity>


            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        // position: absolute,
        marginTop: 20,
        height: ht * wd,
        width: wd,
    },
    logo: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textStyle: {
        marginTop: 20,
        fontSize: 32,
        fontWeight: '700',
        fontFamily: 'Arial',
        color: '#61B846',
    },
    textStyle2: {
        marginTop: 2,
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '600',
        fontFamily: 'Arial',
        color: '#024F9D',
    },
    button: {
        textAlign: 'center',
        padding: 12,
        width: 150,
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        // textTransform: 'capatalize'
    },
    buttonDiv: {

        borderRadius: 8,
        marginTop: 200,
        backgroundColor: '#61B846',
    }
});

