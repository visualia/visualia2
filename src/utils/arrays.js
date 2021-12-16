export function range(from, to, step = 1) {
  const length = Math.floor((to - from) / step) + 1;
  return Array.from({ length }).map((_, i) => from + i * step);
}

export function chunk(arr, length) {
  return Array.from({ length: Math.ceil(arr.length / length) }).map((_, n) =>
    arr.slice(n * length, n * length + length)
  );
}
