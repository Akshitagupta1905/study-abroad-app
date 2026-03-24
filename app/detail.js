import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Detail() {
  const { item } = useLocalSearchParams();
  const data = JSON.parse(item);
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.hero}>

        {/* ✅ Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.country}</Text>
        </View>
        <Text style={styles.heroTitle}>{data.university}</Text>

      </View>

      <View style={styles.contentCard}>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ABOUT</Text>
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionText}>{data.description}</Text>
        </View>

        {/* Info Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoCell}>
            <Text style={styles.infoCellLabel}>COUNTRY</Text>
            <Text style={styles.infoCellValue}>{data.country}</Text>
          </View>
          <View style={styles.infoCellDivider} />
          <View style={styles.infoCell}>
            <Text style={styles.infoCellLabel}>TYPE</Text>
            <Text style={styles.infoCellValue}>University</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
  },
  scrollContent: {
    paddingBottom: 40,
  },

  hero: {
    backgroundColor: "#1a1a2e",
    paddingTop: 56,
    paddingHorizontal: 24,
    paddingBottom: 36,
  },

  // ✅ Back Button Styles
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 20,
    color: "#ffffffcc",
    marginRight: 6,
    lineHeight: 22,
  },
  backText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffffcc",
    letterSpacing: 0.3,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff18",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ffffff22",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#ffffffaa",
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: 36,
    letterSpacing: -0.5,
    marginBottom: 20,
  },

  contentCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: -16,
    borderRadius: 20,
    padding: 24,
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },

  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#9999b0",
    letterSpacing: 1.6,
    marginBottom: 8,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: "#f0f0f5",
    marginBottom: 14,
  },
  sectionText: {
    fontSize: 15,
    color: "#444460",
    lineHeight: 24,
  },

  infoGrid: {
    flexDirection: "row",
    backgroundColor: "#f8f8fc",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#ededf5",
  },
  infoCell: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  infoCellDivider: {
    width: 1,
    backgroundColor: "#ededf5",
  },
  infoCellLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#9999b0",
    letterSpacing: 1.4,
    marginBottom: 5,
  },
  infoCellValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a2e",
    letterSpacing: -0.2,
  },
});