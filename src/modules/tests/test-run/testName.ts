/**
 * turn a number into a two digit string
 * for example: 1 -> '01'
 */ 
const twoDigitify = n => n > 9 ? '' + n : '0' + n;

/**
 * create a file name for the compiled test file
 * for example: 'coderoad-functional-school__0.1.0__01'
 * @param  {} {tutorial
 * @param  {} pagePosition}
 * @returns string
 */
export default function getTestName({tutorial, pagePosition}): string {
  if (!tutorial || !tutorial.name || !tutorial.version || typeof pagePosition !== 'number') {
    console.log('Error creating temporary test name');
  }
  return `${tutorial.name}__${tutorial.version}__${
    twoDigitify(pagePosition + 1)
  }`;
}
