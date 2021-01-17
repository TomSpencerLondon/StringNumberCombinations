export const stringNumberCombinations = (input: string): string => {
  const numbersString = input.replace(/\D/g, "").trim();
  const combinations = permutations(numbersString.split(""));
  return combinations
    .map((c) => +c.join(""))
    .sort((a, b) => b - a)
    .join(",");
};

const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  );
};

export const solution = (input: string): string => {
  const numbersString = input.replace(/\D/g, "").trim();
  const combinations = permutations2(numbersString);
  return combinations
    .map((c) => +c.join(""))
    .sort((a, b) => b - a)
    .join(",");
};

const permutations2 = (string: string): string[][] => {
  if (!!string.length && string.length < 2) {
    return [string.split("")];
  }
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (string.indexOf(char) !== i) {
      continue;
    }

    const remainder = string.slice(0, i) + string.slice(i + 1, string.length);

    for (const permutation of permutations2(remainder)) {
      result.push([char + permutation]);
    }
  }
  return result;
};
