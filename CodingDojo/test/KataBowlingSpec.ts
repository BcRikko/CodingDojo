/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />

describe('ボウリングのスコア計算',() => {
    beforeEach(() => {
        this.bowling = new Bowling();
    });

    it('すべてガターの場合',() => {
        var result = this.bowling.computeScore('--------------------');
        expect(result).toBe(0);
    });
});