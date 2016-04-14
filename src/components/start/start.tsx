import * as React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Checks from './checks/checks';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';
import * as path from 'path';

const headerImg = path.resolve(__dirname, '../../../', 'styles', 'coderoad.jpg');

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => store.dispatch(Action.setRoute('tutorials'))
  };
})
class Welcome extends React.Component<{
  routeToTutorials?: any
}, {}> {
  render() {
    return <div class='cr-welcome'>
      <img src={headerImg} />
      <FlatButton label='Start' onTouchTap={this.props.routeToTutorials} />
    </div>;
  }
}

export const Start = ({checks}) => (
  <section className='cr-start'>
    <div className='cr-start-header'>

    {checks.passed
      ? <Welcome  />
      : <Checks checks={checks}/>}

    </div>

  <br />
  <p className='version'>Beta</p>
</section>
);
