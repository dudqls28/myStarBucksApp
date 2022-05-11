import AppLoading from "expo-app-loading";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {  QueryClient, QueryClientProvider} from "react-query";
import { Asset } from 'expo-asset';
export default function App() {
  const [fontLoad] = Font.useFonts(Ionicons.font);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
  };
  const queryClient = new QueryClient();
  if(!startLoading){
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Root />
    </NavigationContainer>
    </QueryClientProvider>
  );
}

