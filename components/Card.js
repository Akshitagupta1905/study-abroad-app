import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Card({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.accentBar} />

      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.country}</Text>
        </View>

        <Text style={styles.title}>{item.university}</Text>

        <View style={styles.divider} />

        <Text style={styles.desc}>{item.description}</Text>
        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 16,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#f0f0f5",
  },
  accentBar: {
    width: 4,
    backgroundColor: "#1a1a2e",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  content: {
    flex: 1,
    padding: 18,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#f4f4f8",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#6b6b80",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1a1a2e",
    letterSpacing: -0.3,
    lineHeight: 23,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f5",
    marginBottom: 12,
  },
  desc: {
    fontSize: 13.5,
    color: "#7a7a90",
    lineHeight: 20,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1a1a2e",
    letterSpacing: 0.5,
  },
  arrow: {
    fontSize: 15,
    color: "#1a1a2e",
    fontWeight: "700",
  },
});