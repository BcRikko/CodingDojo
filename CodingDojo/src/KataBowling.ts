class Bowling {
    computeScore(rolls: string): number {
        var score = 0;

        for (var i = 0; i < rolls.length; i++) {
            var roll = rolls[i];
            if (roll === '-') {
                // gutter
                score += 0;

            } else if (roll === 'X') {
                // strike
                score += 10 + (+rolls[i + 1]) + (+rolls[i + 2]);

            } else {
                // normal
                score += +roll;
            }
        }

        return score;
    }
}