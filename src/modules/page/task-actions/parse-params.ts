export default class ParseParams {
  private curly: number;
  private current: string;
  private params: string[];
  private round: number;
  private square: number;
  constructor() {
    this.reset();
  }
  public getParams(text: string): string[] {
    this.reset();
    for (let i = 0; i < text.length; i++) {
      this.addBreak(text[i], i);
    }
    return this.params.concat(this.trim(this.current));
  }
  private addBreak(char: string, index: number): void {
    switch (char) {
      case '(':
        this.round += 1;
        break;
      case ')':
        this.round -= 1;
        break;
      case '[':
        this.square += 1;
        break;
      case ']':
        this.square -= 1;
        break;
      case '{':
        this.curly += 1;
        break;
      case '}':
        this.curly -= 1;
        break;
      default:
        break;
    }
    if (char === ',' &&
      this.round === 0 && this.square === 0 && this.curly === 0) {
      this.params.push(this.trim(this.current));
      this.current = '';
    } else {
      this.current += char;
    }
  }
  private reset(): void {
    this.round = 0;
    this.square = 0;
    this.curly = 0;
    this.current = '';
    this.params = [];
  }
  private trim(text: string): string {
    text = text.trim();
    let firstBracket = text.charAt(0).match(/["']/);
    if (firstBracket && !!text.charAt(text.length - 1).match(firstBracket[0])) {
      text = text.substring(1, text.length - 1); // trim quotes
    }
    return text;
  }
};
