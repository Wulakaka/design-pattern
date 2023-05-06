/**
 * 选择排序
 * 通过n-i(1<=i<=n)在次关键字之间的比较，
 * 从n-i+1个记录中选出关键字最小的记录，并和第i个记录进行交换，
 * 当i等于n时所有记录有序排列
 * 平均时间复杂度O(n^2^)
 * 最好时间复杂度O(n^2^)
 * 最坏时间复杂度O(n^2^)
 * 空间复杂度O(1)
 * 不稳定，因为有交换操作
 * 可以归位
 * @param data
 */
export default function selectionSort(data: number[]) {
  let min;
  for (let i = 0; i < data.length; i++) {
    min = i;
    for (let j = i; j < data.length; j++) {
      if (data[j] < data[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [data[min], data[i]] = [data[i], data[min]];
    }
  }
}

const arr = [15, 9, 7, 8, 20, -1, 4];
selectionSort(arr);
console.log(arr.toString());
