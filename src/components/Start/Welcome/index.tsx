import * as React from 'react';
import {join} from 'path';
import {RouteButton} from '../../index';
import {store} from '../../../store';

const imagePath = join(
  __dirname, '../../../../', 'img', 'coderoad.jpg'
);

const styles = {
  backgroundImage: `url("${imagePath}")`,
  backgroundRepeat: 'no-repeat',
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
  padding: '5px 2px',
  textShadow: '1px 1px 0px #000',
};

export const Welcome: React.StatelessComponent<{}> = () => (
  <div style={styles}>
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
