import 'react-native-gesture-handler';
import * as React from 'react';
import { View,TouchableHighlight, Text } from 'react-native';
import { Renders } from './views/Renders';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Home({navigation}){
  let render =  new Renders;
  return(
    <View>
      {render.homeScreenRender()}
      <Text>Test</Text>
      <TouchableHighlight onPress={() =>{navigation.navigate('Review')} } style = {render.styles.buttons} underlayColor={'green'} >
            <Text style={render.styles.buttonText}>Review list</Text>
      </TouchableHighlight>
    </View>
  );
}

function Review({navigation}){
  let render =  new Renders;
  return(
    <View>
      {render.homeScreenRender()}
      <TouchableHighlight onPress={() =>{navigation.push('Home')} } style = {render.styles.buttons} underlayColor={'green'} >
        <Text style={render.styles.buttonText}>Home</Text>
      </TouchableHighlight>
    </View>
  );
}