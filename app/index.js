import { View, FlatList, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Card from "../components/Card";
import { programs } from "../data/data";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* 🔥 Custom Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Universities</Text>
      </View>

      {/* 📋 List */}
      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() =>
              router.push({
                pathname: "/detail",
                params: { item: JSON.stringify(item) },
              })
            }
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
  },

  header: {
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
    backgroundColor: "#f4f4f8",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a1a2e",
  },
});