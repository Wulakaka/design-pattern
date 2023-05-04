export default function maxSubSum(arr: number[]): number {
  const { length } = arr;
  if (length === 0) return 0;
  if (length === 1) return Math.max(arr[0], 0);
  // 中间项的索引值
  const center = Math.floor((length - 1) / 2);
  const leftArr: number[] = [],
    rightArr: number[] = [];
  for (let i = 0; i < length; i++) {
    if (i <= center) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  const leftSum = maxSubSum(leftArr);
  const rightSum = maxSubSum(rightArr);

  let leftS = 0,
    leftMax = 0;
  for (let i = center; i >= 0; i--) {
    leftS += arr[i];
    if (leftMax < leftS) {
      leftMax = leftS;
    }
  }
  let rightS = 0,
    rightMax = 0;
  for (let i = center + 1; i < length; i++) {
    rightS += arr[i];
    rightMax < rightS && (rightMax = rightS);
  }
  const sum = leftMax + rightMax;

  return Math.max(leftSum, rightSum, sum);
}

console.log(maxSubSum([-1, 10, -5, 7, -15, 1]));
