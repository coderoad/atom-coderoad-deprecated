import {alertReplay} from '../../actions';
import store from '../../store';

export default function addToStatusBar(store: Redux.Store<any>, statusBar) {
  let replay = document.createElement('div');
  // create status bar element
  replay.className = 'cr-alert-replay';
  replay.textContent = '▲';
  replay.onclick = () => store.dispatch(alertReplay());
  // consume with "atom status bar"
  return statusBar.addLeftTile({ item: replay, priority: 100 });
}
