import { CarPlay,GridTemplate  } from '../../packages/react-native-carplay/src/index';



export const gridTemplate = new GridTemplate({
  buttons: Array.from({ length: 8 }).map((_, i) => ({
    id: `BUTTON_${i}`,
    image: require('../images/click.png'),
    titleVariants: [`Item ${i}`],
  })),
  title: 'Grid Template',
  onButtonPressed() {
    CarPlay.bridge.toast('button pressed', 1000);
  },
});
