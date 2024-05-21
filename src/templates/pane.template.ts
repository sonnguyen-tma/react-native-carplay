import { CarPlay,PaneTemplate  } from '../../packages/react-native-carplay/src/index';


export const paneTemplate = new PaneTemplate({
  pane: {
    items: [
      {
        text: 'Pane',
        detailText: 'Detail Text',
      },
    ],
  },
  headerAction: { type: 'back' },
});
