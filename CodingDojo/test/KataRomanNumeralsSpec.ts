/// <reference path="../src/KataRomanNumerals.d.ts" />
/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />

describe('KataRomanNumerals', () => {
    beforeEach(() => {
        this.romanNumerals = new KataRomanNumerals();
    });

    it('1を渡すとIが返ってくる', () => {
        var result = this.romanNumerals.convert(1);
        expect(result).toBe('I');
    });

    it('11を渡すとXIが返ってくる', () => {
        var result = this.romanNumerals.convert(11);
        expect(result).toBe('XI');
    });

    it('111を渡すとCXIが返ってくる', () => {
        var result = this.romanNumerals.convert(111);
        expect(result).toBe('CXI');
    });

    it('1111を渡すとMCXIが返ってくる', () => {
        var result = this.romanNumerals.convert(1111);
        expect(result).toBe('MCXI');
    });
});
