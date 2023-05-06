/**
 * 冒泡排序
 *
 * 由于增加了标志，如果某次排序没有发生过交换，说明已经排好序了，即后面不需要再次排序
 * 所以最好的时间复杂度为 O(n)
 *
 * 平均时间复杂度 O(n^2^)
 * 最差时间复杂度 O(n^2^)
 * 最好时间复杂度 O(n)
 * 空间复杂度 O(1)
 *
 * 稳定
 * 可以归位
 * @param data
 */
export default function bubbleSort(data: number[]) {
  for (let i = 0; i < data.length; i++) {
    let flag = false;
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
}
const arr = [3, 5, 1, 2, 6, 4];
bubbleSort(arr);
console.log(arr.toString());
