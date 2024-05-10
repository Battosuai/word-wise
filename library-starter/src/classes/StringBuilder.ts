export class StringBuilder {
    private str: string;

    constructor(str: string) {
        this.str = str;
    }

    private validWordCharacter(index: number) {
        if (
            (this.str.charCodeAt(index) >= 65 &&
                this.str.charCodeAt(index) <= 90) ||
            (this.str.charCodeAt(index) >= 97 &&
                this.str.charCodeAt(index) <= 122) ||
            (this.str.charCodeAt(index) >= 48 &&
                this.str.charCodeAt(index) <= 57) ||
            this.str.charCodeAt(index) === 45 ||
            this.str.charCodeAt(index) === 95
        ) {
            return true;
        }
        return false;
    }

    public wordCount() {
        if (this.str.length === 0) return 0;
        const length = this.str.length;

        let state = 0;
        let count = 0;
        // Traverse all characters of the input string
        for (let i = 0; i < length; i++) {
            // Check for backlash to skip characters
            if (this.str[i] == '\\') {
                i++; // Skip next character (after backslash)
                continue;
            }

            // If the current character is a word character
            if (this.validWordCharacter(i)) {
                // If previous state was OUT, increment word count and change state to IN
                // let word = '';
                if (state == 0) {
                    count++;
                    state = 1;
                }
            }
            // If the current character is not a word character
            else {
                // Change state to 0
                state = 0;
            }
        }
        return count;
    }

    public characterEditDistance(
        stringForComparison: string,
        matchNoDataPairs = false,
        ignoreCase = true
    ) {
        const length =
            this.str.length >= stringForComparison.length
                ? this.str.length
                : stringForComparison.length;

        let editDistance = 0;
        for (let i = 0; i < length; i++) {
            if (ignoreCase) {
                console.log(this.str[i], stringForComparison[i]);
                if (
                    this.str[i].toLowerCase() !==
                    stringForComparison[i].toLowerCase()
                ) {
                    editDistance++;
                }
            } else {
                if (this.str[i] !== stringForComparison[i]) {
                    editDistance++;
                }
            }
        }
        return editDistance;
    }
}
