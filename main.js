(()=>{var t={131:t=>{t.exports='<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M53 41.069V29H31V18.931c3.94-.495 7-3.859 7-7.931 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 4.072 3.06 7.436 7 7.931V29H7v12.069c-3.94.495-7 3.859-7 7.931 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.072-3.06-7.436-7-7.931V31h20v10.069c-3.94.495-7 3.859-7 7.931 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.072-3.06-7.436-7-7.931V31h20v10.069c-3.94.495-7 3.859-7 7.931 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.072-3.06-7.436-7-7.931zM24 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zM14 49c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm22 0c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm16 6c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"/></svg>'}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}(()=>{"use strict";var t="3074457351770184441",n=window.miro;function o(){return location.href.includes("localhost")?location.href:"https://academo.github.io/miro-plantuml-plugin/"}var r=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function c(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((o=o.apply(t,n||[])).next())}))},i=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};n.onReady((function(){var a=e(131);n.initialize({extensionPoints:{toolbar:{title:"Insert PlantUML",librarySvgIcon:a,toolbarSvgIcon:a,onClick:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return n.isAuthorized()?n.board.ui.openModal(o()+"/editor.html?widget=new"):(n.showNotification("Not authorized"),n.board.ui.openModal(o()+"/auth-banner.html")),[2]}))}))}},getWidgetMenuItems:function(e){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){return 1===e.length&&(r=e[0]).metadata&&r.metadata[t]&&r.metadata[t].code?[2,{tooltip:"Edit PlantUML",svgIcon:a,onClick:function(){n.board.ui.openModal(o()+"/editor.html?widget="+r.id)}}]:[2,[]]}))}))}}})}))})()})();