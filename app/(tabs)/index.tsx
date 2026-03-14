import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          
          {/* Section: Profile Image */}
          <View style={styles.imageContainer}>
            <View style={styles.imageFrame}>
              <Image 
                source={require('../../assets/images/foto.png')} 
                style={styles.avatar} 
              />
            </View>
          </View>

          {/* Section: Identity */}
          <View style={styles.infoWrapper}>
            <Text style={styles.title}>Lolo Diko Manik</Text>
            <View style={styles.majorBadge}>
              <Text style={styles.majorText}>Sistem Informasi</Text>
            </View>
          </View>

          {/* Section: Motivation Quote */}
          <View style={styles.quoteArea}>
            <Text style={styles.quoteContent}>
              "Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia."
            </Text>
          </View>

          {/* Section: Academic Stats */}
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>NIM</Text>
              <Text style={styles.detailValue}>243303621222</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>ANGKATAN</Text>
              <Text style={styles.detailValue}>2024</Text>
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F4F7', // HEX background untuk layar
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#FFFFFF', // HEX background untuk card
    borderRadius: 28,            // Syarat borderRadius
    padding: 32,
    alignItems: 'center',
    // Syarat shadowColor & efek kedalaman
    shadowColor: '#1A202C',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6, 
  },
  imageContainer: {
    marginBottom: 24,
  },
  imageFrame: {
    width: 140,
    height: 140,
    borderRadius: 70,           // Bulat sempurna
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,           // Bulat sempurna
  },
  infoWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A202C',
    marginBottom: 8,
  },
  majorBadge: {
    backgroundColor: '#EBF8FF', // HEX biru muda
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  majorText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#3182CE',           // HEX biru tajam
  },
  quoteArea: {
    paddingHorizontal: 15,
    marginBottom: 28,
  },
  quoteContent: {
    fontSize: 14,
    color: '#718096',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
  },
  detailsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    paddingTop: 24,
    width: '100%',
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 11,
    color: '#A0AEC0',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    color: '#2D3748',
    fontWeight: '700',
  },
  separator: {
    width: 1,
    backgroundColor: '#EDF2F7',
  },
});

export default HomeScreen;