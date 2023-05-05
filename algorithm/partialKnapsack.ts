export default function partialKnapsack(W: number, N: number, w: number[], v: number[]) {
  w = w.slice();
  v = v.slice();
  const vw: number[] = [];
  for (let i = 0; i < N; i++) {
    vw.push(v[i] / w[i]);
  }
  mergeSort(w, v, vw);

  console.log(v, w, vw);

  let temp_w = W;
  let answer = 0;
  let i = 0;
  const answers = new Array(N).fill(0);
  for (; i < N; i++) {
    if (temp_w > w[i]) {
      temp_w -= w[i];
      answer += v[i];
      answers[i] = 1;
    } else {
      break;
    }
  }
  if (temp_w > 0) {
    answer += vw[i] * temp_w;
    answers[i] = temp_w / w[i];
  }

  console.log(answer, answers);
}

function mergeSort(w: number[], v: number[], vw: number[], l = 0, r = vw.length - 1) {
  if (l >= r) return;
  const center = Math.floor((l + r) / 2);
  mergeSort(w, v, vw, l, center);
  mergeSort(w, v, vw, center + 1, r);

  merge(w, v, vw, l, center, r);
}

function merge(w: number[], v: number[], vw: number[], l: number, center: number, r: number) {
  const ls = [];
  const rs = [];
  for (let i = l; i <= r; i++) {
    i <= center ? ls.push(vw[i]) : rs.push(vw[i]);
  }

  const temp_w = [];
  const temp_v = [];
  const temp_vw = [];
  let i = 0;
  let j = 0;
  while (i < ls.length && j < rs.length) {
    if (ls[i] > rs[j]) {
      temp_vw.push(ls[i]);
      temp_v.push(v[l + i]);
      temp_w.push(w[l + i]);
      i++;
    } else {
      temp_vw.push(rs[j]);
      temp_v.push(v[center + 1 + j]);
      temp_w.push(w[center + 1 + j]);
      j++;
    }
  }
  for (; i < ls.length; i++) {
    temp_vw.push(ls[i]);
    temp_v.push(v[l + i]);
    temp_w.push(w[l + i]);
  }
  for (; j < rs.length; j++) {
    temp_vw.push(rs[j]);
    temp_v.push(v[center + 1 + j]);
    temp_w.push(w[center + 1 + j]);
  }

  for (let i = l; i <= r; i++) {
    w[i] = temp_w[i - l];
    v[i] = temp_v[i - l];
    vw[i] = temp_vw[i - l];
  }
}

const w = [30, 10, 20, 50, 40];
const v = [65, 20, 30, 60, 40];

partialKnapsack(100, 5, w, v);
