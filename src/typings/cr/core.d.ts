declare module 'core-coderoad/lib/route' {
  export function reducer(route: string, action: Action): string;
  export function routeSet(route: string);
}

declare module 'core-coderoad/lib/polyfills' {
  export default function loadPolyfills(): void;
}

declare module 'core-coderoad/lib/window' {
  export function reducer(open: boolean, action: Action): boolean;
  export function windowToggle();
}
