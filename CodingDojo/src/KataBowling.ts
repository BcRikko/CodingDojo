class Bowling {
    /**
     * ボウリングのスコアを計算する
     * @param rolls ボウリングのスコア
     * @return 1ゲームのスコア
     */
    computeScore(rolls: string): number {
        var score = 0;
        var rollList = this.convertScoreArray(rolls);

        rollList.forEach((roll, i) => {
            if (rolls[i] === 'X') {
                // Strike
                score += roll + rollList[i + 1] + rollList[i + 2];
            } else if (rolls[i] === '/') {
                // spare
                score += roll + rollList[i + 1];
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
            if (roll === 'X') {
                // strike
                rollList.push(10);
            } else if (roll === '/') {
                // spare
                rollList.push(10 - rollList[i - 1]);
            } else if (roll === '-') {
                // gutter
                rollList.push(0);
            } else {
                rollList.push(+roll);
            }
        }

        return rollList;
    }
}