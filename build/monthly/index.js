!function(){"use strict";var e={n:function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},d:function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,a=window.wp.blocks,n=window.wp.serverSideRender,l=e.n(n),o=window.wp.blockEditor,r=window.wp.components,c=window.wp.i18n;const i=window.ramadan.cities,m=[];Object.keys(i).forEach((e=>{const t=[];Object.keys(i[e].cities).forEach((a=>{t.push({label:i[e].cities[a],value:a})})),m.push({label:i[e].title,value:e,options:t})}));const u=m;var d=JSON.parse('{"u2":"ramadan/monthly"}');(0,a.registerBlockType)(d.u2,{edit:function(e){var a,n,i;let{attributes:m,setAttributes:s}=e;const p=(0,o.useBlockProps)(),b=Array.from({length:20},((e,t)=>({label:t+2020,value:t+2020}))),v=[],w=window.ramadan.months;return Object.keys(w).forEach((e=>{v.push({label:w[e],value:e})})),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Settings","ramadan")},(0,t.createElement)(r.SelectControl,{label:(0,c.__)("Year","ramadan"),value:m.year,options:[{label:(0,c.__)("Current","ramadan"),value:""},...b],onChange:e=>s({year:e})}),(0,t.createElement)(r.SelectControl,{label:(0,c.__)("Month","ramadan"),value:m.month,options:[{label:(0,c.__)("Current","ramadan"),value:""},...v],onChange:e=>s({month:e})}),(0,t.createElement)(r.SelectControl,{label:(0,c.__)("City","ramadan"),value:m.city,onChange:e=>s({city:e})},(0,t.createElement)("option",{value:""},(0,c.__)("- Select -","ramadan")),u.map(((e,a)=>(0,t.createElement)("optgroup",{key:a,label:e.label},e.options.map(((e,a)=>(0,t.createElement)("option",{key:a,value:e.value},e.label))))))),(0,t.createElement)(r.TextControl,{label:(0,c.__)("Date Format","ramadan"),value:null!==(a=m.dateformat)&&void 0!==a?a:"d F, l",type:"text",onChange:e=>s({dateformat:e})}),(0,t.createElement)(r.TextControl,{label:(0,c.__)("Time Format","ramadan"),value:null!==(n=m.timeformat)&&void 0!==n?n:"h:i A",type:"text",onChange:e=>s({timeformat:e})}),(0,t.createElement)(r.TextControl,{label:(0,c.__)("Day Format","ramadan"),value:null!==(i=m.dayformat)&&void 0!==i?i:"D",type:"text",onChange:e=>s({dayformat:e})})),(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Fields","ramadan")},Object.keys(window.ramadan.headings).map(((e,a)=>{var n;return(0,t.createElement)(r.CheckboxControl,{key:a,label:null!==(n=window.ramadan.headings[e])&&void 0!==n?n:"-",checked:m.columns?.[e],onChange:t=>{s({columns:{...m.columns,[e]:t}})}})})))),(0,t.createElement)("div",p,(0,t.createElement)(l(),{block:d.u2,attributes:m})))}})}();