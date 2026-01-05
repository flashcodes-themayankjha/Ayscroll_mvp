
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Text from './Text';
import { colors, radius, spacing } from '@/theme';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props {
  label: string;
  onPress: () => void;
  variant?: Variant;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export default function Button({
  label,
  onPress,
  variant = 'primary',
  fullWidth = false,
  style,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        styles[variant],
        fullWidth && { width: '100%' },
        style,
      ]}
    >
      <Text
        variant="label"
        color={variant === 'primary' ? '#000' : colors.text.primary}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#fff',
  },
  secondary: {
    backgroundColor: colors.bg.secondary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
});
