import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <>
      <ScrollView
        style={styles.login_body}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}>
        <View style={styles.logo}>
          <Text style={styles.saylani_heading}>Saylani Welfare </Text>
          <Text style={styles.store_heading}>Online Discount Store {'\n'}</Text>
        </View>
        <View>
          <TextInput style={styles.input1} placeholderTextColor={'#D4D3D3'} placeholder="Full Name" />
          <TextInput style={styles.input1} placeholderTextColor={'#D4D3D3'} placeholder="Email" />
          <TextInput
            style={styles.input1}
            placeholder="Phone Number"
            placeholderTextColor={'#D4D3D3'}
          />
          <TextInput
            style={styles.input1}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'#D4D3D3'}
          />
          <View style={styles.button_div}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.container}>
            <Text onPress={() => navigation.navigate('Login')} style={styles.signin_option}>Already have an account ? Sign In</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  login_page: {
    backgroundColor: '#d3e6bc',
    flex: 1,
    justifyContent: 'flex-end',
  },
  login_body: {
    height: '70%',
    backgroundColor: '#fff',
    width: '100%',
    padding: 40,
    paddingTop: 70,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 50,
  },
  saylani_heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#61B846',
  },
  store_heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024F9D',
  },
  input1: {
    height: 40,
    borderBottomWidth: 0.5,
    padding: 10,
    marginTop: 15,
    borderColor: '#D4D3D3',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#61B846',
    padding: 15,
    width: '75%',
    margin: 'auto',
    marginTop: 40,
    borderRadius: 15,
    elevation: 8,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  button_div: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin_option: {
    color: '#024F9D',
    fontSize: 15,
  }
});
export default Signup;
