import * as React from 'react';
import {join} from 'path';
import {RouteButton} from '../../index';

// TODO: fix path
const imagePath = join(
  __dirname, '../../../../', 'img', 'coderoad.jpg'
);

const styles = {
  backgroundImage: `url("${imagePath}")`,
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'inherit',
  height: '350px',
  textAlign: 'center',
  marginTop: '0px',
  textShadow: '1px 1px 1px #000',
};

const titleStyles = {
  paddingTop: '120px',
  color: 'white',
  fontSize: '2em'
};

const taglineStyles = {
  fontSize: '1.5em',
};

const buttonStyles = {
  fontSize: '1.4em',
  boxShadow: '2px 2px 1px #888888',
  textShadow: '1px 1px 0px #000',
};

const Welcome: React.StatelessComponent<{}> = () => (
  <div style={styles} className='cr-bg'>
      <div style={titleStyles}>CodeRoad</div>
      <div style={taglineStyles}>Tutorials in your Editor</div>
      <br /><br />
      <RouteButton
        label='Start'
        route='tutorials'
        style={buttonStyles}
      />
  </div>
);
export default Welcome;
