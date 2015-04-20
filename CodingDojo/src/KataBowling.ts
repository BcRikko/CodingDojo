class Bowling {
    computeScore(rolls: string): number {
        var score = 0;

        for (var i = 0; i < rolls.length; i++) {
            var roll = rolls[i];
            if (roll === '-') {
                score += 0;
            } else {
                score += +roll;
            }
        }

        return score;
    }
}