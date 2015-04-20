/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />

describe('ボウリングのスコア計算',() => {
    beforeEach(() => {
        this.bowling = new Bowling();
    });

    it('すべてガターの場合',() => {
        var result = this.bowling.computeScore('--------------------');
        expect(result).toBe(0);
    });

    it('すべて1ピンの場合',() => {
        var result = this.bowling.computeScore('11111111111111111111');
        expect(result).toBe(20);
    });
});