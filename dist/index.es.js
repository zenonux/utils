const getBrowserLanguage = () => {
  return navigator.language.toLowerCase().indexOf("zh") !== -1 ? "zh_CN" : "en-US";
};
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
const isDesktop = () => {
  return !isMobile();
};
const isAndroid = () => {
  let u = navigator.userAgent;
  return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
};
const isIOS = () => {
  let u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
const isWeixin = () => {
  return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger";
};
const toDate = (input) => {
  if (input instanceof Date)
    return input;
  if (!isNaN(input) || /^\d+$/.test(input))
    return new Date(parseInt(input));
  input = (input || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2");
  return new Date(input);
};
export { getBrowserLanguage, isAndroid, isDesktop, isIOS, isMobile, isWeixin, toDate };
