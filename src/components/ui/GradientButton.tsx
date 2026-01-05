import { Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Text from './Text';
import { radius, spacing } from '@/theme';

const gradient = ['#EC4899', '#8B5CF6', '#F59E0B'];

export default function GradientButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={gradient} style={styles.button}>
        <Text variant="label" color="#000">
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
    alignItems: 'center',
  },
});

