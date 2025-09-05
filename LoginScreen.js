import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (!email || !password) {
    Alert.alert("Error", "Please enter both email and password.");
    return;
  }

  // Hardcoded example credentials
  const correctEmail = "test@example.com";
  const correctPassword = "password123";

  if (email === correctEmail && password === correctPassword) {
    navigation.navigate("Drawer"); // Go to Homescreen on success
  } else {
    Alert.alert("Error", "Incorrect email or password");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PWRK</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor ="white"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        color="white"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor = "white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("Signup")}>
  <Text style={styles.signupButtonText}>Sign Up</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "skyblue" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 40, textAlign: "center",color:"white"},
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 20 },
  button: {backgroundColor:"green",padding:15,borderRadius:8,alignItems:"center",marginTop:10,},
  buttonText:{color:"white",fontWeight: "bold",fontsSize:16,},
  signupButton: {backgroundColor: "green", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10,},
  signupButtonText: {color: "white",fontWeight: "bold",fontSize: 16,},
  link: { marginTop: 20, color: "white", textAlign: "center" },
});
