(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e){e.exports=[{key:"1",locality:"Irkutsk",system:"Billing",description:"Billing doesn't work in Irkutsk from 6 am",entryid:"000001",isopen:1,bdate:"2018-01-01 06:00:00",edate:""},{key:"2",locality:"Rostov-on-Don",system:"CRM",description:"There is something wrong with CRM sytem",entryid:"000002",isopen:0,bdate:"2018-02-01 09:00:00",edate:"2018-02-01 10:00:00"},{key:"3",locality:"Saransk",system:"Mail",description:"All users have a problem with mail",entryid:"000003",isopen:0,bdate:"2018-02-01 09:00:00",edate:"2018-02-01 10:00:00"},{key:"4",locality:"Chelyabinsk",system:"Internet",description:"Internet connection lost",entryid:"000004",isopen:0,bdate:"2018-02-01 09:00:00",edate:"2018-02-01 10:00:00"}]},135:function(e,t,n){},137:function(e,t,n){},187:function(e,t,n){e.exports=n(353)},353:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(9),l=n.n(i),o=(n(135),n(38)),c=n(39),s=n(30),u=n(40),d=n(41),m=n(358),p=(n(137),n(169)),f=n(362),v=n(72),b=n(360),h=[{dataIndex:"locality",title:"Locality (City)",visible:!0,required:!0,sorter:function(e,t){return(""+e.locality).localeCompare(t.locality)},onFilter:function(e,t){return 0===t.locality.indexOf(e)},filters:[{text:"Irkutsk",value:"Irkutsk"},{text:"Rostov",value:"Rostov"},{text:"Saransk",value:"Saransk"},{text:"Chelyabinsk",value:"Chelyabinsk"}],formComponent:r.a.createElement(p.a,null,r.a.createElement(p.a.Option,{value:"0"},"Irkutsk"),r.a.createElement(p.a.Option,{value:"1"},"Rostov-on-Don"),r.a.createElement(p.a.Option,{value:"2"},"Saransk"),r.a.createElement(p.a.Option,{value:"3"},"Chelyabinsk"))},{dataIndex:"system",title:"System name",visible:!0,required:!1,sorter:function(e,t){return e.system>t.system},formComponent:r.a.createElement(p.a,null,r.a.createElement(p.a.Option,{value:"0"},"BPM"),r.a.createElement(p.a.Option,{value:"1"},"CRM"),r.a.createElement(p.a.Option,{value:"2"},"Mail"),r.a.createElement(p.a.Option,{value:"3"},"Internet"))},{dataIndex:"description",title:"Description",visible:!1,required:!1,formComponent:r.a.createElement(f.a.TextArea,{autosize:{minRows:2}})},{dataIndex:"entryid",title:"BPM Ticket",visible:!0,required:!1,render:function(e){return r.a.createElement("a",{href:"https://bpmonline.com/?tt=".concat(e),target:"_blank",rel:"noreferrer noopener"},e)},formComponent:r.a.createElement(f.a,null)},{dataIndex:"isopen",title:"Is open?",visible:!0,required:!1,render:function(e,t){return r.a.createElement(v.a,{disabled:!0,checked:e})},sorter:function(e,t){return e.isopen-t.isopen},onFilter:function(e,t){return parseInt(e)===t.isopen},filters:[{text:"Open",value:1},{text:"Close",value:0}],formComponent:r.a.createElement(v.a,null)},{dataIndex:"bdate",title:"Date start",visible:!1,required:!1,formComponent:r.a.createElement(b.a,null)},{dataIndex:"edate",title:"Date end",visible:!1,required:!1,formComponent:r.a.createElement(b.a,null)}],E=h.filter(function(e){return e.visible}),y=n(118),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("b",null,"Description:")," ",e.description),r.a.createElement("div",null,r.a.createElement("b",null,"Date start:")," ",e.bdate),r.a.createElement("div",null,r.a.createElement("b",null,"Date end:")," ",e.edate))},g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleTableChange=function(e,t,n){console.log(n)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{columns:E,dataSource:y,onChange:this.handleTableChange,expandedRowRender:k,pagination:!1})}}]),t}(r.a.Component),O=n(75),C=n(31),x=n(355),I=n(359),j=n(361),w=n(12),S=n.n(w),M=I.a.create()(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("Render ModalForm, record =",this.props.record);var e=this.props,t=e.visible,n=e.onCancel,a=e.onOk,i=e.form,l=e.record,o=i.getFieldDecorator,c={labelCol:{span:6},wrapperCol:{span:18}},s=h.map(function(e){return r.a.createElement(I.a.Item,Object.assign({},c,{label:e.title,key:e.dataIndex}),o(e.dataIndex,{rules:[{required:e.required,message:"Please Input ".concat(e.title,"!")}],valuePropName:"isopen"===e.dataIndex?"checked":"value",initialValue:"bdate"===e.dataIndex||"edate"===e.dataIndex?S()(l[e.dataIndex]).isValid()?S()(l[e.dataIndex]):null:l[e.dataIndex]})(e.formComponent))});return r.a.createElement(j.a,{visible:t,title:"Ticket properties",onCancel:n,onOk:a},r.a.createElement(I.a,null,s))}}]),t}(r.a.Component)),T=n(118),R=function(e){return h.filter(function(e){return!e.visible}).map(function(t){return r.a.createElement("div",{key:t.dataIndex},r.a.createElement("b",null,t.title,":")," ",e[t.dataIndex])})},F=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,record:{}},n.showModal=function(e){n.setState({visible:!0,record:e})},n.handleModalCancel=function(){n.setState({visible:!1})},n.handleModalOk=function(){var e=n.formRef.props.form;e.validateFields(function(t,a){t||(console.log("Received values of form: ",a),e.resetFields(),n.setState({visible:!1}))})},n.saveFormRef=function(e){n.formRef=e},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;console.info("TableTicketsAdmin render");var t=Object(O.a)(E).concat([{title:"operation",dataIndex:"operation",render:function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{shape:"circle",icon:"edit",title:"edit",onClick:function(){return e.showModal(n)}}),"\xa0",r.a.createElement(x.a,{title:"Sure to cancel?",onConfirm:function(){return console.log(n.key)}},r.a.createElement(C.a,{shape:"circle",icon:"delete",title:"delete"})))}}]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{type:"primary",onClick:function(){return e.showModal}},"New Ticket"),r.a.createElement(M,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleModalCancel,onOk:this.handleModalOk,record:this.state.record}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{columns:t,dataSource:T,onChange:this.handleTableChange,expandedRowRender:R,pagination:!1,size:"middle",rowClassName:function(e,t){return e.isopen?"ticket-opened":"ticket-closed"}}))}}]),t}(r.a.Component),q=n(133),D=n(134),A=(n(348),n(363)),P=n(118),B=I.a.Item,K=r.a.createContext(),N=I.a.create()(function(e){var t=e.form,n=(e.index,Object(D.a)(e,["form","index"]));return r.a.createElement(K.Provider,{value:t},r.a.createElement("tr",n))}),z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).getInput=function(){return"number"===n.props.inputType?r.a.createElement(A.a,null):r.a.createElement(f.a,null)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.editing,a=t.dataIndex,i=t.title,l=(t.inputType,t.record),o=(t.index,Object(D.a)(t,["editing","dataIndex","title","inputType","record","index"]));return r.a.createElement(K.Consumer,null,function(t){var c=t.getFieldDecorator;return r.a.createElement("td",o,n?r.a.createElement(B,{style:{margin:0}},c(a,{rules:[{required:!0,message:"Please Input ".concat(i,"!")}],initialValue:l[a]})(e.getInput())):o.children)})}}]),t}(r.a.Component),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).isEditing=function(e){return e.key===n.state.editingKey},n.cancel=function(){n.setState({editingKey:""})},n.state={data:P,editingKey:""},n.columns=Object(O.a)(E).concat([{title:"operation",dataIndex:"operation",render:function(e,t){var a=n.isEditing(t);return r.a.createElement("div",null,a?r.a.createElement("span",null,r.a.createElement(K.Consumer,null,function(e){return r.a.createElement(C.a,{onClick:function(){return n.save(e,t.key)},style:{marginRight:8}},"Save")}),r.a.createElement(x.a,{title:"Sure to cancel?",onConfirm:function(){return n.cancel(t.key)}},r.a.createElement(C.a,null,"Cancel"))):r.a.createElement(C.a,{shape:"circle",icon:"edit",onClick:function(){return n.edit(t.key)}}))}}]),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"edit",value:function(e){this.setState({editingKey:e})}},{key:"save",value:function(e,t){var n=this;e.validateFields(function(e,a){if(!e){var r=Object(O.a)(n.state.data),i=r.findIndex(function(e){return t===e.key});if(i>-1){var l=r[i];r.splice(i,1,Object(q.a)({},l,a)),n.setState({data:r,editingKey:""})}else r.push(a),n.setState({data:r,editingKey:""})}})}},{key:"render",value:function(){var e=this,t={body:{row:N,cell:z}},n=this.columns.map(function(t){return t.editable?Object(q.a)({},t,{onCell:function(n){return{record:n,inputType:"text",dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(n)}}}):t});return r.a.createElement(m.a,{components:t,bordered:!0,dataSource:this.state.data,columns:n,pagination:!1,size:"middle",rowClassName:"editable-row"})}}]),t}(r.a.Component),L=n(356),V=n(364),_=n(132),J=n(184),W=n.n(J),$=n(365),G=n(357),Q=n(367),U=n(366),X=n(368),Y=function(e,t){return t.some(function(t){return e.roles.includes(t)})},Z={roles:["admin"],rights:["can_view_articles"]},ee=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:Z},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(L.a,{locale:W.a},r.a.createElement($.a,null,r.a.createElement(V.a,null,r.a.createElement(V.a.Header,null,r.a.createElement("div",{className:"logo"},"ITSM"),r.a.createElement(_.a,{mode:"horizontal",theme:"dark",style:{lineHeight:"64px"}},r.a.createElement(_.a.Item,{onClick:function(){return e.setState(function(e){return{user:{roles:e.user.roles.includes("admin")?["user"]:["admin"]}}})}},t.roles.includes("admin")?"Logout":"Login"),r.a.createElement(_.a.Item,null,r.a.createElement(G.a,{to:"/"},"Tickets")),Y(t,["admin"])&&r.a.createElement(_.a.Item,null,r.a.createElement(G.a,{to:"admin"},"Admin")))),r.a.createElement(V.a.Content,{style:{padding:"0 50px"}},r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"calc(100vh - 64px - 68px)"}},r.a.createElement(Q.a,null,r.a.createElement(U.a,{exact:!0,from:"/",to:"/ITSM/"}),r.a.createElement(X.a,{exact:!0,path:"/ITSM",component:g}),r.a.createElement(X.a,{exact:!0,path:"/ITSM/edit",component:H}),Y(t,["admin"])&&r.a.createElement(X.a,{exact:!0,path:"/ITSM/admin",component:F}),r.a.createElement(X.a,{component:function(){return r.a.createElement("div",null,"404. Page Not Found")}}))),r.a.createElement(V.a.Footer,{style:{textAlign:"center"}},"IT Service Management \xa9"," ",r.a.createElement("a",{href:"https://github.com/baitun/ITSM"},"baitun"))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,2,1]]]);
//# sourceMappingURL=main.3e7d9379.chunk.js.map