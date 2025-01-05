import { useThemesColors } from "@/hooks/useThemeColors";

import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./components/ThemedText";
import { Card } from "./components/Card";

export default function Index() {
  const colors = useThemesColors();
  const pokemons = Array.from({ length: 35 }, (_, k) => ({
    name: "Pokémon name",
    id: k + 1,
  }));
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/pokeball.png")}
          height={24}
          width={24}
          alt="pokeball"
        />
        <ThemedText variant="headline" color="grayLight">
          Pokédex
        </ThemedText>
      </View>
      <Card style={styles.card}>
        <FlatList
          numColumns={3}
          data={pokemons}
          renderItem={({ item }) => (
            <Card style={{ flex: 1 / 3 }}>
              <Text>{item.name}</Text>
            </Card>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  card: {
    flex: 1,
  },
});
