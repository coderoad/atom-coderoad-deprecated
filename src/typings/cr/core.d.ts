declare module 'core-coderoad/lib/route' {
  export function reducer(route: string, action: Action): string;
  export function routeSet(route: string);
}
