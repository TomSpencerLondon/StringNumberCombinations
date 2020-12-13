export const stringNumberCombinations = (input: string): string => {
  const combinations = permutations(input.split(""));
  return combinations.map((a) => a.join("")).join(",");
};

const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  const reduce = arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  );

  return reduce.reverse();
};
