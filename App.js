import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClickWheel from './components/ClickWheel';

export default function App(){
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        <View style={{ width: "90%", height: 260, backgroundColor: "#222222", marginBottom: 35, borderRadius: 10, alignItems: "center", justifyContent: "center"}}>
          <View style={{ width: "97%", height: 249, backgroundColor: "#FFFFFF", borderRadius: 5}}>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
        <ClickWheel />
      </View>
    </View>
  );
}