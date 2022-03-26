import React from 'react';
import {View, Text} from 'react-native';
import {color, size} from '../../theme';
import {styles} from './StepsProgress.style';

export const StepsProgress = ({currentStep = 1, totalSteps = 20}) => {
  if (!totalSteps || !Number.isInteger(totalSteps)) {
    throw console.error('Value for totalSteps required');
  }

  return (
    <View>
      <Text style={styles.textStyle}>
        {currentStep}/{totalSteps}
      </Text>
    </View>
  );
};
