(function(e,i){typeof exports=="object"&&typeof module!="undefined"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(e=typeof globalThis!="undefined"?globalThis:e||self,i(e.Utils={}))})(this,function(e){"use strict";const i=()=>navigator.language.toLowerCase().indexOf("zh")!==-1?"zh-CN":"en-US",n=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),r=()=>!n(),o=()=>/android/.test(navigator.userAgent.toLowerCase()),s=()=>/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),a=()=>{var t=navigator.userAgent.toLowerCase();return t.match(/MicroMessenger/i)=="micromessenger"},d=t=>t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t));e.getBrowserLanguage=i,e.isAndroid=o,e.isDesktop=r,e.isIOS=s,e.isMobile=n,e.isWeixin=a,e.toDate=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
