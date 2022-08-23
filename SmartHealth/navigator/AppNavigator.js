import React, {useContext} from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResultScreen from '../screens/ResultScreen';
import QuizScreen2 from '../screens/QuizScreen2';
import QuizScreen3 from '../screens/QuizScreen3';
import QuizScreen4 from '../screens/QuizScreen4';
import Goals from '../screens/Goals';
import MainScreen from '../screens/MainScreen';
import Draft from '../Draft';
import QuizInitScreen from '../screens/QuizInitScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import TestScreen from '../screens/TestScreen';
import Question1 from '../Screening/Question1';
import FeedScreen from '../screens/FeedScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Profile from '../screens/Profile';
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem} from '@react-navigation/drawer';
import Assessements from '../screens/Assessements';
import AuthContextProvider, {AuthContext} from '../store/auth-context';
import Testi from '../screens/Test';
import Journal from '../screens/Journal';
import AddNote from '../screens/AddNote';
import DeleteNote from '../screens/DeleteNote';
import Note from '../screens/Note';
import Mood from '../screens/Mood';

Icon.loadFont();

const Stack = createNativeStackNavigator();


function AppNavigator() {
  return (
    

      <Stack.Navigator>

        <Stack.Screen name="MainScreen" component={MainScreen}  />
        <Stack.Screen name="ResultScreen" component={ResultScreen}  />
        <Stack.Screen name="QuizScreen2" component={QuizScreen2}  />
        <Stack.Screen name="QuizScreen3" component={QuizScreen3}  />
        <Stack.Screen name="QuizScreen4" component={QuizScreen4}  />
        <Stack.Screen name="GoalScreen" component={Goals}  />
        <Stack.Screen name="DraftScreen" component={Draft}  />
        <Stack.Screen name="AddNoteScreen" component={AddNote}  />
        <Stack.Screen name="DeleteNoteScreen" component={DeleteNote}  />
        <Stack.Screen name="NoteScreen" component={Note}  />


        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (

    <Tab.Navigator>
      <Tab.Screen name='Home' component={AppNavigator}
       options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='home-outline'
            size={25}
            />
          )
        },
        headerShown: false,
      }
    }
       />
      <Tab.Screen name="Feed" component={FeedScreen} 
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='star-outline'
            size={25}
            />
          )
        },
        headerShown: false,
      }
    }
      />
      <Tab.Screen name="Journal" component={Journal} 
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='star-outline'
            size={25}
            />
          )
        },
        headerShown: false,
      }
    }
      />
      <Tab.Screen name="Mood" component={Mood} 
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='star-outline'
            size={25}
            />
          )
        },
        headerShown: false,
      }
    }
      />
      </Tab.Navigator>
  );
}

function getHeaderState(route){

  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);
  if(routeName === 'Home') return false;

}

function getHeaderTitle(route){
  
  const routeName = getFocusedRouteNameFromRoute(route);

  if(routeName === 'Feed') return 'Community';

  else return routeName;
}

function CustomDrawerLogout(props) {

  const authContext = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={authContext.logout} />
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  return (
  
      <Drawer.Navigator drawerContent={props => <CustomDrawerLogout {...props} />}>
        <Drawer.Screen name="MainApp" component={TabNavigator}
        options={ ({route}) => ({
          headerShown: getHeaderState(route),
          headerTitle: getHeaderTitle(route)
        })}
        />
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="Assessements" component={Assessements}/>
      </Drawer.Navigator>
  );
}


const SignUp = createNativeStackNavigator();

function SignUpNavigator() {

  return (
  

    <SignUp.Navigator>

      <SignUp.Screen name="LoginScreen" component={LoginScreen} />
      <SignUp.Screen name="RegisterScreen" component={RegisterScreen} />
      <SignUp.Screen name="QuizInitScreen" component={QuizInitScreen}  />
      <SignUp.Screen name="TestScreen" component={TestScreen}  />
      <SignUp.Screen name="Question1" component={Question1} />
    
    </SignUp.Navigator>

  );
}

const StackTest = createNativeStackNavigator();


function TestNavigator() {
  return (
    

      <StackTest.Navigator>

        <Stack.Screen name="Testi" component={Testi}  />
       
      </StackTest.Navigator>
    );
}


function AppNavigation(){

  const authContext = useContext(AuthContext);

  return(
  <NavigationContainer>

    {!authContext.isAuthenticated && <SignUpNavigator />}
    {authContext.isAuthenticated && <DrawerNavigator />}

  </NavigationContainer>
  )

}


export default function Navigation() {
  return (
    <>

      <AuthContextProvider>

        <AppNavigation />

      </AuthContextProvider>

    </>
  );
}