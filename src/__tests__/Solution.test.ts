import Solution from "../Solution";
import fs from "fs";

describe("Tests for Solution.ts", ()=>{
    it("Getters return expected value", ()=>{
        let solution: Solution = new Solution("Selejtezo2012.txt");
        expect(solution.contestantsCount).toBe(41);
        expect(solution.qualifiedOver78Count).toBe(3);
        expect(solution.biggestThrow.result).toBe(79.37);
    })
    it("Wrong source name should return error", ()=>{
        expect(()=>{new Solution("wrongFile.csv")}).toThrow();
    });
    it("Check output file content", ()=>{
        let createdFileString = fs
            .readFileSync("Dontos2012.txt")
            .toString();
        let solutionFileString = fs
            .readFileSync("Dontos2012_Solution.txt")
            .toString();
        expect(createdFileString).toEqual(solutionFileString);
    })
})