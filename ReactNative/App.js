import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import PorteFavorite from './Components/PorteFavorite';
import Inscription from './Components/Inscription'
import Connection from './Components/Connection'
import AjoutPorte from './Components/AjoutPorte'
import listePortes from './Components/listePortes'
import Historique from './Components/Historique'
import PorteDetail from './Components/PorteDetail';
import Deconnection from './Components/Deconnection';
import MotDePasseOublie from './Components/MotDePasseOublie';
import MonCompte from './Components/MonCompte';
import Admin from "./Components/Admin"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MonCompteStackScreen = ({navigation}) => (
  <Drawer.Navigator screenOptions={{headerShown: true}}>
    <Drawer.Screen name="Mon compte" component={MonCompte}
      options={{
      headerLeft: () => (
        <Icon.Button testID='navigatorAccount' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>

    <Drawer.Screen name="Inscription" component={Inscription}
      options={{headerShown: false}}>
    </Drawer.Screen>

    <Drawer.Screen name="Connexion" component={Connection} options={{inscriptionSubmitted: false, headerShown: false}}>
    </Drawer.Screen>

    <Drawer.Screen name="MotDePasseOublie" component={MotDePasseOublie}
      options={{headerShown: false}}>
    </Drawer.Screen>
  </Drawer.Navigator>
)

const listePortesStackScreen = ({navigation}) => (
  <Drawer.Navigator screenOptions={{headerShown: true}}>
    <Drawer.Screen name="ListePortes" component={listePortes}
      options={{
      headerLeft: () => (
        <Icon.Button testID='navigatorDoorList' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>

    <Drawer.Screen name="PorteDetail" component={PorteDetail}
      options={{doorIdParam: 0, nickname: "", tagName: "",
      headerLeft: () => (
        <Icon.Button testID='navigatorDoorInfo' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>

    <Drawer.Screen name="Historique" component={Historique} options={{doorIdParam: 0,nickname: ""}}
      options={{
      headerLeft: () => (
        <Icon.Button testID='navigatorHistory' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>
  </Drawer.Navigator>
)

const FavoriteStackScreen = ({navigation}) => (
  <Drawer.Navigator screenOptions={{headerShown: true}}>
    <Drawer.Screen name="Portes favorites" component={PorteFavorite}
      options={{
      headerLeft: () => (
        <Icon.Button testID='navigatorFavDoors' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>
  </Drawer.Navigator>
)

const AjoutPorteStackScreen = ({navigation}) => (
  <Drawer.Navigator screenOptions={{headerShown: true}}>
    <Drawer.Screen name="Ajouter une porte" component={AjoutPorte}
      options={{
      headerLeft: () => (
        <Icon.Button testID='navigatorAddDoor' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>
  </Drawer.Navigator>
)

const DeconnectionStackScreen = ({navigation}) => (
  <Drawer.Navigator screenOptions={{headerShown: true}}>
    <Drawer.Screen name="Deconnexion" component={Deconnection}
      options={{
      headerLeft: () => (
        <Icon.Button testID='navigatorDisconnect' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
      )}}>
    </Drawer.Screen>
  </Drawer.Navigator>
)
const AdminStackScreen = ({navigation}) => (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
        <Drawer.Screen name="Administration" component={Admin}
                       options={{
                           headerLeft: () => (
                               <Icon.Button testID='navigatorAdmin' name="md-menu" size={25} onPress={ () => { navigation.openDrawer()}}></Icon.Button>
                           )}}>
        </Drawer.Screen>
    </Drawer.Navigator>
)
const isAdmin = true;
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen testID='account' name="Mon compte" component={MonCompteStackScreen}/>
        <Stack.Screen testID='favDoor' name="Portes favorites" component={FavoriteStackScreen}/>
        <Stack.Screen testID='addDoor' name="Ajouter une porte" component={AjoutPorteStackScreen}/>
        <Stack.Screen testID='seeDoor' name="Afficher la liste de vos portes" component={listePortesStackScreen}/>
        <Stack.Screen testID='disconnect' name="Deconnexion" component={DeconnectionStackScreen}/>
        {isAdmin === true ? <Stack.Screen name="Admin" component={AdminStackScreen}/> : <React.Fragment></React.Fragment>}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


