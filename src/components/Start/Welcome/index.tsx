import { join } from 'path';
import * as React from 'react';

import {RouteButton} from '../../index';

let styles = {
  header: {
    backgroundImage: '',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'inherit',
    height: '350px',
    textAlign: 'center',
    marginTop: '0px',
    textShadow: '1px 1px 1px #000',
  },
  title: {
    paddingTop: '120px',
    color: 'white',
    fontSize: '2em',
  },
  tagline: {
    fontSize: '1.5em',
  },
  button: {
    fontSize: '1.4em',
    boxShadow: '2px 2px 1px #888888',
    textShadow: '1px 1px 0px #000',
  },
};

// issue: image not loading on Windows
// due to url parse/replacing providing
// invalid path
if (!navigator.platform.match(/Win/)) {
  const imagePath = join(
    __dirname, '..', '..', '..', '..', 'img', 'coderoad.jpg'
  );
  styles.header.backgroundImage = `url(${imagePath})`;
}

const Welcome: React.StatelessComponent<{
  title: string, tagline: string, firstRoute: string
}> = ({title, tagline, firstRoute}) => (
  <div style={styles.header} className='cr-bg'>
    <div style={styles.title}>{title}</div>
    <div style={styles.tagline}>{tagline}</div>
    <br /><br />
    <RouteButton
      label='Start'
      route={firstRoute}
      style={styles.button}
    />
  </div>
);
export default Welcome;
