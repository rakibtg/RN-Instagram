export const randomNumber = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
}

export const profileDataChunk = (arr, len) => {
  const chunks = [];
  let i = 0;
  while (i < arr.length) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}