const checkFileName = (fileName: string, list: string[]) => {
  if (typeof fileName !== "string") return;
  let name = fileName.toLowerCase();
  return list.some((i) => name.endsWith(`.${i}`) === true);
};

export const isExcel = (fileName: string) => {
  return checkFileName(fileName, ["xlsx", "xls"]);
};

export const isImage = (fileName: string) => {
  return checkFileName(fileName, ["png", "jpeg", "jpg", "png", "bmp"]);
};

export const isH5Video = (fileName: string) => {
  return checkFileName(fileName, ["mp4", "webm", "ogg"]);
};

export const isPdf = (fileName: string) => {
  return checkFileName(fileName, ["pdf"]);
};

export const isWord = (fileName: string) => {
  return checkFileName(fileName, ["doc", "docx"]);
};
