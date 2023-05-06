/**
 * 插入排序
 * 平均时间复杂度O(n^2^)
 * 最好时间复杂度O(n)
 * 最差时间复杂度O(n^2^)
 * 空间复杂度O(1)
 * 稳定，因为只有插入操作，而没有交换操作
 * 不可以归位
 * @param data{number[]} 待排序数组
 */
export default function insertSort(data: number[]) {
  let target: number;
  for (let i = 1; i < data.length; i++) {
    target = data[i];
    let j = i - 1;
    // data[j] 表示目标元素之前的元素
    while (j >= 0 && data[j] > target) {
      // 向后移动
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = target;
  }
}

const arr = [3, 5, 1, 2, 6];
insertSort(arr);
console.log(arr);
