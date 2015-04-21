class DictionaryReplacer {
    replace(before: string, dict: {}): string {
        var targets = before.match(/\$[^\$]*\$/g);

        if (!targets) { return ''; }

        var after = before;
        targets.forEach((target) => {
            var key = target.replace(/\$/g, '');

            after = after.replace(target, dict[key]);
        });

        return after;
    }
} 