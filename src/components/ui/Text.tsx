import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { colors, typography } from '@/theme';

type Variant =
  | 'title'
  | 'h2'
  | 'body'
  | 'small'
  | 'label';

interface Props extends TextProps {
  variant?: Variant;
  color?: string;
  center?: boolean;
}

export default function Text({
  variant = 'body',
  color = colors.text.primary,
  center = false,
  style,
  ...props
}: Props) {
  return (
    <RNText
      {...props}
      style={[
        styles[variant],
        { color, textAlign: center ? 'center' : 'left' },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  title: typography.title,
  h2: typography.h2,
  body: typography.body,
  small: typography.small,
  label: typography.label,
});

