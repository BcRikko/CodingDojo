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

    it('1990を渡すとMCMXCが返ってくる', () => {
        var result = this.romanNumerals.convert(1990);
        expect(result).toBe('MCMXC');
    });

    it('2008を渡すとMMVIIIが返ってくる', () => {
        var result = this.romanNumerals.convert(2008);
        expect(result).toBe('MMVIII');
    });

    it('0を渡すと空文字が返ってくる', () => {
        var result = this.romanNumerals.convert(0);
        expect(result).toBe('');
    });

    it('4000を渡すと空文字が返ってくる', () => {
        var result = this.romanNumerals.convert(4000);
        expect(result).toBe('');
    });
});
