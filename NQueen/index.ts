const N = 4;
const q: number[] = Array(N + 1).fill(0);

// 检查是否在同一列或同一斜线上
function check(j: number) {
  for (let i = 1; i < j; i++) {
    if (q[i] === q[j] || Math.abs(i - j) === Math.abs(q[i] - q[j])) {
      return 0;
    }
  }
  return 1;
}

function queen() {
  // 方案数
  let answer = 0;
  // 表示正在摆放第j个皇后
  let j = 1;
  while (j >= 1) {
    // 让第j个皇后向后移动
    q[j] = q[j] + 1;

    // 判断第j个皇后的位置是否合法
    while (q[j] <= N && !check(j)) {
      // 位置不合法需要向后移动
      q[j] = q[j] + 1;
    }

    if (q[j] <= N) {
      // 表示位置找到合法的摆放位置

      if (j === N) {
        // 表示找到了一组解
        answer++;
        console.log("方案%d:", answer, q.slice(1).toString());
      } else {
        // 需要继续摆放下一个皇后
        j++;
      }
    } else {
      // 还原第j个皇后的位置
      q[j] = 0;
      // 回溯
      j--;
    }
  }
}

queen();
