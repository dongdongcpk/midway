"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9860],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(n),u=r,g=k["".concat(p,".").concat(u)]||k[u]||c[u]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8962:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="\u5185\u7f6e\u670d\u52a1",m={unversionedId:"built_in_service",id:"built_in_service",title:"\u5185\u7f6e\u670d\u52a1",description:"\u5728 Midway \u4e2d\uff0c\u63d0\u4f9b\u4e86\u4f17\u591a\u7684\u5185\u7f6e\u5bf9\u8c61\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\u3002",source:"@site/docs/built_in_service.md",sourceDirName:".",slug:"/built_in_service",permalink:"/docs/next/built_in_service",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/built_in_service.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Cookies \u548c Session",permalink:"/docs/next/cookie_session"},next:{title:"Web \u8def\u7531\u8868",permalink:"/docs/next/router_table"}},d=[{value:"MidwayApplicationManager",id:"midwayapplicationmanager",children:[],level:2},{value:"MidwayInformationService",id:"midwayinformationservice",children:[],level:2},{value:"MidwayEnvironmentService",id:"midwayenvironmentservice",children:[],level:2},{value:"MidwayConfigService",id:"midwayconfigservice",children:[],level:2},{value:"MidwayLoggerService",id:"midwayloggerservice",children:[],level:2},{value:"MidwayFrameworkService",id:"midwayframeworkservice",children:[],level:2},{value:"MidwayMiddlewareService",id:"midwaymiddlewareservice",children:[],level:2},{value:"MidwayDecoratorService",id:"midwaydecoratorservice",children:[],level:2},{value:"MidwayAspectService",id:"midwayaspectservice",children:[],level:2},{value:"MidwayLifeCycleService",id:"midwaylifecycleservice",children:[],level:2}],c={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5185\u7f6e\u670d\u52a1"},"\u5185\u7f6e\u670d\u52a1"),(0,l.kt)("p",null,"\u5728 Midway \u4e2d\uff0c\u63d0\u4f9b\u4e86\u4f17\u591a\u7684\u5185\u7f6e\u5bf9\u8c61\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u8282\uff0c\u6211\u4eec\u4f1a\u4ecb\u7ecd\u548c\u6846\u67b6\u76f8\u5173\u8054\u7684\u7684 Application\uff0cContext \u5bf9\u8c61\uff0cMidway \u9ed8\u8ba4\u5bb9\u5668\u4e0a\u7684\u4e00\u4e9b\u670d\u52a1\u5bf9\u8c61\uff0c\u8fd9\u4e9b\u5bf9\u8c61\u5728\u6574\u4e2a\u4e1a\u52a1\u7684\u5f00\u53d1\u4e2d\u90fd\u4f1a\u7ecf\u5e38\u9047\u5230\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b Midway \u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u5185\u7f6e\u7684\u670d\u52a1\uff0c\u8fd9\u4e9b\u670d\u52a1\u7531\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u521d\u59cb\u5316\uff0c\u5728\u4e1a\u52a1\u4e2d\u5168\u5c40\u53ef\u7528\u3002"),(0,l.kt)("h2",{id:"midwayapplicationmanager"},"MidwayApplicationManager"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u5e94\u7528\u7ba1\u7406\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b83\u83b7\u53d6\u5230\u6240\u6709\u7684 Application\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\uff0c\u6bd4\u5982\u5bf9\u4e0d\u540c\u7684 Application \u6dfb\u52a0\u540c\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midawyjs/decorator';\nimport { CustomMiddleware } from './middleware/custom.middleware';\n\n@Configuration({\n  // ...\n})\nexport class AutoConfiguration {\n  @Inject()\n  applicationManager: MidwayApplicationManager;\n\n  async onReady() {\n    this.applicationManager\n      .getApplications(['koa', 'faas', 'express', 'egg'])\n      .forEach(app => {\n        app.useMiddleware(CustomMiddleware);\n      });\n  }\n}\n\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getFramework(namespace: string)"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayFramework"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u53c2\u6570\u6307\u5b9a\u7684 framework")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getApplication(namespace: string)"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayApplication"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u53c2\u6570\u6307\u5b9a\u7684 Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getApplications(namespace: string[])"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayApplication[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u53c2\u6570\u6307\u5b9a\u7684\u591a\u4e2a Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getWebLikeApplication()"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayApplication[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u4f3c Web \u573a\u666f\u7684 Application\uff08express/koa/egg/faas)")))),(0,l.kt)("h2",{id:"midwayinformationservice"},"MidwayInformationService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u4fe1\u606f\u670d\u52a1\uff0c\u63d0\u4f9b\u57fa\u7840\u7684\u9879\u76ee\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayInformationService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  informationService: MidwayInformationService;\n\n  @Get('/')\n  async home() {\n    // this.informationService.getAppDir();\n  }\n}\n")),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u6765\u8fd4\u56de\u7528\u6237\u76f8\u5173\u7684\u76ee\u5f55\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getAppDir()"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5e94\u7528\u6839\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getBaseDir()"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5e94\u7528\u4ee3\u7801\u76ee\u5f55\uff0c\u9ed8\u8ba4\u672c\u5730\u5f00\u53d1\u4e3a src\uff0c\u670d\u52a1\u5668\u8fd0\u884c\u4e3a dist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getHome"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u673a\u5668\u7528\u6237\u76ee\u5f55\uff0c\u6307\u4ee3 ~ \u7684\u5730\u5740\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getPkg"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de package.json \u7684\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getRoot"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5f00\u53d1\u73af\u5883\uff0c\u8fd4\u56de appDir\uff0c\u5728\u5176\u4ed6\u73af\u5883\uff0c\u8fd4\u56de Home \u76ee\u5f55")))),(0,l.kt)("h2",{id:"midwayenvironmentservice"},"MidwayEnvironmentService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u73af\u5883\u670d\u52a1\uff0c\u63d0\u4f9b\u73af\u5883\u8bbe\u7f6e\u548c\u5224\u65ad\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayEnvironmentService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  environmentService: MidwayEnvironmentService;\n\n  @Get('/')\n  async home() {\n    // this.environmentService.getCurrentEnvironment();\n  }\n}\n")),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u6765\u83b7\u53d6\u5f53\u524d\u7684\u73af\u5883\uff0cAPI \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getCurrentEnvironment()"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5e94\u7528\u5f53\u524d\u73af\u5883")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setCurrentEnvironment()"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5f53\u524d\u73af\u5883")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDevelopmentEnvironment"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u662f\u5426\u662f\u5f00\u53d1\u73af\u5883")))),(0,l.kt)("h2",{id:"midwayconfigservice"},"MidwayConfigService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u591a\u73af\u5883\u914d\u7f6e\u670d\u52a1\uff0c\u63d0\u4f9b\u914d\u7f6e\u7684\u52a0\u8f7d\uff0c\u83b7\u53d6\uff0c\u5b83\u4e5f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"@Config")," \u88c5\u9970\u5668\u7684\u6570\u636e\u6e90\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayEnvironmentService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  configService: MidwayConfigService;\n\n  @Get('/')\n  async home() {\n    // this.configService.getConfiguration();\n  }\n}\n")),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u6765\u83b7\u53d6\u5f53\u524d\u7684\u914d\u7f6e\uff0cAPI \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addObject(obj)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6dfb\u52a0\u914d\u7f6e\u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getConfiguration()"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5f53\u524d\u5408\u5e76\u597d\u7684\u914d\u7f6e\u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clearAllConfig()"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e05\u7a7a\u6240\u6709\u914d\u7f6e")))),(0,l.kt)("h2",{id:"midwayloggerservice"},"MidwayLoggerService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u65e5\u5fd7\u670d\u52a1\uff0c\u63d0\u4f9b\u65e5\u5fd7\u521b\u5efa\uff0c\u83b7\u53d6\u7b49 API\uff0c\u5b83\u4e5f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"@Logger")," \u88c5\u9970\u5668\u7684\u6570\u636e\u6e90\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayEnvironmentService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  loggerService: MidwayLoggerService;\n\n  @Get('/')\n  async home() {\n    // this.loggerService.getLogger('logger');\n  }\n}\n")),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u6765\u83b7\u53d6\u65e5\u5fd7\u5bf9\u8c61\uff0cAPI \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createInstance(name, config)"),(0,l.kt)("td",{parentName:"tr",align:null},"ILogger"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u521b\u5efa\u4e00\u4e2a Logger \u5b9e\u4f8b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getLogger(name)"),(0,l.kt)("td",{parentName:"tr",align:null},"ILogger"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u65e5\u5fd7\u540d\u8fd4\u56de\u4e00\u4e2a Logger \u5b9e\u4f8b")))),(0,l.kt)("h2",{id:"midwayframeworkservice"},"MidwayFrameworkService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u6846\u67b6\u670d\u52a1\uff0c\u914d\u5408\u7ec4\u4ef6\u4e2d\u81ea\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Framework")," \u6807\u8bb0\u7684 Class\uff0c\u63d0\u4f9b\u4e0d\u540c\u534f\u8bae\u7684\u5bf9\u5916\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayEnvironmentService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  frameworkService: MidwayFrameworkService;\n\n  @Get('/')\n  async home() {\n    // this.frameworkService.getMainFramework();\n  }\n}\n")),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u6765\u83b7\u53d6 Framework \u5bf9\u8c61\uff0cAPI \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getMainFramework()"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayFramework"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e3b\u6846\u67b6\u5b9e\u4f8b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getMainApp()"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayApplication"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e3b\u6846\u67b6\u4e2d\u7684 app \u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getFramework(nameOrFrameworkType)"),(0,l.kt)("td",{parentName:"tr",align:null},"IMidwayFramework"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6846\u67b6\u540d\u6216\u8005\u6846\u67b6\u7c7b\u578b\u8fd4\u56de\u6846\u67b6\u5b9e\u4f8b")))),(0,l.kt)("h2",{id:"midwaymiddlewareservice"},"MidwayMiddlewareService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u4e2d\u95f4\u4ef6\u5904\u7406\u670d\u52a1\uff0c\u7528\u4e8e\u81ea\u5efa\u4e2d\u95f4\u4ef6\u7684\u5904\u7406\u3002"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\u670d\u52a1\uff0c\u7528\u4e8e\u5b9e\u73b0\u6846\u67b6\u5c42\u9762\u7684\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\uff0c\u4e00\u822c\u5728\u81ea\u5b9a\u4e49\u6846\u67b6\u65f6\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayAspectService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  middlewareService: MidwayMiddlewareService;\n\n  @Get('/')\n  async home() {\n    // this.middlewareService.compose(/** \u7701\u7565 **/);\n  }\n}\n")),(0,l.kt)("p",null,"API \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compose(middlewares, app, name?)"),(0,l.kt)("td",{parentName:"tr",align:null},"IMiddleawre"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u591a\u4e2a\u4e2d\u95f4\u4ef6\u6570\u7ec4\u7ec4\u5408\u5230\u4e00\u8d77\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4e2d\u95f4\u4ef6")))),(0,l.kt)("h2",{id:"midwaydecoratorservice"},"MidwayDecoratorService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\u670d\u52a1\uff0c\u7528\u4e8e\u5b9e\u73b0\u6846\u67b6\u5c42\u9762\u7684\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayAspectService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  decoratorService: MidwayDecoratorService;\n\n  @Get('/')\n  async home() {\n    // this.decoratorService.registerPropertyHandler(/** \u7701\u7565 **/);\n  }\n}\n")),(0,l.kt)("p",null,"API \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registerPropertyHandler(decoratorKey, handler)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u88c5\u9970\u5668\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registerMethodHandlerr(decoratorKey, handler)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5\u88c5\u9970\u5668\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registerParameterHandler(decoratorKey, handler)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e00\u4e2a\u53c2\u6570\u88c5\u9970\u5668\u5b9e\u73b0")))),(0,l.kt)("p",null,"\u5177\u4f53\u793a\u4f8b\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668")," \u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"midwayaspectservice"},"MidwayAspectService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u62e6\u622a\u5668\u670d\u52a1\uff0c\u7528\u4e8e\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"@Aspect")," \u76f8\u5173\u7684\u80fd\u529b\uff0c\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\u4e5f\u4f7f\u7528\u4e86\u8be5\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/decorator';\nimport { MidwayAspectService } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  lifeCycleService: MidwayLifeCycleService;\n\n  @Get('/')\n  async home() {\n    // this.aspectService.interceptPrototypeMethod(/** \u7701\u7565 **/);\n  }\n}\n")),(0,l.kt)("p",null,"API \u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addAspect(aspectInstance, aspectData)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e00\u4e2a\u62e6\u622a\u5668\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interceptPrototypeMethod(Clazz, methodName, aspectObject: IMethodAspect)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u62e6\u622a\u539f\u578b\u4e0a\u7684\u65b9\u6cd5\uff0c\u5c06\u62e6\u622a\u5668\u7684\u5b9e\u73b0\u6dfb\u52a0\u4e0a\u53bb")))),(0,l.kt)("h2",{id:"midwaylifecycleservice"},"MidwayLifeCycleService"),(0,l.kt)("p",null,"Midway \u5185\u7f6e\u7684\u751f\u547d\u5468\u671f\u8fd0\u884c\u670d\u52a1\uff0c\u7528\u4e8e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"configuration")," \u4e2d\u7684\u751f\u547d\u5468\u671f\u3002"),(0,l.kt)("p",null,"\u8be5\u670d\u52a1\u5747\u4e3a\u5185\u90e8\u65b9\u6cd5\uff0c\u7528\u6237\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u3002"))}k.isMDXComponent=!0}}]);