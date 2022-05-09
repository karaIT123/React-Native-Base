import React from "react";
import {View, Text, s} from  "react-native";

const App = () => {
    return (
        <View style={{
            borderWidth: 1,
            height:150,
            width:150,
            backgroundColor: "green",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                color:"white",
                fontSize: 20,
                fontWeight: "bold"
            }}>Hello world</Text>
        </View>
    )
}

export default App;