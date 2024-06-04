import * as Updates from "expo-updates";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import Constants from "expo-constants";

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
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={{ marginBottom: 5 }}>Update 2</Text>
      <Text style={{ marginBottom: 5 }}>
        process.env.NODE_ENV: {process.env.NODE_ENV}
      </Text>
      <Text style={{ marginBottom: 5 }}>
        Constants.expoConfig?.extra?.expoPublicApiURL:
        {Constants.expoConfig?.extra?.expoPublicApiURL}
      </Text>
      <Text>
        Constants.expoConfig?.extra?.expoPublicApiURL:
        {Constants.expoConfig?.extra?.expoPublicNewEnv}
      </Text>
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
