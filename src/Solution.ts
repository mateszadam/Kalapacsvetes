import fs from "fs";
import Contestant from "./Contestant";

export default class Solution {
  #contestants: Contestant[] = [];

  get contestantsCount(): number {
    return this.#contestants.length;
  }

  get qualifiedOver78Count(): number {
    return this.qualifiersOver78.length;
  }

  private get qualifiersOver78(): Contestant[]{
    return this.#contestants.filter((c) => c.isQualified);
  }

  get biggestThrow(): Contestant {
    let biggest: number = Math.max(...this.#contestants.map((c) => c.result));
    return this.#contestants.filter((c) => c.result == biggest)[0];
  }

  #writeFile(_fileName: string): void {        
    try {      
      let top12: Contestant[] = this.#contestants.sort((a, b) => (b.result - a.result));         
      let out: string = "Helyezés;Név;Csoport;Nemzet;NemzetKód;Sorozat;Eredmény";
      top12.slice(0, 12).forEach((c, i) =>{
        out+=`\r${i+1};${c.name};${c.group};${c.nation};${c.natCode};${c.throwsString};${c.result}`;
      })
      fs.writeFileSync(_fileName, out);
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
