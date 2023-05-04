export default function main(N: number) {
  const check = (j: number) => {
    for (let i = 1; i < j; i++) {
      if (q[i] === q[j] || Math.abs(q[i] - q[j]) === Math.abs(i - j)) {
        return false;
      }
    }
    return true;
  };
  const q = new Array(N + 1).fill(0);
  let answers = 0;

  // j 表示第j个皇后，从1开始；q[j]表示皇后的位置
  function queen(j: number) {
    for (let i = 1; i <= N; i++) {
      q[j] = i;
      if (q[j] <= N && check(j)) {
        if (j === N) {
          answers++;
          console.log("方案%d：%s", answers, q.slice(1).toString());
        } else {
          queen(j + 1);
        }
      }
    }
  }

  queen(1);
}

main(4);
