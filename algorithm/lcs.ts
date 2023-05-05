export default function lcs(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  const l: number[][] = [];
  const answers: string[] = [];
  let answerI = 0,
    answerJ = 0;
  for (let i = 0; i <= m; i++) {
    l.push([]);
  }

  let i, j;
  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else {
        const a = str1[i - 1];
        const b = str2[j - 1];
        if (a === b) {
          l[i][j] = l[i - 1][j - 1] + 1;
          if (answerI < i && answerJ < j) {
            answerI = Math.max(i, answerI);
            answerJ = Math.max(j, answerJ);
            answers.push(a);
          }
        } else {
          l[i][j] = Math.max(l[i - 1][j], l[i][j - 1]);
        }
      }
    }
  }

  console.log(answers);

  return l[m][n];
}

console.log(lcs("acbaed", "abcadf"));
