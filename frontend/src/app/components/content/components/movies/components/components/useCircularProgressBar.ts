export function useCircularProgressBar(value: number) {
  const percent = Math.trunc(value * 10);
  const result = Math.ceil((100 - percent) * 2.51);


  return { percent, result };
}
