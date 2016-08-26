const twoDigitify = n => n > 9 ? '' + n : '0' + n;

export default function getTestName({tutorial, pagePosition}): string {
  if (!tutorial || !tutorial.name || !tutorial.version || typeof pagePosition !== 'number') {
    console.log('Error creating temporary test name');
  }
  return `${tutorial.name}__${tutorial.version}__${
    twoDigitify(pagePosition + 1)
  }`;
}
