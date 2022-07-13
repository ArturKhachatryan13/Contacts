import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

export default StyleSheet.create({
  small: {
    backgroundColor: Colors.edgewater,
    borderRadius: 12,
    height: 53,
    width: 53,
    justifyContent: 'center',
  },
  medium: {
    marginHorizontal: 5,
    width: 103,
    height: 103,
    borderRadius: 24,
    backgroundColor: Colors.edgewater,
  },
});
