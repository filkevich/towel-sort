
// You should implement your task here.

module.exports = function towelSort (matrix) {
  // return empty array if matrix is empty
  if (matrix == undefined) { return [] }

  // reverse every even array in matrix
  for (let i = 1; i < matrix.length; ) {
    matrix[i] = matrix[i].reverse();
    i = i + 2;
  }

  // concat every sub-array into one array
  matrix = matrix.flat(1);
  return matrix;
}
