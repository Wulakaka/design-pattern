/**
 * 希尔排序
 *
 * 平均时间复杂度O(n^1.3^)
 * 最好时间复杂度O(n)
 * 最差时间复杂度O(n^2^)
 *
 * 不稳定（因为分组之后的交换并不是比较全局的顺序）
 * 不可以归位
 * @param data{number[]} 待排序数组
 */
export default function shellSort(data: number[]) {
  const delta: number[] = [];
  const n = data.length;
  let k = n;
  let i = 0;
  do {
    k = Math.floor(k / 2);
    delta[i++] = k;
  } while (k > 0);

  i = 0;
  let dk: number;
  let t: number;
  let j: number;
  while ((dk = delta[i]) > 0) {
    for (k = delta[i]; k < n; ++k) {
      // 答案上需要这行，但是实际上是不需要的。因为在for循环的判断中，有同样的条件判断
      if (data[k] < data[k - dk]) {
        t = data[k];
        for (j = k - dk; j >= 0 && t < data[j]; j -= dk) {
          data[j + dk] = data[j];
        }
        data[j + dk] = t;
      }
    }
    i++;
  }
}

const arr = [15, 9, 7, 8, 20, -1, 4];
shellSort(arr);
console.log(arr.toString());
