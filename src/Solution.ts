import fs from "fs";
import Contestant from "./Contestant";

export default class Solution {
  #contestants: Contestant[] = [];

  constructor(forrás: string) {
    fs.readFileSync(forrás)
      .toString()
      .split("\n")
      .forEach((line) => {
        const currentLine: string = line.trim();
        this.#contestants.push(new Contestant(currentLine));
      });
  }
}
