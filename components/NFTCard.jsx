import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import { COLORS, SHADOWS, SIZES, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}></View>
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
