import React from 'react';
import { Image, View } from 'react-native';
import { CarPlay,MapTemplate  } from '../../packages/react-native-carplay/src/index';


function MapView() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, width: '100%', height: '100%' }}
        source={require('../images/map/map.jpg')}
      />
    </View>
  );
}

export const mapTemplate = new MapTemplate({
  pane: {
    items: [
      {
        text: 'Pane',
        detailText: 'Detail Text',
      },
    ],
  },
  component: MapView,
});
