import { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';


const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let user = '';
  const dimetions = Dimensions

  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{ uri: 'https://www.designfreelogoonline.com/wp-content/uploads/2015/10/000610-simple-round-logo-design-free-round-logos-02.png', }} />

      <View style={Styles.inputView}>
        <TextInput
          style={Styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => { setEmail(email) }}
          keyboardType='email-address'
        >
          <Text style={{ backgroundColor: "transparent" }}></Text>
        </TextInput>
      </View>

      <View style={Styles.inputView}>
        <TextInput
          style={[Styles.TextInput, { alignItems: 'center' }]}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => { setPassword(password) }}
          secureTextEntry={true}
          autoComplete='password'
        />
      </View>

      <TouchableOpacity>
        <Text style={Styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.loginBtn}>
        <Text style={Styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};


const Styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#ffe',
      alignItems: 'center',
      justifyContent: 'center',
      // padding: 10,
    },
    image: {
      marginBottom: 40,
      width: 100,
      height: 100
    },
    inputView: {
      backgroundColor: '#d9f0CB',
      borderRadius: 30,
      width: '70%',
      height: 45,
      // textAlign: 'center',
      marginBottom: 20,
      alignItems: 'center',
    },
    TextInput: {
      height: 50,
      flex: 1,
      backgroundColor: '#d9f0CB',
      // textAlign: 'center',
      // padding: 10,
      // alignItems:'center',
      // marginLeft: 20
    },
    forgot_button: {
      height: 30,
      marginBottom: 30
    },
    loginBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
      backgroundColor: '#d9f0Cf'
    }
  }
)


export default App