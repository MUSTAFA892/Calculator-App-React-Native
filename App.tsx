import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { appColors } from "./src/styles/constants";
import { ThemeContext } from "./src/context/ThemeContext";
import MyKeyboard from "./src/components/MyKeyboard";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        {/* Header Section */}
        <View
          style={[
            styles.header,
            { backgroundColor: theme === "light" ? appColors.light : "black" }, // Change header background color
          ]}
        >
          <Text style={[styles.headerText, { color: theme === "light" ? "black" : "white" }]}>
            Advanced Calculator
          </Text>
          <View style={styles.switchContainer}>
            <Text style={[styles.switchLabel, { color: theme === "light" ? "black" : "white" }]}>
              Light
            </Text>
            <Switch
              value={theme === "dark"}
              onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
              trackColor={{ false: "#767577", true: "#81b0ff" }} // Customize track color
              thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"} // Customize thumb color
              ios_backgroundColor="#3e3e3e" // iOS background color
            />
            <Text style={[styles.switchLabel, { color: theme === "light" ? "black" : "white" }]}>
              Dark
            </Text>
          </View>
        </View>
        
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    marginHorizontal: 10,
  },
});
