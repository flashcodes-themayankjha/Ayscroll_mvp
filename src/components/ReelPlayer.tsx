import { View, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');

type Props = {
  reel: {
    video_url: string;
  };
  paused: boolean;
};

export default function ReelPlayer({ reel, paused }: Props) {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: reel.video_url }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay={!paused}
        isLooping={false}
        useNativeControls={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#000',
  },
  video: {
    height: '100%',
    width: '100%',
  },
});
