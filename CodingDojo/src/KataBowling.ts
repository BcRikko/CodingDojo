class Bowling {
    private isFirstRoll: boolean;
    private frameCount: number;

    private MARK = {
        STRIKE: 'X',
        SPARE: '/',
        GUTTER: '-'
    }

    constructor() {
        this.isFirstRoll = true;
        this.frameCount = 0;    
    }

    /**
     * 次のフレームへ
     */
    nextFrame(): void {
        this.isFirstRoll = true;
        this.frameCount++;
    }


    /**
     * ボウリングのスコアを計算する
     * @param rolls ボウリングのスコア
     * @return 1ゲームのスコア
     */
    computeScore(rolls: string): number {
        var score = 0;
        var rollList = this.convertScoreArray(rolls);

        rollList.forEach((roll, i) => {
            if (this.frameCount < 9) {
                if (rolls[i] === this.MARK.STRIKE) {
                    score += roll + rollList[i + 1] + rollList[i + 2];
                    this.nextFrame();

                } else if (rolls[i] === this.MARK.SPARE) {
                    score += roll + rollList[i + 1];
                    this.nextFrame();

                } else {
                    score += roll;

                    if (this.isFirstRoll) {
                        this.isFirstRoll = false;
                    } else {
                        this.nextFrame();
                    }
                }
            } else {
                score += roll;
            }
        });

        return score;
    }


    /**
     * rollsを数値配列に変換する（記号も変換する）
     * @param rolls ボウリングのスコア（文字列）
     * @return 数値配列
     */
    private convertScoreArray(rolls: string): number[] {
        var rollList: number[] = [];

        for (var i = 0; i < rolls.length; i++) {
            var roll = rolls[i];
            if (roll === this.MARK.STRIKE) {
                rollList.push(10);

            } else if (roll === this.MARK.SPARE) {
                rollList.push(10 - rollList[i - 1]);

            } else if (roll === this.MARK.GUTTER) {
                rollList.push(0);

            } else {
                rollList.push(+roll);
            }
        }

        return rollList;
    }
}