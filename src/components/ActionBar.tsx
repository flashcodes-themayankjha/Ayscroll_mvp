import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '@/components/ui/IconButton';
import { spacing } from '@/theme';

type Props = {
  onFlashcards: () => void;
  onResources: () => void;
};

export default function ActionBar({
  onFlashcards,
  onResources,
}: Props) {
  return (
    <View style={styles.container}>
      <IconButton onPress={onFlashcards}>
        <Ionicons name="layers-outline" size={22} color="#fff" />
      </IconButton>

      <IconButton onPress={onResources}>
        <Ionicons name="folder-outline" size={22} color="#fff" />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: spacing.lg,
    bottom: 120,
    gap: spacing.lg,
  },
});

