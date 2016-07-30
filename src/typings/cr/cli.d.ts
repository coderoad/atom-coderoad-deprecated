declare module 'coderoad-cli' {

  export function build(
    dir: string, filePath: string, output?: string
  ): boolean;

  export function create(
    dir: string, name: string
  ): boolean | Promise<boolean>;

  export function tutorials(dir: string): Tutorial.Info[];

  export function validatePacakgeJson(): Validation.Object;
}
