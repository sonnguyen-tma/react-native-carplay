import { CarPlay,SearchTemplate  } from '../../packages/react-native-carplay/src/index';


export const searchTemplate = new SearchTemplate({
 
  async onItemSelect() {
    CarPlay.bridge.toast('Item select ', 1000);
  },
  onSearchButtonPressed() {
    CarPlay.bridge.toast('onSearchButtonPressed', 1000);
  },
});
