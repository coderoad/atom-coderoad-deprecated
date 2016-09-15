/**
 * Object.values polyfill
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Object/values
 * @returns void
 */
export default function polyfillObjectValues(): void {
// Object.values (ES7)
  if (typeof Object.values !== 'function') {
    Object.values = function(obj: Object): any[] {
      let vals = new Set();
      for (let key in obj) {
        vals.add(obj[key]);
      }
      return Array.from(vals);
    };
  }
}
