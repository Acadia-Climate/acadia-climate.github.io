(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{8293:function(e,t,n){Promise.resolve().then(n.bind(n,8768))},8768:function(e,t,n){"use strict";n.d(t,{AdminNav:function(){return m}});var r=n(5559),a=n(6898),s=n(4861),o=n(6908),i=n(5346),d=n(9584),l=n(6321);function c(e){let{href:t,children:n}=e,o=(0,s.usePathname)()===t?"text-foreground":"text-muted-foreground";return(0,r.jsx)(a.default,{href:t,className:"".concat(o," transition-colors hover:text-foreground"),children:n})}function u(){return[(0,r.jsx)(c,{href:"/admin/",children:"Admin"},1),(0,r.jsx)(c,{href:"/admin/accounts",children:"Manage Accounts"},2),(0,r.jsx)(c,{href:"/admin/loans",children:"Manage Loans"},3)]}function f(){return(0,r.jsxs)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6",children:[(0,r.jsxs)(a.default,{href:"/portal/",className:"flex items-center gap-2 text-lg font-semibold md:text-base",children:[(0,r.jsx)(o.Z,{className:"h-6 w-6"}),(0,r.jsx)("span",{className:"sr-only",children:"Acadia Corp."})]}),(0,r.jsx)(u,{})]})}function m(){return(0,r.jsxs)("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(f,{})}),(0,r.jsx)("div",{children:(0,r.jsxs)(l.DropdownMenu,{children:[(0,r.jsx)(l.DropdownMenuTrigger,{asChild:!0,children:(0,r.jsxs)(d.z,{variant:"secondary",size:"icon",className:"rounded-full",children:[(0,r.jsx)(i.Z,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle user menu"})]})}),(0,r.jsxs)(l.DropdownMenuContent,{align:"end",children:[(0,r.jsx)(l.DropdownMenuLabel,{children:"My Account"}),(0,r.jsx)(l.VD,{}),(0,r.jsx)(l.DropdownMenuItem,{children:"Settings"}),(0,r.jsx)(l.VD,{}),(0,r.jsx)(l.DropdownMenuItem,{children:(0,r.jsx)(a.default,{href:"/login",children:"Logout"})})]})]})})]})}},9584:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(5559),a=n(6763),s=n(6540),o=n(1815),i=n(9611);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:n,variant:a,size:o,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(d({variant:a,size:o,className:n})),ref:t,...c})});l.displayName="Button"},6321:function(e,t,n){"use strict";n.d(t,{DropdownMenu:function(){return c},DropdownMenuContent:function(){return f},DropdownMenuItem:function(){return m},DropdownMenuLabel:function(){return x},DropdownMenuTrigger:function(){return u},VD:function(){return h},bO:function(){return p}});var r=n(5559),a=n(6763),s=n(5699),o=n(5229),i=n(4358),d=n(2903),l=n(9611);let c=s.fC,u=s.xz;s.ZA,s.Uv,s.Tr,s.Ee,a.forwardRef((e,t)=>{let{className:n,inset:a,children:i,...d}=e;return(0,r.jsxs)(s.fF,{ref:t,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",a&&"pl-8",n),...d,children:[i,(0,r.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=s.fF.displayName,a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})}).displayName=s.tu.displayName;let f=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...o}=e;return(0,r.jsx)(s.Uv,{children:(0,r.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})})});f.displayName=s.VY.displayName;let m=a.forwardRef((e,t)=>{let{className:n,inset:a,...o}=e;return(0,r.jsx)(s.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",n),...o})});m.displayName=s.ck.displayName;let p=a.forwardRef((e,t)=>{let{className:n,children:a,checked:o,...d}=e;return(0,r.jsxs)(s.oC,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:o,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})}),a]})});p.displayName=s.oC.displayName,a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsxs)(s.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),a]})}).displayName=s.Rk.displayName;let x=a.forwardRef((e,t)=>{let{className:n,inset:a,...o}=e;return(0,r.jsx)(s.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",n),...o})});x.displayName=s.__.displayName;let h=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});h.displayName=s.Z0.displayName},9611:function(e,t,n){"use strict";n.d(t,{cn:function(){return s}});var r=n(2142),a=n(770);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},5346:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3041).Z)("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]])},6908:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3041).Z)("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]])},6898:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(1102),a=n.n(r)},4861:function(e,t,n){"use strict";var r=n(9984);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},1815:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(r&&(r+=" "),r+=t);return r},s=(e,t)=>n=>{var s;if((null==t?void 0:t.variants)==null)return a(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:i}=t,d=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],a=null==i?void 0:i[e];if(null===t)return null;let s=r(t)||r(a);return o[e][s]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return a(e,d,null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...l}[t]):({...i,...l})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[525,21,102,516,192,221,744],function(){return e(e.s=8293)}),_N_E=e.O()}]);