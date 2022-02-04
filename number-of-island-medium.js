/**
https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */

// BFS Non-Recursion approach:::::::::::::::::
var numIslands = function(grid) {
    let island = 0;
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === "1") {
                grid[i][j] = 0;
                island++;
                bfs(i, j, grid);
            }
        }
    }
    return island;
    function bfs(row, col, grid) {
        const queue = [{row, col}];
        const direction = [[1,0],[0,1], [-1,0],[0,-1]];
        while(queue.length) {
            const top = queue.shift();
            row = top.row;
            col = top.col;
            for (let i = 0; i < direction.length; i += 1) {
                const nwRw = row + direction[i][0];
                const nwCol = col + direction[i][1];
                if (nwRw < grid.length && nwRw >= 0 &&
                    nwCol >= 0 && nwCol < grid[nwRw].length) {
                    if (grid[nwRw][nwCol] == "1") {
                        grid[nwRw][nwCol] = 0;
                        queue.push({row: nwRw, col: nwCol});
                    }
                }
            }
        }
        
      }
};
// DFS Recursion approach:::::::::::::::::
/**
 * @param {character[][]} grid
 * @return {number}
 */
var count = 2;
var numIslands = function(grid) {
    count = 2;
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === "1") {
               recursive(i,j, grid);
                count++;
            }
        }
    }
    return count - 2;
};
function recursive(rw, cl,grid) {
    grid[rw][cl] = ""+count;
    var direction = [[-1,0], [1,0],[0,-1], [0, 1]];
    for (let i = 0; i < direction.length; i += 1) {
        const row = rw + direction[i][0];
        const col = cl + direction[i][1];
        if (row < grid.length && row >= 0) {
            if (col < grid[row].length && col >= 0) {
                if (grid[row][col] === "1") {
                    recursive(row, col, grid);
                }
            }
        }
    }
}
