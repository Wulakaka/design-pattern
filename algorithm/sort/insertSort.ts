/**
 * 插入排序
 * @param arr
 */
export default function insertSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    let j = i - 1;
    // arr[j] 表示目标元素之前的元素
    while (j >= 0 && arr[j] > target) {
      // 向后移动
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = target;
  }
}

const arr = [3, 5, 1, 2, 6];
insertSort(arr);
console.log(arr);
