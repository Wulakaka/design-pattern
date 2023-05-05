export default function matrixChainOrder(p: number[]) {
  const n = p.length;
  const m: number[][] = [];
  // 存储括号顺序
  const s: number[][] = [];
  for (let i = 0; i <= n; i++) {
    s[i] = [];
    for (let j = 0; j <= n; j++) {
      s[i][j] = 0;
    }
  }

  for (let i = 0; i <= n; i++) {
    m[i] = [];
    m[i][i] = 0;
  }
  for (let l = 2; l < n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      const j = i + l - 1;
      // 初始化为最大值
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i; k <= j - 1; k++) {
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;

          s[i][j] = k;
        }
      }
    }
  }
  console.log(m);
  console.log(printOptimalParenthesis(s, 1, n - 1));
  return m[1][n - 1];
}

function printOptimalParenthesis(s: number[][], i: number, j: number): string {
  if (i === j) {
    return `A[${i}]`;
  } else {
    return `(${printOptimalParenthesis(s, i, s[i][j])}${printOptimalParenthesis(s, s[i][j] + 1, j)})`;
  }
}

const p = [10, 100, 5, 50, 1];
console.log(matrixChainOrder(p));
