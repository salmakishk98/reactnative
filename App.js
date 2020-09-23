//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  // console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  console.log(useDeviceOrientation());
  const handlepressevent = () => {
    console.log("pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlepressevent}>
        {"  "}
        this is mobile app{" "}
      </Text>
      <TouchableOpacity onPress={() => console.log("touched")}>
        <Image
          //blurRadius={4}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/1/200/300",
          }}
        />
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={() => console.log("hello")}>
        <View
          style={{
            width: landscape ? "100%" : "25%",
            height: "25%",
            backgroundColor: "yellow",
          }}
        ></View>
      </TouchableNativeFeedback>

      <Button
        title="ClickMe"
        onPress={() => alert("are you sure")}
        color="black"
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //make component in center
    //alignItems: "center",
    //justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
