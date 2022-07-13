export const getBrowserLanguage = () => {
  return navigator.language.toLowerCase().indexOf("zh") !== -1
    ? "zh-CN"
    : "en-US";
};


export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const isDesktop = () => {
  return !isMobile();
};

export const isAndroid = () => {
  return /android/.test(navigator.userAgent.toLowerCase());
};

export const isIOS = () => {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
};

export const isWeixin = () => {
  var ua = navigator.userAgent.toLowerCase();
  // @ts-ignore
  return ua.match(/MicroMessenger/i) == "micromessenger";
};

