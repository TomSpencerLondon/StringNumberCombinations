// Two non-negative integers are called AND-Siblings if they can be obtained by each other by
// rearranging the digits of their decimal representations.
//
//
//   Write the function:
// function solution (input) {
// // logic here
//   return null;
// }
//
//
// that, given any String input, returns all the distinct AND-Siblings that can be formed by the
// positive integers that can be found on it in descending order. Please keep in mind the efficiency
// of your algorithm when writing the solution.
//
//   For example:
//   ● If the input provided is: “236”, then your solution should return &quot;632,623,362,326,263,236&quot;
// as these are all the combination that can be made with integers that the string contains
// ● If the input provided is: “A 3B2 C6D”, then your solution should return
// &quot;632,623,362,326,263,236&quot; as well, but this time notice that the provided string had non-
// integers characters and whitespaces, so an extraction of integers was first made to
// obtain the correct solution
// ● If the input provided does not contain any integers: “ABC”, then your solution should
// return the appropriate error exception message.
// Could you please use this:
// // console.log(solution('326'));
//
// // console.log(solution('A3B 2C 6D'));
//
// // console.log(solution('02518'));
//
// // console.log(solution('ABCD'));
//
// // console.log(solution('122'));
//
// // console.log(solution('203'));
import {
  stringNumberCombinations,
  solution,
} from "../src/string-number-combinations.test";

describe("String number combinations", () => {
  // it.each([
  //   ["236", "632,623,362,326,263,236"],
  //   // ["A 3B2 C6D", "632,623,362,326,263,236"],
  // ])(
  //   "returns all combinations of only numbers in the input string",
  //   (input: string, expected: string) => {
  //     expect(stringNumberCombinations(input)).toEqual(expected);
  //   }
  // );

  it.each([
    ["236", "632,623,362,326,263,236"],
    // ["A 3B2 C6D", "632,623,362,326,263,236"],
  ])(
    "returns all combinations of only numbers in the input string",
    (input: string, expected: string) => {
      console.log(solution("326"));

      console.log(solution("A3B 2C 6D"));

      console.log(solution("02518"));

      console.log(solution("ABCD"));

      console.log(solution("122"));
      console.log(solution("100045"));
      console.log(solution("203"));
      expect(solution(input)).toEqual(expected);
    }
  );
});
