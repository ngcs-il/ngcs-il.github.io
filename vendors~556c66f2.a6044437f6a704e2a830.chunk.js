(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3U8n":function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return a})),n.d(e,"h",(function(){return R})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return g}));var r=n("qrcG"),o=n("70NS");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function i(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function u(t){var e=function(t){t.hasOwnProperty("inject")||(t.inject=(r.b.getOwn(r.b.paramTypes,t)||y).slice(),t.inject&&t.inject.length>0&&t.inject[t.inject.length-1]===Object&&t.inject.splice(-1,1))};return function(t){return!!t}(t)?e(t):e}function a(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,n,r){if("number"==typeof r)return u(e),void(1===t.length&&(e.inject[r]=t[0]));r?r.value.inject=t:e.inject=t}}var c,l=r.d.create("aurelia:resolver",(function(t){return"function"==typeof t.get||"Resolvers must implement: get(container: Container, key: any): any"}));function h(t,e,n){return t===e}!function(t){t[t.instance=0]="instance",t[t.singleton=1]="singleton",t[t.transient=2]="transient",t[t.function=3]="function",t[t.array=4]="array",t[t.alias=5]="alias"}(c||(c={}));var f=function(){function t(t,e){this.strategy=t,this.state=e}return t.prototype.get=function(t,e){if(h(this.strategy,c.instance,this.state))return this.state;if(h(this.strategy,c.singleton,this.state)){var n=t.invoke(this.state);return this.state=n,this.strategy=0,n}if(h(this.strategy,c.transient,this.state))return t.invoke(this.state);if(h(this.strategy,c.function,this.state))return this.state(t,e,this);if(h(this.strategy,c.array,this.state))return this.state[0].get(t,e);if(h(this.strategy,c.alias,this.state))return t.get(this.state);throw new Error("Invalid strategy: "+this.strategy)},t=i([l(),s("design:paramtypes",[Number,Object])],t)}(),d=function(){function t(t){this._key=t}var e;return e=t,t.prototype.get=function(t){var e=this;return function(){return t.get(e._key)}},t.of=function(t){return new e(t)},t=e=i([l(),s("design:paramtypes",[Object])],t)}(),p=(function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){return t.getAll(this._key)},t.of=function(t){return new e(t)},t=e=i([l(),s("design:paramtypes",[Object])],t)}(),function(){function t(t,e){void 0===e&&(e=!0),this._key=t,this._checkParent=e}var e;return e=t,t.prototype.get=function(t){return t.hasResolver(this._key,this._checkParent)?t.get(this._key):null},t.of=function(t,n){return void 0===n&&(n=!0),new e(t,n)},t=e=i([l(),s("design:paramtypes",[Object,Boolean])],t)}()),g=(function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){return t.parent?t.parent.get(this._key):null},t.of=function(t){return new e(t)},t=e=i([l(),s("design:paramtypes",[Object])],t)}(),function(){function t(t){this._key=t}var e;return e=t,t.prototype.get=function(t){var e=this._key,n=t.getResolver(e);return n&&n.strategy===c.function&&(e=n.state),function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.invoke(e,n)}},t.of=function(t){return new e(t)},t=e=i([l(),s("design:paramtypes",[Object])],t)}());!function(){function t(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.key=t,this.asKey=t,this.dynamicDependencies=e}var e;e=t,t.prototype.get=function(t){var e=this.dynamicDependencies.length>0?this.dynamicDependencies.map((function(e){return e["protocol:aurelia:resolver"]?e.get(t):t.get(e)})):void 0,n=this.key,r=t.getResolver(n);r&&3===r.strategy&&(n=r.state);var o=t.invoke(n,e);return t.registerInstance(this.asKey,o),o},t.prototype.as=function(t){return this.asKey=t,this},t.of=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new(e.bind.apply(e,[void 0,t].concat(n)))},t=e=i([l(),s("design:paramtypes",[Object,Object])],t)}();function v(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}var y=Object.freeze([]);r.b.registration="aurelia:registration",r.b.invoker="aurelia:invoker";var m=l.decorates,b=function(){function t(t,e,n){this.fn=t,this.invoker=e,this.dependencies=n}return t.prototype.invoke=function(t,e){return void 0!==e?this.invoker.invokeWithDynamicDependencies(t,this.fn,this.dependencies,e):this.invoker.invoke(t,this.fn,this.dependencies)},t}();var w={invoke:function(t,e,n){var r=n.map((function(e){return t.get(e)}));return Reflect.construct(e,r)},invokeWithDynamicDependencies:function(t,e,n,r){for(var o,i=n.length,s=new Array(i);i--;){if(null==(o=n[i]))throw new Error("Constructor Parameter with index "+i+" cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");s[i]=t.get(o)}return void 0!==r&&(s=s.concat(r)),Reflect.construct(e,s)}};var k=function(){function t(t){void 0===t&&(t={}),this._configuration=t,this._onHandlerCreated=t.onHandlerCreated,this._handlers=t.handlers||(t.handlers=new Map),this._resolvers=new Map,this.root=this,this.parent=null}return t.prototype.makeGlobal=function(){return t.instance=this,this},t.prototype.setHandlerCreatedCallback=function(t){this._onHandlerCreated=t,this._configuration.onHandlerCreated=t},t.prototype.registerInstance=function(t,e){return this.registerResolver(t,new f(0,void 0===e?t:e))},t.prototype.registerSingleton=function(t,e){return this.registerResolver(t,new f(1,void 0===e?t:e))},t.prototype.registerTransient=function(t,e){return this.registerResolver(t,new f(2,void 0===e?t:e))},t.prototype.registerHandler=function(t,e){return this.registerResolver(t,new f(3,e))},t.prototype.registerAlias=function(t,e){return this.registerResolver(e,new f(5,t))},t.prototype.registerResolver=function(t,e){v(t);var n=this._resolvers,r=n.get(t);return void 0===r?n.set(t,e):4===r.strategy?r.state.push(e):n.set(t,new f(4,[r,e])),e},t.prototype.autoRegister=function(t,e){if("function"==typeof(e=void 0===e?t:e)){var n=r.b.get(r.b.registration,e);return void 0===n?this.registerResolver(t,new f(1,e)):n.registerResolver(this,t,e)}return this.registerResolver(t,new f(0,e))},t.prototype.autoRegisterAll=function(t){for(var e=t.length;e--;)this.autoRegister(t[e])},t.prototype.unregister=function(t){this._resolvers.delete(t)},t.prototype.hasResolver=function(t,e){return void 0===e&&(e=!1),v(t),this._resolvers.has(t)||e&&null!==this.parent&&this.parent.hasResolver(t,e)},t.prototype.getResolver=function(t){return this._resolvers.get(t)},t.prototype.get=function(e){if(v(e),e===t)return this;if(m(e))return e.get(this,e);var n=this._resolvers.get(e);if(void 0===n){if(null===this.parent)return this.autoRegister(e).get(this,e);var o=r.b.get(r.b.registration,e);return void 0===o?this.parent._get(e):o.registerResolver(this,e,e).get(this,e)}return n.get(this,e)},t.prototype._get=function(t){var e=this._resolvers.get(t);return void 0===e?null===this.parent?this.autoRegister(t).get(this,t):this.parent._get(t):e.get(this,t)},t.prototype.getAll=function(t){v(t);var e=this._resolvers.get(t);if(void 0===e)return null===this.parent?y:this.parent.getAll(t);if(4===e.strategy){for(var n=e.state,r=n.length,o=new Array(r);r--;)o[r]=n[r].get(this,t);return o}return[e.get(this,t)]},t.prototype.createChild=function(){var e=new t(this._configuration);return e.root=this.root,e.parent=this,e},t.prototype.invoke=function(t,e){try{var n=this._handlers.get(t);return void 0===n&&(n=this._createInvocationHandler(t),this._handlers.set(t,n)),n.invoke(this,e)}catch(e){throw new o.a("Error invoking "+t.name+". Check the inner error for details.",e,!0)}},t.prototype._createInvocationHandler=function(t){var e,n;if(void 0===t.inject)e=r.b.getOwn(r.b.paramTypes,t)||y;else{e=[];for(var o=t;"function"==typeof o;)e.push.apply(e,(n=o).hasOwnProperty("inject")?"function"==typeof n.inject?n.inject():n.inject:[]),o=Object.getPrototypeOf(o)}var i=r.b.getOwn(r.b.invoker,t)||w,s=new b(t,i,e);return void 0!==this._onHandlerCreated?this._onHandlerCreated(s):s},t}();var _=function(){function t(){}return t.prototype.invoke=function(t,e,n){for(var r=n.length,o=new Array(r);r--;)o[r]=t.get(n[r]);return e.apply(void 0,o)},t.prototype.invokeWithDynamicDependencies=function(t,e,n,r){for(var o=n.length,i=new Array(o);o--;)i[o]=t.get(n[o]);return void 0!==r&&(i=i.concat(r)),e.apply(void 0,i)},t}();function C(t){return function(e){r.b.define(r.b.registration,t,e)}}function R(t){return C(new j(t))}_.instance=new _;var j=function(){function t(t){this._key=t}return t.prototype.registerResolver=function(t,e,n){var r=t.getResolver(this._key||e);return void 0===r?t.registerTransient(this._key||e,n):r},t}();!function(){function t(t,e){void 0===e&&(e=!1),"boolean"==typeof t?this._registerInChild=t:(this._key=t,this._registerInChild=e)}t.prototype.registerResolver=function(t,e,n){var r=this._registerInChild?t:t.root,o=r.getResolver(this._key||e);return void 0===o?r.registerSingleton(this._key||e,n):o}}()},"P/zd":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return i}));var r=function(){function t(){}return t.prototype.getDialogContainer=function(){throw new Error("DialogRenderer must implement getDialogContainer().")},t.prototype.showDialog=function(t){throw new Error("DialogRenderer must implement showDialog().")},t.prototype.hideDialog=function(t){throw new Error("DialogRenderer must implement hideDialog().")},t}();function o(t){var e=new Error("Operation cancelled.");return e.wasCancelled=!0,e.output=t,e}function i(t){var e=new Error;return e.wasCancelled=!1,e.output=t,e}function s(t,e,n){return"function"==typeof t[e]?new Promise((function(r){r(t[e](n))})).then((function(t){return null==t||t})):Promise.resolve(!0)}var u=function(){function t(t,e,n,r){this.resolve=n,this.reject=r,this.settings=e,this.renderer=t}return t.prototype.releaseResources=function(t){var e=this;return s(this.controller.viewModel||{},"deactivate",t).then((function(){return e.renderer.hideDialog(e)})).then((function(){e.controller.unbind()}))},t.prototype.cancelOperation=function(){if(!this.settings.rejectOnCancel)return{wasCancelled:!0};throw o()},t.prototype.ok=function(t){return this.close(!0,t)},t.prototype.cancel=function(t){return this.close(!1,t)},t.prototype.error=function(t){var e=this,n=i(t);return this.releaseResources(n).then((function(){e.reject(n)}))},t.prototype.close=function(t,e){var n=this;if(this.closePromise)return this.closePromise;var r={wasCancelled:!t,output:e};return this.closePromise=s(this.controller.viewModel||{},"canDeactivate",r).catch((function(t){return n.closePromise=void 0,Promise.reject(t)})).then((function(i){return i?n.releaseResources(r).then((function(){return!n.settings.rejectOnCancel||t?n.resolve(r):n.reject(o(e)),{wasCancelled:!1}})).catch((function(t){return n.closePromise=void 0,Promise.reject(t)})):(n.closePromise=void 0,n.cancelOperation())}))},t.inject=[r],t}()},"aurelia-dialog":function(t,e,n){"use strict";n.r(e),n.d(e,"DefaultDialogSettings",(function(){return u})),n.d(e,"DialogConfiguration",(function(){return h})),n.d(e,"DialogService",(function(){return d})),n.d(e,"configure",(function(){return g}));var r=n("P/zd");n.d(e,"DialogController",(function(){return r.d})),n.d(e,"Renderer",(function(){return r.a})),n.d(e,"createDialogCancelError",(function(){return r.b})),n.d(e,"createDialogCloseError",(function(){return r.e}));var o=n("70NS"),i=n("3U8n"),s=n("hij8"),u=function(){this.lock=!0,this.startingZIndex=1e3,this.centerHorizontalOnly=!1,this.rejectOnCancel=!1,this.ignoreTransitions=!1,this.restoreFocus=function(t){return t.focus()}},a={ux:function(){return n.e(0).then(n.bind(null,"yfWE")).then((function(t){return t.DialogRenderer}))},native:function(){return n.e(0).then(n.bind(null,"MzFQ")).then((function(t){return t.NativeDialogRenderer}))}},c={"ux-dialog":function(){return n.e(0).then(n.bind(null,"mbV6")).then((function(t){return t.UxDialog}))},"ux-dialog-header":function(){return n.e(0).then(n.bind(null,"kAWR")).then((function(t){return t.UxDialogHeader}))},"ux-dialog-body":function(){return n.e(0).then(n.bind(null,"K1pw")).then((function(t){return t.UxDialogBody}))},"ux-dialog-footer":function(){return n.e(0).then(n.bind(null,"It9J")).then((function(t){return t.UxDialogFooter}))},"attach-focus":function(){return n.e(0).then(n.bind(null,"e1DJ")).then((function(t){return t.AttachFocus}))}},l=function(){return n.e(0).then(n.bind(null,"em5G")).then((function(t){return t.default}))},h=function(){function t(t,e){var n=this;this.renderer="ux",this.cssText=l,this.resources=[],this.fwConfig=t,this.settings=t.container.get(u),e((function(){return n._apply()}))}return t.prototype._apply=function(){var t=this,e=this.renderer,n=this.cssText;return Promise.all(["string"==typeof e?a[e]():e,n?"string"==typeof n?n:n():""]).then((function(e){var n=e[0],i=e[1],s=t.fwConfig;return s.transient(r.a,n),i&&o.b.injectStyles(i),Promise.all(t.resources.map((function(t){return c[t]()}))).then((function(t){s.globalResources(t)}))}))},t.prototype.useDefaults=function(){return this.useRenderer("ux").useCSS(l).useStandardResources()},t.prototype.useStandardResources=function(){return Object.keys(c).forEach(this.useResource,this),this},t.prototype.useResource=function(t){return this.resources.push(t),this},t.prototype.useRenderer=function(t,e){return this.renderer=t,e&&Object.assign(this.settings,e),this},t.prototype.useCSS=function(t){return this.cssText=t,this},t}();function f(t,e){return this.then((function(t){return t.wasCancelled?t:t.closeResult})).then(t,e)}var d=function(){function t(t,e,n){this.controllers=[],this.hasOpenDialog=!1,this.hasActiveDialog=!1,this.container=t,this.compositionEngine=e,this.defaultSettings=n}return t.prototype.validateSettings=function(t){if(!t.viewModel&&!t.view)throw new Error('Invalid Dialog Settings. You must provide "viewModel", "view" or both.')},t.prototype.createCompositionContext=function(t,e,n){return{container:t.parent,childContainer:t,bindingContext:null,viewResources:null,model:n.model,view:n.view,viewModel:n.viewModel,viewSlot:new s.r(e,!0),host:e}},t.prototype.ensureViewModel=function(t){return"object"==typeof t.viewModel?Promise.resolve(t):this.compositionEngine.ensureViewModel(t)},t.prototype._cancelOperation=function(t){if(!t)return{wasCancelled:!0};throw Object(r.b)()},t.prototype.composeAndShowDialog=function(t,e){var n=this;return t.viewModel||(t.bindingContext={controller:e}),this.compositionEngine.compose(t).then((function(t){return e.controller=t,e.renderer.showDialog(e).then((function(){n.controllers.push(e),n.hasActiveDialog=n.hasOpenDialog=!!n.controllers.length}),(function(e){return t.viewModel&&Object(r.c)(t.viewModel,"deactivate"),Promise.reject(e)}))}))},t.prototype.createSettings=function(t){return"boolean"==typeof(t=Object.assign({},this.defaultSettings,t)).keyboard||t.keyboard||(t.keyboard=!t.lock),"boolean"!=typeof t.overlayDismiss&&(t.overlayDismiss=!t.lock),Object.defineProperty(t,"rejectOnCancel",{writable:!1,configurable:!0,enumerable:!0}),this.validateSettings(t),t},t.prototype.open=function(t){var e=this;void 0===t&&(t={});var n,o,i=(t=this.createSettings(t)).childContainer||this.container.createChild(),s=new Promise((function(t,e){n=t,o=e})),u=i.invoke(r.d,[t,n,o]);i.registerInstance(r.d,u),s.then((function(){p(e,u)}),(function(){p(e,u)}));var a,c=this.createCompositionContext(i,u.renderer.getDialogContainer(),u.settings),l=this.ensureViewModel(c).then((function(t){return!t.viewModel||Object(r.c)(t.viewModel,"canActivate",u.settings.model)})).then((function(t){return t?e.composeAndShowDialog(c,u).then((function(){return{controller:u,closeResult:s,wasCancelled:!1}})):e._cancelOperation(u.settings.rejectOnCancel)}));return(a=l).whenClosed=f,a},t.prototype.closeAll=function(){return Promise.all(this.controllers.slice(0).map((function(t){return t.settings.rejectOnCancel?t.cancel().then((function(){return null})).catch((function(e){if(e.wasCancelled)return t;throw e})):t.cancel().then((function(e){return e.wasCancelled?t:null}))}))).then((function(t){return t.filter((function(t){return!!t}))}))},t.inject=[i.a,s.e,u],t}();function p(t,e){var n=t.controllers.indexOf(e);-1!==n&&(t.controllers.splice(n,1),t.hasActiveDialog=t.hasOpenDialog=!!t.controllers.length)}function g(t,e){var n=null,r=new h(t,(function(t){n=t}));return"function"==typeof e?e(r):r.useDefaults(),n()}},"aurelia-event-aggregator":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"configure",(function(){return a}));var r=n("MP1E").getLogger("event-aggregator"),o=function(){function t(t,e){this.messageType=t,this.callback=e}return t.prototype.handle=function(t){t instanceof this.messageType&&this.callback.call(null,t)},t}();function i(t,e,n){try{t(e,n)}catch(t){r.error(t)}}function s(t,e){try{t.handle(e)}catch(t){r.error(t)}}var u=function(){function t(){this.eventLookup={},this.messageHandlers=[]}return t.prototype.publish=function(t,e){var n=void 0,r=void 0;if(!t)throw new Error("Event was invalid.");if("string"==typeof t){if(n=this.eventLookup[t])for(r=(n=n.slice()).length;r--;)i(n[r],e,t)}else for(r=(n=this.messageHandlers.slice()).length;r--;)s(n[r],t)},t.prototype.subscribe=function(t,e){var n=void 0,r=void 0;if(!t)throw new Error("Event channel/type was invalid.");return"string"==typeof t?(n=e,r=this.eventLookup[t]||(this.eventLookup[t]=[])):(n=new o(t,e),r=this.messageHandlers),r.push(n),{dispose:function(){var t=r.indexOf(n);-1!==t&&r.splice(t,1)}}},t.prototype.subscribeOnce=function(t,e){var n=this.subscribe(t,(function(t,r){return n.dispose(),e(t,r)}));return n},t}();function a(t){var e,n;t.instance(u,(e=t.aurelia,n=new u,e.subscribeOnce=function(t,e){return n.subscribeOnce(t,e)},e.subscribe=function(t,e){return n.subscribe(t,e)},e.publish=function(t,e){n.publish(t,e)},n))}},"aurelia-framework":function(t,e,n){"use strict";n.d(e,"Aurelia",(function(){return f}));var r=n("MP1E"),o=n("3U8n"),i=n("ZdUM"),s=n("hij8"),u=n("70NS"),a=n("iD3O");n.d(e,"d",(function(){return o.a})),n.d(e,"g",(function(){return o.b})),n.d(e,"i",(function(){return o.d})),n.d(e,"o",(function(){return o.e})),n.d(e,"u",(function(){return o.f})),n.d(e,"z",(function(){return o.h}));var c=n("X5gX");n.d(e,"b",(function(){return c.f})),n.d(e,"c",(function(){return c.g})),n.d(e,"h",(function(){return c.t})),n.d(e,"q",(function(){return c.A})),n.d(e,"r",(function(){return c.C})),n.d(e,"w",(function(){return c.J})),n.d(e,"B",(function(){return c.N}));n("qrcG");n.d(e,"f",(function(){return s.g})),n.d(e,"l",(function(){return s.n})),n.d(e,"m",(function(){return s.q})),n.d(e,"n",(function(){return s.r})),n.d(e,"p",(function(){return s.s})),n.d(e,"s",(function(){return s.t})),n.d(e,"t",(function(){return s.u})),n.d(e,"v",(function(){return s.w})),n.d(e,"x",(function(){return s.x})),n.d(e,"y",(function(){return s.y})),n.d(e,"A",(function(){return s.C}));var l=n("K/SW");n.d(e,"k",(function(){return l.a})),n.d(e,"e",(function(){return u.b})),n.d(e,"j",(function(){return u.d}));var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var f=function(){function t(e,n,a){this.loader=e||new u.d.Loader,this.container=n||(new o.a).makeGlobal(),this.resources=a||new s.q,this.use=new k(this),this.logger=r.getLogger("aurelia"),this.hostConfigured=!1,this.host=null,this.use.instance(t,this),this.use.instance(i.a,this.loader),this.use.instance(s.q,this.resources)}return t.prototype.start=function(){var t=this;return this._started?this._started:(this.logger.info("Aurelia Starting"),this._started=this.use.apply().then((function(){if(u.b.addEventListener("submit",(function(t){var e=t.target,n=e.action;"form"!==e.tagName.toLowerCase()||n||t.preventDefault()})),!t.container.hasResolver(s.c)){var e="You must configure Aurelia with a BindingLanguage implementation.";throw t.logger.error(e),new Error(e)}t.logger.info("Aurelia Started");var n=u.b.createCustomEvent("aurelia-started",{bubbles:!0,cancelable:!0});return u.b.dispatchEvent(n),t})))},t.prototype.enhance=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this._configureHost(n||u.b.querySelectorAll("body")[0]),new Promise((function(n){var r=t.container.get(s.l);t.root=r.enhance({container:t.container,element:t.host,resources:t.resources,bindingContext:e}),t.root.attached(),t._onAureliaComposed(),n(t)}))},t.prototype.setRoot=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r={};this.root&&this.root.viewModel&&this.root.viewModel.router&&(this.root.viewModel.router.deactivate(),this.root.viewModel.router.reset()),this._configureHost(n);var o=this.container.get(s.l),i=this.container.get(s.f);return delete i.initialComposition,e||(e=this.configModuleId?Object(a.d)("./app",this.configModuleId):"app"),r.viewModel=e,r.container=r.childContainer=this.container,r.viewSlot=this.hostSlot,r.host=this.host,o.compose(r).then((function(e){return t.root=e,r.viewSlot.attached(),t._onAureliaComposed(),t}))},t.prototype._configureHost=function(t){if(!this.hostConfigured){if(t=t||this.host,this.host=t&&"string"!=typeof t?t:u.b.getElementById(t||"applicationHost"),!this.host)throw new Error("No applicationHost was specified.");this.hostConfigured=!0,this.host.aurelia=this,this.hostSlot=new s.r(this.host,!0),this.hostSlot.transformChildNodesIntoView(),this.container.registerInstance(u.b.boundary,this.host)}},t.prototype._onAureliaComposed=function(){var t=u.b.createCustomEvent("aurelia-composed",{bubbles:!0,cancelable:!0});setTimeout((function(){return u.b.dispatchEvent(t)}),1)},t}(),d=r.getLogger("aurelia"),p=/\.[^/.]+$/;function g(t,e){var n=void 0;return function r(){return(n=e.shift())?Promise.resolve(n(t)).then(r):Promise.resolve()}()}function v(t,e,n){if(0===Object.keys(e).length)return Promise.resolve();var r=t.container.get(s.o);return Promise.all(Object.keys(e).map((function(n){return function(e){var n=e.moduleId,r=y(n);o(n)&&(n=i(n));return t.loader.normalize(n,e.relativeTo).then((function(t){return{name:e.moduleId,importId:o(e.moduleId)?u(t,r):t}}))}(e[n])}))).then((function(t){var e=[],o=[];return t.forEach((function(t){e.push(void 0),o.push(t.importId)})),r.importViewResources(o,e,n)}));function o(t){var e=y(t);return!!e&&(""!==e&&(".js"!==e&&".ts"!==e))}function i(t){return t.replace(p,"")}function u(t,e){return i(t)+"."+e}}function y(t){var e=t.match(p);if(e&&e.length>0)return e[0].split(".")[1]}function m(t){return Promise.all(t.behaviorsToLoad.map((function(e){return e.load(t.container,e.target)}))).then((function(){t.behaviorsToLoad=null}))}function b(t){if(t.processed)throw new Error("This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.")}function w(t,e){return"Invalid "+e+" ["+t+"], "+e+" must be specified as functions or relative module IDs."}var k=function(){function t(t){var e=this;this.aurelia=t,this.container=t.container,this.info=[],this.processed=!1,this.preTasks=[],this.postTasks=[],this.behaviorsToLoad=[],this.configuredPlugins=[],this.resourcesToLoad={},this.preTask((function(){return t.loader.normalize("aurelia-bootstrapper").then((function(t){return e.bootstrapperName=t}))})),this.postTask((function(){return v(t,e.resourcesToLoad,t.resources)}))}return t.prototype.instance=function(t,e){return this.container.registerInstance(t,e),this},t.prototype.singleton=function(t,e){return this.container.registerSingleton(t,e),this},t.prototype.transient=function(t,e){return this.container.registerTransient(t,e),this},t.prototype.preTask=function(t){return b(this),this.preTasks.push(t),this},t.prototype.postTask=function(t){return b(this),this.postTasks.push(t),this},t.prototype.feature=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(void 0===t?"undefined":h(t)){case"string":var n=/\/index$/i.test(t),r=n||y(t)?t:t+"/index",o=n?t.substr(0,t.length-6):t;this.info.push({moduleId:r,resourcesRelativeTo:[o,""],config:e});break;case"function":this.info.push({configure:t,config:e||{}});break;default:throw new Error(w(t,"feature"))}return this},t.prototype.globalResources=function(t){var e=this;b(this);for(var n=Array.isArray(t)?t:arguments,r=void 0,o=this.resourcesRelativeTo||["",""],i=0,u=n.length;i<u;++i)switch(void 0===(r=n[i])?"undefined":h(r)){case"string":var c=o[0],l=o[1],f=r;(r.startsWith("./")||r.startsWith("../"))&&""!==c&&(f=Object(a.b)(c,r)),this.resourcesToLoad[f]={moduleId:f,relativeTo:l};break;case"function":var d=this.aurelia.resources.autoRegister(this.container,r);d instanceof s.h&&null!==d.elementName&&1===this.behaviorsToLoad.push(d)&&this.postTask((function(){return m(e)}));break;default:throw new Error(w(r,"resource"))}return this},t.prototype.globalName=function(t,e){return b(this),this.resourcesToLoad[t]={moduleId:e,relativeTo:""},this},t.prototype.plugin=function(t,e){b(this);var n=void 0;switch(void 0===t?"undefined":h(t)){case"string":n={moduleId:t,resourcesRelativeTo:[t,""],config:e||{}};break;case"function":n={configure:t,config:e||{}};break;default:throw new Error(w(t,"plugin"))}return this.info.push(n),this},t.prototype._addNormalizedPlugin=function(t,e){var n=this,r={moduleId:t,resourcesRelativeTo:[t,""],config:e||{}};return this.info.push(r),this.preTask((function(){var e=[t,n.bootstrapperName];return r.moduleId=t,r.resourcesRelativeTo=e,Promise.resolve()})),this},t.prototype.defaultBindingLanguage=function(){return this._addNormalizedPlugin("aurelia-templating-binding")},t.prototype.router=function(){return this._addNormalizedPlugin("aurelia-templating-router")},t.prototype.history=function(){return this._addNormalizedPlugin("aurelia-history-browser")},t.prototype.defaultResources=function(){return this._addNormalizedPlugin("aurelia-templating-resources")},t.prototype.eventAggregator=function(){return this._addNormalizedPlugin("aurelia-event-aggregator")},t.prototype.basicConfiguration=function(){return this.defaultBindingLanguage().defaultResources().eventAggregator()},t.prototype.standardConfiguration=function(){return this.basicConfiguration().history().router()},t.prototype.developmentLogging=function(t){var e=this,n=t?r.logLevel[t]:void 0;return void 0===n&&(n=r.logLevel.debug),this.preTask((function(){return e.aurelia.loader.normalize("aurelia-logging-console",e.bootstrapperName).then((function(t){return e.aurelia.loader.loadModule(t).then((function(t){r.addAppender(new t.ConsoleAppender),r.setLevel(n)}))}))})),this},t.prototype.apply=function(){var t=this;return this.processed?Promise.resolve():g(this,this.preTasks).then((function(){var e=t.aurelia.loader,n=t.info,r=void 0;return function o(){return(r=n.shift())?function(t,e,n){if(d.debug("Loading plugin "+n.moduleId+"."),"string"==typeof n.moduleId){t.resourcesRelativeTo=n.resourcesRelativeTo;var r=n.moduleId;return n.resourcesRelativeTo.length>1?e.normalize(n.moduleId,n.resourcesRelativeTo[1]).then((function(t){return o(t)})):o(r)}if("function"==typeof n.configure)return-1!==t.configuredPlugins.indexOf(n.configure)?Promise.resolve():(t.configuredPlugins.push(n.configure),Promise.resolve(n.configure.call(null,t,n.config||{})));throw new Error(w(n.moduleId||n.configure,"plugin"));function o(r){return e.loadModule(r).then((function(e){if("configure"in e)return-1!==t.configuredPlugins.indexOf(e.configure)?Promise.resolve():Promise.resolve(e.configure(t,n.config||{})).then((function(){t.configuredPlugins.push(e.configure),t.resourcesRelativeTo=null,d.debug("Configured plugin "+n.moduleId+".")}));t.resourcesRelativeTo=null,d.debug("Loaded plugin "+n.moduleId+".")}))}}(t,e,r).then(o):(t.processed=!0,t.configuredPlugins=null,Promise.resolve())}().then((function(){return g(t,t.postTasks)}))}))},t}()},"aurelia-history-browser":function(t,e,n){"use strict";n.d(e,"configure",(function(){return g}));var r=n("eP1p"),o=n("70NS"),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function s(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var u=function(){function t(){}return t.prototype.activate=function(t){},t.prototype.deactivate=function(){},t}(),a=function(t){function e(){var n=t.call(this)||this;return n.handler=function(t){var r=e.getEventInfo(t),o=r.shouldHandleEvent,i=r.href;o&&(t.preventDefault(),n.history.navigate(i))},n}return s(e,t),e.prototype.activate=function(t){t._hasPushState&&(this.history=t,o.b.addEventListener("click",this.handler,!0))},e.prototype.deactivate=function(){o.b.removeEventListener("click",this.handler,!0)},e.getEventInfo=function(t){var n=t,r={shouldHandleEvent:!1,href:null,anchor:null},o=e.findClosestAnchor(n.target);if(!o||!e.targetIsThisWindow(o))return r;if(c(o,"download")||c(o,"router-ignore")||c(o,"data-router-ignore"))return r;if(n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)return r;var i=o.getAttribute("href");r.anchor=o,r.href=i;var s=1===n.which,u=i&&!("#"===i.charAt(0)||/^[a-z]+:/i.test(i));return r.shouldHandleEvent=s&&u,r},e.findClosestAnchor=function(t){for(;t;){if("A"===t.tagName)return t;t=t.parentNode}},e.targetIsThisWindow=function(t){var e=t.getAttribute("target"),n=o.d.global;return!e||e===n.name||"_self"===e},e}(u),c=function(t,e){return t.hasAttribute(e)},l=function(t){function e(e){var n=t.call(this)||this;return n._isActive=!1,n._checkUrlCallback=n._checkUrl.bind(n),n.location=o.d.location,n.history=o.d.history,n.linkHandler=e,n}return s(e,t),e.prototype.activate=function(t){if(this._isActive)throw new Error("History has already been activated.");var e=this.history,n=!!t.pushState;this._isActive=!0;var r,i=this.options=Object.assign({},{root:"/"},this.options,t),s=this.root=("/"+i.root+"/").replace(f,"/"),u=this._wantsHashChange=!1!==i.hashChange,a=this._hasPushState=!!(i.pushState&&e&&e.pushState);if(a?r="popstate":u&&(r="hashchange"),o.d.addEventListener(r,this._checkUrlCallback),u&&n){var c=this.location,l=c.pathname.replace(/[^\/]$/,"$&/")===s;if(!a&&!l){var d=this.fragment=this._getFragment(null,!0);return c.replace(s+c.search+"#"+d),!0}if(a&&l&&c.hash){d=this.fragment=this._getHash().replace(h,"");e.replaceState({},o.b.title,s+d+c.search)}}if(this.fragment||(this.fragment=this._getFragment("")),this.linkHandler.activate(this),!i.silent)return this._loadUrl("")},e.prototype.deactivate=function(){var t=this._checkUrlCallback;o.d.removeEventListener("popstate",t),o.d.removeEventListener("hashchange",t),this._isActive=!1,this.linkHandler.deactivate()},e.prototype.getAbsoluteRoot=function(){var t,e,n,r=this.location;return""+(t=r.protocol,e=r.hostname,n=r.port,t+"//"+e+(n?":"+n:""))+this.root},e.prototype.navigate=function(t,e){var n=void 0===e?{}:e,r=n.trigger,i=void 0===r||r,s=n.replace,u=void 0!==s&&s,a=this.location;if(t&&p.test(t))return a.href=t,!0;if(!this._isActive)return!1;if(t=this._getFragment(t||""),this.fragment===t&&!u)return!1;this.fragment=t;var c=this.root+t;return""===t&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState?(c=c.replace("//","/"),this.history[u?"replaceState":"pushState"]({},o.b.title,c)):this._wantsHashChange?function(t,e,n){if(n){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}(a,t,u):a.assign(c),!i||this._loadUrl(t)},e.prototype.navigateBack=function(){this.history.back()},e.prototype.setTitle=function(t){o.b.title=t},e.prototype.setState=function(t,e){var n=this.history,r=Object.assign({},n.state),o=this.location,i=o.pathname,s=o.search,u=o.hash;r[t]=e,n.replaceState(r,null,""+i+s+u)},e.prototype.getState=function(t){return Object.assign({},this.history.state)[t]},e.prototype.getHistoryIndex=function(){var t=this.getState("HistoryIndex");return void 0===t&&(t=this.history.length-1,this.setState("HistoryIndex",t)),t},e.prototype.go=function(t){this.history.go(t)},e.prototype._getHash=function(){return this.location.hash.substr(1)},e.prototype._getFragment=function(t,e){var n;if(!t)if(this._hasPushState||!this._wantsHashChange||e){var r=this.location;t=r.pathname+r.search,n=this.root.replace(d,""),t.indexOf(n)||(t=t.substr(n.length))}else t=this._getHash();return"/"+t.replace(h,"")},e.prototype._checkUrl=function(){this._getFragment("")!==this.fragment&&this._loadUrl("")},e.prototype._loadUrl=function(t){var e=this.fragment=this._getFragment(t);return!!this.options.routeHandler&&this.options.routeHandler(e)},e.inject=[u],e}(r.a),h=/^#?\/*|\s+$/g,f=/^\/+|\/+$/g,d=/\/$/,p=/^([a-z][a-z0-9+\-.]*:)?\/\//i;function g(t){var e=t;e.singleton(r.a,l),e.transient(u,a)}},eP1p:function(t,e,n){"use strict";function r(t){throw new Error("History must implement "+t+"().")}n.d(e,"a",(function(){return o}));var o=function(){function t(){}return t.prototype.activate=function(t){r("activate")},t.prototype.deactivate=function(){r("deactivate")},t.prototype.getAbsoluteRoot=function(){r("getAbsoluteRoot")},t.prototype.navigate=function(t,e){r("navigate")},t.prototype.navigateBack=function(){r("navigateBack")},t.prototype.setTitle=function(t){r("setTitle")},t.prototype.setState=function(t,e){r("setState")},t.prototype.getState=function(t){r("getState")},t.prototype.getHistoryIndex=function(){r("getHistoryIndex")},t.prototype.go=function(t){r("go")},t}()}}]);
//# sourceMappingURL=vendors~556c66f2.a6044437f6a704e2a830.bundle.map