function getTriangleWeight(a: number, b: number, c: number) {
  return W[a][b] + W[b][c] + W[c][a];
}

// 凸多边形规模
const N = 5;
// m[i][j]表示多边形Vi-1到Vj最优三角剖分的权值
const m = [...new Array(N + 1).fill(null).map(() => [...new Array(N + 1).fill(0)])];

// S[i][j]表示多边形Vi-1到Vj最优三角剖分的 k 值
const S = [...new Array(N + 1).fill(null).map(() => [...new Array(N + 1).fill(0)])];

// 凸多边形的权重矩阵，在main函数中输入
const W = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 2, 3, 4, 5],
  [0, 2, 0, 3, 4, 5],
  [0, 3, 3, 0, 4, 5],
  [0, 4, 4, 4, 0, 5],
  [0, 5, 5, 5, 5, 0],
];

// 求解最优值
export default function trianglePartition() {
  let i: number, r: number, k: number, j: number;
  let temp: number;

  // 初始化
  for (i = 1; i <= N; i++) {
    m[i][i] = 0; // 连续2个点之间的解一定为0
  }

  // 自底向上计算m，S；r 为子问题的规模
  for (r = 2; r <= N; r++) {
    for (i = 1; i <= N - r + 1; i++) {
      // 中间的判断条件是为了不让 j 赋值的时候越界
      j = i + r - 1; // 最少为3个点的距离，所以 j - i = 1 --> N-1
      // ---------------------------------------------------- 方案一 ----------------------------------------------------
      // 为了下面可以与temp比较，所以此处必须要先把k == i的情况赋值掉，不然一直是0
      // m[i][j] = m[i][i] + m[i + 1][j] + getTriangleWeight(i - 1, i, j); // k == i
      // S[i][j] = i;
      // ---------------------------------------------------- 方案二 ----------------------------------------------------
      m[i][j] = Number.MAX_SAFE_INTEGER;
      // ---------------------------------------------------- 方案二 end ------------------------------------------------
      for (k = i; k < j; k++) {
        temp = m[i][k] + m[k + 1][j] + getTriangleWeight(i - 1, k, j);
        if (temp < m[i][j]) {
          m[i][j] = temp;
          S[i][j] = k;
        }
      }
    }
  }
}

function printTriangle(i: number, j: number) {
  if (i === j) return;
  printTriangle(i, S[i][j]);
  printTriangle(S[i][j] + 1, j);
  console.log("V%d--V%d--V%d\n", i - 1, S[i][j], j);
}

function printMatrix(m: number[][]) {
  m.forEach((i) => {
    console.log(i.toString());
  });
  console.log("\n");
}

trianglePartition();

// printMatrix(S);
// printMatrix(m);
printTriangle(2, 5);
