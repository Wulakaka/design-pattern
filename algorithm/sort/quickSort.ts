/**
 * 快速排序
 *
 * 附设两个位置指示变量i和j，
 * 他们的初始值分别指向序列的第一个记录和最后一个记录。
 * 设枢轴记录的关键字为pivot，
 * 则首先从j所指示的位置起向前搜素，
 * 找到第一个关键字小于pivot的记录时将该记录向前移到i指示的位置，
 * 然后从i所指示的位置起向后搜索，
 * 找到第一个关键字大于pivot的记录时将该记录向后移到j指示的位置，
 * 重复该过程直到i与j相等为止。
 *
 * 平均时间复杂度 O(nlgn)
 * 最好时间复杂度 O(nlgn)
 * 最差时间复杂度 O(n^2^)
 * 空间复杂度 O(lgn)
 *
 * 不稳定
 * 可以归位
 * @param data{number[]} 待排序数组
 * @param l{number} 左边界（包含）
 * @param r{number} 右边界（包含）
 */
export default function quickSort(data: number[], l = 0, r = data.length - 1) {
  if (l >= r) return;
  let i = l,
    j = r;
  // 枢轴记录
  const pivot = data[l];
  while (i < j) {
    // 必须要有 i < j 的判断
    while (pivot < data[j]) {
      j--;
    }
    data[i] = data[j];
    // 必须要有 i < j 的判断，不然会出现越界的情况
    while (i < j && pivot > data[i]) {
      i++;
    }
    data[j] = data[i];
  }
  data[i] = pivot;

  quickSort(data, l, i - 1);
  quickSort(data, i + 1, r);
}

const arr = [3, 5, 1, 2, 6, 4];
quickSort(arr);
console.log(arr.toString());
