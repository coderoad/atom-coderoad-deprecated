import { join } from 'path';

export default function getTestName({tutorial, pagePosition}): string {
  if (!tutorial || !tutorial.name || !tutorial.version || typeof pagePosition !== 'number') {
    console.log('Error creating temporary test name');
  }
  return `${tutorial.name}__${tutorial.version}__${pagePosition}`;
}
