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

    it('X 34の場合（ストライク）',() => {
        var result = this.bowling.computeScore('X34----------------');
        expect(result).toBe(24);
    });

    it('5/ 34の場合（スペア）',() => {
        var result = this.bowling.computeScore('5/34----------------');
        expect(result).toBe(20);
    });

    it('3回連続ストライク（ターキー）',() => {
        var result = this.bowling.computeScore('XXX-------');
        expect(result).toBe(60);
    });

    it('3回連続スペア',() => {
        var result = this.bowling.computeScore('5/5/5/--------------');
        expect(result).toBe(40);
    });

    it('パーフェクトゲームの場合',() => {
        var result = this.bowling.computeScore('XXXXXXXXXXXX');
        expect(result).toBe(300);
    });
});