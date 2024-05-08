export function wordCount(str: string): number {
    // if (str.length === 0) return 0;
    // const length = str.length;

    // let state = 0;
    // let count = 0;
    // // Traverse all characters of the input string
    // for (let i = 0; i < length; i++) {
    //     console.log(str.charCodeAt(i), str[i], '\n');
    //     // Check for backlash to skip characters
    //     if (str[i] == '\\') {
    //         i++; // Skip next character (after backslash)
    //         continue;
    //     }

    //     // If the current character is a word character
    //     if (
    //         (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
    //         (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    //     ) {
    //         // If previous state was OUT, increment word count and change state to IN
    //         // let word = '';
    //         if (state == 0) {
    //             count++;
    //             state = 1;
    //         }
    //     }
    //     // If the current character is not a word character
    //     else {
    //         // Change state to 0
    //         state = 0;
    //     }
    // }
    // return count;

    // Use regular expression to match words, including hyphens
    const words = str.match(/\b[\w-]+\b/g);
    // \b Matches a word boundary position between a word character and non-word character or position (start / end of string)
    // \w Matches any word character (alphanumeric & underscore). Only matches low-ascii characters (no accented or non-roman characters). Equivalent to [A-Za-z0-9_]
    console.log(words);
    // Return the count of matched words
    return words ? words.length : 0;
}
