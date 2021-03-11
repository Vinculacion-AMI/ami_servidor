import { TextInput, Button, Text, Card, IconButton, Icon } from 'react-native-paper';
import React, { useState } from 'react';
import { StyleSheet,  View,  } from 'react-native';

export default function Registro({navigation}) {
   
    const [text, setText] = useState('');
    const [password, setPassword ] = useState('');
  return (
    <View  style={{ flex:1, backgroundColor: '#ADC5DC' }} >
       
        <View style={{   flex:3,
                justifyContent: 'center',
                 width: 300, flexDirection:'column',
                marginHorizontal: 30,
                
                }}>
                <Card style={{ 
                    height: 360,
                    borderRadius: 20,                 
                }} >
                <View style={{ marginBottom: 50, alignItems: 'center' }}>
                     <Text style={{ fontSize: 20, top: 20,  fontFamily: 'sans-serif-medium',
                     fontWeight: 'normal', }} > Registrarse </Text>
                 </View>  
               
                <View style={{ marginTop: 10 }} >
                    <TextInput
                    theme={{ colors:{primary: '#4172F3'}, roundness: 10 }}
                    label="Nombre"
                    value={text}
                    placeholder= "Tu nombre"
                    mode='outlined'
                    style={{ width: 260, height: 50, left:20,  }}
                    
                    onChangeText={text => setText(text)} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                    theme={{ colors:{primary: '#4172F3'}, roundness: 10 }}
                    label="Tu contraseña"
                    value={password}
                    mode='outlined'
                    secureTextEntry={true}
                    placeholder= "Tu contraseña"
                    right={<TextInput.Icon name={'lock'} size={18} color={'#4172F3'} />}
                    style={{ width: 260, height: 50, left:20,  }}
                    onChangeText={text => setPassword(text)} />
                  
                </View>
                <View style={{  marginHorizontal: 30, marginTop: 10, }}>
                <Button 
                color={ '#4172F3' }
                mode="contained"
                theme= {{ roundness: 50  }}
                
                onPress={() => navigation.navigate('Inicio')}
                >Registrar</Button>
                
                </View>
                <View style={{  marginHorizontal: 30, marginTop: 10, alignItems: 'center'}}>
                    <Text>O</Text> 
                </View>
                <View style={{  marginHorizontal: 30, marginTop: 10, }}>
                <Button 
                color={ '#4172F3' }
                mode="contained"
                theme= {{ roundness: 50  }}
                icon="google"
                onPress={() => navigation.navigate('Inicio')}
                >Registro con Google</Button>
                
                </View>
             
               </Card>

        </View>
    

    </View>
  );
}

