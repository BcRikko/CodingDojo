/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
 
describe('KataDectionaryReplacer',() => {
    beforeEach(() => {
        this.replacer = new DictionaryReplacer();
    });

    it('引数がすべてEmptyの場合',() => {
        var result = this.replacer.replace('', {});
        expect(result).toBe('');
    });

    it('置換対象が1つの場合',() => {
        var result = this.replacer.replace('$temp$', { 'temp': 'temporary' });
        expect(result).toBe('temporary');
    });
});