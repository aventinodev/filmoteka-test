async function e(e){try{const a=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=31449444226ba6345698313fe055564a&page=${e}`);return await a.json()}catch(e){throw new Error(response.status)}}const a={gallery:document.querySelector(".gallery"),genresList:document.querySelector(".genres__list"),card:document.querySelector(".gallery__card"),header:document.querySelector(".header"),pageHome:document.querySelector("#home"),pageLibrary:document.querySelector("#library"),form:document.querySelector(".header__wrap--form"),btnLibrary:document.querySelector(".header__wrap--btn"),headerWrap:document.querySelector(".header__wrap")};let n=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];console.log(n);function r({id:e,title:a,poster_path:r,release_date:i,genre_ids:t}){const s=t.map((e=>{const a=n.find((a=>a.id===e));return e=a.name}));return`<li class="gallery__card id="${e}">\n  <a class="gallery__link" href="#">\n            <div class="gallery__img-wrap">\n              <img\n                class="gallery__img"\n                src="https://image.tmdb.org/t/p/w300/${r}"\n                alt="${a}"\n                loading="lazy"\n                width="395"\n                height="569"\n                              />\n            </div>\n           \n          <div class="gallery__info-wrap">            \n            <h2 class="gallery__subtitle text-hidden">${a}</h2>            \n            <div class="gallery__info">\n             <p class="gallery__genres text-hidden">${s.length>3?s.slice(0,2).join(", "):s.join(", ")}</p>             \n             <p class="gallery__year">| ${i.split("-")[0]}</p>\n            </div>           \n          </div>\n           </a> \n          </li>`}function i(e){const n=e.map(r).join("");return a.gallery.innerHTML=n}function t(){a.pageHome.classList.add("current")}function s(){t(),a.pageLibrary.classList.remove("current")}a.pageLibrary.addEventListener("click",(function(e){!function(){a.pageHome.classList.contains("current")&&(a.pageHome.classList.toggle("current"),a.header.classList.remove("header--home"),a.pageLibrary.classList.add("current"),a.header.classList.add("header--library"),a.form.classList.add("visually-hidden"),a.btnLibrary.classList.remove("visually-hidden"));if(s);}()})),a.pageHome.addEventListener("click",s),t();!async function(){try{const a=await e(1);i(a.results)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.08bfc523.js.map