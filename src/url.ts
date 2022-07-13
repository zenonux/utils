export const getFilenameByUrl = (url: string) => {
  return url.split("/").pop()?.split("#")[0].split("?")[0];
};

export const getFileExtByUrl = (url: string) => {
  const filename = getFilenameByUrl(url);
  return filename?.split(".").pop();
};

export const getQueryVariable = (variable: string, url?: string) => {
  url = url || window.location.href;
  let query = url.split("?")[1];
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};
