import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>

      <ThemedText style={styles.description}>
        {"This app includes example code to help you get started."}
      </ThemedText>

      <Collapsible title="File-based routing">
        <View style={styles.collapsibleTextWrapper}>
          <Text style={styles.collapsibleText}>
            {"This app has two screens: "}
            <Text style={styles.boldText}>{"app/(tabs)/index.tsx"}</Text>
            {" and "}
            <Text style={styles.boldText}>{"app/(tabs)/explore.tsx"}</Text>
          </Text>
        </View>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText style={styles.description}>
          {"Below is the profile picture from your assets folder:"}
        </ThemedText>
        <Image
          source={require('../../assets/images/foto.png')}
          style={styles.profileImage}
        />
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    bottom: -90,
    left: -35,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  description: {
    marginVertical: 8,
    fontSize: 16,
  },
  collapsibleTextWrapper: {
    marginTop: 4,
  },
  collapsibleText: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: '600',
  },
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 75,
  },
});