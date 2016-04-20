export default function loadPolyfills(): void {

  // Object.values (ES7)
  if (typeof Object.values !== 'function') {
    Object.values = function(obj) {
      let vals = [];
      for (let key in obj) {
        vals.push(obj[key]);
      }
      return vals;
    };
  }

};
