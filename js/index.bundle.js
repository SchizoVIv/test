(()=>{var e={382:()=>{const e="./images/",t=[{name:"Христина",about:"Преподаватель и администратор Академии Light. Опыт работы более 2 лет в сфере переводов и преподавания. На уроках с ней ученики чувствуют поддержку, позитивные эмоции в момент обучения, что сразу помогает избавиться от страха и переживаний. На занятиях с Христиной вы сразу начинаете говорить на английском, практикуя его, и уходите с отличным настроением.",image:e+"Christina.jpg"},{name:"Юлиана",about:"Опыт преподавания 4 года, любит преподавать в легкости, объяснять новый материал через ассоциации, рассказывать разные факты о языке. Общительная, веселая, понимающая.",image:e+"Juliana.jpg"},{name:"Софья",about:"Софья, преподаватель английского и китайского с опытом работы более 3 лет. Делюсь своей энергией и страстью к языку и стараюсь делать так, что ученики смогут полюбить язык так же, как люблю его я. После занятия китайским дети подходят и говорят: “我爱中国”- wǒ  aì zhōngguó-  «я люблю Китай»",image:e+"Sofia.jpg"},{name:"Наталья",about:"Дипломированный специалист-переводчик. У нее 17 лет изучения и искренней любви к языку, 2 года работы переводчиком в министерстве иностранных дел, 4 года преподавания. Может найти подход и составить программу студентам 14-60 лет. Поддерживает регулярное общение с носителем, поэтому часто в курсе новых трендов или фраз в языке. Умеет привить любовь к погружению в интересующие сферы жизни через английский язык и помогаю найти качественные источники информации и контента.",image:e+"Natalya.jpg"}],s=document.querySelector(".teachers__cards-list");t.forEach(((e,t)=>{const o=document.createElement("li");o.classList.add("teachers__card"),o.style.backgroundImage=`url(${e.image})`;const c=document.createElement("div");(t+1)%2==0?c.classList.add("teachers__content","teachers__content_rotate_right"):c.classList.add("teachers__content");const r=document.createElement("h4");r.classList.add("teachers__subtitle","subtitle"),r.textContent=e.name;const a=document.createElement("p");a.classList.add("teachers__text"),a.textContent=e.about,c.appendChild(r),c.appendChild(a);const n=document.createElement("div");(t+1)%4==2?n.classList.add("teachers__foto","teachers__foto-2"):(t+1)%4==3?n.classList.add("teachers__foto","teachers__foto-3"):(t+1)%4==0?n.classList.add("teachers__foto","teachers__foto-4"):n.classList.add("teachers__foto"),o.appendChild(c),o.appendChild(n),s.appendChild(o)}))},612:()=>{(e=>{const t=document.querySelectorAll(".advantages__wheel-inner");let s=-60;for(let e of t)e.style.transform=`rotate(${s}deg)`,s+=10})(),(e=>{console.log("tyt");const t=document.querySelectorAll(".advantages__wheel-content");let s=0;for(let e of t)e.style.transform=`rotate(${s}deg)`,s+=5})()},247:()=>{document.querySelectorAll(".faq__question").forEach(((e,t)=>{e.addEventListener("click",(()=>{const e=document.querySelectorAll(".faq__answer-text"),s=document.querySelectorAll(".faq__question-text");e.forEach(((e,s)=>{t===s&&e.classList.toggle("faq__answer-text_active")})),s.forEach(((e,s)=>{t===s&&e.classList.toggle("hidden-after")}))}))}))},415:()=>{const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.addEventListener("click",(function(){const e=document.querySelectorAll(".reviews__images");document.querySelectorAll(".swiper-slide").forEach(((t,s)=>{t.classList.contains("swiper-slide-prev")&&e.forEach(((e,t)=>{s===t?(console.log(`index ${s}  i ${t}`),e.classList.remove("reviews__images_off"),e.classList.add("reviews__images_on")):e.classList.remove("reviews__images_on")}))}))})),t.addEventListener("click",(function(){const e=document.querySelectorAll(".reviews__images");document.querySelectorAll(".swiper-slide").forEach(((t,s)=>{t.classList.contains("swiper-slide-next")&&e.forEach(((e,t)=>{s===t?(console.log(`index ${s}  i ${t}`),e.classList.remove("reviews__images_off"),e.classList.add("reviews__images_on")):e.classList.remove("reviews__images_on")}))}))})),new Swiper(".sample-slider",{loop:!0,spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},freeMode:!0,slidesPerView:1,freeModeSticky:!0})},264:()=>{function e(){const e=document.querySelector("#name"),t=document.querySelector("#phone"),s=document.querySelector("#email"),o=document.querySelector(".form__button"),c=document.querySelector("#option");""===e.value.trim()||""===t.value.trim()||""===s.value.trim()||""===c.value.trim()?o.disabled=!0:o.disabled=!1}const t=document.querySelector("#name"),s=document.querySelector("#phone"),o=document.querySelector("#email"),c=document.querySelector("#option");t.addEventListener("input",e),s.addEventListener("input",e),o.addEventListener("input",e),c.addEventListener("input",e),e()}},t={};function s(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}(()=>{"use strict";function e(){const e=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%"}function t(){const e=parseInt(document.body.style.top,10);document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,Math.abs(e))}!function(){let e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),t=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor),s=document.querySelector(".scrollbar");s?e||t||(s.innerHTML="You need Webkit browser to run this code"):console.error('Element with class "scrollbar" not found')}(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").slice(1),s=document.getElementById(t);window.scrollTo({top:s.offsetTop,behavior:"smooth"})}))}));const o=document.querySelector(".popup__button-close"),c=document.querySelector(".popup__overflow"),r=(document.querySelector(".popup__box"),document.querySelector(".popup")),a=document.querySelector(".popup__title"),n=document.querySelector(".academy__button"),i=document.querySelector(".advantages__button"),d=document.querySelector(".coaching__button"),l=document.querySelector(".coach__button");function _(e,s){t(),e.classList.add("popup__hidden"),s.classList.remove("overflow-active")}function u(t,s,o){e(),t.classList.remove("popup__hidden"),s.classList.add("overflow-active"),o.classList.contains("advantages__wheel")||o.classList.contains("advantages__button")||o.classList.contains("advantages__wheel-content")||o.classList.contains("advantages__wheel-inner")?a.textContent="Заполни форму и получи подарок!":a.textContent="Запишитесь на консультацию"}o.addEventListener("click",(()=>{_(r,c)})),c.addEventListener("click",(()=>{_(r,c)})),n.addEventListener("click",(e=>{u(r,c,e.target)})),i.addEventListener("click",(e=>{u(r,c,e.target)})),d.addEventListener("click",(e=>{u(r,c,e.target)})),l.addEventListener("click",(e=>{u(r,c,e.target)}));const m=document.querySelector(".popup-img1__button-close"),v=document.querySelector(".popup-img1__overflow"),h=(document.querySelector(".popup-img1__box"),document.querySelector(".popup-img1")),p=document.querySelector(".founder__link");m.addEventListener("click",(()=>{_(h,v)})),v.addEventListener("click",(()=>{_(h,v)})),p.addEventListener("click",(()=>{u(h,v)}));const L=document.querySelector(".popup-img2__button-close"),y=document.querySelector(".popup-img2__overflow"),f=(document.querySelector(".popup-img2__box"),document.querySelector(".popup-img2")),g=document.querySelector(".format__certificate");L.addEventListener("click",(()=>{_(f,y)})),y.addEventListener("click",(()=>{_(f,y)})),g.addEventListener("click",(()=>{u(f,y)}));const q=document.querySelector("#menu-toggle"),S=document.querySelector(".header__button-container"),w=document.querySelector(".header__overflow"),E=document.querySelector(".header__nav-box"),b=document.querySelector(".header__contacts");document.querySelector(".header__nav-box").addEventListener("click",(function(e){if("A"===e.target.tagName){const s=e.target.getAttribute("href");if("#"===s.charAt(0)){const o=document.querySelector(s);o&&(t(),o.scrollIntoView({behavior:"smooth"}),q.checked=!1,w.classList.add("overflow_hidden"),E.classList.remove("header__nav-box_active"),b.classList.remove("header__contacts_active"),e.preventDefault())}}})),S.addEventListener("click",(function(){q.checked?(t(),w.classList.add("overflow_hidden"),E.classList.remove("header__nav-box_active"),b.classList.remove("header__contacts_active")):(w.classList.remove("overflow_hidden"),E.classList.add("header__nav-box_active"),b.classList.add("header__contacts_active"),e())}));const k=document.querySelector(".header"),x=document.querySelector(".header__logo"),A=document.querySelector(".requests__disk"),C=document.querySelector(".requests__card:last-child");let $=0;const z=150;let T=0;const I=()=>window.pageXOffset||document.documentElement.scrollTop,j=()=>k.classList.contains("header_hide");let M=0,Y=0;function X(){T=window.innerWidth}X(),document.addEventListener("mousemove",(function(e){M=e.clientX,Y=e.clientY,Y<80&&I()>z&&j()&&T>991&&(k.classList.remove("header_hide"),k.classList.add("header_border"),x.classList.add("header__logo_size")),Y>80&&I()>z&&!j()&&T>991&&(k.classList.add("header_hide"),x.classList.add("header__logo_size"),k.classList.remove("header_border"))})),window.addEventListener("scroll",(()=>{I()<$&&j()&&T<992&&I()>301&&$>301&&(k.classList.remove("header_hide"),k.classList.remove("header_border"),x.classList.add("header__logo_hide")),I()<$&&!j()&&T<992&&I()<301&&$<301&&(x.classList.remove("header__logo_size"),k.classList.remove("header_hide"),k.classList.remove("header_border"),x.classList.remove("header__logo_hide")),I()<$&&I()<z&&$<201&&j()&&(k.classList.remove("header_hide"),x.classList.remove("header__logo_hide"),x.classList.remove("header__logo_size"),k.classList.remove("header_border")),I()>$&&!j()&&I()>z&&(k.classList.add("header_hide"),k.classList.remove("header_border")),T>1700&&I()>2099&&I()<2700&&(A.classList.add("requests__disk_anim"),C.classList.add("requests__card_anim")),T<1701&&I()>1920&&I()<2450&&(A.classList.add("requests__disk_anim"),C.classList.add("requests__card_anim")),T<1500&&I()>1720&&I()<2120&&(A.classList.add("requests__disk_anim"),C.classList.add("requests__card_anim")),T<1200&&I()>1600&&I()<1800&&(A.classList.add("requests__disk_anim"),C.classList.add("requests__card_anim")),T<712&&I()>2200&&I()<2400&&(A.classList.add("requests__disk_anim"),C.classList.add("requests__card_anim")),T<500&&I()>2350&&I()<2500&&(A.classList.remove("requests__disk_anim"),C.classList.remove("requests__card_anim")),$=I()})),window.addEventListener("resize",X),s(247),s(264),document.querySelectorAll(".services__item-text").forEach(((e,t)=>{T>992?(e.addEventListener("mouseover",(()=>{document.querySelectorAll(".services__item-tooltip").forEach(((e,s)=>{s===t&&e.classList.add("services__item-tooltip_active")}))})),e.addEventListener("mouseout",(()=>{document.querySelectorAll(".services__item-tooltip").forEach(((e,s)=>{s===t&&e.classList.remove("services__item-tooltip_active")}))}))):e.addEventListener("click",(()=>{document.querySelectorAll(".services__item-tooltip").forEach(((e,s)=>{s!==t||e.classList.contains("services__item-tooltip_active")?e.classList.contains("services__item-tooltip_active")&&e.classList.remove("services__item-tooltip_active"):e.classList.add("services__item-tooltip_active")}))}))})),s(612),s(382);const B=document.querySelectorAll(".teachers__card");function D(e,t,s){if(t!==s||e.classList.contains("teachers__card_open-left")||e.classList.contains("teachers__card_open-right")){if(e.classList.contains("teachers__card_open-left"))return e.classList.remove("teachers__card_open-left");if(e.classList.contains("teachers__card_open-right"))return e.classList.remove("teachers__card_open-right")}else!function(e,t,s,o,c){(s+1)%4==2||(s+1)%4==0?e.classList.add("teachers__card_open-right"):((s+1)%4==1||(s+1)%4==3)&&e.classList.add("teachers__card_open-left")}(e,0,s)}T<993&&B.forEach(((e,t)=>{e.addEventListener("click",(()=>{const e=document.querySelectorAll(".teachers__foto"),s=document.querySelectorAll(".teachers__content");e.forEach(((e,s)=>{D(e,s,t)})),s.forEach(((e,s)=>{D(e,s,t)}))}))})),s(415);const N=document.querySelector(".cursor"),V=document.querySelector(".cursor2"),W=document.querySelector(".page");function G(){T<993?(document.documentElement.style.cursor=W.style.cursor="none",N.classList.contains("visually-hidden")||N.classList.add("visually-hidden"),V.classList.contains("visually-hidden")||V.classList.add("visually-hidden")):(document.documentElement.style.cursor=W.style.cursor="none",N.classList.contains("visually-hidden")&&N.classList.remove("visually-hidden"),V.classList.contains("visually-hidden")&&V.classList.remove("visually-hidden"),document.addEventListener("mousemove",(e=>{N.style.cssText=V.style.cssText="left: "+e.clientX+"px; top:"+e.clientY+"px;"})))}G(),window.addEventListener("resize",G)})()})();