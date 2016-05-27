declare module 'core-coderoad/lib/route' {
  export function reducer(route: string, action: Action): string;
  export function routeSet(route: string);
}

declare module 'core-coderoad/lib/polyfills' {
  export default function loadPolyfills(): void;
}
