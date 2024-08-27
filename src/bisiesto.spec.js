import anioBisiesto from "./bisiesto";

describe("anioBisiesto", () => {
    it("Esperamos que el 2000 sea bisiesto",() => {
        expect(anioBisiesto(2000)).toEqual("Bisiesto");
    });
    it("Esperamos que el 2100 no sea bisiesto",() => {
        expect(anioBisiesto(2100)).toEqual("No bisiesto");
    });
    
}); 