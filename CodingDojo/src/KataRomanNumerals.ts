export class KataRomanNumerals {
    private I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    private X = ['', 'X', 'XX', 'XXX', 'XL', 'X', 'LX', 'LXX', 'LXXX', 'XC'];
    private C = ['', 'C', 'CC', 'CCC', 'CD', 'C', 'DC', 'DCC', 'DCCC', 'CM'];
    private M = ['', 'M', 'MM', 'MMM'];

    private DigitPlace = {
        1: this.I,
        10: this.X,
        100: this.C,
        1000: this.M
    };

    convert(value: number): string {
        var romanNum = '';

        romanNum += this.C[this.getDigitValue(value, 100)];
        romanNum += this.X[this.getDigitValue(value, 10)];
        romanNum += this.I[this.getDigitValue(value, 1)];

        return romanNum;
    }

    private getDigitValue(value: number, digit: number): number {
        return Math.floor(value / digit) % 10;
    }
}
