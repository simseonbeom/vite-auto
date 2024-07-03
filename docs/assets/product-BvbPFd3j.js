import{s as e,p as i,a as n,g as p}from"./index-DKBx4g_6.js";import{d,g as l,i as u}from"./getPbImageURL-BuR21PhL.js";import{s as g}from"./setDocumentTitle-CYsy-ZvK.js";function t(s){return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}g("29CM / 상품목록");localStorage.getItem("auth")||e("auth",d);async function f(){const s=await i.collection("products").getFullList({sort:"-created"}),{isAuth:r}=await n("auth");s.forEach(a=>{const c=a.price*(a.ratio*.01),o=`
      <li class="product-item">
          <div>
            <figure>
              <a href="${r?`/src/pages/detail/index.html?product=${a.id}`:"/src/pages/login/"}"></a>
              <img src="${l(a)}" alt="" />
            </figure>
            <span class="brand">${a.brand}</span>
            <span class="desc">${a.description}</span>
            <span class="price">${t(a.price)}원</span>
            <div>
              <span class="discount">${a.ratio}%</span>
              <span class="real-price">${t(a.price-c)}원</span>
            </div>
          </div>
        </li>
    `;u(".container > ul",o)}),p.from(".product-item",{y:30,opacity:0,stagger:.1})}f();
