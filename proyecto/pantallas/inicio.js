import {  Card,  Button  } from 'react-native-paper';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';



export default function Inicio({navigation}) {
/*#F2C335*/
   
  return (
  <View style={{ backgroundColor: '#ffff' }}>
    <View  style={{ flex: 1, paddingTop: 20, alignItems: 'center',  }}>
      <Text style={{ fontFamily: 'sans-serif',
      fontWeight: 'bold',  fontSize: 20, color:'#1F191A'  }}>Juan Francisco Donoso</Text>
      
    </View>
    <View  style={{  paddingTop: 50, alignItems:'center',}}>
    <Text style={{ fontFamily: 'sans-serif-thin',
    fontWeight: 'bold', fontSize: 20,  color:'#1F191A' }} >Juegos</Text>

  </View>
    <ScrollView scrollEventThrottle={10} >
      <View style={{ flex: 2,  paddingTop: 20,  }}>
          <View style={{ height: 530, marginTop:10 }} >
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                
                >
                <View style={{ height: 230, width: 330,  marginLeft: 16 }}>
                  <View style={{ flex: 2 }} >
                  <Card  style={{  height: 425,
                    elevation: 8,  marginBottom: 8,
                    backgroundColor:'#ADD9B8' 
                  }}  >
                  <View style={{ alignItems:'center', top: 20,  }}>
                      <Text  style={{ fontFamily: 'sans-serif',
                      fontWeight: 'bold',  fontSize: 20, }} >Juego 1</Text>
                  </View>
                
                  <View style={{  marginHorizontal: 35, marginTop: 40, }}>
                      <Image
                        style={{ height: 230, width: 260, }}
                        source={require('../assets/fondo.jpg')}
                    />
                  </View>
                    <View style={{  marginHorizontal: 30, marginTop: 10, alignItems:'center' }}>
                        <Text> En este juego debes buscar letras, y asi ganaras muchas monedas 
                              
                        </Text>
                    </View>
                  <View style={{  marginHorizontal: 30, marginTop: 30,}}>
                  <Button 
                  color={ '#4172F3' }
                  mode="contained"
                  theme= {{ roundness: 50  }}
          
                  onPress={() => navigation.navigate('Draw')}
                  >Jugar</Button>
                  </View>
              </Card>
                  </View>
                </View>

                <View style={{ height: 230, width: 330, marginLeft: 16 }}>
                <View style={{ flex: 2 }} >
                <Card  style={{  height: 425,  
                  elevation: 8,  marginBottom: 8, 
                  backgroundColor:'#F27405'
                }} >
                <View style={{ alignItems:'center', top: 20,  }}>
                      <Text style={{ fontFamily: 'sans-serif',
                      fontWeight: 'bold',  fontSize: 20, }}>Juego 2</Text>
                </View>
                <View style={{  marginHorizontal: 35, marginTop: 40, }}>
                    <Image
                      style={{ height: 230, width: 260, }}
                      source={require('../assets/fondo.jpg')}
                  />
                </View>
                  <View style={{  marginHorizontal: 30, marginTop: 10, alignItems:'center' }}>
                      <Text> En este juego debes buscar letras, y asi ganaras muchas monedas 
                            
                      </Text>
                  </View>
                <View style={{  marginHorizontal: 30, marginTop: 30,}}>
                <Button 
                color={ '#4172F3' }
                mode="contained"
                theme= {{ roundness: 50  }}
        
                onPress={() => navigation.navigate('Login')}
                >Jugar</Button>
                </View>
            </Card>
                </View>
              </View>

              <View style={{ height: 230, width: 330, marginLeft: 16 }}>
              <View style={{ flex: 2 }} >
                <Card  style={{  height: 425,
                    elevation: 8,  marginBottom: 8,   
                    backgroundColor:'#03BFDF'
                  }} >
                <View style={{ alignItems:'center', top: 20,  }}>
                   <Text style={{ fontFamily: 'sans-serif',
                   fontWeight: 'bold',  fontSize: 20, }}>Juego 3</Text>
               </View>
                    <View style={{  marginHorizontal: 35, marginTop: 40, }}>
                        <Image
                          style={{ height: 230, width: 260, }}
                          source={require('../assets/fondo.jpg')}
                      />
                    </View>
                      <View style={{  marginHorizontal: 30, marginTop: 10, alignItems:'center' }}>
                          <Text> En este juego debes buscar letras, y asi ganaras muchas monedas 
                                
                          </Text>
                      </View>
                    <View style={{  marginHorizontal: 30, marginTop: 30,}}>
                    <Button 
                    color={ '#4172F3' }
                    mode="contained"
                    theme= {{ roundness: 50  }}
            
                    onPress={() => navigation.navigate('Login')}
                    >Jugar</Button>
                    </View>
                </Card>
              </View>
            </View>      
            </ScrollView>
          </View>
      </View>
    </ScrollView>
  </View>
  );
}