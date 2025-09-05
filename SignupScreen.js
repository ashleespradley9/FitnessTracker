
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    Alert.alert("Success", `Account created for: ${username}`);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PWRK</Text>
      <Text style = {styles.subtitle}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor ="white"
        value={username}
        onChangeText={setUsername}
        color="white"

      />

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
        placeholderTextColor ="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "skyblue" },
  title: { fontSize: 28, color:"white",fontWeight: "bold", marginBottom: 40, textAlign: "center" },
  subtitle:{fontSize: 20, color: "white", textAlign: "center", marginBottom: 40,},
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 20 },
  button: {backgroundColor:"green",padding:15,borderRadius:8,alignItems:"center",marginTop:10,},
  buttonText:{color:"white",fontWeight: "bold",fontsSize:16,},
  loginButton: {backgroundColor: "green", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10,},
  loginButtonText: {color: "white",fontWeight: "bold",fontSize: 16,},
  link: { marginTop: 20, color: "blue", textAlign: "center" },
});
