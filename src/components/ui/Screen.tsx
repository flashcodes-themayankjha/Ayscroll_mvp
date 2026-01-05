import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors, spacing } from '@/theme';

type Props = {
  children: React.ReactNode;
  padded?: boolean;
  style?: ViewStyle;
  statusBarStyle?: 'light' | 'dark';
};

export default function Screen({
  children,
  padded = false,
  style,
  statusBarStyle = 'light',
}: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style={statusBarStyle} />
      <View
        style={[
          styles.container,
          padded && styles.padded,
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },
  padded: {
    paddingHorizontal: spacing.lg,
  },
});
