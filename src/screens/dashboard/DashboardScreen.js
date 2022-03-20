import React from 'react';
import {Text, View} from 'react-native';
import {Button, ProgressBar, Icon, Header} from '../../components';

export const DashboardScreen = () => {
  return (
    <View>
      <Header />
      <ProgressBar percentage={44} />
      {/* Inline styles for example only */}

      <Button
        title={'Sample Button'}
        onPress={() => console.log('Sample Button Press')}
        isDisabled={false}
        buttonStyle={{width: '75%', alignSelf: 'center', height: '20%'}}
        titleStyle={{fontStyle: 'italic'}}
      />
    </View>
  );
};
