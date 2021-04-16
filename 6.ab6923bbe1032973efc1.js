(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1wGm":function(e,t,o){"use strict";o.r(t),o.d(t,"JsonPlaceholderModule",function(){return U});var r=o("ofXK"),n=o("8MG2"),s=o("3Pt+"),i=o("PCNd"),a=o("tk/3");class c{encodeKey(e){return encodeURIComponent(e)}encodeValue(e){return encodeURIComponent(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}var l=o("fXoL");const d=new l.r("basePath");class p{constructor(e={}){this.apiKeys=e.apiKeys,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.withCredentials=e.withCredentials,this.encoder=e.encoder,this.credentials=e.credentials?e.credentials:{}}selectHeaderContentType(e){if(0===e.length)return;const t=e.find(e=>this.isJsonMime(e));return void 0===t?e[0]:t}selectHeaderAccept(e){if(0===e.length)return;const t=e.find(e=>this.isJsonMime(e));return void 0===t?e[0]:t}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(t.test(e)||"application/json-patch+json"===e.toLowerCase())}lookupCredential(e){const t=this.credentials[e];return"function"==typeof t?t():t}}let h=(()=>{class e{constructor(e,t,o){this.httpClient=e,this.basePath="https://jsonplaceholder.typicode.com",this.defaultHeaders=new a.d,this.configuration=new p,o&&(this.configuration=o),"string"!=typeof this.configuration.basePath&&("string"!=typeof t&&(t=this.basePath),this.configuration.basePath=t),this.encoder=this.configuration.encoder||new c}addToHttpParams(e,t,o){return"object"==typeof t&&t instanceof Date==0?this.addToHttpParamsRecursive(e,t):this.addToHttpParamsRecursive(e,t,o)}addToHttpParamsRecursive(e,t,o){if(null==t)return e;if("object"==typeof t)if(Array.isArray(t))t.forEach(t=>e=this.addToHttpParamsRecursive(e,t,o));else if(t instanceof Date){if(null==o)throw Error("key may not be null if value is Date");e=e.append(o,t.toISOString().substr(0,10))}else Object.keys(t).forEach(r=>e=this.addToHttpParamsRecursive(e,t[r],null!=o?`${o}.${r}`:r));else{if(null==o)throw Error("key may not be null if value is not object or array");e=e.append(o,t)}return e}getComment(e,t,o,r,n="body",s=!1,i){if(null==e)throw new Error("Required parameter commentId was null or undefined when calling getComment.");let c=new a.e({encoder:this.encoder});null!=t&&(c=this.addToHttpParams(c,t,"_page")),null!=o&&(c=this.addToHttpParams(c,o,"_limit"));let l=this.defaultHeaders,d=i&&i.httpHeaderAccept;void 0===d&&(d=this.configuration.selectHeaderAccept(["application/json"])),void 0!==d&&(l=l.set("Accept",d));const p=this.configuration.selectHeaderContentType(["application/json"]);void 0!==p&&(l=l.set("Content-Type",p));let h="json";return d&&d.startsWith("text")&&(h="text"),this.httpClient.get(`${this.configuration.basePath}/comments/${encodeURIComponent(String(e))}`,{params:c,responseType:h,withCredentials:this.configuration.withCredentials,headers:l,observe:n,reportProgress:s})}getCommentsByPostId(e,t,o,r="body",n=!1,s){if(null==e)throw new Error("Required parameter postId was null or undefined when calling getCommentsByPostId.");let i=new a.e({encoder:this.encoder});null!=t&&(i=this.addToHttpParams(i,t,"_page")),null!=o&&(i=this.addToHttpParams(i,o,"_limit"));let c=this.defaultHeaders,l=s&&s.httpHeaderAccept;void 0===l&&(l=this.configuration.selectHeaderAccept(["application/json"])),void 0!==l&&(c=c.set("Accept",l));let d="json";return l&&l.startsWith("text")&&(d="text"),this.httpClient.get(`${this.configuration.basePath}/posts/${encodeURIComponent(String(e))}/comments`,{params:i,responseType:d,withCredentials:this.configuration.withCredentials,headers:c,observe:r,reportProgress:n})}listComments(e,t,o="body",r=!1,n){let s=new a.e({encoder:this.encoder});null!=e&&(s=this.addToHttpParams(s,e,"_page")),null!=t&&(s=this.addToHttpParams(s,t,"_limit"));let i=this.defaultHeaders,c=n&&n.httpHeaderAccept;void 0===c&&(c=this.configuration.selectHeaderAccept(["application/json"])),void 0!==c&&(i=i.set("Accept",c));let l="json";return c&&c.startsWith("text")&&(l="text"),this.httpClient.get(`${this.configuration.basePath}/comments`,{params:s,responseType:l,withCredentials:this.configuration.withCredentials,headers:i,observe:o,reportProgress:r})}newComment(e,t="body",o=!1,r){let n=this.defaultHeaders,s=r&&r.httpHeaderAccept;void 0===s&&(s=this.configuration.selectHeaderAccept(["application/json"])),void 0!==s&&(n=n.set("Accept",s));const i=this.configuration.selectHeaderContentType(["application/json"]);void 0!==i&&(n=n.set("Content-Type",i));let a="json";return s&&s.startsWith("text")&&(a="text"),this.httpClient.post(`${this.configuration.basePath}/comments`,e,{responseType:a,withCredentials:this.configuration.withCredentials,headers:n,observe:t,reportProgress:o})}patchComment(e,t,o="body",r=!1,n){if(null==e)throw new Error("Required parameter commentId was null or undefined when calling patchComment.");let s=this.defaultHeaders,i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["application/json"])),void 0!==i&&(s=s.set("Accept",i));const a=this.configuration.selectHeaderContentType(["application/json"]);void 0!==a&&(s=s.set("Content-Type",a));let c="json";return i&&i.startsWith("text")&&(c="text"),this.httpClient.patch(`${this.configuration.basePath}/comments/${encodeURIComponent(String(e))}`,t,{responseType:c,withCredentials:this.configuration.withCredentials,headers:s,observe:o,reportProgress:r})}putComment(e,t,o="body",r=!1,n){if(null==e)throw new Error("Required parameter commentId was null or undefined when calling putComment.");let s=this.defaultHeaders,i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["application/json"])),void 0!==i&&(s=s.set("Accept",i));const a=this.configuration.selectHeaderContentType(["application/json"]);void 0!==a&&(s=s.set("Content-Type",a));let c="json";return i&&i.startsWith("text")&&(c="text"),this.httpClient.put(`${this.configuration.basePath}/comments/${encodeURIComponent(String(e))}`,t,{responseType:c,withCredentials:this.configuration.withCredentials,headers:s,observe:o,reportProgress:r})}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(a.b),l.Tb(d,8),l.Tb(p,8))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e,t,o){this.httpClient=e,this.basePath="https://jsonplaceholder.typicode.com",this.defaultHeaders=new a.d,this.configuration=new p,o&&(this.configuration=o),"string"!=typeof this.configuration.basePath&&("string"!=typeof t&&(t=this.basePath),this.configuration.basePath=t),this.encoder=this.configuration.encoder||new c}addToHttpParams(e,t,o){return"object"==typeof t&&t instanceof Date==0?this.addToHttpParamsRecursive(e,t):this.addToHttpParamsRecursive(e,t,o)}addToHttpParamsRecursive(e,t,o){if(null==t)return e;if("object"==typeof t)if(Array.isArray(t))t.forEach(t=>e=this.addToHttpParamsRecursive(e,t,o));else if(t instanceof Date){if(null==o)throw Error("key may not be null if value is Date");e=e.append(o,t.toISOString().substr(0,10))}else Object.keys(t).forEach(r=>e=this.addToHttpParamsRecursive(e,t[r],null!=o?`${o}.${r}`:r));else{if(null==o)throw Error("key may not be null if value is not object or array");e=e.append(o,t)}return e}getPost(e,t="body",o=!1,r){if(null==e)throw new Error("Required parameter postId was null or undefined when calling getPost.");let n=this.defaultHeaders,s=r&&r.httpHeaderAccept;void 0===s&&(s=this.configuration.selectHeaderAccept(["application/json"])),void 0!==s&&(n=n.set("Accept",s));let i="json";return s&&s.startsWith("text")&&(i="text"),this.httpClient.get(`${this.configuration.basePath}/posts/${encodeURIComponent(String(e))}`,{responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:t,reportProgress:o})}listPosts(e,t,o,r="body",n=!1,s){let i=new a.e({encoder:this.encoder});null!=e&&(i=this.addToHttpParams(i,e,"title_like")),null!=t&&(i=this.addToHttpParams(i,t,"_page")),null!=o&&(i=this.addToHttpParams(i,o,"_limit"));let c=this.defaultHeaders,l=s&&s.httpHeaderAccept;void 0===l&&(l=this.configuration.selectHeaderAccept(["application/json"])),void 0!==l&&(c=c.set("Accept",l));let d="json";return l&&l.startsWith("text")&&(d="text"),this.httpClient.get(`${this.configuration.basePath}/posts`,{params:i,responseType:d,withCredentials:this.configuration.withCredentials,headers:c,observe:r,reportProgress:n})}newPost(e,t="body",o=!1,r){let n=this.defaultHeaders,s=r&&r.httpHeaderAccept;void 0===s&&(s=this.configuration.selectHeaderAccept(["application/json"])),void 0!==s&&(n=n.set("Accept",s));const i=this.configuration.selectHeaderContentType(["application/json"]);void 0!==i&&(n=n.set("Content-Type",i));let a="json";return s&&s.startsWith("text")&&(a="text"),this.httpClient.post(`${this.configuration.basePath}/posts`,e,{responseType:a,withCredentials:this.configuration.withCredentials,headers:n,observe:t,reportProgress:o})}patchPost(e,t,o="body",r=!1,n){if(null==e)throw new Error("Required parameter postId was null or undefined when calling patchPost.");let s=this.defaultHeaders,i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["application/json"])),void 0!==i&&(s=s.set("Accept",i));const a=this.configuration.selectHeaderContentType(["application/json"]);void 0!==a&&(s=s.set("Content-Type",a));let c="json";return i&&i.startsWith("text")&&(c="text"),this.httpClient.patch(`${this.configuration.basePath}/posts/${encodeURIComponent(String(e))}`,t,{responseType:c,withCredentials:this.configuration.withCredentials,headers:s,observe:o,reportProgress:r})}putPost(e,t,o="body",r=!1,n){if(null==e)throw new Error("Required parameter postId was null or undefined when calling putPost.");let s=this.defaultHeaders,i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["application/json"])),void 0!==i&&(s=s.set("Accept",i));const a=this.configuration.selectHeaderContentType(["application/json"]);void 0!==a&&(s=s.set("Content-Type",a));let c="json";return i&&i.startsWith("text")&&(c="text"),this.httpClient.put(`${this.configuration.basePath}/posts/${encodeURIComponent(String(e))}`,t,{responseType:c,withCredentials:this.configuration.withCredentials,headers:s,observe:o,reportProgress:r})}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(a.b),l.Tb(d,8),l.Tb(p,8))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(e,t,o){this.httpClient=e,this.basePath="https://jsonplaceholder.typicode.com",this.defaultHeaders=new a.d,this.configuration=new p,o&&(this.configuration=o),"string"!=typeof this.configuration.basePath&&("string"!=typeof t&&(t=this.basePath),this.configuration.basePath=t),this.encoder=this.configuration.encoder||new c}addToHttpParams(e,t,o){return"object"==typeof t&&t instanceof Date==0?this.addToHttpParamsRecursive(e,t):this.addToHttpParamsRecursive(e,t,o)}addToHttpParamsRecursive(e,t,o){if(null==t)return e;if("object"==typeof t)if(Array.isArray(t))t.forEach(t=>e=this.addToHttpParamsRecursive(e,t,o));else if(t instanceof Date){if(null==o)throw Error("key may not be null if value is Date");e=e.append(o,t.toISOString().substr(0,10))}else Object.keys(t).forEach(r=>e=this.addToHttpParamsRecursive(e,t[r],null!=o?`${o}.${r}`:r));else{if(null==o)throw Error("key may not be null if value is not object or array");e=e.append(o,t)}return e}getUser(e,t,o,r,n="body",s=!1,i){if(null==e)throw new Error("Required parameter userId was null or undefined when calling getUser.");let c=new a.e({encoder:this.encoder});null!=t&&(c=this.addToHttpParams(c,t,"_page")),null!=o&&(c=this.addToHttpParams(c,o,"_limit"));let l=this.defaultHeaders,d=i&&i.httpHeaderAccept;void 0===d&&(d=this.configuration.selectHeaderAccept(["application/json"])),void 0!==d&&(l=l.set("Accept",d));const p=this.configuration.selectHeaderContentType(["application/json"]);void 0!==p&&(l=l.set("Content-Type",p));let h="json";return d&&d.startsWith("text")&&(h="text"),this.httpClient.get(`${this.configuration.basePath}/users/${encodeURIComponent(String(e))}`,{params:c,responseType:h,withCredentials:this.configuration.withCredentials,headers:l,observe:n,reportProgress:s})}listUsers(e,t,o="body",r=!1,n){let s=new a.e({encoder:this.encoder});null!=e&&(s=this.addToHttpParams(s,e,"_page")),null!=t&&(s=this.addToHttpParams(s,t,"_limit"));let i=this.defaultHeaders,c=n&&n.httpHeaderAccept;void 0===c&&(c=this.configuration.selectHeaderAccept(["application/json"])),void 0!==c&&(i=i.set("Accept",c));let l="json";return c&&c.startsWith("text")&&(l="text"),this.httpClient.get(`${this.configuration.basePath}/users`,{params:s,responseType:l,withCredentials:this.configuration.withCredentials,headers:i,observe:o,reportProgress:r})}newUser(e,t="body",o=!1,r){let n=this.defaultHeaders,s=r&&r.httpHeaderAccept;void 0===s&&(s=this.configuration.selectHeaderAccept(["application/json"])),void 0!==s&&(n=n.set("Accept",s));const i=this.configuration.selectHeaderContentType(["application/json"]);void 0!==i&&(n=n.set("Content-Type",i));let a="json";return s&&s.startsWith("text")&&(a="text"),this.httpClient.post(`${this.configuration.basePath}/users`,e,{responseType:a,withCredentials:this.configuration.withCredentials,headers:n,observe:t,reportProgress:o})}patchUser(e,t,o="body",r=!1,n){if(null==e)throw new Error("Required parameter userId was null or undefined when calling patchUser.");let s=this.defaultHeaders,i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["application/json"])),void 0!==i&&(s=s.set("Accept",i));const a=this.configuration.selectHeaderContentType(["application/json"]);void 0!==a&&(s=s.set("Content-Type",a));let c="json";return i&&i.startsWith("text")&&(c="text"),this.httpClient.patch(`${this.configuration.basePath}/users/${encodeURIComponent(String(e))}`,t,{responseType:c,withCredentials:this.configuration.withCredentials,headers:s,observe:o,reportProgress:r})}putUser(e,t,o="body",r=!1,n){if(null==e)throw new Error("Required parameter userId was null or undefined when calling putUser.");let s=this.defaultHeaders,i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["application/json"])),void 0!==i&&(s=s.set("Accept",i));const a=this.configuration.selectHeaderContentType(["application/json"]);void 0!==a&&(s=s.set("Content-Type",a));let c="json";return i&&i.startsWith("text")&&(c="text"),this.httpClient.put(`${this.configuration.basePath}/users/${encodeURIComponent(String(e))}`,t,{responseType:c,withCredentials:this.configuration.withCredentials,headers:s,observe:o,reportProgress:r})}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(a.b),l.Tb(d,8),l.Tb(p,8))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=o("tyNb"),f=o("XNiG"),v=o("lJxs"),g=o("0zEo"),P=o("zy28");function w(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," required error "),l.Ob())}function y(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," not valid error "),l.Ob())}function C(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," required error "),l.Ob())}function H(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," not valid error "),l.Ob())}let T=(()=>{class e{constructor(e){this.fb=e,this.formReady=new l.n,this.form=this.fb.group({})}ngOnInit(){this.form.addControl("fooEmail",new s.d("",[s.w.required,s.w.email,s.w.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),this.form.addControl("barEmail",new s.d("",[s.w.required,s.w.email,s.w.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),this.formReady.emit(this.form)}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(s.c))},e.\u0275cmp=l.Db({type:e,selectors:[["app-sample-form-element-foo"]],outputs:{formReady:"formReady"},decls:27,vars:5,consts:[[3,"formGroup"],[1,"clr-col-xs-12","clr-col-md-12","clr-col-lg-12"],["clrSelect","","name","options","formControlName","fooEmail","required",""],["value",""],["value","foo"],["value","foo@foo.com"],[4,"clrIfError"],["clrSelect","","name","options","formControlName","barEmail","required",""],["value","bar"],["value","bar@bar.com"]],template:function(e,t){1&e&&(l.Nb(0,0),l.Pb(1,"clr-select-container",1),l.Pb(2,"label"),l.vc(3,"foo email"),l.Ob(),l.Pb(4,"select",2),l.Kb(5,"option",3),l.Pb(6,"option",4),l.vc(7,"foo"),l.Ob(),l.Pb(8,"option",5),l.vc(9,"foo@foo.com"),l.Ob(),l.Ob(),l.Pb(10,"clr-control-helper"),l.vc(11,"pick a good foo email"),l.Ob(),l.tc(12,w,2,0,"clr-control-error",6),l.tc(13,y,2,0,"clr-control-error",6),l.Ob(),l.Pb(14,"clr-select-container",1),l.Pb(15,"label"),l.vc(16,"bar email"),l.Ob(),l.Pb(17,"select",7),l.Kb(18,"option",3),l.Pb(19,"option",8),l.vc(20,"bar"),l.Ob(),l.Pb(21,"option",9),l.vc(22,"bar@bar.com"),l.Ob(),l.Ob(),l.Pb(23,"clr-control-helper"),l.vc(24,"pick a good bar email"),l.Ob(),l.tc(25,C,2,0,"clr-control-error",6),l.tc(26,H,2,0,"clr-control-error",6),l.Ob(),l.Mb()),2&e&&(l.ec("formGroup",t.form),l.yb(12),l.ec("clrIfError","required"),l.yb(1),l.ec("clrIfError","email"),l.yb(12),l.ec("clrIfError","required"),l.yb(1),l.ec("clrIfError","email"))},directives:[s.l,s.g,n.s,n.l,s.u,n.r,s.k,s.e,s.t,s.p,s.x,n.c,n.i,n.b],styles:[""]}),e})();function j(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," required error "),l.Ob())}function O(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," not valid error "),l.Ob())}function A(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," required error "),l.Ob())}function I(e,t){1&e&&(l.Pb(0,"clr-control-error"),l.vc(1," not valid error "),l.Ob())}const R=function(){return{marginBottom:"1.5rem"}};let x=(()=>{class e{constructor(){this.sampleForm=new s.f({email1:new s.d("",[s.w.required,s.w.email,s.w.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),email2:new s.d("",[s.w.required,s.w.email,s.w.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])})}ngOnInit(){}addChildForm(e,t){this.sampleForm.addControl(e,t),console.log("me at addChildForm",t)}onSubmitForm(){this.sampleForm.valid?console.log("me at onSubmitForm",this.sampleForm.value):(this.sampleForm.markAllAsTouched(),console.log("me at onSubmitForm not valid",this.sampleForm))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-sample-form"]],decls:31,vars:10,consts:[["clrForm","","clrLayout","vertical",1,"clr-form","clr-form-vertical",3,"formGroup","ngStyle"],[1,"clr-form-control-multi","clr-row"],[1,"clr-col-xs-12","clr-col-md-12","clr-col-lg-12"],["translate","","for","email1",1,"clr-control-label"],["clrInput","","type","text","id","email1","formControlName","email1","required","",1,"max-width-aa"],[4,"clrIfError"],["clrSelect","","name","options","formControlName","email2","required",""],["value",""],["value","c"],["value","n"],["value","cn@cn.io"],[3,"formReady"],[3,"click"]],template:function(e,t){1&e&&(l.Pb(0,"form",0),l.Pb(1,"div",1),l.Pb(2,"clr-input-container",2),l.Pb(3,"label",3),l.vc(4," email 1 "),l.Ob(),l.Kb(5,"input",4),l.tc(6,j,2,0,"clr-control-error",5),l.tc(7,O,2,0,"clr-control-error",5),l.Ob(),l.Ob(),l.Pb(8,"div",1),l.Pb(9,"clr-select-container",2),l.Pb(10,"label"),l.vc(11,"email2"),l.Ob(),l.Pb(12,"select",6),l.Kb(13,"option",7),l.Pb(14,"option",8),l.vc(15,"c"),l.Ob(),l.Pb(16,"option",9),l.vc(17,"n"),l.Ob(),l.Pb(18,"option",10),l.vc(19,"cn@cn.io"),l.Ob(),l.Ob(),l.Pb(20,"clr-control-helper"),l.vc(21,"pick a good email"),l.Ob(),l.tc(22,A,2,0,"clr-control-error",5),l.tc(23,I,2,0,"clr-control-error",5),l.Ob(),l.Ob(),l.Pb(24,"div",1),l.Pb(25,"app-sample-form-element-foo",11),l.Wb("formReady",function(e){return t.addChildForm("fooEmails",e)}),l.Ob(),l.Ob(),l.Pb(26,"div"),l.vc(27),l.ac(28,"json"),l.Ob(),l.Pb(29,"button",12),l.Wb("click",function(){return t.onSubmitForm()}),l.vc(30,"submit form"),l.Ob(),l.Ob()),2&e&&(l.ec("formGroup",t.sampleForm)("ngStyle",l.hc(9,R)),l.yb(6),l.ec("clrIfError","required"),l.yb(1),l.ec("clrIfError","email"),l.yb(15),l.ec("clrIfError","required"),l.yb(1),l.ec("clrIfError","email"),l.yb(4),l.xc("sampleForm.values: ",l.bc(28,7,t.sampleForm.value),""))},directives:[s.y,s.l,n.f,n.m,s.g,r.o,n.k,n.l,s.b,n.j,s.k,s.e,s.t,n.i,n.s,s.u,n.r,s.p,s.x,n.c,T,n.b],pipes:[r.h],styles:[""]}),e})();function $(e,t){if(1&e){const e=l.Qb();l.Pb(0,"div",7),l.Pb(1,"div",8),l.vc(2),l.Ob(),l.Pb(3,"div",9),l.Pb(4,"div",10),l.vc(5),l.Ob(),l.Ob(),l.Pb(6,"div",11),l.Pb(7,"small"),l.Pb(8,"div"),l.Pb(9,"button",12),l.Wb("click",function(){l.nc(e);const o=t.$implicit;return l.Zb().showCommentsPosts(o.id)}),l.vc(10,"show"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob()}if(2&e){const e=t.$implicit;l.yb(2),l.wc(e.title),l.yb(3),l.xc(" ",e.body," ")}}function k(e,t){if(1&e&&(l.Pb(0,"p"),l.vc(1),l.Ob()),2&e){const e=t.$implicit;l.yb(1),l.zc(" ",e.body," ",e.name," ",e.email," ")}}function E(e,t){if(1&e&&(l.Pb(0,"div",13),l.tc(1,k,2,3,"p",14),l.Ob()),2&e){const e=l.Zb();l.yb(1),l.ec("ngForOf",e.selectedPost.comments)}}let S=(()=>{class e{constructor(e,t,o){this.postsService=e,this.commentService=t,this.usersService=o,this.selectedPostId$=new f.a,this.posts$=this.postsService.listPosts()}showCommentsPosts(e){this.selectedPostId$.next(e),console.log("showCommentsPosts",e),this.refComments.openModal()}getPostsComments(e){return e.map(e=>this.commentService.getCommentsByPostId((null==e?void 0:e.id)||0).pipe(Object(v.a)(t=>({post:e,comments:t}))))}getPostsUsers(e){return e.map(e=>this.usersService.getUser((null==e?void 0:e.post.userId)||0).pipe(Object(v.a)(t=>({post:e.post,comments:e.comments,user:t}))))}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(u),l.Jb(h),l.Jb(m))},e.\u0275cmp=l.Db({type:e,selectors:[["app-json-placeholder-main"]],viewQuery:function(e,t){if(1&e&&l.Ac(g.a,1),2&e){let e;l.jc(e=l.Xb())&&(t.refComments=e.first)}},decls:16,vars:7,consts:[["class","card",4,"ngFor","ngForOf"],[3,"title","showCancelButton","showOkButton"],["refComments",""],["class","body",4,"ngIf"],[1,"modal-footer"],[1,"btn","btn-outline",3,"click"],[1,"btn","btn-primary",3,"click"],[1,"card"],[1,"card-header"],[1,"card-block"],[1,"card-text"],[1,"card-footer"],[3,"click"],[1,"body"],[4,"ngFor","ngForOf"]],template:function(e,t){if(1&e){const e=l.Qb();l.Kb(0,"app-shared-loading-spinner"),l.Pb(1,"h1"),l.vc(2,"sample form with nested components"),l.Ob(),l.Kb(3,"app-sample-form"),l.Pb(4,"h1"),l.vc(5,"json-placeholder: posts + comments + user"),l.Ob(),l.tc(6,$,11,2,"div",0),l.ac(7,"async"),l.Pb(8,"app-shared-modal",1,2),l.tc(10,E,2,1,"div",3),l.Pb(11,"div",4),l.Pb(12,"button",5),l.Wb("click",function(){return l.nc(e),l.kc(9).closeModal()}),l.vc(13," Cancel "),l.Ob(),l.Pb(14,"button",6),l.Wb("click",function(){return l.nc(e),l.kc(9).closeModal()}),l.vc(15," Ok "),l.Ob(),l.Ob(),l.Ob()}2&e&&(l.yb(6),l.ec("ngForOf",l.bc(7,5,t.posts$)),l.yb(2),l.ec("title","")("showCancelButton",!1)("showOkButton",!1),l.yb(2),l.ec("ngIf",t.selectedPost&&t.selectedPost.comments))},directives:[P.a,x,r.m,g.a,r.n],pipes:[r.b],encapsulation:2}),e})();const q=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-json-placeholder"]],decls:1,vars:0,template:function(e,t){1&e&&l.Kb(0,"router-outlet")},directives:[b.d],encapsulation:2}),e})(),children:[{path:"home",component:S},{path:"",redirectTo:"home",pathMatch:"full"}]}];let F=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[b.c.forChild(q)],b.c]}),e})(),U=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},providers:[h,u,m],imports:[[r.c,s.s,i.a,n.a,F]]}),e})()}}]);