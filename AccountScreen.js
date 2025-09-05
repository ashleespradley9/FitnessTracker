import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AccountScreen() {
  const [name, setName] = useState("Ashlee");
  const [age, setAge] = useState("29");
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("********");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>

      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "skyblue", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "white", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    color: "white",
  },
  editButton: { backgroundColor: "gray", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold" },
});
