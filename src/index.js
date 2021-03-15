// You should implement your task here.

module.exports = function towelSort(matrix) {
    const res = [];
    if (!matrix) {
        return res;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row % 2 === 0) {
                res.push(matrix[row][col]);
            } else {
                res.push(matrix[row][matrix[row].length - 1 - col]);
            }
        }
    }


    return res;
}

