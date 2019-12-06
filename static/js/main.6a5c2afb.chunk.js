(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(29),l=a.n(s),r=(a(37),a(5)),o=a(6),i=a(8),m=a(7),u=a(9),p=(a(38),a(1)),d=a(12),f=a(2),h=a.n(f),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={tasks:[],completed_tasks:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:8080/api/v1/tasks/?is_completed=false").then((function(t){e.setState({tasks:t.data})})),h.a.get("http://localhost:8080/api/v1/tasks/?is_completed=true").then((function(t){e.setState({completed_tasks:t.data})}))}},{key:"deleteTask",value:function(e){var t=this;h.a.delete("http://localhost:8080/api/v1/tasks/".concat(e)).then((function(a){var n=t.state.tasks.findIndex((function(t){return t.id===e}));t.state.tasks.splice(n,1),t.props.history.push("/")}))}},{key:"deleteAction",value:function(e){var t=this;h.a.delete("http://localhost:8080/api/v1/actions/".concat(e)).then((function(e){t.componentDidMount()}))}},{key:"completeAction",value:function(e){var t=this;h.a.post("http://localhost:8080/api/v1/actions/".concat(e)).then((function(e){t.componentDidMount()}))}},{key:"completeTask",value:function(e){var t=this;h.a.post("http://localhost:8080/api/v1/tasks/".concat(e)).then((function(e){t.componentDidMount()}))}},{key:"render",value:function(){var e=this,t=this.state.tasks,a=this.state.completed_tasks,c=this;return n.createElement("div",null,n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t&&t.map((function(t){return n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"card",style:{marginBottom:"20px",marginTop:"20px"}},n.createElement("div",{className:"card-header"},t.is_completed?n.createElement("h5",{className:"card-title",style:{color:"green"}},"Task: ",t.name):n.createElement("h5",{className:"card-title",style:{color:"red"}},"Task: ",t.name)),n.createElement("div",{className:"card-body"},n.createElement("p",{className:"card-text"},t.is_completed),t.actions.map((function(e){return n.createElement("div",{className:"list-group"},"Task ID: ",t.id,e.is_completed?n.createElement("li",{className:"list-group-item clearfix",key:e.id,style:{color:"green"}},e.name,n.createElement("span",{className:"pull-right"},n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement(p.b,{to:"actions/".concat(e.id),className:"fa fa-pencil",style:{color:"#FBD786"},"aria-hidden":"true"})),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-trash",style:{color:"#F7797D"},"aria-hidden":"true",onClick:function(){return c.deleteAction(e.id)}}," ")),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-times",style:{color:"#C6FE2E"},"aria-hidden":"true",onClick:function(){return c.completeAction(e.id)}}," ")))):n.createElement("li",{className:"list-group-item clearfix",key:e.id,style:{color:"red"}},e.name,n.createElement("span",{className:"pull-right"},n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement(p.b,{to:"actions/".concat(e.id),className:"fa fa-pencil",style:{color:"#FBD786"},"aria-hidden":"true"})),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-trash",style:{color:"#F7797D"},"aria-hidden":"true",onClick:function(){return c.deleteAction(e.id)}}," ")),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-check",style:{color:"#C6FE2E"},"aria-hidden":"true",onClick:function(){return c.completeAction(e.id)}}," ")))))})),n.createElement("div",null,n.createElement("div",{className:"btn-group",style:{marginTop:"2%"}},n.createElement(p.b,{to:"tasks/".concat(t.id,"/actions/"),className:"card-link btn btn-sm",style:{background:"#00AAFF",color:"black",marginRight:"2%"}},"Add Action "),n.createElement(p.b,{to:"tasks/".concat(t.id),className:"card-link btn btn-sm",style:{background:"#FBD786",color:"black",marginRight:"2%"}},"Edit Task "),n.createElement("button",{className:"card-link btn btn-sm",style:{background:"#F7797D",color:"black",marginRight:"2%"},onClick:function(){return e.deleteTask(t.id)}},"Delete Task"),n.createElement("button",{className:"card-link btn btn-sm",style:{background:"#C6FE2E",color:"black"},onClick:function(){return e.completeTask(t.id)}},"Complete Task"))))))})),t&&a.map((function(t){return n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"card",style:{marginBottom:"20px",marginTop:"20px"}},n.createElement("div",{className:"card-header"},n.createElement("h5",{className:"card-title",style:{color:"green"}},"Task: ",t.name)),n.createElement("div",{className:"card-body"},n.createElement("p",{className:"card-text"},t.is_completed),t.actions.map((function(e){return n.createElement("div",{className:"list-group"},e.is_completed?n.createElement("li",{className:"list-group-item clearfix",key:e.id,style:{color:"green"}},e.name,n.createElement("span",{className:"pull-right"},n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement(p.b,{to:"actions/".concat(e.id),className:"fa fa-pencil",style:{color:"#FBD786"},"aria-hidden":"true"})),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement(p.b,{to:"actions/".concat(e.id),className:"fa fa-trash",style:{color:"#F7797D"},"aria-hidden":"true"})),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-times",style:{color:"#00AAFF"},"aria-hidden":"true",onClick:function(){return c.completeAction(e.id)}})))):n.createElement("li",{className:"list-group-item clearfix",key:e.id,style:{color:"red"}},e.name,n.createElement("span",{className:"pull-right"},n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement(p.b,{to:"actions/".concat(e.id),className:"fa fa-pencil",style:{color:"#FBD786"},"aria-hidden":"true"})),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-trash",style:{color:"#F7797D"},"aria-hidden":"true",onClick:function(){return c.deleteAction(e.id)}}," ")),n.createElement("span",{className:"btn btn-xs btn-default"},n.createElement("span",{className:"fa fa-check",style:{color:"#C6FE2E"},"aria-hidden":"true",onClick:function(){return c.completeAction(e.id)}}," ")))))})),n.createElement("div",null,n.createElement("div",{className:"btn-group",style:{marginTop:"2%"}},n.createElement(p.b,{to:"tasks/".concat(t.id,"/actions/"),className:"card-link btn btn-sm",style:{background:"#00AAFF",color:"black",marginRight:"2%"}},"Add Action "),n.createElement(p.b,{to:"tasks/".concat(t.id),className:"card-link btn btn-sm",style:{background:"#FBD786",color:"black",marginRight:"2%"}},"Edit Task "),n.createElement("button",{className:"card-link btn btn-sm",style:{background:"#F7797D",color:"black",marginRight:"2%"},onClick:function(){return e.deleteTask(t.id)}},"Delete Task"))))))})))))}}]),t}(n.Component),E=a(11),v=a(16),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).processFormSubmission=function(e){e.preventDefault(),a.setState({loading:!0});var t={name:a.state.name,is_completed:a.state.is_completed};a.setState({submitSuccess:!0,values:[].concat(Object(v.a)(a.state.values),[t]),loading:!1}),h.a.post("http://localhost:8080/api/v1/tasks/",t).then((function(e){return[setTimeout((function(){a.props.history.push("/")}),200)]}))},a.handleInputChanges=function(e){e.preventDefault(),a.setState(Object(E.a)({},e.currentTarget.name,e.currentTarget.value))},a.state={name:"",is_completed:!1,values:[],loading:!1,submitSuccess:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.submitSuccess,t.loading);return n.createElement("div",null,n.createElement("div",{className:"col-md-12 form-wrapper"},n.createElement("h2",null," Create Task "),n.createElement("form",{id:"create-post-form",onSubmit:this.processFormSubmission,noValidate:!0},n.createElement("div",{className:"row"},n.createElement("div",{className:"form-group col"},n.createElement("label",{htmlFor:"name"}," Task "),n.createElement("input",{type:"text",id:"name",onChange:function(t){return e.handleInputChanges(t)},name:"name",className:"form-control",placeholder:""}))),n.createElement("div",{className:"form-group pull-center",style:{alignItems:"center"}},n.createElement("button",{className:"btn btn-success",type:"submit"},"Create Tasks"),a&&n.createElement("span",{className:"fa fa-circle-o-notch fa-spin"})))))}}]),t}(n.Component),k=Object(d.f)(g),y=a(13),N=a.n(y),O=a(15);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).processFormSubmission=function(){var e=Object(O.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.setState({loading:!0}),h.a.put("http://localhost:8080/api/v1/tasks/".concat(a.state.id),a.state.values).then((function(e){a.setState({submitSuccess:!0,loading:!1}),setTimeout((function(){a.props.history.push("/")}),200)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.setValues=function(e){a.setState({values:S({},a.state.values,{},e)})},a.handleInputChanges=function(e){e.preventDefault(),a.setValues(Object(E.a)({},e.currentTarget.id,e.currentTarget.value))},a.state={id:a.props.match.params.id,task:{},values:[],loading:!1,submitSuccess:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:8080/api/v1/tasks/".concat(this.state.id)).then((function(t){e.setState({task:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.submitSuccess,c=t.loading;return n.createElement("div",{className:"App"},this.state.task&&n.createElement("div",null,n.createElement("h1",null," Task List Management App"),n.createElement("p",null," Built with React.js and TypeScript "),n.createElement("div",null,n.createElement("div",{className:"col-md-12 form-wrapper"},n.createElement("h2",null," Edit Task "),a&&n.createElement("div",{className:"alert alert-info",role:"alert"},"Tasks's details has been edited successfully "),n.createElement("form",{id:"create-post-form",onSubmit:this.processFormSubmission,noValidate:!0},n.createElement("div",{className:"form-group col-md-12"},n.createElement("label",{htmlFor:"name"}," Task's Name "),n.createElement("input",{type:"text",id:"name",defaultValue:this.state.task.name,onChange:function(t){return e.handleInputChanges(t)},name:"name",className:"form-control",placeholder:""})),n.createElement("div",{className:"form-group col-md-12"},n.createElement("label",{htmlFor:"last_name"}," Is Completed? "),n.createElement("input",{type:"checkbox",id:"is_completed",defaultValue:this.state.task.is_completed,onChange:function(t){return e.handleInputChanges(t)},name:"is_completed",className:"form-control",placeholder:""})),n.createElement("div",{className:"form-group col-md"},n.createElement("button",{className:"btn btn-success",type:"submit"},"Edit Task "),c&&n.createElement("span",{className:"fa fa-circle-o-notch fa-spin"})))))))}}]),t}(n.Component),T=Object(d.f)(C),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).processFormSubmission=function(e){e.preventDefault(),a.setState({loading:!0});var t={name:a.state.name,task_id:a.state.task_id,is_completed:a.state.is_completed};a.setState({submitSuccess:!0,values:[].concat(Object(v.a)(a.state.values),[t]),loading:!1}),h.a.post("http://localhost:8080/api/v1/tasks/".concat(t.task_id,"/actions"),t).then((function(e){return[setTimeout((function(){a.props.history.push("/")}),200)]}))},a.handleInputChanges=function(e){e.preventDefault(),a.setState(Object(E.a)({},e.currentTarget.name,e.currentTarget.value))},a.state={name:"",task_id:Object.values(a.props.match.params)[0],is_completed:!1,values:[],loading:!1,submitSuccess:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.submitSuccess,t.loading);return n.createElement("div",null,n.createElement("div",{className:"col-md-12 form-wrapper"},n.createElement("h2",null," Create Action "),n.createElement("form",{id:"create-post-form",onSubmit:this.processFormSubmission,noValidate:!0},n.createElement("div",{className:"row"},n.createElement("div",{className:"form-group col"},n.createElement("label",{htmlFor:"name"}," Action "),n.createElement("input",{type:"text",id:"name",onChange:function(t){return e.handleInputChanges(t)},name:"name",className:"form-control",placeholder:""}))),n.createElement("div",{className:"form-group pull-center",style:{alignItems:"center"}},n.createElement("button",{className:"btn btn-success",type:"submit"},"Create Action"),a&&n.createElement("span",{className:"fa fa-circle-o-notch fa-spin"})))))}}]),t}(n.Component),D=Object(d.f)(A);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).processFormSubmission=function(){var e=Object(O.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.setState({loading:!0}),console.log("AAAAAAAAAAAA"),console.log(a.state.values),console.log(a.state),0===a.state.values.length&&h.a.put("http://localhost:8080/api/v1/actions/".concat(a.state.id),a.state.action).then((function(e){a.setState({submitSuccess:!0,loading:!1}),setTimeout((function(){a.props.history.push("/")}),200)})),h.a.put("http://localhost:8080/api/v1/actions/".concat(a.state.id),a.state.values).then((function(e){a.setState({submitSuccess:!0,loading:!1}),setTimeout((function(){a.props.history.push("/")}),200)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.setValues=function(e){console.log(e),a.setState({values:F({},a.state.values,{},e)})},a.handleInputChanges=function(e){e.preventDefault(),a.setValues(Object(E.a)({},e.currentTarget.id,e.currentTarget.value))},a.state={id:a.props.match.params.id,action:{},values:[],loading:!1,submitSuccess:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:8080/api/v1/actions/".concat(this.state.id)).then((function(t){e.setState({action:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,a=(t.submitSuccess,t.loading);return n.createElement("div",{className:"App"},this.state.action&&n.createElement("div",null,n.createElement("div",{className:"col-md-12 form-wrapper"},n.createElement("h2",null," Edit Action "),n.createElement("form",{id:"create-post-form",onSubmit:this.processFormSubmission,noValidate:!0},n.createElement("div",{className:"form-group col-md-12"},n.createElement("label",{htmlFor:"name"}," Action's Name "),n.createElement("input",{type:"text",id:"name",defaultValue:this.state.action.name,onChange:function(t){return e.handleInputChanges(t)},name:"name",className:"form-control",placeholder:""})),n.createElement("div",{className:"form-group col-md"},n.createElement("button",{className:"btn btn-success",type:"submit"},"Edit Action "),a&&n.createElement("span",{className:"fa fa-circle-o-notch fa-spin"}))))))}}]),t}(n.Component),_=Object(d.f)(w),P=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("nav",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(p.b,{to:"/tasks"}," Create Task ")))),n.createElement(d.c,null,n.createElement(d.a,{path:"/",exact:!0,component:b}),n.createElement(d.a,{path:"/tasks",exact:!0,component:k}),n.createElement(d.a,{path:"/tasks/:id/actions",exact:!0,component:D}),n.createElement(d.a,{path:"/tasks/:id",exact:!0,component:T}),n.createElement(d.a,{path:"/actions/:id",exact:!0,component:_})))}}]),t}(n.Component),I=Object(d.f)(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(p.a,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6a5c2afb.chunk.js.map