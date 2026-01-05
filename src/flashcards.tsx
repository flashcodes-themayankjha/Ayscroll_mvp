import { View, Text, StyleSheet } from 'react-native';
import GradientButton from '@/components/GradientButton';

export default function FlashcardsSheet() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Flashcards</Text>
      <Text style={styles.subtitle}>Card 1 of 1</Text>

      <View style={styles.flashcard}>
        <Text style={styles.text}>
          Using pick and fingers together.
        </Text>
      </View>

      <GradientButton label="Finish" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1 },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  subtitle: {
    marginTop: 4,
    color: '#888',
  },
  flashcard: {
    marginTop: 24,
    borderRadius: 24,
    padding: 32,
    backgroundColor: '#14161A',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
