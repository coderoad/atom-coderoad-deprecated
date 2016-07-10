import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  },
  appBar: {
    height: 50,
  },
});
export default muiTheme;
