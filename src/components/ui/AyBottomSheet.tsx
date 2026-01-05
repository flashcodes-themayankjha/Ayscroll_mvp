import React, { useMemo, useRef, forwardRef } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

type AyBottomSheetProps = {
  children: React.ReactNode;
  snapPoints?: (string | number)[];
  initialIndex?: number;
  slidable?: boolean;
  backdrop?: boolean;
};

const AyBottomSheet = forwardRef<BottomSheet, AyBottomSheetProps>(
  (
    {
      children,
      snapPoints = ['60%'],
      initialIndex = 0,
      slidable = true,
      backdrop = true,
    },
    ref
  ) => {
    const points = useMemo(() => snapPoints, [snapPoints]);

    return (
      <BottomSheet
        ref={ref}
        index={initialIndex}
        snapPoints={points}
        enablePanDownToClose={slidable}
        handleIndicatorStyle={styles.handle}
        backgroundStyle={styles.background}
        backdropComponent={
          backdrop
            ? (props) => (
                <BottomSheetBackdrop
                  {...props}
                  appearsOnIndex={0}
                  disappearsOnIndex={-1}
                />
              )
            : null
        }
      >
        <BottomSheetView style={styles.content}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default AyBottomSheet;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0B0E11',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handle: {
    backgroundColor: '#444',
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});

