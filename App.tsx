import * as Updates from "expo-updates";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

export default function App() {
  const onFetchUpdateAsync = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();

        Alert.alert(
          "Actualización disponible",
          "Se ha encontrado una nueva actualización y se ha instalado, ¿desea reiniciar ahora?",
          [
            { text: "Cancelar", onPress: () => {}, style: "cancel" },
            { text: "Actualizar", onPress: () => Updates.reloadAsync() },
          ]
        );
      }
    } catch (error) {
      console.warn(`Error fetching latest Expo update: ${error}`);
    }
  };

  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
