import {useEffect} from 'react';
import {View, Text} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';

function Chat({navigation, route}) {
  const navigate = navigation.navigate;
  const {username} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `${username}'s Chat`,
      headerRight: () => (
        <EIcon
          onPress={() => navigate('Home')}
          size={28}
          color="#fff"
          name="new-message"
        />
      ),
      headerLeft: () => (
        <AIcon
          onPress={() => navigation.goBack()}
          size={28}
          color="#fff"
          name="back"
        />
      ),
    });
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Chat</Text>
    </View>
  );
}

export default Chat;
