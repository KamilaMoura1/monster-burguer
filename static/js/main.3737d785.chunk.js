(this["webpackJsonpburger-queen-api-client"]=this["webpackJsonpburger-queen-api-client"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(22),o=c.n(s),r=c(8),i=c(2),l=c(11),d=c(9),u=c(4),j=c(0);function m(e){var t=e.inputType,c=e.inputName,n=e.inputPlaceholder,a=e.inputOnChange,s=e.inputValue;return Object(j.jsx)("input",{className:"input",type:t,name:c,placeholder:n,onChange:a,value:s})}var h=c(25),b=(c(31),["children"]),p=function(e){var t=e.children,c=Object(h.a)(e,b);return Object(j.jsx)("button",Object(d.a)(Object(d.a)({},c),{},{className:"btn-global",children:t}))},A=p;var g=c.p+"static/media/logoMonsterGrande.27f42114.png";c(32);function O(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),o=Object(u.a)(s,2),h=o[0],b=o[1],A=function(e){var t=e.target,n=t.name,s=t.value;a(Object(d.a)(Object(d.a)({},c),{},Object(l.a)({},n,s)))},O=Object(i.f)();return Object(j.jsxs)("main",{className:"container",children:[Object(j.jsxs)("div",{className:"div-logo",children:[Object(j.jsx)("h1",{className:"letra-logo",children:"Monster Burguer"}),Object(j.jsx)("img",{className:"imgRegister",src:g,alt:"icon-register"})]}),Object(j.jsx)("div",{className:"div-login",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),b(function(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Ops! Endere\xe7o de email inv\xe1lido"):t.email="Email obrigat\xf3rio!",e.password?e.password.length<6&&(t.password="Ops! A senha precisa ter 6 ou mais caracteres"):t.password="Senha obrigat\xf3ria!",t}(c)),function(e){return fetch("https://lab-api-bq.herokuapp.com/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})})}(c).then((function(e){return e.json()})).then((function(e){var t=e.token;localStorage.setItem("token",t),"sal\xe3o"===e.role?O.push("/Hall"):"cozinha"===e.role&&O.push("/Kitchen")})).catch((function(e){}))},children:Object(j.jsxs)("div",{className:"form-login",children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsx)(m,{inputType:"text",inputName:"email",inputPlaceholder:"E-mail",inputOnChange:A,inputValue:c.email}),h.email&&Object(j.jsx)("p",{children:h.email}),Object(j.jsx)(m,{inputType:"password",inputName:"password",inputPlaceholder:"Senha",inputOnChange:A,inputValue:c.password}),h.password&&Object(j.jsx)("p",{children:h.password}),Object(j.jsx)(p,{className:"btn-enter",type:"submit",children:" Entrar"}),Object(j.jsxs)("div",{className:"footer-login",children:["N\xe3o tem uma conta?",Object(j.jsx)(r.b,{className:"link",to:"/Register",children:" Cadastre-se "})]})]})})})]})}c(38);function x(){var e=Object(i.f)(),t=Object(n.useState)({username:"",email:"",password:"",password2:"",role:""}),c=Object(u.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)({username:"",email:"",password:"",password2:"",role:""}),h=Object(u.a)(o,2),b=h[0],p=h[1],A=function(e){var t=e.target,c=t.name,n=t.value;s(Object(d.a)(Object(d.a)({},a),{},Object(l.a)({},c,n)))};return Object(j.jsxs)("main",{className:"container",children:[Object(j.jsxs)("div",{className:"div-logo",children:[Object(j.jsx)("h1",{className:"letra-logo",children:"Monster Burguer"}),Object(j.jsx)("img",{className:"imgRegister",src:g,alt:"icon-register"})]}),Object(j.jsx)("div",{className:"container-register",children:Object(j.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),p(function(e){var t={};return e.username.trim()?e.username.length<10&&(t.username="Necess\xe1rio nome completo"):t.username="Nome completo obrigat\xf3rio",e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Endere\xe7o de email invalido"):t.email="Email obrigat\xf3rio",e.password?e.password.length<6&&(t.password="Senha precisa ter 6 ou mais caracteres"):t.password="Senha obrigat\xf3ria",e.password2?e.password2!==e.password&&(t.password2="As senhas n\xe3o coincidem"):t.password2="Senha obrigat\xf3ria","sal\xe3o"!==e.role&&"cozinha"!==e.role&&(t.role="Selecione sua \xe1rea de trabalho"),t}(a)),function(e){return fetch("https://lab-api-bq.herokuapp.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.username,email:e.email,password:e.password,role:e.role,restaurant:"Monster Burguer"})})}(a).then((function(e){return e.json()})).then((function(t){var c=t.token;localStorage.setItem("token",c),void 0!==t.id&&(e.push("/login"),alert("Cadastro efetuado com sucesso"))})).catch((function(e){}))},children:[Object(j.jsx)("h2",{children:"Cadastre-se"}),Object(j.jsxs)("div",{className:"form-register-inputs",children:[Object(j.jsx)(m,{inputType:"text",inputName:"username",inputPlaceholder:"Nome Completo",inputOnChange:A,inputValue:a.username}),b.username&&Object(j.jsx)("p",{className:"message-error",children:b.username}),Object(j.jsx)(m,{inputType:"text",inputName:"email",inputPlaceholder:"E-mail",inputOnChange:A,inputValue:a.email}),b.email&&Object(j.jsx)("p",{className:"message-error",children:b.email}),Object(j.jsx)(m,{inputType:"password",inputName:"password",inputPlaceholder:"Crie sua senha",inputOnChange:A,inputValue:a.password}),b.password&&Object(j.jsx)("p",{className:"message-error",children:b.password}),Object(j.jsx)(m,{inputType:"password",inputName:"password2",inputPlaceholder:"Confirme sua senha",inputOnChange:A,inputValue:a.password2}),Object(j.jsx)("div",{className:"select"}),Object(j.jsxs)("select",{className:"form-select",name:"role",autoComplete:"off",onChange:A,value:a.role,children:[Object(j.jsx)("option",{value:" ",children:"Selecione sua \xe1rea de trabalho"}),Object(j.jsx)("option",{value:"sal\xe3o",children:"Sal\xe3o"}),Object(j.jsx)("option",{value:"cozinha",children:"Cozinha"}),b.role&&Object(j.jsx)("p",{className:"message-error",children:b.role})]}),Object(j.jsx)("button",{className:"btn-enter",type:"submit",value:"Cadastrar",children:"Cadastrar"}),Object(j.jsxs)("div",{className:"footer-register",children:["J\xe1 tem uma conta cadastrada?",Object(j.jsx)(r.b,{className:"link",to:"/Login",children:" Entre aqui"})]})]})]})})]})}var f=c(14);c(39);var N=function(e){var t=e.imageProduct,c=e.nameProduct,n=e.flavorProduct,a=e.idProduct,s=e.complementProduct,o=e.priceProduct,r=e.divOnClick;return Object(j.jsxs)("div",{className:"menu-item",children:[Object(j.jsx)("img",{className:"img-item",src:t,alt:"itens menu"}),Object(j.jsx)("h2",{className:"name-product",children:c}),Object(j.jsx)("h3",{className:"flavor-product",children:n}),Object(j.jsx)("h1",{className:"complement-product",children:s}),Object(j.jsxs)("h1",{className:"price-product",children:["R$ ",o]}),Object(j.jsx)(A,{onClick:r,className:"btn-add",style:{backgroundColor:"var(--azul)"},children:"Adicionar"})]},a)};c(40);var v=function(e){var t=e.nameProduct,c=e.flavorProduct,n=e.idProduct,a=e.complementProduct,s=e.priceProduct,o=e.divOnClick,r=e.qtdProduct;return Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsx)("h3",{className:"name-product",children:t}),Object(j.jsx)("h3",{className:"flavor-product",children:c}),Object(j.jsx)("h3",{className:"complement-product",children:a}),Object(j.jsxs)("h3",{className:"price-product",children:["R$ ",s]}),Object(j.jsxs)("h3",{className:"qtd-product",children:["Qtd ",r]}),Object(j.jsx)(A,{onClick:o,className:"btn-remove",children:Object(j.jsx)("img",{className:"icon-trash",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgBtVTBUcNADFx5zMCPfPlA6AAqIHRAB9ABoQLogFboADoAKsAPAl/zY5I4inTnZKyLc75kEs14xiPtrbUr+YAdB8WK/IUeDnBjkhO80TmKjQn5F33M8C6vZVDqYYzLGGk74Q/ueeQIbV5yWlt3LjcdVRg0akPtjr9xZ06QdMwYSv5vmWvYsJTsDhIesU1UeKBTvGDvobLFn+dk/AhPouyimcsMQj3kYE1iQbiV52w9ITtj+0huUbCZXStLmPtJuYXu4lpgqsa0VwgXcYhjdMVRTTixC24I6aQuUoLsqcfI/kUke7JCfrlOyeKfYoownbUAyxocj9xNt+wm1K+mSNaPcgohOcIBYlx+wrqvH6vHQ7BeEoxXt2MqiYIuvB3evzGuw2ssdh9eueFkrX4W+MdnOOG9xBzolWgsa4BeCQAAAABJRU5ErkJggg=="})})]},n)},C="data:image/png;base64,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",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGXSURBVHgB1VTLUcMwEH0KB474ygCDqSBQQSghHUAHhAriVABUQOggVEA6ACqIJz+4Ya4wRLxdy5lkYscy5JI3I8uWd7W/twtsO0yZgH1DyO0CM1xyD93xi64vdMwJ4j8bsO+4wg8i/ZjhgdJyccB1yveGGqwhMvvooCroedtOYO0It3agl67KjBCpzBQtVIGkxV0elcqKAyI7mKfPw0CqNPCSZXSU/RCdvP+1XK0d1Pl8hQdY5AQWj7yp4W/AMtyZFtQPVpkU+BvYIFYMON6H9Mo/AqAvOqzDeamkFNe3wEt6UzypbgGlU6EhmpUpl+lm1B5rx8+xnCLDDgXisvbPA7s5Fl0lyBoDCZ/B2jDXI3R3FBj4Rlf3XbRRETJa3B29xfOVYccctnh6gzTcHtcnv+P0p54FdCuLUPZj/m8iZd61OVzuaFPgTeimaJ0SIVCYssStvkxbc6R0RamBXKNpXTJDiY6ITUGot0hdpeRQ01IKrwjI72eI9xZ3HIR7TIfM/9gc4AybgHo8RlcbSUbzBPf/oPKW4RfQxq+0mOR2GwAAAABJRU5ErkJggg==",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgBvVXbVcMwDL0pDNABeIQJ6AgdgQ1gA9igZYKyQcIE7QgdASZoDg0pf2WAUiPbspFjn5Dwgc5xY1vWvbIeLvDfonaYqXfszWiwwF9FbTAmkIKGMt8apZk3WJIu7wdivdkwiB017rye5oFOnyUbiZFJMBwxp+mKvq+8vc7OsW6R5jgwyQjX9HtD5x/p3Dz0znq2wkAhm6W2deuR0OXE9IKhYm+TB4DmGin2LabRXo1J8iwl8WfRGLeVzJ425Kxe+j2bNKXeKG6C1FWCA1u0sylY8whs2wq+JX/wOi7aAh3SBSZAdZ3uR/hFfDmlSkNKBmUNiNWw73Dbx7NUl2hbPvck3VUyqzrwERhVA8d7Eu1RYiFYx6kYpUpEZji4IXtuYphd4ROpsJzFhZ5dpLuJMCoPyFLhxPTmMLH9XLnlqVcc8UzKmYnFFz8OB5SO2QnHeWoW2gFlH4ckGccjfL5E9tUH7qPnq6M2Q3CdPdeS9qEtOMNl0LdDRdeW/wvo4c03KepO4p1QAe0AAAAASUVORK5CYII=",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgBxVXbVcJAFJyLzz/59nViB3YAJWgFagVKBdKBoQJjBdiBWgF2IIhR/ySf8rHX2SWIYNgk8MGcc08eO5ndnZ1zIyD0BVVs4xIG53wMkI1nKFqyjwg5ECe4iQfeH/OjR9ZTNhM1Vp0Vyi4aXlX9wLXGUH1zq/Rz+2g6bp/iXmKMDuseBUHuF+vWx6nAbtvQr6IQ522QJ1oOikEeZR1lMcTF1ByfTM0QPTmcWFh6pXKEga3fFwYnWEObB362sOg/fOMUNsMG0VjYu319R5uXKvKg6dUKvyLxe2qQFBIF7ZD0rkJ+GuYmloDN7ZTOsqK06GZWo/RBuV7xFwY9etqQg4lo+ZxuMT4xEtljlAh2rXCWslikFDu+YSvaZXhrKC4Y8KQTv6jBHYn13HaGUZuEbeLq72rjJt3BqONHzvgs2N1wco63eChXXlG3Aiu8QcPF2RDM4XbT30mIVeAHomiNZl7g2cEAAAAASUVORK5CYII=";c(20);function k(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("all-day"),o=Object(u.a)(s,2),r=o[0],l=o[1],d=Object(n.useState)([]),m=Object(u.a)(d,2),h=m[0],b=m[1],p=Object(n.useState)(""),A=Object(u.a)(p,2),g=A[0],O=A[1],x=Object(n.useState)(""),k=Object(u.a)(x,2),B=k[0],S=k[1],E=localStorage.getItem("token");Object(n.useEffect)((function(){fetch("https://lab-api-bq.herokuapp.com/products",{headers:{accept:"application/json",Authorization:"".concat(E)}}).then((function(e){return e.json()})).then((function(e){a(e)}))}),[E]);var Y=c.filter((function(e){return e.type===r}));Object(n.useEffect)((function(){}),[B,g,h]);var Q=function(e){e.preventDefault(),function(e){var t=localStorage.getItem("token");fetch("https://lab-api-bq.herokuapp.com/orders",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"".concat(t)},body:JSON.stringify(e)})}({client:B,table:g,products:h.map((function(e){return{id:Number(e.id),qtd:Number(e.qtd)}}))}),S([]),O([]),b([])},R=h.reduce((function(e,t){var c=t.qtd,n=t.price;return e=Number(c*n+e)}),0),y=Object(i.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title-hall",children:"Monster Burguer"}),Object(j.jsxs)("section",{className:"header-hall",children:[Object(j.jsx)("button",{className:"button-geral",style:{backgroundColor:"var(--azul)"},onClick:function(e){e.preventDefault(),l("all-day")},children:"Geral"}),Object(j.jsx)("button",{style:{backgroundColor:"var(--azul)"},onClick:function(e){e.preventDefault(),l("breakfast")},children:"Caf\xe9 da Manh\xe3"}),Object(j.jsx)("input",{placeholder:"Cliente",className:"input-client",value:B,onChange:function(e){S(e.target.value)}}),Object(j.jsx)("input",{placeholder:"Mesa",className:"input-table",value:g,onChange:function(e){O(e.target.value)}})]}),Object(j.jsxs)("section",{className:"menu-order",children:[Object(j.jsxs)("section",{className:"menu-side",children:[Object(j.jsxs)("button",{className:"logo-small",children:[" ",Object(j.jsx)("img",{className:"logo-small",src:C})]}),Object(j.jsxs)("button",{className:"logo-notification",onClick:function(){y.push("/ready-order")},children:[" ",Object(j.jsx)("img",{className:"logo-notification",src:I})]}),Object(j.jsxs)("button",{className:"logo-order",onClick:function(){y.push("/hall")},children:[" ",Object(j.jsx)("img",{className:"logo-order",src:w})]}),Object(j.jsxs)("button",{className:"logo-logout",children:[" ",Object(j.jsx)("img",{className:"logo-logout",src:U,onClick:function(e){e.preventDefault(),y.push("/login"),localStorage.clear()}})]})]}),Object(j.jsx)("section",{className:"container-menu",children:Y&&Y.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(N,{imageProduct:e.image,nameProduct:e.name,flavorProduct:e.flavor,idProduct:e.id,complementProduct:e.complement,priceProduct:e.price,divOnClick:function(t){return function(e,t){e.preventDefault();var c=h.find((function(e){return e.id===t.id}));c?(c.qtd+=1,b(Object(f.a)(h))):(t.qtd=1,b([].concat(Object(f.a)(h),[t])))}(t,e)}})},t)}))}),Object(j.jsxs)("section",{className:"container-order",children:[Object(j.jsx)("h1",{children:"Pedidos"}),h.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{nameProduct:e.name,flavorProduct:e.flavor,idProduct:e.id,complementProduct:e.complement,priceProduct:e.price,qtdProduct:e.qtd,divOnClick:function(c){return function(e,t,c){e.preventDefault();var n=h.find((function(e){return e.id===t.id}));if(0!==n.qtd&&(n.qtd-=1,b(Object(f.a)(h))),0===n.qtd){var a=h;a.splice(c,1),b(Object(f.a)(a))}}(c,e,t)}})},t)})),Object(j.jsxs)("h1",{children:["Total: R$ ",R,",00"]}),Object(j.jsx)("button",{className:"button-geral",onClick:function(e){return Q(e)},children:"Enviar para a cozinha"})]})]})]})}c(21);function B(){var e=localStorage.getItem("token"),t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],s=c[1],o="https://lab-api-bq.herokuapp.com/orders/";Object(n.useEffect)((function(){fetch(o,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"".concat(e)}}).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return e.status.includes("pending")}));s(t)}))}),[e]);var r=Object(i.f)();return Object(j.jsxs)("div",{className:"hall",children:[Object(j.jsx)("section",{className:"menu-title",children:Object(j.jsx)("h1",{className:"menu-kitchen",children:"Pedidos Cozinha"})}),Object(j.jsxs)("section",{className:"container-kitchen",children:[Object(j.jsxs)("section",{className:"menu-side",children:[Object(j.jsx)("button",{className:"logo-small",children:Object(j.jsx)("img",{className:"logo-small",src:C})}),Object(j.jsx)("button",{className:"logo-logout",onClick:function(e){e.preventDefault(),r.push("/login"),localStorage.clear()},children:Object(j.jsx)("img",{className:"logo-logout",src:U})})]}),Object(j.jsx)("section",{className:"container-orders",children:a.map((function(t){return Object(j.jsx)("section",{className:"box-order",children:Object(j.jsxs)("div",{className:"resume-order",children:[Object(j.jsx)("h1",{children:t.status.replace("pending","Pendente").replace("preparing","Em andamento").replace("done","Pronto")}),Object(j.jsxs)("p",{children:["ID: ",t.id," "]}),Object(j.jsxs)("p",{children:["Cliente: ",t.client_name," "]}),Object(j.jsxs)("p",{children:["Mesa: ",t.table," "]}),Object(j.jsx)("time",{children:"".concat(new Date(t.createdAt).toLocaleDateString("pt-br")," - ").concat(new Date(t.createdAt).toLocaleTimeString("pt-br",{hour:"2-digit",minute:"2-digit"}),"h")}),Object(j.jsx)("article",{className:"order",children:t.Products.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[e.qtd," ",e.name]})},t)}))}),Object(j.jsx)("section",{className:"btn-status",children:Object(j.jsx)("button",{className:"btn-kitchen",style:{backgroundColor:"var(--azul)"},onClick:function(){return function(t,c){var n={status:c};fetch(o+t,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"".concat(e)},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){var t=a.filter((function(t){return t.id!==e.id}));s(t)}))}(t.id,"ready")},children:"Pronto"})})]})},t.id)}))})]})]})}var S=function(){return Object(j.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada"})};function E(){var e=localStorage.getItem("token"),t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],s=c[1],o="https://lab-api-bq.herokuapp.com/orders/";Object(n.useEffect)((function(){fetch(o,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"".concat(e)}}).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return e.status.includes("ready")}));s(t)}))}),[e]),Object(n.useEffect)((function(){}),[a]);var r=Object(i.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"hall",children:[Object(j.jsx)("section",{className:"menu-title",children:Object(j.jsx)("h1",{className:"menu-kitchen",children:"Pedidos para entregar"})}),Object(j.jsxs)("section",{className:"container-kitchen",children:[Object(j.jsxs)("section",{className:"menu-side",children:[Object(j.jsx)("button",{className:"logo-small",children:Object(j.jsx)("img",{className:"logo-small",src:C})}),Object(j.jsx)("button",{className:"logo-notification",onClick:function(){r.push("/ready-order")},children:Object(j.jsx)("img",{className:"logo-notification",src:I})}),Object(j.jsx)("button",{className:"logo-order",onClick:function(){r.push("/hall")},children:Object(j.jsx)("img",{className:"logo-order",src:w})}),Object(j.jsx)("button",{className:"logo-logout",onClick:function(e){e.preventDefault(),r.push("/login"),localStorage.clear()},children:Object(j.jsx)("img",{className:"logo-logout",src:U})})]}),Object(j.jsx)("section",{className:"container-orders",children:a.map((function(t,c){return Object(j.jsx)("section",{className:"box-order",children:Object(j.jsxs)("div",{className:"resume-order",children:[Object(j.jsxs)("h1",{children:[" ",t.status.replace("ready","Para servir")," "]}),Object(j.jsxs)("p",{children:["ID: ",t.id," "]}),Object(j.jsxs)("p",{children:["Cliente: ",t.client_name," "]}),Object(j.jsxs)("p",{children:["Mesa: ",t.table," "]}),Object(j.jsx)("time",{children:"".concat(new Date(t.createdAt).toLocaleDateString("pt-br")," - ").concat(new Date(t.createdAt).toLocaleTimeString("pt-br",{hour:"2-digit",minute:"2-digit"}),"h")}),Object(j.jsx)("article",{className:"order",children:t.Products.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[e.qtd," ",e.name]}),Object(j.jsx)("p",{children:e.flavor}),Object(j.jsx)("p",{children:e.complement})]},t)}))}),Object(j.jsx)("button",{className:"button",style:{backgroundColor:"var(--azul)"},onClick:function(){return function(t,c,n){var r={status:c};fetch(o+t,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"".concat(e)},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){var t=a.filter((function(t){return t.id!==e.id}));s(t)}))}(t.id,"delivered")},children:"Entregar"})]})},t.id)}))})]})]})})}var Y=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(i.a,{path:"/login",exact:!0,component:O}),Object(j.jsx)(i.a,{path:"/register",component:x}),Object(j.jsx)(i.a,{path:"/hall",component:k}),Object(j.jsx)(i.a,{path:"/kitchen",component:B}),Object(j.jsx)(i.a,{path:"/ready-order",component:E}),Object(j.jsx)(i.a,{component:S})]})})};c(41);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3737d785.chunk.js.map