export class KataRomanNumerals {
    // 一の位
    private I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    // 十の位
    private X = ['', 'X', 'XX', 'XXX', 'XL', 'X', 'LX', 'LXX', 'LXXX', 'XC'];
    // 百の位
    private C = ['', 'C', 'CC', 'CCC', 'CD', 'C', 'DC', 'DCC', 'DCCC', 'CM'];
    // 千の位
    private M = ['', 'M', 'MM', 'MMM'];

    private DigitPlace = [this.I, this.X, this.C, this.M];

    /**
     * アラビア数字をローマ数字に変換する
     * @param value アラビア数字
     * @return ローマ数字
     */
    convert(value: number): string {
        var romanNum = '';

        if (0 < value && value < 4000) {
            this.DigitPlace.forEach((digitPlace, i) => {
                romanNum = digitPlace[this.getDigitValue(value, Math.pow(10, i))] + romanNum;
            });
        }

        return romanNum;
    }

    /**
     * 指定された位の値を取得する
     * @param value 元の数字
     * @param digit 取得したい位
     * @return 指定された位の値
     */
    private getDigitValue(value: number, digit: number): number {
        return Math.floor(value / digit) % 10;
    }
}
