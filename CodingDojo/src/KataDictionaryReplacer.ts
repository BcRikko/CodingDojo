class DictionaryReplacer {
    replace(before: string, dict: {}): string {
        var after = before;

        var targets = before.match(/\$[^\$]*\$/g) || [];
        targets.forEach((target) => {
            var key = target.replace(/\$/g, '');

            if (dict[key]) {
                after = after.replace(target, dict[key]);
            }
        });

        return after;
    }
} 