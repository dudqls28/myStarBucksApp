import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return(
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,

    }}
  >
    {/* <NativeStack.Screen name="Detail" component={Detail} /> */}
  </NativeStack.Navigator>
  )
};

export default Stack;