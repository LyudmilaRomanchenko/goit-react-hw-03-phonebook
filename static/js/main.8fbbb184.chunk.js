(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={lableContact:"ContactForm_lableContact__RD8Kl",inputContact:"ContactForm_inputContact__1MqL4",button:"ContactForm_button__2Y38a"}},,,,,function(t,e,n){t.exports={container:"Phonebook_container__zKHRv",phonebookContainer:"Phonebook_phonebookContainer__3i-ce",contactsContainer:"Phonebook_contactsContainer__IplVV",list:"Phonebook_list__3ATvw"}},,function(t,e,n){t.exports={number:"ContactElement_number__395_w",button:"ContactElement_button__uOQ3g"}},function(t,e,n){t.exports={item:"ContactList_item__3lq58"}},function(t,e,n){t.exports={findLable:"Filter_findLable__eLOS7",find:"Filter_find__UeWOu"}},,,,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(13),o=n.n(r),i=(n(19),n(14)),s=n(4),u=n(5),l=n(7),d=n(6),b=n(25),m=n(10),h=n.n(m),p=n(1),f=n.n(p),j=n(0);function C(t){var e=t.id,n=t.name,a=t.number,c=t.deleteContact;return Object(j.jsxs)("p",{children:[Object(j.jsxs)("span",{children:[n,":"]}),Object(j.jsx)("span",{className:h.a.number,children:a}),Object(j.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return c(e)},children:"Delete"})]})}C.prototype={id:f.a.string.isRequired,name:f.a.string.isRequired,number:f.a.number.isRequired,deleteContact:f.a.func.isRequired},f.a.checkPropTypes(C);var g=C,v=n(11),O=n.n(v);function _(t){var e=t.contacts,n=t.deleteContact;return console.log(e),Object(j.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)(g,{id:e,name:a,number:c,deleteContact:n})},e)}))})}_.prototype={id:f.a.string.isRequired,name:f.a.string.isRequired,number:f.a.number.isRequired,deleteContact:f.a.func.isRequired},f.a.checkPropTypes(_);var x=_,y=n(3),k=n.n(y),q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){console.log(e.currentTarget.name),"name"===e.currentTarget.name&&t.setState({name:e.currentTarget.value}),"number"===e.currentTarget.name&&t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(console.log(t.props.contacts),t.props.contacts.find((function(t){return t.name===a})))return alert("".concat(a,"is alredy in contacts"));t.props.addContact(a,c),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:k.a.lableContact,children:["Name",Object(j.jsx)("input",{className:k.a.inputContact,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:k.a.lableContact,children:["Number",Object(j.jsx)("input",{className:k.a.inputContact,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:k.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);q.defaultProps={contacts:f.a.arrayOf(f.a.shape({id:f.a.string.isRequired,name:f.a.string.isRequired,number:f.a.number.isRequired}).isRequired),addContact:f.a.func.isRequired};var N=q,R=n(12),S=n.n(R);function T(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:S.a.findLable,children:["Find contacts by name",Object(j.jsx)("input",{className:S.a.find,type:"text",value:e,onChange:n})]})}T.prototype={filter:f.a.string.isRequired,onChange:f.a.func.isRequired},f.a.checkPropTypes(T);var F=T,P=n(8),w=n.n(P),L=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a={id:Object(b.a)(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){console.log(e.currentTarget.value),t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts;console.log(a);var c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContact();return Object(j.jsxs)("div",{className:w.a.container,children:[Object(j.jsxs)("div",{className:w.a.phonebookContainer,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(N,{addContact:this.addContact,contacts:this.state.contacts})]}),Object(j.jsxs)("div",{className:w.a.contactsContainer,children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(F,{value:t,onChange:this.changeFilter}),Object(j.jsx)(x,{contacts:e,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component),A=L,D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),D()}],[[23,1,2]]]);
//# sourceMappingURL=main.8fbbb184.chunk.js.map