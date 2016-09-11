declare var global: Global;

interface Global {
  document: any;
  atom: any;
  window: any;
}


declare var window: Window;

interface Window {
  localStorage: {
    getItem: (item: any) => any;
    setItem: (item: any, value: any) => any;
  }
}