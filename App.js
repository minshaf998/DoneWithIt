import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  // return <WelcomeScreen />;
  return <Card />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
