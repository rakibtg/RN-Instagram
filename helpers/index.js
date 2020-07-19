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

export const translateToProfileSections = (posts = []) => {
  const sectionData = [
    { title: 'PROFILE_CARD', data: [] },
    { title: 'PHOTO_NAVIGATION', data: profileDataChunk(posts, 3) }
  ];
  return sectionData
}