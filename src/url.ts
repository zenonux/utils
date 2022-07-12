export const getFilenameByUrl = (url: string) => {
  return url.split("/").pop()?.split("#")[0].split("?")[0];
};
export const getFileExtByUrl = (url: string) => {
  const filename = getFilenameByUrl(url);
  return filename?.split(".").pop();
};
