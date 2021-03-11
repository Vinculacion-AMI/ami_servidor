import { TextInput, Button, Text } from 'react-native-paper';
import React, { useState } from 'react';
import { StyleSheet,  View } from 'react-native';


export default function Login({navigation}) {
    const [text, setText] = useState('');
    const [password, setPassword ] = useState('');
  return (
    <View  style={{ flex: 1 }} >
        <View style={{ flex: 3, 
                justifyContent: 'center',
                 width: 300, flexDirection:'column',
                marginHorizontal: 30  }}>
            <View style={{ marginBottom: 60, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }} > Titulo Proyecto :v </Text>
            </View> 
            <View >
                <TextInput
                theme={{ colors:{primary: 'green'} }}
                label="Email"
                value={text}
                onChangeText={text => setText(text)} />
            </View>
            <View style={{ marginTop: 10 }}>
                <TextInput
                theme={{ colors:{primary: 'green'} }}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)} />
            </View>
            <View style={{  marginHorizontal: 30, marginTop: 10, }}>
            <Button 
            color={ 'green' }
            mode="contained"
            
            onPress={() => navigation.navigate('Inicio')}
            >Inicio</Button>
            </View>
            

        </View>
    

    </View>
  );
}