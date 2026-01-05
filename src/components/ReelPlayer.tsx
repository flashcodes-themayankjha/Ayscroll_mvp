import { Video } from 'expo-av';
import { View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function ReelPlayer({ reel }: any) {
  return (
    <View style={{ height }}>
      <Video
        source={{ uri: reel.video_url }}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        useNativeControls={false}
        style={{ height: '100%', width: '100%' }}
      />
    </View>
  );
}

