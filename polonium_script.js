!function(){"use strict";function l(e){var n=r();return n[e]=n[e]||function(e){return{id:e,plugins:{},getPlugins:function(){var e=[];for(var n in this.plugins)e.push(this.plugins[n]);return e},autoTrackingInitialized:!1}}(e),n[e]}function i(e,n){var t=l(e);return t.plugins[n]=t.plugins[n]||{},t.plugins[n]}function r(){var e=q();return e.r=e.r||{},e.r}W()&&(window.ldfdr.registerTracker=function(e,n,t,r,o,i,a){var c=l(e);return c.track=n,c.identify=t,c.pageview=r,c.getClientId=o,c.acceptCookie=i,c.rejectCookie=a,c},window.ldfdr.setTrackerOption=function(e,n,t,r){l(e)[n]=void 0!==r?r:t},window.ldfdr.registerPlugin=function(e,n,t){var r=l(e),o=i(e,n);o.init=function(){try{t()}catch(e){console.error("Error during plugin initialization",o,e)}},r.pluginsInitialized&&o.init()},window.ldfdr.registerPluginConfig=function(e,n,t,r){i(e,n).config=void 0!==r?r:t});var e,n,t,o,p="ywVkO4XDqNO4Z6Bj",a="2.45.3",c="_lfa_debug_settings",u=["cookieDomain","enableAutoTracking","trackingCookieDurationDays"];if("undefined"!=typeof window&&void 0!==window.ldfdr){window.ldfdr=window.ldfdr||{},window.ldfdr.cfg=window.ldfdr.cfg||{};var d=function(){var n=se(c)||"{}";try{return console.log("Found override settings",n),JSON.parse(n)}catch(e){return console.warn("Could not parse stored override settings",n),{}}}();e=window.ldfdr,n=p,t=a,o=d,e.setTrackerOption(n,"lfaCookieEnabled",true,o.enableCookie),e.setTrackerOption(n,"consentManagementEnabled",false,o.enableCm),e.setTrackerOption(n,"useSendBeaconApi",false,o.useBeacon),e.setTrackerOption(n,"autoTrackingMode","default",o.atMode),e.setTrackerOption(n,"foreignCookieSettings",{"hubspot":"^hubspotutk$","intercom":"^intercom-id-.*"}),e.setTrackerOption(n,"crossDomainLinking",{"enabled":false}),e.setTrackerOption(n,"useDualStackEndpoint",false,o.useDs),e.setTrackerOption(n,"trackingCookieDurationDays",730),e.setTrackerOption(n,"version",t),e.registerPluginConfig(n,"file-downloads",{filesEnabled: true,filesToMatch:/(.pdf|(.docx))(\?|$)/}),e.registerPluginConfig(n,"form-tracking",{formTrackingMode:"disabled",fields:[],excluded:[]},o.trackForms),e.registerPluginConfig(n,"yt-playback",{ytPlaybackTrackingEnabled: true},o.trackYt),e.registerPluginConfig(n,"intercom-tracking",{intercomTrackingEnabled: true},o.trackIntercom),e.registerPluginConfig(n,"discover",{jsConnectorConfigs:[]}),e.registerPluginConfig(n,"spa-tracking",{}),e.registerPluginConfig(n,"ga-connector",{gaConnectorSettings:[]}),function(e,n){e._q=e._q||[];for(var t=0;t<e._q.length;t++){var r=e._q[t];switch(r[0]){case"cfg":if(4!=r.length){console.warn("* [leadfeeder] invalid 'cfg' command",r);break}var o=r[1];if(-1==u.indexOf(o)){console.warn("* [leadfeeder] unsupported 'cfg' command",r);break}r[3]===n&&e.setTrackerOption(n,o,r[2])}}}(window.ldfdr,p)}var s="__discoverLoadEventEmitted",f={get:function(e){return window[e]},set:function(e,n){window[n]=e},clear:function(e){this.set(null,e)}};function g(n,t){if(!n[s])return function(n,e,t){var r=""===e?cn:e;return r=function(e){return e===cn||e[e.length-1]!==cn?e:e.slice(0,-1)}(r),t.some(function(e){return function(e,n,t){var r=function(e){return e.split(/\/(.*)/).filter(function(e){return""!==e})}(t),o=r[0],i=cn+(2<=r.length?r[1]:"");return o===e&&(i===n||function(e,n){if(0<=n.indexOf("*")&&0===e.indexOf(n.replace("/*","").replace("*","")))return!0;return n===cn}(n,i))}(n,r,e)})}(window.location.hostname,window.location.pathname,n.paths)?void P(n.api_key,function(e){!function(e,n){200!==e.meta.status&&404!==e.meta.status||f.set(e,n)}(e,n.js_object_name),function(n){window.dataLayer=window.dataLayer||[],window.dataLayer.some(function(e){return e.event===n})||(window[s]=!0,console.log("* [leadfeeder][js-connector] Pushing datalayer event",n),window.dataLayer.push({event:n}))}(n.event_name),n[s]=!0,t()}):(console.log("* [leadfeeder][js-connector] Page not permitted for connector"),t());console.log("* [leadfeeder][js-connector] Event already emitted")}W()&&q().registerPlugin(p,"discover",function(){!function(e){e.jsConnectorConfigs&&0!==e.jsConnectorConfigs.length&&sn(e.jsConnectorConfigs.map(function(n){return function(e){g(n,e)}}),0)}(q().getTracker(p).plugins.discover.config)}),W()&&q().registerPlugin(p,"file-downloads",function(){var t=q().getTracker(p),o=t.plugins["file-downloads"].config;function i(e){function n(){e.removeEventListener("click",n),S(),t.track(function(e){var n=function(e){var n=e.replace(/https?\:\/\//,"").split("/"),t=n[n.length-1].replace(/[\?&].*/,"");return 1!=n.length&&t?t:null}(e.href),t=window.location.href;return{eventType:"file-download",properties:{url:function(e,n){return"/"==e.href.charAt(0)?function(e){return"/"==e.charAt(e.length-1)?e.substr(0,e.length-1):e}(n)+e.href:e.href}(e,t),filename:n},pageUrl:t,pageTitle:n}}(e))}e.addEventListener("click",n)}function e(){for(var e=document.getElementsByTagName("a"),n=0;n<e.length;n++){var t=e[n];if(vn(t.getAttribute("href")).match(o.filesToMatch)){var r="data-lf-fd-inspected-"+p;if(t.getAttribute(r))continue;t.setAttribute(r,"true"),i(t)}}}o.filesEnabled&&(e(),kn(e))}),W()&&q().registerPlugin(p,"form-tracking",function(){var i=500,l=["button","hidden","image","password","reset","submit"],a=0,c=q().getTracker(p),u=function(e){var n=(e.fields||[]).map(function(e){return{nameRegex:new RegExp(e.nameRegex,"i"),type:e.type,lfProperty:e.lfProperty}}),t=(e.excluded||[]).map(function(e){return{pageUrl:new RegExp(e.pageUrl,"i")}});return{formTrackingMode:e.formTrackingMode,fields:n,excluded:t}}(c.plugins["form-tracking"].config);function e(e){var n=e.target;console.log("* [leadfeeder][form-tracking] Form's submit handler called ",p,n,e),r(n)}function t(e){var n=e.target;if(function(e){var n=e.type,t=e.parentElement,r=t.type,o=e.tagName.toLowerCase(),i=t.tagName.toLowerCase();return"submit"===n||"button"===n||"button"===o||"submit"===r||"button"===r||"button"===i}(n)){var t=n.form||n.closest("form");t&&(console.log("* [leadfeeder][form-tracking] Submit button clicked",p,t,n),r(t))}}function r(e){if(a+i>=(new Date).getTime())console.log("* [leadfeeder][form-tracking] Skipping duplicate event");else{var n=function(e){for(var n=e.querySelectorAll("input"),t=0;t<n.length;t++){var r=n[t],o=r.value;if(void 0,("text"===(i=r.type)||"email"===i||!i)&&wn(o))return o}var i;return null}(e),t=function(e){for(var n={},t=e.elements,r=u.fields?u.fields.filter(function(e){return!!e.lfProperty}):[],o=0;o<t.length;o++){var i=t[o],a=i.name;if(a&&!(0<=l.indexOf(i.type))&&(n[a]={name:a,type:i.type},d(e,i))){n[a].value=i.value;var c=s(i,r);c&&(n[a].lfProperty=c)}}return un(n)}(e),r=!n,o=!t||0==t.length;if(r&&o)console.log("* [leadfeeder][form-tracking] Skipping event without input fields or email");else{a=(new Date).getTime(),console.log("* [leadfeeder][form-tracking] submitting event",p),S();try{c.track(function(e,n,t){var r={formTrackingMode:u.formTrackingMode},o=e.getAttribute("id"),i=e.getAttribute("class"),a=e.getAttribute("action");n&&(r.email=n);o&&(r.formId=o);i&&(r.formClass=i);a&&(r.formAction=a);t&&(r.inputFields=t);return{eventType:"form-submit",properties:r}}(e,n,t),function(){console.log("* [leadfeeder][form-tracking] track callback called",p)})}catch(e){console.log("* [leadfeeder][form-tracking] error happened when tracking",e)}}}}function d(e,n){switch(u.formTrackingMode){case"configured_fields":return u.fields.some(function(e){return o(n,e)});case"all_but_excluded":var t=window.location.href;return!u.excluded.some(function(e){return t.match(e.pageUrl)});default:return!1}}function o(e,n){return(!n.type||n.type===e.type)&&e.name.match(n.nameRegex)}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];if(o(e,r))return r.lfProperty}return null}function f(n){try{if(!n.contentDocument)return;n.contentDocument.addEventListener("submit",e),n.contentDocument.addEventListener("click",t,!0)}catch(e){console.log("* [leadfeeder][form-tracking] error accessing iframe.contentDocument",e,n)}}function n(){console.log("* [leadfeeder][form-tracking] Setting up iframes for form tracking",p);for(var e=document.getElementsByTagName("iframe"),n=0;n<e.length;n++)g(e[n])}function g(e){var n="data-lf-form-tracking-inspected-"+p;e.getAttribute(n)||(e.setAttribute(n,"true"),console.log("* [leadfeeder][form-tracking] iframe initialized",e,p),f(e),e.addEventListener("load",function(){f(e)}))}switch(u.formTrackingMode){case"disabled":return void console.log("* [leadfeeder][form-tracking] form plugin is disabled",p);case"metadata":case"configured_fields":case"all_but_excluded":return document.addEventListener("submit",e),document.addEventListener("click",t,!0),n(),kn(n),void console.log("* [leadfeeder][form-tracking] initialized form plugin",p,u.formTrackingMode);default:return void console.warn("Unsupported tracking mode:",u.formTrackingMode)}});var v=null,m="__gaConnectorEventsEmitted";function w(e,n,t,r){var o=j(window),i=function(r,e){var o={};return e.forEach(function(e){var n=function(e,n){var t=n.split(".");for(;t.length&&(e=e[t.shift()]););return e}(r,e.attribute),t=e.dimension;o[t]=n||"(not set)"}),un(o).some(function(e){return"(not set)"!==e})?o:null}(r.data,t);if(null!==i){console.log("* [leadfeeder][ga-connector] Pushing dimensions to",n);var a=e.get("name");o(a+".set",i),o(a+".send",{hitType:"event",eventCategory:"LFvisitorInfo",eventAction:"LFcompanyData",nonInteraction:!0}),-1===window[m].indexOf(n)&&window[m].push(n)}else console.log("* [leadfeeder][ga-connector] No dimensions to send for",n)}function k(t,r){!function(e,n){var t=j(window),r=e.toLowerCase();t(function(){if(void 0===t.getAll)return console.log("* [leadfeeder][ga-connector] getAll() is not defined. Exiting."),n(null);var e=t.getAll().filter(function(e){return e.get("trackingId").toLowerCase()==r})[0];n(e)})}(t.ga_id,function(n){if(!n)return console.log("* [leadfeeder][ga-connector] No tracker detected",t.ga_id),r();P(t.api_key,function(e){w(n,t.ga_id,t.mappings,e),r()})})}function h(e){e.gaConnectorSettings&&0!==e.gaConnectorSettings.length?(console.log("* [leadfeeder][ga-connector] Waiting for GA to be ready"),v=setInterval(function(){!function(e){j(window)&&(clearInterval(v),console.log("* [leadfeeder][ga-connector] GA has been detected. Running connectors"),sn(e.map(function(n){return function(e){k(n,e)}}),0))}(e.gaConnectorSettings)},300),setTimeout(function(){clearInterval(v)},1e4)):console.log("* [leadfeeder][ga-connector] No GA connector settings set. Exiting.")}window[m]=[],W()&&q().registerPlugin(p,"ga-connector",function(){h(q().getTracker(p).plugins["ga-connector"].config)}),W()&&q().registerPlugin(p,"intercom-tracking",function(){var e=q().getTracker(p);e.plugins["intercom-tracking"].config.intercomTrackingEnabled&&function(e,n,t,r){var o;n=n||100,t=t||1.5,r=r||15e3;var i=setTimeout(function(){clearInterval(o)},r),a=function(){clearInterval(o),e()?clearTimeout(i):(n*=t,o=setInterval(a,n))};o=setInterval(a,n)}(function(){return!(void 0===window.Intercom||!window.Intercom.booted)&&(console.log("* [leadfeeder][intercom-tracking] Updating intercom for tracking",p),window.Intercom("update",{lfClientId:e.getClientId()}),!0)})});var y=null,b=null;function T(n,t,r){setTimeout(function(){r&&(y=b);var e={pageUrl:b=t};y&&(e.referrer=y),console.log("* [leadfeeder][spa] location.href change",e),n.pageview(e)},0)}function C(e){window.history?(function(o,i){var a=i.pushState;i.pushState=function(e,n,t){console.log("* [leadfeeder][spa] history push state",n,t);var r=a.apply(i,arguments);return T(o,window.location.href,!0),r};var c=i.replaceState;i.replaceState=function(e,n,t){console.log("* [leadfeeder][spa] history replace state",n,t);var r=c.apply(i,arguments);return T(o,window.location.href,!1),r}}(e,window.history),window.addEventListener("popstate",function(){console.log("* [leadfeeder][spa] popstate change",window.location.href),T(e,window.location.href,!0)}),window.addEventListener("hashchange",function(){console.log("* [leadfeeder][spa] hash change",window.location.href),T(e,window.location.href,!0)})):console.warn("* [leadfeeder][spa] history API is not available")}W()&&q().registerPlugin(p,"spa-tracking",function(){!function(e){switch(b=window.location.href,console.log("* [leadfeeder][spa] Set up spa auto tracking",e.autoTrackingMode),e.autoTrackingMode){case"spa":C(e)}}(q().getTracker(p))}),W()&&q().registerPlugin(p,"yt-playback",function(){var i=q().getTracker(p);if(i.plugins["yt-playback"].config.ytPlaybackTrackingEnabled&&window.postMessage){var a={},n={},c=!1,l=0;e(),kn(e)}function e(){var e=document.getElementsByTagName("iframe");if(e.length){!function(){if(c)return;console.log("* [leadfeeder][yt-playback] Initializing main message handler"),window.addEventListener("message",function(e){-1!==["https://www.youtube.com","https://www.youtube-nocookie.com"].indexOf(e.origin)&&void 0!==e.data&&function(e){var n;try{n=JSON.parse(e.data)}catch(e){return console.warn("* [leadfeeder][yt-playback] Could not parse YT data",e.data)}var t=function(e,n){if(a[e])return a[e];for(var t=document.getElementsByTagName("iframe"),r=0;r<t.length;r++){var o=t[r];if(o.contentWindow===n.source||o.contentDocument&&o.contentDocument.defaultView===n.source)return a[e]=o}return null}(n.id,e);if(null===t)return console.warn("* [leadfeeder][yt-playback] Could not find a registered iframe",n);switch(n.event){case"initialDelivery":!function(e,n){var t=s(n.src);if(console.log("* [leadfeeder][yt-playback] iframe communication initialized",e,t),!e.info||!e.info.videoData||t.videoData)return;t.videoData=e.info.videoData}(n,t);break;case"onStateChange":!function(e,n){var t=s(n.src);if(console.log("* [leadfeeder][yt-playback] Received onStateChange event",e,t),-1!==e.info)return;if(t.tracked)return console.log("* [leadfeeder][yt-playback] Event already tracked",t);t.tracked=!0;var r=function(e){return"https://www.youtube.com/watch?v="+f(e)}(n);console.log("* [leadfeeder][yt-playback] Sending video-start event",r,t),i.track({eventType:"video-start",properties:{videoUrl:r,videoTitle:function(e){return e?e.title:void 0}(t.videoData)}})}(n,t)}}(e)}),c=!0}();for(var n=0;n<e.length;n++){var t=e[n],r="data-lf-yt-playback-inspected-"+p;if(!t.getAttribute(r)){t.setAttribute(r,"true");var o=++l+1e3;d(t,o),t.addEventListener("load",u(t,o))}}}}function u(e,n){return function(){console.log("* [leadfeeder][yt-playback] initial load handler.",n,e.src,e.id),d(e,n)}}function d(e,n){if(console.log("* [leadfeeder][yt-playback] setupIframe",n,e.src,e.id),function(e){return function(e){return gn(e.src,"https://www.youtube.com/embed/")||gn(e.src,"https://www.youtube-nocookie.com/embed/")}(e)&&function(e){return!!f(e)}(e)&&!function(e){return-1!==e.src.indexOf("enablejsapi=0")}(e)&&!function(e){return-1!==e.src.indexOf("autoplay=1")}(e)}(e))return function(e){return-1===e.src.indexOf("enablejsapi")}(e)?(console.log("* [leadfeeder][yt-playback] Enabling JS API and skipping",n,e.src,e.id),function(e){var n=-1===e.src.indexOf("?")?"?":"&";n+="enablejsapi=1",n+="&origin="+window.location.origin,e.src=e.src+n}(e)):void function(e,n){if("undefined"!=typeof YT&&("function"!=typeof YT.get||!e.id||void 0!==YT.get(e.id)))return console.log("* [leadfeeder][yt-playback] do not setup iframe listener as iframe has an YT player",n,e.src,e.id);console.log("* [leadfeeder][yt-playback] register iframe listener via postMessage",n,e.src,e.id),t(a[n]=e,{event:"listening",id:n,channel:"widget"}),t(e,{event:"command",func:"addEventListener",args:["onStateChange"],id:n,channel:"widget"})}(e,n);console.log("* [leadfeeder][yt-playback] Not eligible youtube iframe. Skipping.",n,e.src,e.id)}function s(e){return n[e]||(n[e]={src:e,tracked:!1,videoData:null}),n[e]}function f(e){return e.src.split("/")[4].split("?")[0]}function t(e,n){var t=JSON.stringify(n);console.log("* [leadfeeder][yt-playback] sending message",e.src,e.id,t),e.contentWindow.postMessage(t,"*")}});var I=250;function S(){!function(e){q().suppressUnloadUntil=e}((new Date).getTime()+I)}!W()||"suppressUnloadUntil"in q()||(q().suppressUnloadUntil=0,window.addEventListener("beforeunload",function(){var e=new Date,n=q().suppressUnloadUntil;if(n<e.getTime())console.log("* [leadfeeder][before-unload] no pending requests");else{console.log("* [leadfeeder][before-unload] waiting for pending requests",n-e.getTime());for(;n>=e.getTime();0)e=new Date}},!1));var E,_="_lfa",O=5;function A(e){e.crossDomainLinking.enabled&&e.lfaCookieEnabled&&(E=window.location.href,document.addEventListener("mousedown",function(e){!function(e){var n=function(e){var n,t=0;do{if(x(e))return e;n=e.parentNode,n=(e=n)?e.parentNode:null,t++}while(null!==n&&t<100);return null}(e);if(!n)return;if(!function(e){var n=e.getAttribute("href");return!!n&&(!!tn(n=String(n))&&function(e,n,t){if(L(e,n))return!1;for(var r=0;r<t.length;r++)if(!L(n,t[r])&&L(e,t[r]))return!0;return!1}(e.hostname,document.location.hostname,Oe().crossDomainLinking.allowedDomains))}(n))return;!function(e){var n=e.getAttribute("href");e.setAttribute("href",function(e){e=en(e,_);var n=function(){var e=Oe().getClientId(),n=String(D());return e+"-"+n}();return Ze(e,_,n)}(n))}(n)}(e.target)}))}function N(){if(Oe().crossDomainLinking.enabled)return function(e){var n=nn(e,_);if(!n)return;var t=function(e){if(47!==e.length||!/^LF\d\.\d\.[0-9a-z]{16}\.\d{13}-\d{10}$/.test(e))return void console.log("* [leadfeeder][cross-domain-linking] _lfa URL param has invalid format",e);var n=e.split("-"),t=n[0],r=parseInt(n[1]),o=D();if(Math.abs(o-r)>O)return void console.log("* [leadfeeder][cross-domain-linking] Timestamp is not valid.","Timestamp from URL:",r,"Current timestamp:",o);return t}(n=String(n));return t?(console.log("* [leadfeeder][cross-domain-linking] Using client Id from URL param",t),t):void 0}(E)}function D(){return Math.floor((new Date).getTime()/1e3)}function L(e,n){e=e.toLowerCase(),n=n.toLowerCase();for(var t=e.split("."),r=n.split("."),o=1;o<=r.length;o++)if(r[r.length-o]!==t[t.length-o])return!1;return!0}function x(e){if(!e)return!1;var n=String(e.nodeName).toLowerCase();return-1!==["a","area"].indexOf(n)}var R={key:"__lf_discover",softRefresh:18e5,ttl:864e6,storedAt:null,get:function(){if(he()){var e=window.localStorage.getItem(this.key);if(null!==e){var n=null;try{n=JSON.parse(e),this.storedAt=n.storedAt,delete n.storedAt}catch(e){if(e instanceof SyntaxError)return;throw e}return n}}},set:function(e){he()&&(e.storedAt=Date.now(),window.localStorage.setItem(this.key,JSON.stringify(e)),delete e.storedAt)},clear:function(){he()&&(this.storedAt=null,window.localStorage.removeItem(this.key))},isExpired:function(){return null===this.storedAt||void 0===this.storedAt||Date.now()>=this.storedAt+this.ttl},isSoftExpired:function(){return null===this.storedAt||void 0===this.storedAt||Date.now()>=this.storedAt+this.softRefresh}};function M(e){200!==e.meta.status&&404!==e.meta.status||R.set(e)}function U(e,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onload=function(){if(200===this.status){var e=JSON.parse(this.response);n(e)}},t.send()}function P(e,n){var t="https://cs.lf-discover.com/companies/?api_key="+e,r=nn(window.location.href,"_lf_discover_demo");""!==r&&(t=Ze(t,"demo",r));var o=R.get();""!==r?U(t,function(e){n(e)}):null==o?U(t,function(e){M(e),n(e)}):R.isExpired()?(R.clear(),U(t,function(e){M(e),n(e)})):R.isSoftExpired()?(n(o),U(t,function(e){M(e)})):n(o)}function j(e,n){return(n=e.GoogleAnalyticsObject||"ga")&&e[n]?e[n]:null}function J(e){return e._gat||null}function G(e,n){for(var t=function(e){return e?"function"!=typeof e._getTrackers?(console.info("* [leadfeeder] Legacy GoogleAnalyticsObject not found"),[]):e._getTrackers():[]}(J(e)),r=0;r<t.length;r++)z(t[r]._getAccount(),n.trackingIds,!0)}function F(e,n){for(var t=function(e){return e?"function"!=typeof e.getAll?(console.info("* [leadfeeder] GoogleAnalyticsObject not found"),[]):e.getAll():[]}(j(e)),r=0;r<t.length;r++)z(t[r].get("clientId"),n.clientIds),z(t[r].get("trackingId"),n.trackingIds)}function z(e,n,t){void 0!==e&&-1===n.indexOf(e)&&(t&&"object"==typeof e&&"string"==typeof e.vtp_trackingId?n.push(e.vtp_trackingId):n.push(e))}function B(){var e={clientIds:[],trackingIds:[]};if(null!==j(window)?F(window,e):G(window,e),!e.clientIds.length){var n=function(){var e=se("_ga");if(e){var n=e.split(".");if(!(n.length<2))return n[n.length-2]+"."+n[n.length-1]}}();n&&e.clientIds.push(n)}return e}function q(){return"undefined"==typeof window?null:window.ldfdr}function W(){return"undefined"!=typeof window&&void 0!==window.ldfdr}function Y(n){var e=un(r());return ln(n)?e.map(function(e){return n(e)}):e}window.ldfdr.getTracker=function(e,n){var t=r()[e]||null;return ln(n)?n(t):t},window.ldfdr.getAll=Y,window.ldfdr.track=function(n){Y(function(e){e.track(n)})},window.ldfdr.identify=function(n){Y(function(e){e.identify(n)})},window.ldfdr.pageview=function(n){Y(function(e){e.pageview(n)})},window.ldfdr.acceptCookie=function(n){return Y(function(e){return e.acceptCookie(n)}).some(function(e){return!0===e})},window.ldfdr.rejectCookie=function(n){return Y(function(e){return e.rejectCookie(n)}).some(function(e){return!0===e})},window.ldfdr.setDebugSettings=function(e){!function(e){oe(c,JSON.stringify(e),36e5)}(e)};var K,$="none",X="basic",H="all",V=[$,X,H],Q="__lfaCmClientId",Z="_lfa",ee="LF1.1",ne="_lfa_consent";function te(){ce(le()),ce(Z),re(Z),ce(ne),re(ne)}function re(e){if(se(e)){var n=window.ldfdr.cfg.cookieDomain;if(n)me(e,n);else for(var t=pe().reverse(),r=0;r<t.length;r++){if(me(e,n=t[r]),!se(e))return void console.log("* [leadfeeder][storage] Deleted cookie for domain",n);console.warn("* [leadfeeder][storage] Failed to delete cookie for domain",n)}}}function oe(e,n,t){var r=window.ldfdr.cfg.cookieDomain||K;if(r)we(e,n,t,"/",r);else for(var o=pe(),i=0;i<o.length;i++){if(we(e,n,t,"/",r=o[i]),ie(r)&&se(e)===n)return console.log("* [leadfeeder][storage] Stored cookie for domain",r),void(K=r);console.warn("* [leadfeeder][storage] Failed to store cookie for domain",r)}}function ie(e){var n="_lfa_test_cookie_stored",t=(new Date).getTime().toString()+"-"+Math.random().toString();we(n,t,1e3,"/",e);var r=se(n)===t;return me(n,e),r}function ae(e,n,t){if(oe(e,n,t),he()){window.localStorage.setItem(e,n);var r=new Date;r.setTime(r.getTime()+t),window.localStorage.setItem(le(),r.toISOString())}}function ce(e){he()&&window.localStorage.removeItem(e)}function le(){return Z+"_expiry"}function ue(){return function(){var e=se(Z);if(!e)return;if(!gn(e,ee)){var n=function(e){var n;try{n=function(e){if(!e)return 0;var n=function(n){try{return decodeURIComponent(window.atob(n).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(e){return console.warn("* [leadfeeder][utils] can't base64 decode: "+n),0}}(e);return n?JSON.parse(n):0}(e)}catch(e){return console.warn("* [leadfeeder][storage] Error while trying to read deprecated cookie",e),0}if(!n)return 0;var t=un(n)[0];return console.log("* [leadfeeder][storage] Found old-style cookie (clientId per scriptId). Returning first clientId",t),t}(e);if(n)return n}return e}()||function(){if(!he())return 0;var e=window.localStorage.getItem(Z);if(null==e)return 0;var n=window.localStorage.getItem(le());null!=n&&(new Date).toISOString()>n&&(e=0);return e}()}function de(){var e=se(ne);return!e&&he()&&(e=window.localStorage.getItem(ne)),e?"true"===e?H:-1==V.indexOf(e)?(console.warn("* [tracking][cookie] invalid stored user consent",e),null):e:null}function se(e){var n=new RegExp("(^|;)[ ]*"+e+"=([^;]*)").exec(document.cookie);return n?window.decodeURIComponent(n[2]):0}function fe(e,n){e&&gn(e,ee)?console.log("* [leadfeeder][storage] client id updated, value %s",e):(e=ve(dn()),console.log("* [leadfeeder][storage] new client id saved, value %s",e));return ae(Z,e,n),e}function ge(e,n){return-1==V.indexOf(e)?(console.warn("* [leadfeeder] invalid user consent level",e),de()):(ae(ne,e,n),e)}function pe(e){var n=e||document.location.hostname,t=(n=0===n.indexOf("www.")?n.substring(4):n).split(".");if(4===t.length){var r=t[t.length-1];if(parseInt(r,10)==r)return["none"]}for(var o=[],i=t.length-2;0<=i;i--)o.push(t.slice(i).join("."));return o.push("none"),o}function ve(e){return ee+"."+e+"."+(new Date).getTime()}function me(e,n){we(e,"",-3600,"/",n)}function we(e,n,t,r,o,i){var a;t&&(a=new Date).setTime(a.getTime()+t),document.cookie=e+"="+window.encodeURIComponent(n)+(t?";expires="+a.toGMTString():"")+";path="+(r||"/")+(o&&"none"!==o?";domain="+o:"")+(i?";secure":"")+";SameSite=Lax"}function ke(){return ie(null)}function he(){try{return!!window.localStorage}catch(e){return console.warn("* [leadfeeder] local storage is disabled",e),!1}}var ye,be=1e3,Te=/^0_([0-9a-f]+)-([0-9a-f]+)-([0-9]*)$/,Ce=null,Ie=[],Se=null,Ee={success:!1},_e=0;function Oe(){return q().getTracker(p)}function Ae(){var e=Oe(),n=e.foreignCookieSettings,t=[];if(!n||!qe(e))return t;for(var r=function(){for(var e=document.cookie.split(";"),n={},t=0;t<e.length;t++){var r=e[t].split("=");n[vn(r[0]).trim()]=unescape(r.slice(1).join("="))}return n}(),o=Object.keys(r),i=Object.keys(n),a=0;a<i.length;a++)for(var c=i[a],l=n[c],u=0;u<o.length;u++){var d=o[u];if(d.match(l)){var s=r[d];t.push({type:c,value:s})}}return t}function Ne(){return N()||ue()}function De(e){return null===Ce&&(Ce=de()),!(!Le(e)||!ke())&&(xe(e)?function(e){switch(e){case H:case X:return!0;default:return!1}}(Ce):Ce!==$)}function Le(e){return!0===e.lfaCookieEnabled}function xe(e){return!0===e.consentManagementEnabled}function Re(){return!0===Oe().useDualStackEndpoint}function Me(e,n){n=n||{};var t=B(),r=new Date,o=n.eventType||"tracking-event",i=Oe();return{gaTrackingIds:t.trackingIds,gaClientIds:t.clientIds,context:function(e,n){var t=e.referrer||document.referrer;"form-submit"===n&&(t="");return{library:{name:"lftracker",version:a},pageUrl:function(e){if(qe(Oe()))return e;return null===nn(e,"utm_term").match(Te)?e:en(e,"utm_term")}(Ue(e)),pageTitle:e.pageTitle||document.title,referrer:t}}(n,o),event:o,clientEventId:dn(),clientTimestamp:r.toISOString(),clientTimezone:0,scriptId:p,cookiesEnabled:De(i),consentLevel:Ce||$,anonymizeIp:false,lfClientId:e,foreignCookies:Ae(),properties:n.properties||{},autoTrackingEnabled:!1!==i.enableAutoTracking,autoTrackingMode:i.autoTrackingMode}}function Ue(e){return e.pageUrl||window.location.href}function Pe(e,n,t){var r=e+"?sid="+encodeURIComponent(n.scriptId),o=fn(JSON.stringify(n)),i=navigator.sendBeacon(r,o);return Ke(t,{success:i}),i}function je(e,n,t){var r=e+"?sid="+encodeURIComponent(n.scriptId),o=fn(JSON.stringify(n)),i=document.createElement("img");return i.width=1,i.height=1,i.src=r+"&data="+o,i.onload=function(){Ke(t,{success:!0})},i.onerror=function(){Ke(t,{success:!1})},i}function Je(){var e=null,n=Oe().trackingCookieDurationDays;return n&&(e=24*n*60*60*1e3),e}function Ge(){return De(Oe())?fe(Ne(),Je()):(ue()&&setTimeout(Fe,1e3),e=function(e){return xe(e)&&Ce!==$}(Oe())?function(){if(!window[Q]){var e=ve(dn())+".CM";window[Q]=e}return window[Q]}():ee+"."+dn()+".NC",console.log("* [leadfeeder][tracking] cookies disabled, new client id generated %s",e),e);var e}function Fe(){ue()&&(!function(){for(var e=0,n=q().getAll();e<n.length;e++)if(De(n[e]))return!1;return!0}()?console.log("* [leadfeeder][tracking] cannot clear stored client id as other trackers have cookies enabled"):(console.log("* [leadfeeder][tracking] cleared LF cookies, e.g. user consent and client id"),te()))}function ze(e){var n=Oe();void 0===n.gaInitRetries&&(n.gaInitRetries=0);var t=1<=n.gaInitRetries;return function(e){var n=j(e);return null!==n&&"function"==typeof n&&"function"==typeof n.getAll||null!==(n=J(e))&&"object"==typeof n&&"function"==typeof n._getTrackers}(window)?e():t?(console.log("* [leadfeeder][tracking] failed to get GA object for tracking, continuing without it"),e()):(setTimeout(function(){return ze(e)},100*Math.pow(2,n.gaInitRetries)),void(n.gaInitRetries+=1))}function Be(n,t){!function(e){switch(e){case"form-submit":case"identify":return qe(Oe());default:return!0}}((n=n||{}).eventType)?Ie.push({args:n,doneCallback:t}):ze(function(){var e=Me($e(),n);console.log("* [leadfeeder][tracking] event to track:",e),!0===Oe().useSendBeaconApi&&navigator&&navigator.sendBeacon?(Pe("https://tr.lfeeder.com",e,t),Re()&&Pe("https://tr2.lfeeder.com",e)):(je("https://tr.lfeeder.com",e,t),Re()&&je("https://tr2.lfeeder.com",e))})}function qe(e){return!!De(e)&&(!xe(e)||Ce===H)}function We(e,n){var t=(e=e||{}).email;if(wn(t)){var r=e.firstName,o=e.lastName,i={email:t};r&&"string"==typeof r&&(i.firstName=r),o&&"string"==typeof o&&(i.lastName=o),Be({eventType:"identify",properties:i},n)}else console.warn("* [leadfeeder][tracking] Email is invalid in 'identify' payload")}function Ye(e,n){var t=function(e){var n={eventType:"tracking-event"};(e=e||{}).pageUrl&&(n.pageUrl=e.pageUrl);e.pageTitle&&(n.pageTitle=e.pageTitle);e.referrer&&(n.referrer=e.referrer);return n}(e),r=Ue(t);!tn(r)&&gn(r,"/")&&(r=window.location.protocol+"//"+window.location.host+r),r===Se&&_e+be>=(new Date).getTime()?(console.log("* [leadfeeder][tracking] duplicated pageview",r,Se),Ke(n,Ee)):(Se=r,_e=(new Date).getTime(),Ee={success:!0},Be(t,function(e){Ke(n,Ee=e)}))}function Ke(e,n){ln(e)?e(n):void 0!==e&&console.warn("* [leadfeeder][tracking] expected function argument",e)}function $e(){return function(e){return ye=ye||e()}(Ge)}function Xe(e){var n=Oe();return!!Ve(n)&&(void 0===e&&(e=H),console.log("* [leadfeeder][tracking] cookie accepted",e),function(e,n){switch(e){case H:return function(e){Qe(H),e.track({eventType:"consent"});for(var n=0;n<Ie.length;n++){var t=Ie[n];Be(t.args,t.doneCallback)}return Ie=[],!0}(n);case X:return function(e){return Qe(X),e.track({eventType:"consent"}),Ie=[],!0}(n);case $:console.warn("* [leadfeeder][tracking] 'none' consent level should be called via rejectCookie()")}return console.warn("* [leadfeeder] invalid consent level",e),!1}(e,n))}function He(){var e=Oe();return!!Ve(e)&&(console.log("* [leadfeeder][tracking] cookie rejected"),ye=void 0,Se=Ce=null,Ee={success:!(Ie=[])},_e=0,te(),Ce=ge($,Je()),e.track({eventType:"consent"}),!0)}function Ve(e){return ke()?!!function(e){return Le(e)&&xe(e)}(e)||(console.log("* [leadfeeder][tracking] consent management not enabled for tracker:",e.id),!1):(console.log("* [leadfeeder][tracking] disabled cookies for browser",e.id),!1)}function Qe(e){var n=Je();ye=Ce!==e&&de()!==e?(console.log("* [leadfeeder][tracking] save CM lf client and user consent"),pn(ye,".NC")&&(console.log("* [leadfeeder][tracking] clear previous anonymous cookie"),ye=void 0),Ce=ge(e,n),fe($e(),n)):(console.log("* [leadfeeder][tracking] cookies updated via another script or by another acceptCookie call"),Ce=de(),Ne())}function Ze(e,n,t){t=t||"";var r=(e=String(e)).indexOf("#"),o=e.length;-1===r&&(r=o);var i=e.substr(0,r),a=e.substr(r,o-r);return-1===i.indexOf("?")?i+="?":pn(i,"?")||(i+="&"),i+window.encodeURIComponent(n)+"="+window.encodeURIComponent(t)+a}function en(e,n){if(-1===(e=String(e)).indexOf("?"+n)&&-1===e.indexOf("&"+n))return e;var t=e.indexOf("?");if(-1===t)return e;var r=e.substr(t+1),o=e.substr(0,t);if(r){var i="",a=r.indexOf("#");-1!==a&&(i=r.substr(a+1),r=r.substr(0,a));for(var c=r.split("&"),l=c.length-1;0<=l;l--)c[l].split("=")[0]===n&&c.splice(l,1);var u=c.join("&");u&&(o=o+"?"+u),i&&(o+="#"+i)}return o}function nn(e,n){var t=new RegExp("[\\?&#]"+n+"=([^&#]*)").exec(e);return t?function(n){try{return window.decodeURIComponent(n)}catch(e){return unescape(n)}}(t[1]):""}function tn(e){return gn(e,"//")||gn(e,"http://")||gn(e,"https://")}var rn,on,an,cn="/";function ln(e){return"function"==typeof e}function un(e){if(Object.values)return Object.values(e);var n=[];for(var t in e)"string"==typeof t&&e.propertyIsEnumerable(t)&&n.push(e[t]);return n}function dn(){return function(e){function n(e,n){return e<<n|e>>>32-n}function t(e){var n,t="";for(n=7;0<=n;n--)t+=(e>>>4*n&15).toString(16);return t}var r,o,i,a,c,l,u,d,s,f,g=[],p=1732584193,v=4023233417,m=2562383102,w=271733878,k=3285377520,h=[];for(e=function(e){return unescape(window.encodeURIComponent(e))}(e),f=e.length,o=0;o<f-3;o+=4)i=e.charCodeAt(o)<<24|e.charCodeAt(o+1)<<16|e.charCodeAt(o+2)<<8|e.charCodeAt(o+3),h.push(i);switch(3&f){case 0:o=2147483648;break;case 1:o=e.charCodeAt(f-1)<<24|8388608;break;case 2:o=e.charCodeAt(f-2)<<24|e.charCodeAt(f-1)<<16|32768;break;case 3:o=e.charCodeAt(f-3)<<24|e.charCodeAt(f-2)<<16|e.charCodeAt(f-1)<<8|128}h.push(o);for(;14!=(15&h.length);)h.push(0);for(h.push(f>>>29),h.push(f<<3&4294967295),r=0;r<h.length;r+=16){for(o=0;o<16;o++)g[o]=h[r+o];for(o=16;o<=79;o++)g[o]=n(g[o-3]^g[o-8]^g[o-14]^g[o-16],1);for(a=p,c=v,l=m,u=w,d=k,o=0;o<=19;o++)s=n(a,5)+(c&l|~c&u)+d+g[o]+1518500249&4294967295,d=u,u=l,l=n(c,30),c=a,a=s;for(o=20;o<=39;o++)s=n(a,5)+(c^l^u)+d+g[o]+1859775393&4294967295,d=u,u=l,l=n(c,30),c=a,a=s;for(o=40;o<=59;o++)s=n(a,5)+(c&l|c&u|l&u)+d+g[o]+2400959708&4294967295,d=u,u=l,l=n(c,30),c=a,a=s;for(o=60;o<=79;o++)s=n(a,5)+(c^l^u)+d+g[o]+3395469782&4294967295,d=u,u=l,l=n(c,30),c=a,a=s;p=p+a&4294967295,v=v+c&4294967295,m=m+l&4294967295,w=w+u&4294967295,k=k+d&4294967295}return(s=t(p)+t(v)+t(m)+t(w)+t(k)).toLowerCase()}(""+(new Date).getTime()+Math.random()).slice(0,16)}function sn(e,n){n!=e.length&&e[n](function(){sn(e,n+1)})}function fn(e){return window.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}function gn(e,n){return e?e.substring(0,n.length)===n:(console.warn("* [leadfeeder][utils] startsWith called with blank value"),!1)}function pn(e,n){return-1!==(e=String(e)).indexOf(n,e.length-n.length)}function vn(e){return e+""}function mn(t,r,o){var i,a,c,l,u=0;o=o||{};function d(){u=!1===o.leading?0:(new Date).getTime(),i=null,l=t.apply(a,c),i||(a=c=null)}function e(){var e=(new Date).getTime();u||!1!==o.leading||(u=e);var n=r-(e-u);return a=this,c=arguments,n<=0||r<n?(i&&(clearTimeout(i),i=null),u=e,l=t.apply(a,c),i||(a=c=null)):i||!1===o.trailing||(i=setTimeout(d,n)),l}return e.cancel=function(){clearTimeout(i),u=0,i=a=c=null},e}function wn(e){return"string"==typeof e&&!!e.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/)}function kn(e,n){if(n=n?n++:1,window.MutationObserver){if(!(10<=n))return document.body?void new MutationObserver(mn(e,100,{leading:!1})).observe(document.body,{childList:!0,subtree:!0}):(console.log("* [leadfeeder][setup-mutation-observer] unable to setup mutation observer, document.body is missing, retry with a delay,",n),void setTimeout(kn.bind(null,e,n),100));console.log("* [leadfeeder][setup-mutation-observer] number of attempts to setup mutation observer exceeded")}else console.log("* [leadfeeder][setup-mutation-observer] MutationObserver not available, skipping")}if(W()){"about:srcdoc"===location.href&&console.warn("* [leadfeeder] Embedding Leadfeeder tracker inside an iframe is not supported.");var hn=(function(e){for(var n=e.getPlugins(),t=0;t<n.length;t++){var r=n[t];r.initialized||r.init(),r.initialized=!0}e.pluginsInitialized=!0}(an=q().registerTracker(p,Be,We,Ye,$e,Xe,He)),A(an),!0===xe(an)&&null!==(Ce=de())&&ge(Ce,Je()),rn=an,(on=document.createEvent("Event")).tracker=rn,on.initEvent("ldfdr.trackerReady",!0,!1),void document.dispatchEvent(on),an);"disabled"===hn.autoTrackingMode||"default"===hn.autoTrackingMode&&!1===hn.enableAutoTracking||hn.pageview({},function(){hn.autoTrackingInitialized=!0})}}();