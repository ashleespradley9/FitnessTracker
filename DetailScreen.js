import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { log } = route.params; // Log passed from Homescreen
  const [isEditing, setIsEditing] = useState(false);
  const [category, setCategory] = useState(log.category);
  const [workout, setWorkout] = useState(log.workout);
  const [weight, setWeight] = useState(log.weight);
  const [reps, setReps] = useState(log.reps);

  const handleSave = () => {
    Alert.alert("Updated", "Workout updated successfully!");
    setIsEditing(false);
    navigation.goBack(); // Return to Homescreen
  };

  const handleDelete = () => {
    Alert.alert("Deleted", "Workout deleted successfully!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Details</Text>

      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={setCategory}
            placeholder="Category"
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
          <TextInput
            style={styles.input}
            value={workout}
            onChangeText={setWorkout}
            placeholder="Workout"
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            placeholder="Weight"
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={reps}
            onChangeText={setReps}
            placeholder="Reps"
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setIsEditing(false)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.detailText}>
            {category} - {workout} - {weight} lbs - {reps} reps
          </Text>

          <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "skyblue", padding: 20, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "white" },
  detailText: { fontSize: 18, marginBottom: 20, textAlign: "center", color: "white" },
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
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
