import React from "react";
import { View, StatusBar, Text } from "react-native";

const App: React.FC = () => (
  <>
    <StatusBar barStyle={"light-content"} backgroundColor="#312e38" />
    <View style={{ backgroundColor: "#312e38", flex: 1 }}>
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
        }}
      >
        Diou
      </Text>
    </View>
  </>
);

export default App;
