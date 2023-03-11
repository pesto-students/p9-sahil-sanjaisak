/*
Problem 2 Spiral Order Matrix II
Problem Description Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

function spiralMatrix(arr) {
    let spiralMat = [];
    let state = 'right';
    let i = 0;
    let j = 0;

    while (true) {
        if (arr[i] === undefined || arr[i][j] === undefined || arr[i][j] === null) {

            switch (state) {
                case 'right': {
                    state = 'bottom';
                    i++;
                    j--;
                };
                    break;

                case 'bottom': {
                    state = 'left';
                    j--;
                    i--;
                };
                    break;

                case 'left': {
                    state = 'top';
                    i--;
                    j++;
                };
                    break;

                default: {
                    state = 'right';
                    j++;
                    i++;
                };
            }

        }
        if (arr[i][j] === null) return spiralMat;
        spiralMat.push(arr[i][j]);
        arr[i][j] = null;

        if (state === 'right') j++;
        if (state === 'bottom') i++;
        if (state === 'left') j--;
        if (state === 'top') i--;


    }
}
console.log(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// output [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Time O(n)
// Space O(n)