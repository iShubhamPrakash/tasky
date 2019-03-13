(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(22)},18:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),s=(t(18),t(11)),l=t(12),i=t(1),d=t(2),m=t(4),u=t(3),h=t(5),p=t(10),f=t.n(p),v=(t(21),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleDragStart=function(e,a){e.dataTransfer.setData("id",a.name)},t.handleOnDragOver=function(e){e.preventDefault()},t.handleOnDrop=function(e,a){e.preventDefault();var n=e.dataTransfer.getData("id"),r=t.state.tasks.filter(function(e){return e.name===n&&(e.category=a),e});t.setState(Object(l.a)({},t.state,{tasks:r}))},t.handleAdd=function(e,a){f()("Add a new task...",{content:"input"}).then(function(e){if(/\S/.test(e)){var n=[].concat(Object(s.a)(t.state.tasks),[{name:e,category:a}]);t.setState({tasks:n})}})},t.handleDelete=function(e,a){var n=t.state.tasks.filter(function(a){return a.name!==e});t.setState({tasks:n})},t.state={tasks:[{name:"Click + to add new task",category:"todo"},{name:"Drag task item to other categories",category:"todo"},{name:"Click cross to delete task",category:"todo"},{name:"code",category:"doing"},{name:"Task is saved locally",category:"done"},{name:"Do Project",category:"doing"},{name:"Say hi to developer at top right",category:"todo"}]},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log("Retriving notes from local storage...");var e=localStorage.getItem("tasky");e&&(e=JSON.parse(e),this.setState({tasks:e}))}},{key:"componentDidUpdate",value:function(){console.log("Updating the local storage..."),localStorage.setItem("tasky",JSON.stringify(this.state.tasks))}},{key:"render",value:function(){var e=this;console.log("render...");var a={todo:[],doing:[],done:[]};return this.state.tasks.forEach(function(t){a[t.category].push(r.a.createElement("div",{className:"task",key:t.name,draggable:!0,onDragStart:function(a){return e.handleDragStart(a,t)}},r.a.createElement("p",{className:"task-text"},t.name),r.a.createElement("span",{className:"task-controls",onClick:function(){return e.handleDelete(t.name,t.category)}},r.a.createElement("i",{className:"fa fa-plus"}))))}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"credit"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://linkedin.com/in/ishubhamprakash/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{href:"https://github.com/i-shubhamprakash",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("a",{href:"https://twitter.com/iSuvm",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter"})))),r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"h5"},r.a.createElement("i",{className:"fa fa-tasks"}," ")," Tasky")),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-md-4"},r.a.createElement(k,{tasks:a,handleOnDragOver:function(a){return e.handleOnDragOver(a)},handleOnDrop:function(a){return e.handleOnDrop(a,"todo")},handleAdd:function(a){return e.handleAdd(a,"todo")}})),r.a.createElement("div",{className:"col col-12 col-md-4"},r.a.createElement(O,{tasks:a,handleOnDragOver:function(a){return e.handleOnDragOver(a)},handleOnDrop:function(a){return e.handleOnDrop(a,"doing")},handleAdd:function(a){return e.handleAdd(a,"doing")}})),r.a.createElement("div",{className:"col col-12 col-md-4"},r.a.createElement(g,{tasks:a,handleOnDragOver:function(a){return e.handleOnDragOver(a)},handleOnDrop:function(a){return e.handleOnDrop(a,"done")},handleAdd:function(a){return e.handleAdd(a,"done")}})))))}}]),a}(n.Component)),k=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"task-container",onDragOver:function(a){return e.props.handleOnDragOver(a)},onDrop:function(a){return e.props.handleOnDrop(a)}},r.a.createElement("div",{className:"task-top"},r.a.createElement("p",null,"TODO")),r.a.createElement("div",{className:"task-holder"},r.a.createElement("div",{className:"todo-container"},this.props.tasks.todo)),r.a.createElement("div",{className:"add-task-container"},r.a.createElement("div",{className:"add-task",onClick:function(a){e.props.handleAdd(a)}},r.a.createElement("i",{className:"fa fa-plus"}))))}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"task-container",onDragOver:function(a){return e.props.handleOnDragOver(a)},onDrop:function(a){return e.props.handleOnDrop(a)}},r.a.createElement("div",{className:"task-top"},r.a.createElement("p",null,"DOING")),r.a.createElement("div",{className:"task-holder"},r.a.createElement("div",{className:"doing-container"},this.props.tasks.doing)),r.a.createElement("div",{className:"add-task-container"},r.a.createElement("div",{className:"add-task",onClick:function(a){e.props.handleAdd(a)}},r.a.createElement("i",{className:"fa fa-plus"}))))}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"task-container",onDragOver:function(a){return e.props.handleOnDragOver(a)},onDrop:function(a){return e.props.handleOnDrop(a)}},r.a.createElement("div",{className:"task-top"},r.a.createElement("p",null,"DONE")),r.a.createElement("div",{className:"task-holder"},r.a.createElement("div",{className:"done-container"},this.props.tasks.done)),r.a.createElement("div",{className:"add-task-container"},r.a.createElement("div",{className:"add-task",onClick:function(a){e.props.handleAdd(a)}},r.a.createElement("i",{className:"fa fa-plus"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.8bf49859.chunk.js.map