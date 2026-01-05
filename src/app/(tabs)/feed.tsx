import { FlatList, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '@/services/supabase';
import ReelPlayer from '@/components/ReelPlayer';

const { height } = Dimensions.get('window');

export default function Feed() {
  const [reels, setReels] = useState<any[]>([]);

  useEffect(() => {
    supabase.from('reels').select('*').limit(10)
      .then(({ data }) => setReels(data || []));
  }, []);

  return (
    <FlatList
      data={reels}
      keyExtractor={(item) => item.id}
      pagingEnabled
      renderItem={({ item }) => (
        <ReelPlayer reel={item} />
      )}
      getItemLayout={(_, i) => ({
        length: height,
        offset: height * i,
        index: i
      })}
      windowSize={3}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
      removeClippedSubviews
    />
  );
}

