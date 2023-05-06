/**
 * 归并排序
 * 平均时间复杂度 O(nlgn)
 * 最好时间复杂度 O(nlgn)
 * 最差时间复杂度 O(nlgn)
 * 空间复杂度 O(n)
 * 稳定
 * 可以归位
 * @param arr
 * @param left
 * @param right
 */
export default function mergeSort(arr: number[], left: number, right: number) {
  if (left >= right) return;
  // 分解
  const center = Math.floor((right + left) / 2);
  // 求解
  mergeSort(arr, left, center);
  mergeSort(arr, center + 1, right);
  // 合并
  merge(arr, left, right, center);
}

function merge(arr: number[], left: number, right: number, center: number) {
  const arrLeft: number[] = [],
    arrRight: number[] = [];
  for (let i = left; i <= right; i++) {
    if (i <= center) {
      arrLeft.push(arr[i]);
    } else {
      arrRight.push(arr[i]);
    }
  }

  const result = mergeTwoArray(arrLeft, arrRight);
  for (let i = left; i <= right; i++) {
    arr[i] = result[i - left];
  }
}

function mergeTwoArray(arr1: number[], arr2: number[]) {
  const arr: number[] = [];
  for (let i = 0, j = 0; ; ) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
    if (i >= arr1.length) {
      for (let k = j; k < arr2.length; k++) {
        arr.push(arr2[k]);
      }
      break;
    }
    if (j >= arr2.length) {
      for (let k = i; k < arr1.length; k++) {
        arr.push(arr1[k]);
      }
      break;
    }
  }

  return arr;
}

const arr = [10, 23, 11, 5, 1, 3, 24, 155, 223, 11, 5];
mergeSort(arr, 0, arr.length - 1);
console.log(arr.toString());
