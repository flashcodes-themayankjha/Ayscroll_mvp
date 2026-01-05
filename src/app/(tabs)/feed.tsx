import { FlatList, Dimensions, StyleSheet, View } from 'react-native';
import { useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

import Screen from '@/components/ui/Screen';
import Text from '@/components/ui/Text';
import AyBottomSheet from '@/components/ui/AyBottomSheet';

import ReelPlayer from '@/components/ReelPlayer';
import ActionBar from '@/components/ActionBar';

import Flashcards from '@/flashcards';
import Resources from '@/resources';

import { colors } from '@/theme';

const { height } = Dimensions.get('window');

const MOCK_REELS = [
  {
    id: '1',
    video_url: 'https://your-cdn-url/video.mp4',
    title: 'Mastering Aahatein from 3 A.M Riffs',
    creator: 'Mayank Jha',
    category: 'MUSIC',
    duration: '4m',
  },
];

export default function Feed() {
  const flashcardRef = useRef<BottomSheet>(null);
  const resourceRef = useRef<BottomSheet>(null);

  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Screen>
      <FlatList
        data={MOCK_REELS}
        pagingEnabled
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={!sheetOpen}
        renderItem={({ item }) => (
          <View style={{ height }}>
            {/* Video */}
            <ReelPlayer reel={item} paused={sheetOpen} />

            {/* Overlay Metadata */}
            <View style={styles.meta}>
              <Text variant="label" color={colors.text.secondary}>
                {item.category} • {item.duration} left
              </Text>

              <Text variant="h2" style={styles.title}>
                {item.title}
              </Text>

              <Text color={colors.text.secondary}>
                By {item.creator}
              </Text>
            </View>

            {/* Actions */}
            <ActionBar
              onFlashcards={() => {
                setSheetOpen(true);
                flashcardRef.current?.snapToIndex(0);
              }}
              onResources={() => {
                setSheetOpen(true);
                resourceRef.current?.snapToIndex(0);
              }}
            />
          </View>
        )}
      />

      {/* Flashcards Bottom Sheet */}
      <AyBottomSheet
        ref={flashcardRef}
        snapPoints={['70%']}
        onClose={() => setSheetOpen(false)}
      >
        <Flashcards />
      </AyBottomSheet>

      {/* Resources Bottom Sheet */}
      <AyBottomSheet
        ref={resourceRef}
        snapPoints={['55%']}
        onClose={() => setSheetOpen(false)}
      >
        <Resources />
      </AyBottomSheet>
    </Screen>
  );
}

const styles = StyleSheet.create({
  meta: {
    position: 'absolute',
    bottom: 120,
    left: 16,
    right: 80,
    gap: 6,
  },
  title: {
    marginTop: 4,
  },
});
