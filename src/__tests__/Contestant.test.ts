import Contestant from "../Contestant";

describe("Tests for the Contestant class", () => {
  let contestant: Contestant;
  beforeEach(() => {
    contestant = new Contestant(
      "A. G. Kruger;B;Egyesült Államok (USA);X;72,13;-"
    );
  });
  it("should getters return good value", () => {
    expect(contestant.name).toBe("A. G. Kruger");
    expect(contestant.throws).toEqual([-1, 72.13, -2]);
    expect(contestant.nation).toBe("Egyesült Államok");
    expect(contestant.natCode).toBe("USA");
    expect(contestant.group).toBe("B");
  });
  it("should formattedOutput return good value", () => {
    expect(contestant.formattedOutput).toBe(
      `Név: A. G. Kruger
    \tCsoport: B
    \tNemzet: Egyesült Államok
    \tNemzet kód: USA
    \tSorozat: X;72,13;-
    \tEredmény: 72,13\n`
    );
  });
  it("should isQualified return good value", () => {
    expect(contestant.isQualified).toBe(false);
  });
  it("should result return good value", () => {
    expect(contestant.result).toBe(72.13);
  });
});
