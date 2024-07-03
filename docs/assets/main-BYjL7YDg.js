import{g as i,a as n,b as l,p as u,s as r}from"./index-DKBx4g_6.js";import{g as c,i as g,d as m}from"./getPbImageURL-BuR21PhL.js";const a=i.timeline({defaults:{opacity:0}});a.from(".visual",{delay:.3,y:30});a.from("h2 > span",{x:-30},"-=0.2");async function d(){if(localStorage.getItem("auth")){const{isAuth:o,user:t}=await n("auth");if(o){let s=function(){confirm("정말 로그아웃 하실겁니까?")&&(u.authStore.clear(),r("auth",m),location.reload())};const e=`
          <div class="thumbnail">
            <img src="${c(t,"avatar")}" alt="" />
          </div>
          <div class="username">${t.name}님 반갑습니다!</div>
          <button type="button" class="logout">로그아웃</button>
        `;g(".container",e),l(".logout").addEventListener("click",s)}}}d();
