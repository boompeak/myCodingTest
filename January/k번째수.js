function solution(array, commands) {
  let answer = [];
  for (let command of commands) {
    let [i, j, k] = command;
    let newArray = array.slice(i - 1, j);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[k - 1]);
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
