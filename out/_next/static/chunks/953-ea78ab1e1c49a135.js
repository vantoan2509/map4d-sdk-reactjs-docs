"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{5953:function(n,e,r){r.d(e,{cX:function(){return a}});var i=r(7294),t=(0,i.createContext)({map:null});(0,i.createContext)({addMarker:null,removeMarker:null});var o=function(){var n=new Date().getTime();return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==e?r:3&r|8).toString(16)})},a=function(n){var e=(0,i.useRef)("callback"),r=(0,i.useRef)(),a=(0,i.useRef)(),c=(0,i.useRef)(),u=(0,i.useRef)(),l=(0,i.useRef)([]),d=(0,i.useState)(),v=d[0],s=d[1];(0,i.useEffect)(function(){var i=o();e.current="callback_"+i;var t="https://api"+(n.environment?"-"+n.environment:"")+".map4d.vn/sdk/map/js?version="+n.version+"&key="+n.accessKey+"&callback="+e.current;n.mapid&&(t+="&mapId="+n.mapid),window[e.current]=function(){if(r.current){var e=n.options;a.current=new window.map4d.Map(r.current,e),n.onMapReady&&n.onMapReady(a.current,i),f(),s(a.current)}else console.error("MFMap: map element is NOT found")};var d=function(n,e){var r="script_"+e;if(document.getElementById(r))return null;var i=document.createElement("script");return i.src=n,i.defer=!0,i.id=r,document.body.appendChild(i),i}(t,i);return d&&(c.current=d),u.current=t,function(){var n,r;delete window[e.current],null!=c.current&&c.current.remove(),null===(n=l.current)||void 0===n||n.forEach(function(n){null==n||n.remove()}),null===(r=a.current)||void 0===r||r.destroy(),u.current=void 0}},[n.environment,n.version,n.accessKey]);var f=function(){var e=null===(t=a.current)||void 0===t?void 0:t.addListener("click",function(n){var e,r;(null===(e=n.marker)||void 0===e?void 0:e.onClick)&&(null===(r=n.marker)||void 0===r||r.onClick())},{marker:!0}),r=null===(o=a.current)||void 0===o?void 0:o.addListener("rightClick",function(n){var e,r;(null===(e=n.marker)||void 0===e?void 0:e.onRightClick)&&(null===(r=n.marker)||void 0===r||r.onRightClick())},{marker:!0}),i=null===(c=a.current)||void 0===c?void 0:c.addListener("dragEnd",function(n){var e,r;(null===(e=n.marker)||void 0===e?void 0:e.onDragEnd)&&(null===(r=n.marker)||void 0===r||r.onDragEnd())},{marker:!0});if(l.current=l.current.concat([e,r,i]),n.onClickLocation){var t,o,c,u,d=null===(u=a.current)||void 0===u?void 0:u.addListener("click",function(e){n.onClickLocation&&n.onClickLocation(e)},{location:!0});l.current.push(d)}if(n.onRightClickLocation){var v,s=null===(v=a.current)||void 0===v?void 0:v.addListener("rightClick",function(e){n.onRightClickLocation&&n.onRightClickLocation(e)},{location:!0});l.current.push(s)}if(n.onTilesLoaded){var f,m=null===(f=a.current)||void 0===f?void 0:f.addListener("tilesLoaded",function(e){n.onTilesLoaded&&n.onTilesLoaded(e)},{location:!0});l.current.push(m)}if(n.onCameraChanging){var k,x=null===(k=a.current)||void 0===k?void 0:k.addListener("cameraChanging",function(e){n.onCameraChanging&&n.onCameraChanging(e)},{location:!0});l.current.push(x)}};return i.createElement(t.Provider,{value:{map:v}},i.createElement("div",{style:{width:"100%",height:"100%",display:"block"},ref:function(n){r.current=n}}),n.children)}}}]);