import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Test Screen Works!</Text>
      <Button
        title="Click Me"
        onPress={() => alert("Navigation and component are working!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
