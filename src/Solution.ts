import fs from "fs";
import Contestant from "./Contestant";

export default class Solution {
  #contestants: Contestant[] = [];

  get contestantsCount(): number {
    return this.#contestants.length;
  }

  get qualifiedCount(): number {
    return this.qualifiers.length;
  }

  private get qualifiers(): Contestant[]{
    return this.#contestants.filter((c) => c.isQualified);
  }

  get biggestThrow(): Contestant {
    let biggest: number = Math.max(...this.#contestants.map((c) => c.result));
    return this.#contestants.filter((c) => c.result == biggest)[0];
  }


  #writeFile(_fileName: string): void {        
    try {      
      let top12: Contestant[] = this.#contestants.sort(c => c.result);      
      console.log(top12.map(x => x.name));
        // fs.writeFileSync(_fileName, );
    } catch (error) {
        console.log((error as Error).message);
    }    
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
    this.#writeFile("Dontos2012.txt");
  }
}
