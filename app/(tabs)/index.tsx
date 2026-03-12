import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* FOTO PROFIL */}
      <Image
        source={require("../../assets/images/foto.png.jpg")}
        style={styles.profile}
      />

      {/* IDENTITAS */}
      <Text style={styles.nama}>Lolo Diko Manik</Text>
      <Text style={styles.nim}>NIM: 243303621222</Text>
      <Text style={styles.jurusan}>Sistem Informasi</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  nama: {
    fontSize: 22,
    fontWeight: "bold",
  },

  nim: {
    fontSize: 16,
  },

  jurusan: {
    fontSize: 16,
  },
});