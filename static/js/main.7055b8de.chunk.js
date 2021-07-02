(this.webpackJsonpreissue=this.webpackJsonpreissue||[]).push([[0],{90:function(e,t,r){},91:function(e,t,r){"use strict";r.r(t);var n,c=r(1),a=r.n(c),s=r(18),o=r.n(s),i=r(25),u=r(22),l=r(93),j=r(2),d=function(){var e=Object(u.b)(),t=e.user,r=e.isAuthenticated,n=e.loginWithRedirect,c=e.logout;return Object(j.jsxs)("div",{className:"topbar",children:[r?Object(j.jsx)(l.a,{style:{float:"right"},onClick:function(){return c()},children:"Logout"}):Object(j.jsx)(l.a,{style:{float:"right"},onClick:function(){return n()},children:"Login"}),r?Object(j.jsxs)(j.Fragment,{children:[(null===t||void 0===t?void 0:t.picture)?Object(j.jsx)("img",{src:null===t||void 0===t?void 0:t.picture,alt:"Profile",className:"profile-picture"}):null,Object(j.jsxs)("p",{className:"greeting",children:["Welcome, ",null===t||void 0===t?void 0:t.name]})]}):null]})},b=r(10),h=r(96),p=r(52),m=r(35),f=r(49),O=function(e){switch(e.schema){case"gitlab":return Object(j.jsx)(m.c,{});case"github":return Object(j.jsx)(m.b,{});case"gitea":return Object(j.jsx)(f.a,{});default:return Object(j.jsx)(m.a,{})}},x=r(15),v=r(95),g=r(97),y=function(e){var t=Object(c.useState)(!1),r=Object(b.a)(t,2),n=r[0],a=r[1],s=Object(c.useState)({name:"",baseUrl:"",authToken:"",schema:"github"}),o=Object(b.a)(s,2),i=o[0],u=o[1],d=function(){a(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{onClick:function(){u({name:"",baseUrl:"",authToken:"",schema:"github"}),a(!0)},style:{position:"absolute",bottom:"1em",left:"1em",width:"calc(100% - 2em)"},children:"Add Project"}),Object(j.jsxs)(v.a,{show:n,onHide:d,children:[Object(j.jsx)(v.a.Header,{closeButton:!0,children:Object(j.jsx)(v.a.Title,{children:"Add Project"})}),Object(j.jsx)(v.a.Body,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(g.a.Group,{controlId:"formName",children:[Object(j.jsx)(g.a.Label,{children:"Name"}),Object(j.jsx)(g.a.Control,{type:"text",onChange:function(e){u(Object(x.a)(Object(x.a)({},i),{},{name:e.currentTarget.value}))}})]}),Object(j.jsxs)(g.a.Group,{controlId:"formBaseUrl",children:[Object(j.jsx)(g.a.Label,{children:"Base URL"}),Object(j.jsx)(g.a.Control,{type:"text",onChange:function(e){u(Object(x.a)(Object(x.a)({},i),{},{baseUrl:e.currentTarget.value.trim()}))}}),Object(j.jsx)(g.a.Text,{style:{color:"gray"},children:"https://api.github.com/repos/{owner}/{repo}"}),Object(j.jsx)(g.a.Text,{style:{color:"gray"},children:"https://gitlab.com/api/v4/projects/{project_id}"})]}),Object(j.jsxs)(g.a.Group,{controlId:"formAuthToken",children:[Object(j.jsx)(g.a.Label,{children:"Personal Access Token"}),Object(j.jsx)(g.a.Control,{type:"password",onChange:function(e){u(Object(x.a)(Object(x.a)({},i),{},{authToken:e.currentTarget.value.trim()}))}}),Object(j.jsxs)(g.a.Text,{style:{color:"gray"},children:["See ",Object(j.jsx)("a",{href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token",target:"_blank",rel:"noreferrer",children:"docs"})," on creating a personal access token."]})]}),Object(j.jsxs)(g.a.Group,{controlId:"formAuthToken",children:[Object(j.jsx)(g.a.Label,{children:"Schema"}),Object(j.jsxs)(g.a.Control,{as:"select",onChange:function(e){u(Object(x.a)(Object(x.a)({},i),{},{schema:e.currentTarget.value.trim()}))},children:[Object(j.jsx)("option",{children:"github"}),Object(j.jsx)("option",{children:"gitlab"}),Object(j.jsx)("option",{children:"gitea"}),Object(j.jsx)("option",{disabled:!0,children:"bitbucket"})]})]})]})}),Object(j.jsxs)(v.a.Footer,{children:[Object(j.jsx)(l.a,{variant:"secondary",onClick:d,children:"Close"}),Object(j.jsx)(l.a,{variant:"primary",onClick:function(){e.onSubmitNewProject(i),a(!1)},disabled:!(i.name&&i.baseUrl&&i.authToken),children:"Add Project"})]})]})]})},w=function(e){var t=e.controller,r=Object(c.useState)(t.getProjects()),n=Object(b.a)(r,2),a=n[0],s=n[1],o=Object(c.useState)(t.getSelectedProject()),i=Object(b.a)(o,2),u=i[0],l=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.a,{className:"flex-column",children:a.length?a.map((function(e){var r,n=!!u&&u.name===e.name;return Object(j.jsxs)(h.a.Link,{active:n,onClick:(r=e.name,function(){l(t.selectProject(r))}),children:[Object(j.jsx)(O,{schema:e.schema})," ",e.name]},e.name)})):Object(j.jsxs)("div",{style:{textAlign:"center",margin:"1em"},children:[Object(j.jsx)("span",{style:{color:"gray"},children:"Add your first project."}),Object(j.jsx)("div",{children:Object(j.jsx)(p.a,{size:"1.5em",color:"gray",style:{marginTop:"1.5em"}})})]})}),Object(j.jsx)(y,{onSubmitNewProject:function(e){t.createProject(e),s(t.getProjects())}})]})},k=r(24),C=r(11),P=r(12),I=r(54);!function(e){e[e.SetSelectedProject=0]="SetSelectedProject",e[e.SetNumProjects=1]="SetNumProjects",e[e.IncrementCreatedIssues=2]="IncrementCreatedIssues"}(n||(n={}));var S=function(e){return{type:n.SetSelectedProject,payload:e}},T={selectedProject:null,numProjects:0,numCreatedIssues:0},U=Object(I.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SetSelectedProject:return Object(x.a)(Object(x.a)({},e),{},{selectedProject:t.payload});case n.SetNumProjects:return Object(x.a)(Object(x.a)({},e),{},{numProjects:t.payload});case n.IncrementCreatedIssues:return Object(x.a)(Object(x.a)({},e),{},{numCreatedIssues:t.payload});default:return e}})),N=function(){function e(t){Object(C.a)(this,e),this.repo=void 0,this.repo=t}return Object(P.a)(e,[{key:"getProjects",value:function(){var e,t=this.repo.getProjects();return U.dispatch((e=t.length,{type:n.SetNumProjects,payload:e})),t}},{key:"createProject",value:function(e){return this.repo.createProject(e)}},{key:"getSelectedProject",value:function(){return U.getState().selectedProject}},{key:"selectProject",value:function(e){var t,r=this.getProjects(),n=Object(k.a)(r);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(c.name===e)return U.dispatch(S(c)),c}}catch(a){n.e(a)}finally{n.f()}return null}}]),e}(),A=r(21),B=function(){function e(){Object(C.a)(this,e)}return Object(P.a)(e,[{key:"getProjects",value:function(){var e=localStorage.getItem("projects");return e?JSON.parse(e).sort((function(e,t){return e.name<t.name?-1:1})):[]}},{key:"createProject",value:function(e){return localStorage.setItem("projects",JSON.stringify([].concat(Object(A.a)(this.getProjects()),[e]))),e}}]),e}(),F=function(e){return Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(w,{controller:new N(new B)})})},G=r(94),L=r(51),_=r(7),z=r.n(_),R=r(9),D=r(14),H=r.n(D),W=function(){function e(t,r){Object(C.a)(this,e),this.baseUrl=void 0,this.config=void 0,this.baseUrl=t,this.config={headers:{Authorization:"Bearer ".concat(r)}}}return Object(P.a)(e,[{key:"getIssues",value:function(){var e=Object(R.a)(z.a.mark((function e(){var t,r,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat(this.baseUrl,"/issues"),this.config);case 3:return t=e.sent,r=t.data,n=r.map((function(e){return{id:e.number,state:e.state,title:e.title,body:e.body,comments:e.comments}})),e.abrupt("return",n.filter((function(e){return"open"===e.state})));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not retrieve issues.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"createIssue",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){var n,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post("".concat(this.baseUrl,"/issues"),{title:t,body:r},this.config);case 3:return n=e.sent,c=n.data,a={id:c.number,state:c.state,title:c.title,body:c.body,comments:c.comments},e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not create an issues.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"closeIssue",value:function(){var e=Object(R.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.patch("".concat(this.baseUrl,"/issues/").concat(t),{state:"closed"},this.config);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not close an issues.")})));case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=function(){function e(t,r){Object(C.a)(this,e),this.baseUrl=void 0,this.config=void 0,this.baseUrl=t,this.config={headers:{Authorization:"Bearer ".concat(r)}}}return Object(P.a)(e,[{key:"getIssues",value:function(){var e=Object(R.a)(z.a.mark((function e(){var t,r,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get(this.baseUrl+"/issues?state=opened",this.config);case 3:return t=e.sent,r=t.data,n=r.map((function(e){return{id:e.iid,state:e.state,title:e.title,body:e.body,comments:null}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not retrieve your issues.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"createIssue",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){var n,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post(this.baseUrl+"/issues",{title:t,body:r},this.config);case 3:return n=e.sent,c=n.data,a={id:c.id,state:c.state,title:c.title,body:c.body,comments:null},e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not create an issues.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"closeIssue",value:function(){var e=Object(R.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.put("".concat(this.baseUrl,"/issues/").concat(t),{state_event:"close"},this.config);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not close an issues.")})));case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),J=function(){function e(){Object(C.a)(this,e),this.repo=void 0,this.repo=null}return Object(P.a)(e,[{key:"getIssues",value:function(){var e=U.getState().selectedProject;return e?"gitlab"===e.schema?new E(e.baseUrl,e.authToken).getIssues():new W(e.baseUrl,e.authToken).getIssues():new Promise((function(e,t){t("No project selected")}))}},{key:"createIssue",value:function(e,t){var r=U.getState().selectedProject;return r?"gitlab"===r.schema?new E(r.baseUrl,r.authToken).createIssue(e,t):new W(r.baseUrl,r.authToken).createIssue(e,t):new Promise((function(e,t){t("No project selected")}))}},{key:"closeIssue",value:function(e){var t=U.getState().selectedProject;return t?"gitlab"===t.schema?new E(t.baseUrl,t.authToken).closeIssue(e):new W(t.baseUrl,t.authToken).closeIssue(e):new Promise((function(e,t){t("No project selected")}))}}]),e}(),q=r(98),X=function(){function e(t,r){Object(C.a)(this,e),this.baseUrl=void 0,this.config=void 0,this.baseUrl=t,this.config={headers:{Authorization:"Bearer ".concat(r)}}}return Object(P.a)(e,[{key:"getComments",value:function(){var e=Object(R.a)(z.a.mark((function e(t){var r,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat(this.baseUrl,"/issues/").concat(t,"/comments"),this.config);case 3:return r=e.sent,n=r.data,c=n.map((function(e){return{id:e.id,body:e.body,createdAt:e.created_at,updatedAt:e.updated_at,author:{id:e.user.id,userName:e.user.login}}})),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not retrieve comments.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createComment",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){var n,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post("".concat(this.baseUrl,"/issues/").concat(t,"/comments"),{body:r},this.config);case 3:return n=e.sent,c=n.data,a={id:c.id,body:c.body,createdAt:c.created_at,updatedAt:c.updated_at,author:{id:c.user.id,userName:c.user.login}},e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not create comment.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteComment",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.delete("".concat(this.baseUrl,"/issues/comments/").concat(r),this.config);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not delete comment.")})));case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),K=function(){function e(t,r){Object(C.a)(this,e),this.baseUrl=void 0,this.config=void 0,this.baseUrl=t,this.config={headers:{Authorization:"Bearer ".concat(r)}}}return Object(P.a)(e,[{key:"getComments",value:function(){var e=Object(R.a)(z.a.mark((function e(t){var r,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat(this.baseUrl,"/issues/").concat(t,"/notes"),this.config);case 3:return r=e.sent,n=r.data,c=n.map((function(e){return{id:e.id,body:e.body,createdAt:e.created_at,updatedAt:e.updated_at,author:{id:e.author.id,userName:e.author.username}}})),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not retrieve comments.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createComment",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){var n,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post("".concat(this.baseUrl,"/issues/").concat(t,"/notes"),{body:r},this.config);case 3:return n=e.sent,c=n.data,a={id:c.id,body:c.body,createdAt:c.created_at,updatedAt:c.updated_at,author:{id:c.author.id,userName:c.author.username}},e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not create comments.")})));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteComment",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.delete("".concat(this.baseUrl,"/issues/").concat(t,"/notes/").concat(r),this.config);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",new Promise((function(e,t){t("Oops! Could not delete comment.")})));case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),M=function(){function e(){Object(C.a)(this,e)}return Object(P.a)(e,[{key:"getComments",value:function(e){var t=U.getState().selectedProject;if(t){var r=t.schema,n=t.baseUrl,c=t.authToken;return"gitlab"===r?new K(n,c).getComments(e):new X(n,c).getComments(e)}return new Promise((function(e,t){t("No project selected")}))}},{key:"createComment",value:function(e,t){var r=U.getState().selectedProject;if(r){var n=r.schema,c=r.baseUrl,a=r.authToken;return"gitlab"===n?new K(c,a).createComment(e,t):new X(c,a).createComment(e,t)}return new Promise((function(e,t){t("No project selected")}))}},{key:"deleteComment",value:function(e,t){var r=U.getState().selectedProject;if(r){var n=r.schema,c=r.baseUrl,a=r.authToken;return"gitlab"===n?new K(c,a).deleteComment(e,t):new X(c,a).deleteComment(e,t)}return new Promise((function(e,t){t("No project selected")}))}}]),e}(),Y=r(53),Z=r.n(Y),Q=function(e){var t=Z()(e.comment.createdAt).format("llll");return Object(j.jsx)(q.a,{style:{marginBottom:"1em"},children:Object(j.jsxs)(q.a.Body,{children:[Object(j.jsx)(l.a,{variant:"outline-danger",size:"sm",style:{float:"right"},onClick:function(){return e.onDeleteComment(e.comment.id)},children:"Delete"}),Object(j.jsx)(q.a.Text,{children:e.comment.body}),Object(j.jsxs)(q.a.Text,{style:{color:"gray"},children:[Object(j.jsx)("b",{children:e.comment.author.userName})," commented on ",t]})]})})},V=function(e){var t=Object(c.useState)([]),r=Object(b.a)(t,2),n=r[0],a=r[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),i=o[0],u=o[1],d=Object(c.useState)(null),h=Object(b.a)(d,2),p=h[0],m=h[1],f=Object(c.useState)([]),O=Object(b.a)(f,2),x=O[0],v=O[1];Object(c.useEffect)((function(){var t=function(){var t=Object(R.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=a,t.next=4,e.controller.getComments(e.issueId);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),m(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return m(null),t(),function(){a([]),m(null)}}),[e.controller,e.issueId]);var y=function(){var t=Object(R.a)(z.a.mark((function t(r){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),i.length){t.next=3;break}return t.abrupt("return");case 3:return t.t0=a,t.t1=[],t.t2=Object(A.a)(n),t.next=8,e.controller.createComment(e.issueId,i);case 8:t.t3=t.sent,t.t4=[t.t3],t.t5=t.t1.concat.call(t.t1,t.t2,t.t4),(0,t.t0)(t.t5),u("");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(R.a)(z.a.mark((function t(r){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.controller.deleteComment(e.issueId,r);case 2:t.sent&&v([].concat(Object(A.a)(x),[r]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return p?Object(j.jsx)("p",{children:p}):Object(j.jsxs)(j.Fragment,{children:[n.filter((function(e){var t,r=Object(k.a)(x);try{for(r.s();!(t=r.n()).done;){if(t.value===e.id)return!1}}catch(n){r.e(n)}finally{r.f()}return!0})).map((function(e){return Object(j.jsx)(Q,{comment:e,onDeleteComment:w},e.id)})),Object(j.jsx)(g.a,{onSubmit:y,children:Object(j.jsxs)(g.a.Group,{children:[Object(j.jsx)(g.a.Control,{style:{margin:"0 0 1em 0"},as:"textarea",placeholder:"Leave a comment.",value:i,onChange:function(e){u(e.currentTarget.value)}}),Object(j.jsx)(l.a,{type:"submit",size:"sm",children:"Comment"})]})})]})},$=function(e){var t=e.issue,r=e.onCloseIssue,n=Object(c.useState)(!1),a=Object(b.a)(n,2),s=a[0],o=a[1],i="";return null!==t.comments&&(i=" (".concat(t.comments,")")),Object(j.jsxs)(q.a,{style:{marginBottom:"1em"},children:[Object(j.jsxs)(q.a.Body,{children:[Object(j.jsx)(l.a,{variant:"outline-danger",size:"sm",style:{float:"right"},onClick:function(){return r(t.id)},children:"Close Issue"}),Object(j.jsx)(q.a.Text,{children:t.title}),t.body?Object(j.jsx)(q.a.Text,{style:{color:"gray"},children:t.body}):Object(j.jsx)(q.a.Text,{style:{color:"gray"},children:Object(j.jsx)("i",{children:"No description provided."})})]}),Object(j.jsx)(q.a.Footer,{children:s?Object(j.jsxs)("div",{children:[Object(j.jsx)(V,{issueId:t.id,controller:new M}),Object(j.jsx)("span",{className:"a text-primary",onClick:function(){return o(!1)},children:"Hide comments"})]}):Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"a text-primary",onClick:function(){return o(!0)},children:["Comments",i]})})})]})},ee=function(e){var t=e.controller,r=e.numIssues,n=Object(i.b)((function(e){return e})).selectedProject,a=Object(c.useState)([]),s=Object(b.a)(a,2),o=s[0],u=s[1],l=Object(c.useState)([]),d=Object(b.a)(l,2),h=d[0],p=d[1],m=Object(c.useState)(null),f=Object(b.a)(m,2),O=f[0],x=f[1];Object(c.useEffect)((function(){var e=function(){var e=Object(R.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(null),e.t0=u,e.next=5,t.getIssues();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),x(e.t2);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(null===n||void 0===n?void 0:n.name)&&e(),function(){u([]),x(null)}}),[t,null===n||void 0===n?void 0:n.name,r]);var v=function(){var e=Object(R.a)(z.a.mark((function e(r){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.closeIssue(r);case 2:e.sent&&p([].concat(Object(A.a)(h),[r]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return O?Object(j.jsx)("p",{className:"text-danger",children:O}):Object(j.jsx)(j.Fragment,{children:o.filter((function(e){var t,r=Object(k.a)(h);try{for(r.s();!(t=r.n()).done;){if(t.value===e.id)return!1}}catch(n){r.e(n)}finally{r.f()}return!0})).map((function(e){return Object(j.jsx)($,{issue:e,onCloseIssue:v},e.id)}))})},te=function(e){var t=Object(c.useState)(!1),r=Object(b.a)(t,2),n=r[0],a=r[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),i=o[0],u=o[1],d=Object(c.useState)(""),h=Object(b.a)(d,2),p=h[0],m=h[1],f=function(){a(!1)},O=function(){var t=Object(R.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.controller.createIssue(i,p);case 2:e.onCreatedNewIssue(),a(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{onClick:function(){u(""),m(""),a(!0)},style:{float:"right",marginRight:".5em"},children:"New Issue"}),Object(j.jsxs)(v.a,{show:n,onHide:f,children:[Object(j.jsx)(v.a.Header,{closeButton:!0,children:Object(j.jsx)(v.a.Title,{children:"Create Issue"})}),Object(j.jsx)(v.a.Body,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(g.a.Group,{controlId:"issueFormTitle",children:[Object(j.jsx)(g.a.Label,{children:"Title"}),Object(j.jsx)(g.a.Control,{type:"text",onChange:function(e){u(e.currentTarget.value)}})]}),Object(j.jsxs)(g.a.Group,{controlId:"issueFormBody",children:[Object(j.jsx)(g.a.Label,{children:"Description"}),Object(j.jsx)(g.a.Control,{as:"textarea",onChange:function(e){m(e.currentTarget.value.trim())}})]})]})}),Object(j.jsxs)(v.a.Footer,{children:[Object(j.jsx)(l.a,{variant:"secondary",onClick:f,children:"Close"}),Object(j.jsx)(l.a,{variant:"primary",onClick:O,disabled:!i,children:"Create Issue"})]})]})]})},re=function(){function e(){Object(C.a)(this,e)}return Object(P.a)(e,[{key:"createIssue",value:function(){var e=Object(R.a)(z.a.mark((function e(t,r){var c,a,s,o,i,u;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=U.getState().selectedProject)){e.next=12;break}if(a=c.baseUrl,s=c.authToken,"gitlab"!==c.schema){e.next=6;break}return o=new E(a,s),e.abrupt("return",o.createIssue(t,r));case 6:return i=new W(a,s),e.next=9,i.createIssue(t,r);case 9:return u=e.sent,U.dispatch({type:n.IncrementCreatedIssues,payload:1}),e.abrupt("return",u);case 12:return e.abrupt("return",new Promise((function(e,t){t("No project selected")})));case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),ne=function(){var e=Object(i.b)((function(e){return e})),t=e.selectedProject,r=e.numProjects,n=Object(c.useState)(0),a=Object(b.a)(n,2),s=a[0],o=a[1];return t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(G.a,{children:[Object(j.jsxs)(L.a,{md:6,children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)(O,{schema:t.schema})," ",t.name]}),Object(j.jsx)("p",{children:t.baseUrl})]}),Object(j.jsxs)(L.a,{children:[Object(j.jsx)(l.a,{style:{float:"right"},variant:"secondary",disabled:!0,children:"Project Settings"}),Object(j.jsx)(te,{controller:new re,onCreatedNewIssue:function(){return o(s+1)}})]})]}),Object(j.jsx)(ee,{numIssues:s,controller:new J})]}):r?Object(j.jsx)(j.Fragment,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h4",{children:["Welcome to ",Object(j.jsx)("b",{children:"ReIssue!"})]}),Object(j.jsxs)("p",{children:["ReIssue consolodates issue tracking from multiple repositories. So far its supports ",Object(j.jsx)("a",{href:"https://github.com",children:"Github"}),", ",Object(j.jsx)("a",{href:"https://gitlab.com",children:"Gitlab"})," and ",Object(j.jsx)("a",{href:"https://gitea.com",children:"Gitea"}),"."]}),Object(j.jsx)("p",{children:"Get started by adding your first project!"})]})},ce=function(){var e=Object(u.b)(),t=e.isAuthenticated,r=e.isLoading;return t?r?Object(j.jsx)("p",{children:"Loading..."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(F,{}),Object(j.jsx)("div",{style:{marginLeft:"15em",marginTop:"4em"},children:Object(j.jsx)(ne,{})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{style:{marginTop:"4em"},children:[Object(j.jsxs)("h4",{children:["Welcome to ",Object(j.jsx)("b",{children:"ReIssue!"})]}),Object(j.jsxs)("p",{children:["ReIssue consolodates issue tracking from multiple repositories. So far its supports ",Object(j.jsx)("a",{href:"https://github.com",children:"Github"}),", ",Object(j.jsx)("a",{href:"https://gitlab.com",children:"Gitlab"})," and ",Object(j.jsx)("a",{href:"https://gitea.com",children:"Gitea"}),"."]}),Object(j.jsx)("p",{children:"Get started by adding your first project!"})]})]})};r(89),r(90);o.a.render(Object(j.jsx)(u.a,{domain:"dev-qbsxo4re.auth0.com",clientId:"EYSIZKcUxrh9Xpqlm6WwjiezS6v6rfXI",redirectUri:window.location.origin+"/reissue",children:Object(j.jsx)(i.a,{store:U,children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ce,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.7055b8de.chunk.js.map