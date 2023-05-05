/**
 * 0-1背包问题
 * @param W 背包容量
 * @param N 物品数量
 * @param v 物品价值集合
 * @param w 物品重量集合
 */
export default function knapsack(
  W: number,
  N: number,
  v: number[],
  w: number[]
) {
  const ks: number[][] = [];
  for (let i = 0; i <= N; i++) {
    ks.push([]);
  }
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= W; j++) {
      if (i === 0 || j === 0) {
        ks[i][j] = 0;
      } else {
        // 如果容量大于当前物品的重量
        if (j >= w[i - 1]) {
          // 可以尝试将当前物品放入背包
          // 比较包含此物品和不包含此物品的值，选择最大的为最优值
          // 包含此物品的解为：当前物品的价值 + (i - 1) 个物品中，选择总容量为（当前容量j - 当前物品重量）的解
          ks[i][j] = Math.max(ks[i - 1][j], v[i - 1] + ks[i - 1][j - w[i - 1]]);
          // 如果容量小于当前物品的重量，说明最优解为 i-1 个物品中选择总容量为j的解
        } else {
          ks[i][j] = ks[i - 1][j];
        }
      }
    }
  }
  console.log(ks);
  return ks[N][W];
}

console.log(knapsack(5, 4, [2, 4, 5, 6], [1, 2, 3, 4]));
