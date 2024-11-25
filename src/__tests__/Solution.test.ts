import Solution from "../Solution"

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
})