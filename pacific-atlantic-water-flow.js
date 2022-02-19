/**
 * @param {number[][]} heights
 https://leetcode.com/problems/pacific-atlantic-water-flow/
 * @return {number[][]}
 */
const direction = [[0,1],[1,0],[-1,0],[0,-1]];
var pacificAtlantic = function(heights) {
    const map = new Array(heights.length).fill(0).map(a => new Array(heights[0].length).fill(-2));
    let visited = new Array(heights.length).fill(0).map(a => new Array(heights[0].length));
  // for first Col only
    for (let i = 0; i < heights.length;i += 1) {
        if (!visited[i][0]) {
            fillWater(i, 0, 1);
            bfs(i, 0, 1);
        }
    }
  // for firstRow  only
    for (let i = 0; i < heights[0].length;i += 1) {
         if (!visited[0][i]) {
            fillWater(0, i, 1);
             bfs(0, i, 1);
        }
    }
  // for lastColumn only
     visited = new Array(heights.length).fill(0).map(a => new Array(heights[0].length));
     const lastCol = heights[0].length - 1;
    for (let i = 0; i < heights.length;i += 1) {
        if (!visited[i][lastCol]) {
            fillWater(i, lastCol, -1);
            bfs(i, lastCol, -1);
        }
    }
   // for lastRow  only
    const lastRow = heights.length - 1;
    for (let i = 0; i < heights[0].length;i += 1) {
         if (!visited[lastRow][i]) {
            fillWater(lastRow, i, -1);
            bfs(lastRow, i, -1);
        }
    }
    let result = [];
      for (let i = 0; i < heights.length;i += 1) {
           for (let j = 0; j < heights[0].length;j += 1) {
               if (map[i][j] == 0) {
                   result.push([i,j])
               }
         }
      }
    return result;
 
    function bfs(row, col, water) {
        const queue = [{row, col, weight: heights[row][col]}];
        while(queue.length) {
            const {row: rr, col: cc, weight} = queue.shift();
            visited[rr][cc] = true;
            for (let i = 0; i < direction.length; i += 1) {
                const nwRow = rr + direction[i][0];
                const nwCol = cc + direction[i][1];
                if (nwRow >= 0 && nwRow < heights.length && nwCol >= 0 && nwCol < heights[nwRow].length) {
                    if (!visited[nwRow][nwCol]) {
                        if (heights[nwRow][nwCol] >= weight) {
                            visited[nwRow][nwCol] = true;
                            // console.log(nwRow, nwCol, "::>");
                           fillWater(nwRow, nwCol, water)
                            queue.push({row: nwRow, col: nwCol, weight: heights[nwRow][nwCol] })
                        }
                    }
                }
            }
        }
    }
    function fillWater(row, col, water) {
         if (map[row][col] === -2) {
            map[row][col] = water;
        } else if (water + map[row][col] === 0) {
            map[row][col] = water + map[row][col];
        }
    }
};
