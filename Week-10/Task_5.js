// Find the Town Judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(N, trust) {
    const inDegrees = new Array(N + 1).fill(0)
const outDegrees = new Array(N + 1).fill(0)
trust.forEach(([a, b]) => {
  outDegrees[a] = (outDegrees[a] || 0) + 1
  inDegrees[b] = (inDegrees[b] || 0) + 1
})
for (let i = 1; i <= N; i++) {
  if (outDegrees[i] === 0 && inDegrees[i] === N - 1) {
    return i
  }
}
return -1
};