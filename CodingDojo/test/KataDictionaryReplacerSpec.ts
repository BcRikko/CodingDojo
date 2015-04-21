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

    it('置換対象が2つの場合',() => {
        var dict = { 'temp': 'temporary', 'name': 'John Doe' };
        var result = this.replacer.replace('$temp$ here comes the name $name$', dict);
        expect(result).toBe('temporary here comes the name John Doe');
    });

    it('置換対象に対応する連想配列がない場合',() => {
        var dict = { 'temp': 'temporary', 'name': 'John Doe' };
        var result = this.replacer.replace('$temp$ here comes the name $firstname$', dict);
        expect(result).toBe('temporary here comes the name $firstname$');
    });

    it('置換対象がない場合',() => {
        var dict = { 'temp': 'temporary', 'name': 'John Doe' };
        var result = this.replacer.replace('There is no replacement target.', dict);
        expect(result).toBe('There is no replacement target.');
    });
});