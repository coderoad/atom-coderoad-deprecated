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
