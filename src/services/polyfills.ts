export default function loadPolyfills(): void {

  // Object.values (ES7)
  if (typeof Object.values !== 'function') {
    Object.values = function(obj) {
      var vals = [];
      for (let key in obj) {
        vals.push(obj[key]);
      }
      return vals;
    };
  }

};
