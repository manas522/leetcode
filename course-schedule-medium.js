/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 https://leetcode.com/problems/course-schedule/
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjacency = {};
    let visited = {}
    for (let i = 0; i < prerequisites.length; i += 1) {
        const [from, to] = prerequisites[i];
        if (!adjacency[to]) adjacency[to] = [];
        adjacency[to].push(from);
    }
    let allCourses = {};
    let count = 0;
    for (let i = 0; i < numCourses; i += 1) {
        const courseID = i;
        if (adjacency[courseID] && adjacency[courseID].length && !allCourses[courseID])         {
            // console.log(courseID);
            if(!dfs(courseID)) return false;
       }
       visited = {}
    }
    // console.log(count);
    return true;
    function dfs(node) {
        if (visited[node]) return false;
       if (!allCourses[node])  {
            allCourses[node] = true;
            count++;
        } else {
            return true;
        }
        visited[node] = true;
        const neighbours = adjacency[node] || [];
        for (let i = 0; i < neighbours.length; i += 1) {
            const toNode = neighbours[i];
            // console.log(toNode,visited);
            if (!dfs(toNode)) return false;
        }
        visited[node] = false;
        return true;
    }
        
};
