import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = ({ navigation }) => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [password, setpassword] = useState('')
  const [logemail, setlogemail] = useState('')
  const [logpassword, setlogpassword] = useState('')
  const [error, setError] = useState("");
  const [userback, setuserback] = useState("");
  const [success, setSuccess] = useState(null);
  const [logstate, setlogstate] = useState(true)

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error]);
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;


  const Signup = () => {
    // useEffect(() => {
    //   if (userback) {
    //     navigation.navigate('home')
    //   }
    // }, [userback]);

    if (username.trim() !== '') {
      if (phoneRegex.test(contact)) {
        if (emailRegex.test(email)) {
          if (password.length >= 6 || password.trim()) {
            const data = {
              name: username,
              contact: contact,
              email: email,
              password: password
            }

            auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');
                setSuccess('You are successfully signed in !')
                setError(null);
                setuserback(user)
                navigation.navigate('MainUser')

              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  setError('That email address already in use');
                  setSuccess(null)
                }
                console.error('error');
              });
            setError("")
          } else {
            setError('Password should be at least 6 characters');
          }
        } else {
          setError('Please enter a valid email address');
        }
      } else {
        setError('Enter Contact')
      }
    } else {
      setError('Enter username')
    }
  };
  const login = () => {
    if (emailRegex.test(logemail)) {
      if (logpassword.length >= 6 || logpassword.trim()) {
        auth().signInWithEmailAndPassword(logemail, logpassword)
          .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            setuserback(user)
            if (logemail === 'admin@gmail.com') {
              navigation.navigate('MainAdmin')
            }
            else {
              navigation.navigate('MainUser')
            }

          })
          .catch((error) => {
            var errorCode = error.code;
            console.log(error)
            var errorMessage = error.message;
          });
      } else {
        setError('Password should be at least 6 characters');
      }
    } else {
      setError('Please enter a valid email address');
    }
  }
  const greencolor = '#61b846'
  const bluecolor = '#024f9d'

  useEffect(() => { console.log(logstate) }, [logstate])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ color: greencolor, fontSize: 30, fontWeight: 'bold' }}>
        {/* 
         {logstate ? 'login' :'Signup'} */}
        SAYLANI WELFARE
      </Text>
      <Text style={{ color: bluecolor }}>ONLINE DISCOUNT STORE</Text>
      {logstate ?
        <View>
          {error && <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, alignSelf: 'center' }}>{error}</Text>}
          <TextInput style={{ borderBottomWidth: 1, width: 300 }} placeholder='Email' onChangeText={(t) => setlogemail(t)}></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: 300 }} placeholder='Password' secureTextEntry={true} onChangeText={(t) => setlogpassword(t)}></TextInput>
        </View>
        :
        <View>
          {error && <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, alignSelf: 'center' }}>{error}</Text>}
          <TextInput style={{ borderBottomWidth: 1, width: 250 }} placeholder='Firstname' onChangeText={(t) => setusername(t)}></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: 250 }} placeholder='Contact' keyboardType="number-pad" onChangeText={(t) => setcontact(t)}></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: 250 }} placeholder='Email' keyboardType='email-address' onChangeText={(t) => setemail(t)}></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: 250 }} placeholder='Password' secureTextEntry onChangeText={(t) => setpassword(t)}></TextInput>
        </View>
        // success && <Text style={{marginTop:20, color:'green' , fontWeight:'bold' , fontSize:15}}>{success}</Text>
      }
      {success && <Text style={{ marginTop: 20, color: 'green', fontWeight: 'bold', fontSize: 15 }}>{success}</Text>}
      {logstate ?
        <TouchableOpacity onPress={login} style={{
          width: 200, backgroundColor: bluecolor, alignItems: 'center', padding: 10, marginTop: 30,
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }} >Sign In</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={Signup} style={{
          width: 200, backgroundColor: bluecolor, alignItems: 'center', padding: 15, marginTop: 30,
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }} >Sign up</Text>
        </TouchableOpacity>
      }
      {logstate ? <View>
        <Text style={{ alignSelf: 'center', marginTop: 10 }}>or</Text>

        <Text style={{ fontSize: 15, marginTop: 10, color: bluecolor }}>Don't have an account <Text style={{ color: greencolor, fontWeight: 'bold' }} onPress={() => setlogstate(false)}>Signup</Text></Text>
      </View>
        : <Text style={{ fontSize: 15, marginTop: 10, color: bluecolor }}>Already have an account <Text style={{ color: greencolor, fontWeight: 'bold' }} onPress={() => setlogstate(true)}>login</Text></Text>}
    </View>
  );
};

export default App;