(this.webpackJsonpreissue=this.webpackJsonpreissue||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),s=n(16),o=n.n(s),i=n(29),u=n(19),l=n(8),j=n.n(l),d=n(13),b=n(15),h=n(87),O=n(84),m=n(83),f=n(88),p=n(10),x=n(11),v=n(22),g=n.n(v),y=function(){function e(t,n){Object(p.a)(this,e),this.baseUrl=void 0,this.authToken=void 0,this.baseUrl=t,this.authToken=n}return Object(x.a)(e,[{key:"getComments",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(this.baseUrl+"/issues/".concat(t,"/comments"),{headers:{Authorization:"Bearer "+this.authToken}});case 2:return n=e.sent,e.abrupt("return",n.data.map((function(e){return{id:e.id,body:e.body,createdAt:e.created_at,updatedAt:e.updated_at,author:{id:e.user.id,userName:e.user.login}}})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createComment",value:function(){var e=Object(d.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post(this.baseUrl+"/issues/".concat(t,"/comments"),{body:n},{headers:{Authorization:"Bearer "+this.authToken}});case 2:return r=e.sent,c=r.data,e.abrupt("return",{id:c.id,body:c.body,createdAt:c.created_at,updatedAt:c.updated_at,author:{id:c.user.id,userName:c.user.login}});case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),k=n(17),w=n(49);function P(e){return{type:r.SetSelectedProject,payload:e}}!function(e){e[e.SetSelectedProject=0]="SetSelectedProject"}(r||(r={}));var T={selectedProject:null},S=Object(w.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SetSelectedProject:return Object(k.a)(Object(k.a)({},e),{},{selectedProject:t.payload});default:return e}})),C=function(){function e(){Object(p.a)(this,e)}return Object(x.a)(e,[{key:"getComments",value:function(e){var t=S.getState().selectedProject;return t?new y(t.baseUrl,t.authToken).getComments(e):new Promise((function(e,t){t("No project selected")}))}},{key:"createComment",value:function(e,t){var n=S.getState().selectedProject;return n?new y(n.baseUrl,n.authToken).createComment(e,t):new Promise((function(e,t){t("No project selected")}))}}]),e}(),A=n(44),U=n.n(A),I=n(2),N=function(e){var t=U()(e.comment.createdAt).format("llll");return Object(I.jsx)(f.a,{style:{marginBottom:"1em"},children:Object(I.jsxs)(f.a.Body,{children:[Object(I.jsx)(f.a.Text,{children:e.comment.body}),Object(I.jsxs)(f.a.Text,{children:[t," ",Object(I.jsx)("b",{children:e.comment.author.userName})]})]})})},B=function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),i=o[0],l=o[1];Object(c.useEffect)((function(){(function(){var t=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,e.controller.getComments(e.issueId);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}));var O=function(){var t=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.t0=a,t.t1=[],t.t2=Object(u.a)(r),t.next=6,e.controller.createComment(e.issueId,i);case 6:t.t3=t.sent,t.t4=[t.t3],t.t5=t.t1.concat.call(t.t1,t.t2,t.t4),(0,t.t0)(t.t5),l("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[r.map((function(e){return Object(I.jsx)(N,{comment:e})})),Object(I.jsx)(h.a,{onSubmit:O,children:Object(I.jsxs)(h.a.Group,{children:[Object(I.jsx)(h.a.Control,{style:{margin:"0 0 1em 0"},as:"textarea",placeholder:"Write your comment here...",value:i,onChange:function(e){l(e.currentTarget.value)}}),Object(I.jsx)(m.a,{type:"submit",children:"Add Comment"})]})})]})},L=function(e){return Object(I.jsxs)(f.a,{style:{marginBottom:"1em"},children:[Object(I.jsxs)(f.a.Body,{children:[Object(I.jsx)(f.a.Title,{children:e.title}),e.body?Object(I.jsx)(f.a.Text,{children:e.body}):Object(I.jsx)(f.a.Text,{children:Object(I.jsx)("i",{style:{color:"gray"},children:"No description provided."})})]}),Object(I.jsx)(f.a.Footer,{children:Object(I.jsx)(B,{issueId:e.id,controller:new C})})]})},F=function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),l=o[0],f=o[1],p=Object(i.b)((function(e){return e.selectedProject}));Object(c.useEffect)((function(){var t=function(){var t=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,e.controller.getIssues();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();a([]),t()}),[null===p||void 0===p?void 0:p.name]);var x=function(){var t=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.t0=a,t.t1=[],t.t2=Object(u.a)(r),t.next=6,e.controller.createIssue(l);case 6:t.t3=t.sent,t.t4=[t.t3],t.t5=t.t1.concat.call(t.t1,t.t2,t.t4),(0,t.t0)(t.t5),f("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[p?Object(I.jsx)(h.a,{style:{marginBottom:"1em"},onSubmit:x,children:Object(I.jsxs)(O.a,{children:[Object(I.jsx)(h.a.Control,{value:l,onChange:function(e){f(e.currentTarget.value)}}),Object(I.jsx)(O.a.Append,{children:Object(I.jsx)(m.a,{type:"submit",children:"Add Issue"})})]})}):null,r.map((function(e){return Object(I.jsx)(L,{id:e.id,title:e.title,body:e.body})}))]})},z=n(86),G=n(85),_=n(46),J=n(45),E=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)({name:"",baseUrl:"",authToken:"",schema:"github"}),o=Object(b.a)(s,2),i=o[0],u=o[1],l=function(){a(!1)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{onClick:function(){u({name:"",baseUrl:"",authToken:"",schema:"github"}),a(!0)},style:{position:"absolute",bottom:"1em",left:"1em",width:"calc(100% - 2em)"},children:"Add Project"}),Object(I.jsxs)(G.a,{show:r,onHide:l,children:[Object(I.jsx)(G.a.Header,{closeButton:!0,children:Object(I.jsx)(G.a.Title,{children:"Add Project"})}),Object(I.jsx)(G.a.Body,{children:Object(I.jsxs)(h.a,{children:[Object(I.jsxs)(h.a.Group,{controlId:"formName",children:[Object(I.jsx)(h.a.Label,{children:"Name"}),Object(I.jsx)(h.a.Control,{type:"text",onChange:function(e){u(Object(k.a)(Object(k.a)({},i),{},{name:e.currentTarget.value}))}})]}),Object(I.jsxs)(h.a.Group,{controlId:"formBaseUrl",children:[Object(I.jsx)(h.a.Label,{children:"Base URL"}),Object(I.jsx)(h.a.Control,{type:"text",onChange:function(e){u(Object(k.a)(Object(k.a)({},i),{},{baseUrl:e.currentTarget.value.trim()}))}}),Object(I.jsxs)(h.a.Text,{style:{color:"gray"},children:["e.g. ","https://api.github.com/repos/{owner}/{project}"]})]}),Object(I.jsxs)(h.a.Group,{controlId:"formAuthToken",children:[Object(I.jsx)(h.a.Label,{children:"Personal Access Token"}),Object(I.jsx)(h.a.Control,{type:"text",onChange:function(e){u(Object(k.a)(Object(k.a)({},i),{},{authToken:e.currentTarget.value.trim()}))}}),Object(I.jsxs)(h.a.Text,{style:{color:"gray"},children:["See ",Object(I.jsx)("a",{href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token",target:"_blank",children:"docs"})," on creating a personal access token."]})]}),Object(I.jsxs)(h.a.Group,{controlId:"formAuthToken",children:[Object(I.jsx)(h.a.Label,{children:"Schema"}),Object(I.jsxs)(h.a.Control,{as:"select",disabled:!0,children:[Object(I.jsx)("option",{children:"github"}),Object(I.jsx)("option",{children:"gitlab"})]})]})]})}),Object(I.jsxs)(G.a.Footer,{children:[Object(I.jsx)(m.a,{variant:"secondary",onClick:l,children:"Close"}),Object(I.jsx)(m.a,{variant:"primary",onClick:function(){e.onSubmitNewProject(i),a(!1)},disabled:!(i.name&&i.baseUrl&&i.authToken),children:"Add Project"})]})]})]})},D=function(e){var t=e.controller,n=Object(c.useState)(t.getProjects()),r=Object(b.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(t.getSelectedProject()),i=Object(b.a)(o,2),l=i[0],j=i[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(z.a,{className:"flex-column",children:a.length?a.map((function(e){var n,r=!!l&&l.name==e.name;return Object(I.jsxs)(z.a.Link,{active:r,eventKey:e.name,onClick:(n=e.name,function(){j(t.selectProject(n))}),children:[Object(I.jsx)(J.a,{})," ",e.name]})})):Object(I.jsxs)("div",{style:{textAlign:"center",margin:"1em"},children:[Object(I.jsx)("span",{style:{color:"gray"},children:"Add your first project."}),Object(I.jsx)("div",{children:Object(I.jsx)(_.a,{size:"1.5em",color:"gray",style:{marginTop:"1.5em"}})})]})}),Object(I.jsx)(E,{onSubmitNewProject:function(e){var n=t.createProject(e.name,e.baseUrl,e.authToken,e.schema);s([].concat(Object(u.a)(a),[n]))}})]})},H=n(48),K=function(){function e(t){Object(p.a)(this,e),this.repo=void 0,this.repo=t}return Object(x.a)(e,[{key:"getProjects",value:function(){return this.repo.getProjects()}},{key:"createProject",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"github";return this.repo.createProject(e,t,n,r)}},{key:"getSelectedProject",value:function(){return S.getState().selectedProject}},{key:"selectProject",value:function(e){var t,n=this.getProjects(),r=Object(H.a)(n);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(c.name==e)return S.dispatch(P(c)),c}}catch(a){r.e(a)}finally{r.f()}return null}}]),e}(),M=function(){function e(){Object(p.a)(this,e)}return Object(x.a)(e,[{key:"getProjects",value:function(){var e=localStorage.getItem("projects");return e?JSON.parse(e):[]}},{key:"createProject",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"github",c={name:e,baseUrl:t,authToken:n,schema:r};return localStorage.setItem("projects",JSON.stringify([].concat(Object(u.a)(this.getProjects()),[c]))),c}}]),e}(),R=function(e){return Object(I.jsx)("div",{className:"sidebar",children:Object(I.jsx)(D,{controller:new K(new M)})})},W=function(){function e(t,n){Object(p.a)(this,e),this.baseUrl=void 0,this.authToken=void 0,this.baseUrl=t,this.authToken=n}return Object(x.a)(e,[{key:"getIssues",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(this.baseUrl+"/issues",{headers:{Authorization:"Bearer "+this.authToken}});case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return{id:e.number,state:e.state,title:e.title,body:e.body}})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createIssue",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post(this.baseUrl+"/issues",{title:t},{headers:{Authorization:"Bearer "+this.authToken}});case 2:return n=e.sent,r=n.data,c=r.number,a=r.state,s=r.body,e.abrupt("return",{id:c,state:a,title:n.data.title,body:s});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),q=function(){function e(){Object(p.a)(this,e),this.repo=void 0,this.repo=null}return Object(x.a)(e,[{key:"getIssues",value:function(){var e=S.getState().selectedProject;return e?new W(e.baseUrl,e.authToken).getIssues():new Promise((function(e,t){t("No project selected")}))}},{key:"createIssue",value:function(e){var t=S.getState().selectedProject;return t?new W(t.baseUrl,t.authToken).createIssue(e):new Promise((function(e,t){t("No project selected")}))}}]),e}(),Q=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(R,{}),Object(I.jsx)("div",{style:{marginLeft:"16em"},children:Object(I.jsx)(F,{controller:new q})})]})};n(79),n(80);o.a.render(Object(I.jsx)(i.a,{store:S,children:Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(Q,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.a8cbba26.chunk.js.map