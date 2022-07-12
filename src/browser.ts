export const getBrowserLanguage = () => {
  return navigator.language.toLowerCase().indexOf("zh") !== -1
    ? "zh_CN"
    : "en-US";
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isDesktop = () => {
  return !isMobile()
};

export const isAndroid=()=>{
  let u = navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
}

export const isIOS=()=>{
  let u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);  
}

export const isWeixin = () => {
  return (
    // @ts-ignore
    navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ===
    "micromessenger"
  );
};

