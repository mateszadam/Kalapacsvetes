export default class Contestant {
  #_name: string;
  #_group: string;
  #_nationAndCode: string;
  #_throws: number[];

  get name(): string {
    return this.#_name;
  }

  get group(): string {
    return this.#_group;
  }

  get isQualified(): boolean {
    return this.#_throws[0] > 78 || this.#_throws[1] > 78;
  }

  private get nationAndCode(): string[] {
    return this.#_nationAndCode.split("(");
  }

  get nation(): string {
    return this.nationAndCode[0].trim();
  }

  get natCode(): string {
    let codeRaw: string = this.nationAndCode[1];
    return codeRaw.substring(0, codeRaw.length - 1);
  }

  get throws(): number[] {
    return this.#_throws;
  }

  get throwsString(): string{
    return this.#_throws.join(";").replaceAll(".", ",").replaceAll("-2", "-").replaceAll("-1", "X");
  }

  get result(): number {
    return Math.max(...this.throws);
  }
  get formattedOutput(): string {
    return `Név: ${this.#_name}
    \tCsoport: ${this.#_group}
    \tNemzet: ${this.nation}
    \tNemzet kód: ${this.natCode}
    \tSorozat: ${this.throwsString}
    \tEredmény: ${this.result.toString().replaceAll(".", ",")}\n`;
  }

  constructor(row: string) {
    let data: string[] = row.split(";");
    this.#_name = data[0];
    this.#_group = data[1];

    this.#_nationAndCode = data[2];

    this.#_throws = [];
    for (let i = 3; i <= 5; i++) {
      if (data[i] == "X") this.#_throws.push(-1.0);
      else if (data[i] == "-") this.#_throws.push(-2.0);
      else this.#_throws.push(+data[i].replace(",", "."));
    }
  }
}
