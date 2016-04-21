import * as React from 'react';
import {resolve} from 'path';
import {RouteButton} from '../../index';

const imagePath = resolve(
  __dirname, '../../../../', 'styles', 'coderoad.jpg'
);

const welcomeStyle = {
  backgroundImage: `url("${imagePath}")`,
  backgroundRepeat: 'no-repeat',
  height: '350px',
};

const welcomeButtonStyle = {
  fontSize: '1.4em',
  padding: '5px 2px',
  textShadow: '1px 1px 0px #000',
};

export const Welcome: React.StatelessComponent<{}> = () => (
  <div style={welcomeStyle}>
    <div className='cr-welcome'>
      <div className='title'>CodeRoad</div>
      <div className='tagline'>Tutorials in your Editor</div>
      <br /><br />
      <RouteButton
        label='Start'
        route='tutorials'
        style={welcomeButtonStyle}
      />
    </div>
  </div>
);
