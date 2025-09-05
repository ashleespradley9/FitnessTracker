import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function NotificationsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Enable Notifications</Text>
        <Switch
          value={isEnabled}
          onValueChange={(value) => setIsEnabled(value)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "skyblue", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "white", marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  text: { fontSize: 18, color: "white" },
});
