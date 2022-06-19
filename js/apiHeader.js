// function english(){
//      eng="http://aaaserver-001-site31.ftempurl.com/en/api/";
//      document.URL+"?/lang=en"

// }
// function arabic(){
//      eng="http://aaaserver-001-site31.ftempurl.com/ar/api/";

// }

// ======================================================================================================================
// // all categories featch data 
// async function catsApi() {
//   const response = await fetch("http://aaaserver-001-site31.ftempurl.com/10/api/Categories/GetMainCategories");
//   const data = await response.json();


//   // all brands from api 
//   let allCats = data.items;

//   let catsDomInner = allCats.map((e) => {
//     async function subCatApi() {
//       const res = await fetch("http://aaaserver-001-site31.ftempurl.com/10/api/Categories/GetSubCategories/" + e.id + "")
//       const dt = await res.json();
//       if (dt.items.length !== 0) {
//         document.querySelector('.subcat').innerHTML = `<li style="display:none">
//               <a href="#" style="display:none">${dt.items.name}</a>
//             </li>`
//         console.log('jhjj');
//       }

//     }
//     subCatApi();
//     return `<li>
//       <a class="" href="#">${e.name} </a>
//       <ul class="subcat" style="height: 0;	transition: .5s;
//       ">

//       </ul>
//     </li>`
//   });
//   let catsDom = document.querySelector('.mega-menu-category .nav');
//   catsDom.innerHTML = catsDomInner.join("");

// }
// catsApi();
// // barnds Api featch data 
// async function brandsApi() {
//   const response = await fetch("http://aaaserver-001-site31.ftempurl.com/0/api/Brands/GetBrands");
//   const data = await response.json();

//   // all brands from api 
//   let allBrands = data.items;

//   let brandsDomInner = allBrands.map((e) => {
//     return `<li class="menu-item col-md-3">
//                   <div class="title"> <a href="${e.id}">
//                       ${e.name}
//                   </a></div>
//               </li>`
//   });
//   let brandsDom = document.querySelector('#allBrans');
//   brandsDom.innerHTML = brandsDomInner;

// }
// brandsApi();