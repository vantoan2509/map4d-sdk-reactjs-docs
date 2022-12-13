(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{6725:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layers/building",function(){return s(4917)}])},3957:function(e,n,s){"use strict";var r=s(5893);s(7294);let i={logo:(0,r.jsx)("span",{children:"REACT MAP4D SDK"}),project:{link:"https://github.com/map4d/map4d.github.io/tree/main/map4d-map/react-js"},chat:{link:"https://iotlink.com.vn/lien-he/"},docsRepositoryBase:"https://github.com/vantoan2509/map4d-sdk-reactjs-docs/tree/main",footer:{text:"React Map4d Sdk Docs"},useNextSeoProps:()=>({titleTemplate:"%s – Map4D Docs"})};n.Z=i},4917:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a.ZP}});var r,i=s(5893),l=s(2720),o=s(3957);s(5513);var t=s(1151);s(5675);var a=s(2863);let c={filePath:"pages/layers/building.mdx",route:"/layers/building",frontMatter:{},pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"drawing",route:"/drawing",children:[{kind:"MdxPage",name:"building",route:"/drawing/building"},{kind:"MdxPage",name:"circle",route:"/drawing/circle"},{kind:"MdxPage",name:"directionsRenderer",route:"/drawing/directionsRenderer"},{kind:"MdxPage",name:"marker",route:"/drawing/marker"},{kind:"MdxPage",name:"markerCluster",route:"/drawing/markerCluster"},{kind:"MdxPage",name:"poi",route:"/drawing/poi"},{kind:"MdxPage",name:"polygon",route:"/drawing/polygon"},{kind:"MdxPage",name:"polyline",route:"/drawing/polyline"},{kind:"Meta",data:{marker:"Marker",circle:"Circle",polyline:"Polyline",polygon:"Polygon",poi:"POI",building:"Building",markerCluster:"Marker Cluster",directionsRenderer:"Directions Renderer"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"layers",route:"/layers",children:[{kind:"MdxPage",name:"building",route:"/layers/building"},{kind:"MdxPage",name:"data",route:"/layers/data"},{kind:"MdxPage",name:"ground",route:"/layers/ground"},{kind:"MdxPage",name:"image",route:"/layers/image"},{kind:"MdxPage",name:"poi",route:"/layers/poi"},{kind:"MdxPage",name:"tile",route:"/layers/tile"},{kind:"Meta",data:{tile:"Tile Overlay",ground:"Ground Overlay",image:"Image Overlay",poi:"POI Overlay",building:"Building Overlay",data:"Data Layer"}}]},{kind:"MdxPage",name:"map",route:"/map"},{kind:"Folder",name:"references",route:"/references",children:[{kind:"MdxPage",name:"iconProps",route:"/references/iconProps"},{kind:"Meta",data:{iconProps:"IconProps"}}]},{kind:"MdxPage",name:"start",route:"/start"},{kind:"Meta",data:{index:"Introduction",start:"Getting started",map:"Map",drawing:"Drawing on the Map",layers:"Layers",references:"References",about:{title:"About",type:"page",href:"https://iotlink.com.vn/ve-chung-toi/#ve-iot",newWindow:!0},contact:{title:"Contact ↗",type:"page",href:"https://iotlink.com.vn/lien-he/",newWindow:!0}}}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Building Overlay",position:{start:{line:1,column:3,offset:2},end:{line:1,column:19,offset:18}}}],position:{start:{line:1,column:1,offset:0},end:{line:1,column:19,offset:18}},value:"Building Overlay"},{type:"heading",depth:2,children:[{type:"text",value:"Sử dụng",position:{start:{line:3,column:4,offset:25},end:{line:3,column:11,offset:32}}}],position:{start:{line:3,column:1,offset:22},end:{line:3,column:11,offset:32}},value:"Sử dụng"},{type:"heading",depth:2,children:[{type:"text",value:"Props",position:{start:{line:51,column:4,offset:1115},end:{line:51,column:9,offset:1120}}}],position:{start:{line:51,column:1,offset:1112},end:{line:51,column:9,offset:1120}},value:"Props"}],timestamp:1670842466e3,flexsearch:{codeblocks:!0}};globalThis.__nextra_internal__={pageMap:c.pageMap,route:c.route};let d="Building Overlay";function h(e){let n=Object.assign({h1:"h1",h2:"h2",div:"div",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Building Overlay"}),"\n",(0,i.jsx)(n.h2,{id:"sử-dụng",children:"Sử dụng"}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{value:'"import React from \\"react\\";\\r\\nimport { MFMap, MFBuildingOverlay } from \\"react-map4d-map\\";\\r\\n\\r\\nlet options = {\\r\\n getUrl: function (x, y, zoom) {\\r\\n return `rest-api-get-building-from-tile-coordinate`;\\r\\n },\\r\\n parserData: function (response) {\\r\\n let buildingDatas = [];\\r\\n /**\\r\\n * parser data from response ...\\r\\n */\\r\\n return buildingDatas;\\r\\n },\\r\\n prefixId: \\"prefix\\",\\r\\n visible: true,\\r\\n};\\r\\nconst DemoBuildingOverlay = () => {\\r\\n return (\\r\\n <>\\r\\n <div style={{ width: \\"100%\\", height: \\"400px\\" }}>\\r\\n <MFMap\\r\\n options={{\\r\\n center: { lat: 16.042590223437674, lng: 108.2295094493915 },\\r\\n zoom: 16,\\r\\n }}\\r\\n accessKey={\\"Your key\\"}\\r\\n version={\\"2.4\\"}\\r\\n >\\r\\n <MFBuildingOverlay\\r\\n getUrl={options.getUrl}\\r\\n parserData={options.parserData}\\r\\n prefixId={options.prefixId}\\r\\n />\\r\\n </MFMap>\\r\\n </div>\\r\\n </>\\r\\n );\\r\\n};\\r\\n\\r\\nDemoBuildingOverlay.propTypes = {};\\r\\n\\r\\nexport default DemoBuildingOverlay;\\n"',filename:"demo.js",children:(0,i.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { MFMap"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" MFBuildingOverlay } "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react-map4d-map"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" options "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getUrl"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (x"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" y"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" zoom) {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`rest-api-get-building-from-tile-coordinate`"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"parserData"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (response) {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" buildingDatas "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [];"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"     * parser data from response ..."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"     */"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" buildingDatas;"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  prefixId"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"prefix"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  visible"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"DemoBuildingOverlay"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    <>"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"style"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{ width"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"100%"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" height"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"400px"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" }}>"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MFMap"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"options"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            center"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { lat"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"16.042590223437674"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" lng"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"108.2295094493915"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            zoom"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"16"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          }}"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"accessKey"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Your key"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"version"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"2.4"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        >"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MFBuildingOverlay"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getUrl"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"options"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".getUrl}"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"parserData"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"options"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".parserData}"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"prefixId"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"options"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".prefixId}"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          />"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        </"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MFMap"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    </>"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"DemoBuildingOverlay"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".propTypes "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {};"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" DemoBuildingOverlay;"})]})]})})}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"center",children:"No"}),(0,i.jsx)(n.th,{align:"center",children:"Name"}),(0,i.jsx)(n.th,{align:"center",children:"isRequired"}),(0,i.jsx)(n.th,{align:"center",children:"Type"}),(0,i.jsx)(n.th,{align:"center",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"center",children:"1"}),(0,i.jsx)(n.td,{align:"center",children:"getUrl"}),(0,i.jsx)(n.td,{align:"center",children:"true"}),(0,i.jsx)(n.td,{align:"center",children:"function"}),(0,i.jsx)(n.td,{align:"center",children:"H\xe0m nhận v\xe0o 3 gi\xe1 trị x, y, zoom v\xe0 trả về đường dẫn đến Buildings"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"center",children:"2"}),(0,i.jsx)(n.td,{align:"center",children:"parserData"}),(0,i.jsx)(n.td,{align:"center",children:"true"}),(0,i.jsx)(n.td,{align:"center",children:"function"}),(0,i.jsx)(n.td,{align:"center",children:"H\xe0m nhận v\xe0o response data từ api của getUrl v\xe0 parser th\xe0nh mảng c\xe1c BuildingData"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"center",children:"3"}),(0,i.jsx)(n.td,{align:"center",children:"prefixId"}),(0,i.jsx)(n.td,{align:"center",children:"false"}),(0,i.jsx)(n.td,{align:"center",children:"string"}),(0,i.jsx)(n.td,{align:"center",children:"Gi\xe1 trị được th\xeam v\xe0o trước id của những building thuộc building overlay.D\xf9ng để tr\xe1nh nhầm lẫn trong trường hợp tr\xf9ng id với building của Map4D hay c\xe1c building overlay kh\xe1c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"center",children:"4"}),(0,i.jsx)(n.td,{align:"center",children:"visible"}),(0,i.jsx)(n.td,{align:"center",children:"fasle"}),(0,i.jsx)(n.td,{align:"center",children:"boolean"}),(0,i.jsx)(n.td,{align:"center",children:"Nếu true th\xec building overlay sẽ được hiển thị"})]})]})]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}c.title="string"==typeof d&&d||"Building Overlay";let p=e=>(0,i.jsx)(l.mK.Provider,{value:e,children:(0,i.jsx)(x,{})});(r=globalThis).__nextra_pageContext__||(r.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/layers/building"]={Content:p,pageOpts:c,themeConfig:o.Z}}},function(e){e.O(0,[774,702,888,179],function(){return e(e.s=6725)}),_N_E=e.O()}]);