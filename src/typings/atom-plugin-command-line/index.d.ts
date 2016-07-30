declare module 'atom-plugin-command-line' {
  export default function commandLine(root: string, commands?: string): Promise<string>;
}
