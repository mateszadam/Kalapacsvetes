import fs from "fs";
import Contestant from "./Contestant";

export default class Solution {
  #contestants: Contestant[] = [];

  get contestantsCount(): number {
    return this.#contestants.length;
  }

  get qualifiedCount(): number {
    return this.#contestants.filter((c) => c.isQualified).length;
  }

  get biggestThrow(): Contestant {
    let biggest: number = Math.max(...this.#contestants.map((c) => c.result));
    return this.#contestants.filter((c) => c.result == biggest)[0];
  }

  constructor(source: string) {
    let fileRawString: string[] = fs
      .readFileSync(source)
      .toString()
      .split("\n");
    fileRawString.shift();
    fileRawString.pop();
    fileRawString.forEach((line) => {
      try {
        const currentLine: string = line.trim();
        this.#contestants.push(new Contestant(currentLine));
      } catch (err: any) {
        console.log(`Hiba: ${err.message} --> ${line.trim()}`);
      }
    });
  }
}
