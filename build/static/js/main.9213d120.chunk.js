(this.webpackJsonpgetsocial=this.webpackJsonpgetsocial||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),i=n(8),a=n.n(i),l=n(2);var o=function(e){var t=Object(r.useState)(Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("b",{children:"-- User will appear here --"})," "]})),n=Object(l.a)(t,2),c=n[0],i=n[1],a=function(t){t.preventDefault();var n={username:document.getElementById("username_search").value.trim()};fetch("https://thegetsocial.azurewebsites.net/get-user",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){"success"===t.response?i(Object(s.jsxs)("div",{className:"post",children:[Object(s.jsxs)("p",{children:["Name : ",Object(s.jsx)("b",{children:t.data.name})]}),Object(s.jsxs)("p",{children:["Username : ",Object(s.jsxs)("b",{children:["@",t.data.username]})]}),Object(s.jsx)("button",{className:"button",onClick:function(n){return function(t,n){var r={id:e.id,username:e.username,to_username:n.data.username,name:e.name};fetch("https://thegetsocial.azurewebsites.net/send-invite",{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){"success"===e.response?(alert("Invitation sent successfully"),i(Object(s.jsx)("p",{children:Object(s.jsx)("b",{children:"-- User will appear here --"})}))):alert("error occured : "+e.message)})).catch((function(e){return alert("Some Error Occured : "+e)}))}(0,t)},children:"Send invitation"})]},t.data.username)):(alert("No user found with username : @".concat(n.username)),i(Object(s.jsx)("p",{children:Object(s.jsx)("b",{children:"-- User will appear here --"})})))}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"here",children:"Search"}),Object(s.jsx)("input",{type:"text",placeholder:"Write the username..",id:"username_search",name:"username_search"}),Object(s.jsx)("button",{className:"button",onClick:function(e){return a(e)},children:" Search "}),c]})},j=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"here",children:"Post Something"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("textarea",{name:"post",id:"post",required:!0,rows:"7",cols:"30",maxLength:"80",placeholder:"Write something here .... max length 80 :)"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"button",onClick:function(t){return function(t){t.preventDefault();var n={id:e.id,username:e.username,post:document.getElementById("post").value.trim()};""===n.post?alert("Please write something :("):fetch("https://thegetsocial.azurewebsites.net/add-post",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){"success"===e.response||"failed"===e.response?alert(e.message):alert("Unknown error occured . Sorry:/")})).catch((function(e){return alert("Error occured : "+e)}))}(t)},children:"Post"})]})]})},d=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"here",children:"All Invitation"}),e.data.map((function(t){return Object(s.jsxs)("div",{className:"AllInvitation",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Name"})," : @",t.name]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Username"})," : @",t.username]}),Object(s.jsx)("button",{className:"button",onClick:function(n){return function(t,n){t.preventDefault();var s={from_username:e.username,from_id:e.id,from_name:e.name,name:n.name,username:n.username};fetch("https://thegetsocial.azurewebsites.net/accept-invite",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){alert("Accepted the invitation"),e.reRender("AllInvitation")})).catch((function(e){return alert("Error occured : "+e)}))}(n,t)},children:"Accept invitation"}),Object(s.jsx)("button",{className:"button",onClick:function(n){return function(t,n){var s={username:e.username,id:e.id,remove:{username:n.username,name:n.name}};fetch("https://thegetsocial.azurewebsites.net/reject-invite",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){alert(e.message)})).catch((function(e){return alert("Error occured : "+e)}))}(0,t)},children:"Reject invitation"})]},t.username)}))]})},u=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"here",children:"All Posts"}),e.allpost.map((function(t){return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsx)("p",{children:Object(s.jsxs)("b",{children:["@",t.username]})}),Object(s.jsx)("p",{children:Object(s.jsx)("i",{children:t.post})}),e.username===t.username?Object(s.jsx)("button",{className:"button",onClick:function(){return function(t){var n={post:t.post,id:t._id,username:t.username,from_username:e.username,from_id:e.id};fetch("https://thegetsocial.azurewebsites.net/remove-post",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){alert(t.message),e.reRender("AllPost")})).catch((function(e){return alert(e)}))}(t)},children:"Delete"}):null]},t._id)}))]})},m=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"here",children:"All Friends"}),e.data.map((function(t){return Object(s.jsxs)("div",{className:"friends",children:[Object(s.jsx)("p",{children:Object(s.jsxs)("b",{children:["@",t.username]})}),Object(s.jsx)("p",{children:Object(s.jsx)("i",{children:t.name})}),Object(s.jsx)("button",{className:"button",onClick:function(){return function(t){var n={currentUser:{username:e.username,id:e.id},username:t.username};fetch("https://thegetsocial.azurewebsites.net/remove-friend",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){alert(t.message),e.reRender("getAllFriends")})).catch((function(e){return alert(e.message)}))}(t)},children:"Remove Friend"})]},t.username)}))]})},b=function(e){var t=Object(r.useState)(Object(s.jsx)(j,{username:e.username,id:e.id})),n=Object(l.a)(t,2),c=n[0],i=n[1],a=function(e){"AllPost"===e?b():"getAllFriends"===e?h():"AllInvitation"===e&&O()},b=function(){document.title="All Post",i(Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"loader big"})]})),fetch("https://thegetsocial.azurewebsites.net/get-all-post",{method:"POST",body:JSON.stringify({username:e.username,id:e.id}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){0===t.result.length?i(Object(s.jsxs)("p",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"-- Your Friend List is Empty ! So No Post to show --"})]})):i(Object(s.jsx)(u,{settimeline:i,allpost:t.result.reverse(),username:e.username,name:e.name,id:e.id,reRender:a}))})).catch((function(e){return alert("Error occured : "+e)}))},h=function(){document.title="My Friends",i(Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"loader big"})]})),fetch("https://thegetsocial.azurewebsites.net/get-all-friends",{method:"POST",body:JSON.stringify({username:e.username,id:e.id}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){0===t.data.length?i(Object(s.jsxs)("p",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"-- Your Friend List is Empty --"})]})):i(Object(s.jsx)(m,{settimeline:i,username:e.username,name:e.name,id:e.id,data:t.data,reRender:a}))})).catch((function(e){return console.log(e)}))},O=function(){document.title="All Invitation",i(Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{})," ",Object(s.jsx)("div",{className:"loader big"})]}));var t={id:e.id,username:e.username};fetch("https://thegetsocial.azurewebsites.net/get-all-invitation",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){0===t.data.length?i(Object(s.jsxs)("p",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"-- No Invitation Available --"})]})):i(Object(s.jsx)(d,{settimeline:i,username:e.username,id:e.id,data:t.data,name:e.name,reRender:a}))})).catch((function(e){return alert("Error occured : "+e)}))};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Hello ",Object(s.jsx)("b",{children:e.name})," ",Object(s.jsxs)("i",{children:["(@",e.username,")"]})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("button",{className:"button",onClick:function(){return document.title="Post Something",void i(Object(s.jsx)(j,{settimeline:i,username:e.username,id:e.id,name:e.name}))},children:"Post Something"})," ",Object(s.jsx)("button",{className:"button",onClick:function(){return b()},children:"All Post"}),"   ",Object(s.jsx)("button",{className:"button",onClick:function(){return h()},children:"My Friends"}),"   ",Object(s.jsx)("button",{className:"button",onClick:function(){return document.title="Search User",void i(Object(s.jsx)(o,{settimeline:i,username:e.username,id:e.id,name:e.name}))},children:"Search a User"}),"   ",Object(s.jsx)("button",{className:"button",onClick:function(){return O()},children:"All Invitation"}),"   ",Object(s.jsx)("button",{className:"button",onClick:function(){window.confirm("Are you sure ? ...")?e.setinitial(Object(s.jsx)(p,{setinitial:e.setinitial})):i("Your timeline")},children:"Log out !"}),"   "]}),c]})},h=n(15),O=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],a=Object(h.a)(""),o=Object(l.a)(a,2),j=(o[0],o[1]);return Object(s.jsxs)("div",{className:"Form",children:[Object(s.jsx)("h2",{className:"get-social",children:"Get Social"}),Object(s.jsx)("h3",{className:"here",children:"Register here ..."}),Object(s.jsxs)("form",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"name",id:"name",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"username",children:"User Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"username",id:"username",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"email",children:"Email id"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"email",name:"email",id:"email",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password",id:"password",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"confirm-password",children:"Confirm Password"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"confirm-password",id:"confirm-password",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{style:{fontSize:"small"},children:Object(s.jsxs)("b",{children:["By Clicking on Register you agree to our ",Object(s.jsx)("a",{href:"/privacy.html",children:" Privacy Policy"})," ","and"," ",Object(s.jsx)("a",{href:"/tnc.html",children:"Terms & Condition"})]})}),Object(s.jsx)("button",{className:"button",onClick:function(t){return function(t){t.preventDefault();var n={name:document.getElementById("name").value.trim(),username:document.getElementById("username").value.trim(),email:document.getElementById("email").value.trim(),password:document.getElementById("password").value.trim(),invitation:[],friends:[]};""===n.name||""===n.username||""===n.email||""===n.password?alert("Please fill all the fields"):document.getElementById("confirm-password").value.trim()!==document.getElementById("password").value.trim()?alert("Password and Confirm password should be same !!"):/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n.email)?(i(Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"loader small"})]})),fetch("https://thegetsocial.azurewebsites.net/add-user",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){"success"===t.response?(j("user",n.username+"&"+n.password,{path:"/",expires:new Date(Date.now()+31536e6)}),e.setinitial(Object(s.jsx)(b,{setinitial:e.setinitial,username:n.username,id:t.userDetails._id,name:t.userDetails.name}))):"failed"===t.response&&(i(""),alert(t.message),document.getElementById("username").value="",document.getElementById("email").value="")})).catch((function(e){return alert("Error occured : "+e)}))):alert("Email id format is not Correct !")}(t)},children:"Register"}),Object(s.jsx)("br",{})]}),c,Object(s.jsxs)("p",{children:["Want to Login In Instead ?",Object(s.jsx)("button",{className:"button",onClick:function(){document.title="Login",e.setinitial(Object(s.jsx)(x,{setinitial:e.setinitial}))},children:"Log In"})]}),Object(s.jsx)("ul",{className:"bottomBar-ul",children:Object(s.jsxs)("b",{children:[Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/about.html",children:"About"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/help.html",children:"Help Center"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/privacy.html",children:"Privacy Policy"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/tnc.html",children:"Terms & Condition"})})]})})]})};var x=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],a=Object(h.a)(""),o=Object(l.a)(a,2),j=o[0],d=o[1];Object(r.useEffect)((function(){var e=j.user;void 0!==e&&(e=e.split("&"),1==window.confirm("Continue as : @"+e[0]+" ?")&&u({username:e[0],password:e[1]}))}),[]);var u=function(t){i(Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"loader small"})]})),fetch("https://thegetsocial.azurewebsites.net/verify-user",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(n){"success"===n.responseMessage?(d("user",t.username+"&"+t.password,{path:"/",expires:new Date(Date.now()+31536e6)}),e.setinitial(Object(s.jsx)(b,{setinitial:e.setinitial,username:t.username,name:n.userDetails.name,id:n.userDetails._id}))):"failedWrongPassword"===n.responseMessage?(i(""),alert("Wrong password"),document.getElementById("password").value=""):(i(""),alert("No User Found"),document.getElementById("username").value="",document.getElementById("password").value="")})).catch((function(e){return alert("Error occured : "+e)}))};return Object(s.jsxs)("div",{className:"Form",children:[Object(s.jsx)("h2",{className:"get-social",children:"Get Social"}),Object(s.jsx)("h3",{className:"here",children:"Log In here ..."}),Object(s.jsxs)("form",{children:[Object(s.jsx)("label",{htmlFor:"username",children:"User Name"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"username",name:"username",required:!0})," ",Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",id:"password",name:"password",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"button",onClick:function(e){return function(e){e.preventDefault();var t={username:document.getElementById("username").value.trim(),password:document.getElementById("password").value.trim()};""===t.username||""===t.password?alert("Please fill all the fields"):u(t)}(e)},children:"Log In"})]}),c,Object(s.jsxs)("p",{children:["Want to Register Instead ?",Object(s.jsx)("button",{className:"button",onClick:function(){document.title="Register",e.setinitial(Object(s.jsx)(O,{setinitial:e.setinitial}))},children:"Register"})]}),Object(s.jsx)("ul",{className:"bottomBar-ul",children:Object(s.jsxs)("b",{children:[Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/about.html",children:"About"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/help.html",children:"Help Center"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/privacy.html",children:"Privacy Policy"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/tnc.html",children:"Terms & Condition"})})]})})]})},p=function(e){var t=Object(r.useState)("block"),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(s.jsxs)("div",{className:"Welcome-Screen",style:{display:"".concat(c)},children:[Object(s.jsx)("h2",{className:"welcome",children:" Welcome to Get Social "}),Object(s.jsx)("h3",{className:"here",children:" The Only Place for commitments "}),Object(s.jsxs)("p",{children:[Object(s.jsx)("button",{className:"button",onClick:function(){document.title="Login",e.setinitial(Object(s.jsx)(x,{setinitial:e.setinitial})),i("none")},children:"log in"}),Object(s.jsx)("button",{className:"button",onClick:function(){document.title="Register",e.setinitial(Object(s.jsx)(O,{setinitial:e.setinitial})),i("none")},children:"Register"})]}),Object(s.jsx)("ul",{className:"bottomBar-ul",children:Object(s.jsxs)("b",{children:[Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/about.html",children:"About"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/help.html",children:"Help Center"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/privacy.html",children:"Privacy Policy"})}),Object(s.jsx)("li",{className:"bottomBar-li",children:Object(s.jsx)("a",{href:"/tnc.html",children:"Terms & Condition"})})]})})]})},f=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{setinitial:c}),n]})},v=n(16);a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(v.a,{children:Object(s.jsx)(f,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9213d120.chunk.js.map