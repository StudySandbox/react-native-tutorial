import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={{ color: "blue" }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href={"./about"}>About</Link>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1758411897725-0bd3f733c66d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />

      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width: 100, height: 100 }}
      />

      <View>
        <Text style={style.heading}>Hello</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 30,
    color: "purple",
  },
});
