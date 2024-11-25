import Contestant from "../Contestant";

describe("Tests for the Contestant class", () => {
  let contestant: Contestant;
  beforeEach(() => {
    contestant = new Contestant(
      "A. G. Kruger;B;Egyesült Államok (USA);X;72,13;X"
    );
  });
  it("should getters return good value", () => {
    expect(contestant.name).toBe("A. G. Kruger");
    expect(contestant.throws).toEqual([-1, 72.13, -1]);
    expect(contestant.nation).toBe("Egyesült Államok");
    expect(contestant.natCode).toBe("USA");
    expect(contestant.group).toBe("B");
  });
});
