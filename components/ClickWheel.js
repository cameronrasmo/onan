import React from 'react';
import { View, Text, Image } from 'react-native';

const ClickWheel = () => {
    return(
        <View 
            style={{ 
                backgroundColor: "#1e1e1e", 
                width: 300, 
                height: 300, 
                borderRadius: 300, 
                marginTop: 30, 
                alignItems: "center", 
                justifyContent: "center", 
            }}>
            <View 
                style={{ 
                        backgroundColor: "#000000", 
                    width: 95, 
                    height: 95, 
                    borderRadius: 200, 
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: .7,
                    shadowRadius: 30,
            
                    elevation: 5, }}/> 
            <View style={{ width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "space-between", paddingVertical: 15 }}>
                <Text style={{ color: "#ffffff", fontFamily: "Arial", fontWeight: "600", opacity: .4, fontSize: 16 }}>MENU</Text>
                <Image source={require("../assets/playPause.png")} style={{ width: 90, height: 25, overflow: "visible", transform: [{ scale: .5 }], right: 1, opacity: .4 }} resizeMode="contain"/>
            </View>
            <View style={{ width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 0 }}>
                <Image source={require("../assets/rewind.png")} style={{ width: 90, height: 25, overflow: "visible", transform: [{ scale: .5 }], opacity: .4, right: 10 }} resizeMode="contain"/>
                <Image source={require("../assets/forward.png")} style={{ width: 90, height: 25, overflow: "visible", transform: [{ scale: .5 }], opacity: .4, left: 10 }} resizeMode="contain"/>
            </View>
        </View>
    )
}

export default ClickWheel;