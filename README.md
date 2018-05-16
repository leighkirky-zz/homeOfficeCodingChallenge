# homeOfficeCodingChallenge

# Unit tests

To run the unit tests, npm packages for both mocha and chai are required.

An 'npm install' will pull down the required modules.

Run the tests via the command line using 'npm test'

# Challenge

We would like you to create a public project in GitHub<https://github.com/> and submit the solution to the following:  The English alphabet consists of 26 letters. If you imagine having the alphabet stored in a list, each letter has an index it can be referred to: ​ ``` A | B | C | D | E | F | G | H | ... | Z 0 . 1 . 2 . 3 . 4 . 5 . 6 . 7 . ... . 25 ``` ​ In this particular case, I can refer to `A` as `0` and to `6` as `G`. ​ In order to communicate securely with your colleague, you decide to ​ - convert the message to numbers `HELLO => [ 7 4 11 11 14 ]` - for each number, increment the value by 3 `[ 7 4 11 11 14 ] => +3 => [ 10 7 14 14 17 ]` - convert the message back into letters: `[ 10 7 14 14 17 ] => KHOOR` ​ Your colleague will then decrypt the message following the same steps, but in reverse order: ​ - convert the word to numbers `KHOOR => [ 10 7 14 14 17 ]` - subtract 3 `[ 10 7 14 14 17 ] => -3 => [ 7 4 11 11 14 ]` - finally we could retrieve the letters from the indexes and obtain ` [ 7 4 11 11 14 ] => HELLO` ​ **Task: write an algorithm to encode and decode an arbitrary string according to the algorithm above.**  Please don't spend too long on building the application (2-4 hours max). In the interview, be prepared to discuss what you have written so far and extend the functionality. Consider that the above is not the full requirements.
 Please bring your laptop with your code and any relevant libraries already loaded (you won't have access to the internet).  Additionally once the task is completed please send us a link to your GitHub public project.
