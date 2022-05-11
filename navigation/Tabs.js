import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { BLACK_COLOR,DARK_COLOR,LIGHT_COLOR,YELLOW_COLOR,TITLE_COLOR } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Pay from "../screens/Pay";
import Order from "../screens/Order";
import Gift from "../screens/Gift";
import Other from "../screens/Other";
const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";
    return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor : isDark ? BLACK_COLOR : "white",
        }}
        screenOptions = {{
            // unmountOnBlur: true, // 화면이 다른 스크린으로가면 메모리에서 컴포넌트를 삭제해준다.
            tabBarStyle: {
                backgroundColor : isDark ? BLACK_COLOR : "white",
            },
            tabBarActiveTintColor : TITLE_COLOR,
            tabBarInactiveTintColor : isDark ? 'white' : LIGHT_COLOR,
            headerShown:false,
            tabBarLabelStyle : {
                marginTop : -5,
                fontSize : 10,
                fontWeight : "600"
            }
        }}
    >
        <Tab.Screen name = "Home" component = {Home} 
        options ={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name={"home"} color={color} size={size} />
            )
        }}/>
        <Tab.Screen name = "Pay" component = {Pay} 
        options ={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name={"card"} color={color} size={size} />
            )
        }}/>
        <Tab.Screen name = "Order" component = {Order} 
        options ={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name={"cafe"} color={color} size={size} />
            )
        }}/>
        <Tab.Screen name = "Gift" component = {Gift} 
        options ={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name={"gift"} color={color} size={size} />
            )
        }}/>
        <Tab.Screen name = "Other" component = {Other} 
        options ={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name={"ellipsis-horizontal-outline"} color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
)
    }
export default Tabs;