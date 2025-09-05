// Homescreen.js
import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  FlatList 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Homescreen({ navigation }) {
  const [category, setCategory] = useState("");
  const [workout, setWorkout] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [logs, setLogs] = useState([]);
  const [quote, setQuote] = useState("");

  const today = new Date().toLocaleDateString();
  const userName = "Ashlee"; // Replace with logged-in user later

  // Load saved logs when component mounts
  useEffect(() => {
    loadLogs();
    fetchRandomQuote();
  }, []);

  const loadLogs = async () => {
    try {
      const savedLogs = await AsyncStorage.getItem("workoutLogs");
      if (savedLogs) setLogs(JSON.parse(savedLogs));
    } catch (error) {
      console.log(error);
    }
  };

  const saveLog = async () => {
    if (!category || !workout || !reps) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newLog = { category, workout, weight, reps };
    const updatedLogs = [...logs, newLog];

    try {
      await AsyncStorage.setItem("workoutLogs", JSON.stringify(updatedLogs));
      setLogs(updatedLogs);
      setCategory("");
      setWorkout("");
      setWeight("");
      setReps("");
      Alert.alert("Success", "Workout saved!");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].text);
    } catch (error) {
      console.log("Error fetching quote:", error);
      setQuote("Push yourself, because no one else will!");
    }
  };

  const handleViewDetails = (log) => {
    navigation.navigate("DetailScreen", { log });
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Menu */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Welcome */}
      <Text style={styles.title}>Welcome {userName}</Text>
      <Text style={styles.subtitle}>{today}</Text>

      {/* Motivational quote */}
      <Text style={styles.quote}>"{quote}"</Text>

      {/* Workout Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Category"
        placeholderTextColor="rgba(255,255,255,0.7)"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Workout"
        placeholderTextColor="rgba(255,255,255,0.7)"
        value={workout}
        onChangeText={setWorkout}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        placeholderTextColor="rgba(255,255,255,0.7)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Reps"
        placeholderTextColor="rgba(255,255,255,0.7)"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveLog}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Display saved logs */}
      <FlatList
        data={logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.logContainer}>
            <Text style={styles.logItem}>
              {item.category} - {item.workout} - {item.reps} reps - {item.weight} lbs
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleViewDetails(item)}
            >
              <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "skyblue", padding: 20 },
  menuButton: { position: "absolute", top: 50, left: 20 },
  menuText: { fontSize: 28, color: "white" },
  title: { fontSize: 28, fontWeight: "bold", marginTop: 60, color: "white" },
  subtitle: { fontSize: 18, marginBottom: 10, color: "white" },
  quote: { fontSize: 16, marginBottom: 20, fontStyle: "italic", color: "white" },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    color: "white",
  },
  saveButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  saveButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
  logContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  logItem: { color: "white", fontSize: 16 },
  detailsButton: {
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  detailsText: { color: "white", fontWeight: "bold" },
});
