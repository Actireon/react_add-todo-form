(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=a(6),c=a(1),l=a(2),u=a(4),m=a(3),d=a(5),p=a(7),h=(a(16),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=(a(17),function(e){var t=e.id,a=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"card__id"},"ID: ".concat(t)),r.a.createElement("p",{className:"card__title"},"TODO: ".concat(a)))}),y=function(e){var t=e.name;return r.a.createElement("span",null,t)},f=(a(18),function(e){var t=e.todos;return r.a.createElement("ul",{className:"card__list"},t.map((function(e){return r.a.createElement("li",{className:"card__item",key:e.id},r.a.createElement(g,e),r.a.createElement(y,e.user))})))}),v=a(10),E=a.n(v),S=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",userId:0,isErrorMessage:!1,isErrorSelect:!1},a.selectHandler=function(e){var t=e.target.value;a.setState({userId:Number(t),isErrorSelect:!1})},a.inputTextHandler=function(e){var t=e.target.value;a.setState({title:t,isErrorMessage:!1})},a.submitHandler=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.userId,i=!1;if(""===a.state.title.trim()&&(i=!0,a.setState({isErrorMessage:!0})),0===r&&(i=!0,a.setState({isErrorSelect:!0})),!i){var s=a.props.users;a.props.addTodo({id:E()(),user:s.find((function(e){return e.id===r})),title:n,completed:!1}),a.setState({title:"",userId:0})}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.title,n=t.userId,i=t.isErrorMessage,s=t.isErrorSelect;return r.a.createElement("form",{onSubmit:this.submitHandler,className:"form"},r.a.createElement("label",{htmlFor:"todo"},"Todo:",r.a.createElement("input",{type:"text",name:"todo",id:"todo",placeholder:"Your Task",onChange:this.inputTextHandler,value:a,className:"form__input"})),i&&r.a.createElement("div",{className:"form__error"},"Enter Your Task"),r.a.createElement("label",{htmlFor:"user"},"User:",r.a.createElement("select",{value:n,onChange:this.selectHandler,className:"form__input",id:"user"},r.a.createElement("option",{value:0,disabled:!0},"Choose User"),e.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))),s&&r.a.createElement("span",{className:"form__error"},"Choose User"),r.a.createElement("button",{className:"form__button",type:"submit"},"Add"))}}]),t}(r.a.Component)),w=h.map((function(e){return Object(p.a)({},e,{user:b.find((function(t){return e.userId===t.id}))})})),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={todos:Object(o.a)(w)},a.addTodo=function(e){a.setState((function(t){return{todos:[].concat(Object(o.a)(t.todos),[Object(p.a)({},e)])}}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(S,{users:b,addTodo:this.addTodo}),r.a.createElement(f,{todos:this.state.todos}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.33eaccbb.chunk.js.map