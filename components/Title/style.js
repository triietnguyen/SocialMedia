import { Platform, StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: Platform.select({
            ios: 'Inter24pt-Bold',
            android: getFontFamily('Inter_24pt', '700'),
        }),
        fontWeight: '700',
        fontSize: 24,
    },
});

export default style;
