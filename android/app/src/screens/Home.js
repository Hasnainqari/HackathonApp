import {View, Text, TouchableOpacity} from 'react-native';

function Home({navigation}) {
  const goToChat = name => {
    navigation.navigate('Chat', {
      username: name,
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Home</Text>
      <TouchableOpacity
        onPress={() => goToChat('Ghous')}
        style={{
          backgroundColor: 'orange',
          width: '80%',
          paddingVertical: 10,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{color: '#fff'}}>Chat With Ghous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToChat('Ahmed')}
        style={{
          backgroundColor: 'orange',
          width: '80%',
          paddingVertical: 10,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>Chat With Ahmed</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
