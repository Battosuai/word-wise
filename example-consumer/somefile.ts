import { wordCount, getCharacterEditDistance } from 'word-wise';

const string1 = 'How are you?';
const string2 =
    'Specifies a multiline text input control. Identify all multiline text fields in the user database.Therefore, you must re-index all multiline text fields after moving databases.The indexes that support multiline fields are not replicated from the working master database to user databases.The only supported ones are case sensitivity and multiline, because all supported libraries can handle them.That naturally hits monoline insurance companies more than multiline insurance companies because they are more specialized and more vulnerable.Indicate that you want to drop an existing multiline text index.Similarly, some formats support multipart shapes (for example, multiline or multipolygon).With this last step, your index for the multiline field is complete.CEditView a view that provides a simple multiline text editor.Sentencedict.com try its best to gather and build good sentences.Important: When you drop the index for a multiline text field, that field can no longer be used for queries.You can re-index the multiline text fields by following the same procedures used to create the indexes on the original user database.Step 3. Build indexes for all multiline text fields that will be indexed.Specifically, you must name each instance of pv using --name, and you must enable multiline mode with --cursor.Enter this command to delete the value in the table that allows indexes to be created for multiline text fields.It is proved from the theory and experiment that the liquid crystal tunable filter can be used to select some desired wavelength from a multiline laser.Run an SQL script to build the indexes for all multiline text fields that will be used for queries.The script will prompt you to either drop an existing multiline text index or to create a new multiline text index.For example, if you change a word in a multiline comment[sentencedict.com], the CDT analyzes the partition containing the comment and not the rest of the code.To begin the process of enabling case-insensitive queries, review the schema of the user database and identify all of the multiline text fields.As Chinas leading service provider we achieve group turnover of 20 mio USD ex factory in 2009 with a multiline sales force of 190 full time equivalent covering while China.This row includes a value that allows indexes to be created for multiline text fields.';
const string3 = '  How are     you?';
const string4 = 'What is,it?Go fuck yourself!!Heya';

// console.log(wordCount(string1));
// console.log(wordCount(string2));
// console.log(wordCount(string3));
// console.log(wordCount(string4));

console.log(
    getCharacterEditDistance('john/smith@oracle.com', 'john.smith@oracle.com')
);
console.log(
    getCharacterEditDistance('John.Smith@oracle.com', 'john.smith@oracle.com')
);
console.log(
    getCharacterEditDistance('jhon_smith@hotmail.com', 'john_smith@hotmail.com')
);
console.log(
    getCharacterEditDistance('tom simpson@gmail.com', 'tomsimpson@gmail.com')
);
console.log(
    getCharacterEditDistance(
        'andrew_johnson@email.net',
        'andrew.johnstone@email.net'
    )
);
console.log(getCharacterEditDistance('', 'andrew.johnstone@email.net'));
console.log(getCharacterEditDistance('', '  '));
