import { Pressable, StyleSheet } from 'react-native';
import { colors, radius } from '@/theme';

export default function IconButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.secondary,
  },
});

