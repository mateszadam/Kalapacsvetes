import Solution from "../Solution"

describe("Tests for Solution.ts", ()=>{
    let solution: Solution = new Solution("Selejtezo2012.txt");
    it("Getters return expected value", ()=>{
        expect(solution.contestantsCount).toBe(41);
        expect(solution.qualifiedOver78Count).toBe(3);
        expect(solution.biggestThrow.result).toBe(79.37);
    })    
})