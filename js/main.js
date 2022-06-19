jQuery(document).ready(function () {
    "use strict";


    /******************************************
    Newsletter popup
    ******************************************/

    jQuery('#myModal').appendTo("body");

    function show_modal() {
        jQuery('#myModal').modal('show');
    }

    jQuery('#myModal').modal({
        keyboard: false,
        backdrop: false
    });
    /******************************************
        Mobile menu
    ******************************************/

    jQuery("#mobile-menu").mobileMenu({
            MenuWidth: 250,
            SlideSpeed: 300,
            WindowsMaxWidth: 767,
            PagePush: !0,
            FromLeft: !0,
            Overlay: !0,
            CollapseMenu: !0,
            ClassName: "mobile-menu"

        }),

        /******************************************
            Our clients slider
        ******************************************/

        jQuery("#our-clients-slider .slider-items").owlCarousel({
            items: 6,
            itemsDesktop: [1024, 6],
            itemsDesktopSmall: [900, 6],
            itemsTablet: [640, 6],
            itemsMobile: [360, 5],
            navigation: false,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: false,
            autoPlay: false
        }),

        /******************************************
                  computer slider
         ******************************************/

        jQuery("#computer-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

        /******************************************
          smartphone slider
        ******************************************/

        jQuery("#smartphone-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),


        /******************************************
            watches slider
        ******************************************/

        jQuery("#watches-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

        jQuery(".products-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),
        /******************************************
            daily deal slider
        ******************************************/

        jQuery("#daily-deal-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

        /******************************************
            Photo slider
        ******************************************/

        jQuery("#photo-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
            best sale slider
        ******************************************/
        jQuery("#jtv-best-sale-slider .slider-items").owlCarousel({
            items: 4, //10 items above 1000px browser width
            itemsDesktop: [1024, 4], //5 items between 1024px and 901px
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            navigation: true,
            navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true
        });
    /******************************************
        toprate products slider
    ******************************************/
    jQuery("#toprate-products-slider .slider-items").owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
        itemsTablet: [767, 1], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: false,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: true
    });

    /******************************************
        Special products slider
    ******************************************/

    jQuery("#special-products-slider .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),


        /******************************************
            on sale produc slider
        ******************************************/

        jQuery("#new-products-slider .slider-items").owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1024, 1], //5 items between 1024px and 901px
            itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
            itemsTablet: [767, 1], //2 items between 600 and 0;
            itemsMobile: [360, 1],
            navigation: false,
            navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
            slideSpeed: 500,
            pagination: true
        });

    /******************************************
        Latest news slider
    ******************************************/

    jQuery("#latest-news-slider .slider-items").owlCarousel({
            autoplay: !0,
            items: 4,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 1],
            itemsMobile: [480, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            transitionStyle: "backSlide"
        }),
        /******************************************
            testimonials slider
        ******************************************/

        jQuery("#testimonials-slider .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true
        }),

        /******************************************
            Mega Menu
        ******************************************/

        jQuery('.mega-menu-title').on('click', function () {
            if (jQuery('.mega-menu-category').is(':visible')) {
                jQuery('.mega-menu-category').slideUp();
            } else {
                jQuery('.mega-menu-category').slideDown();
            }
        });


    jQuery('.mega-menu-category .nav > li').hover(function () {
        jQuery(this).addClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeIn('slow');
    }, function () {
        jQuery(this).removeClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeOut('slow');
    });


    jQuery('.mega-menu-category .nav > li.view-more').on('click', function (e) {
        if (jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')) {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
            jQuery(this).find('a').text('More category');
        } else {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
            jQuery(this).find('a').text('Close menu');
        }
        e.preventDefault();
    });
    /******************************************
       Category desc slider
    ******************************************/

    jQuery("#category-desc-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });

    /******************************************
       Upsell product slider
    ******************************************/

    jQuery("#upsell-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

        /******************************************
            Related product slider
        ******************************************/

        jQuery("#related-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
            Related posts
        ******************************************/

        jQuery("#related-posts .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),


        /******************************************
            PRICE FILTER
        ******************************************/

        jQuery('.slider-range-price').each(function () {
            var min = jQuery(this).data('min');
            var max = jQuery(this).data('max');
            var unit = jQuery(this).data('unit');
            var value_min = jQuery(this).data('value-min');
            var value_max = jQuery(this).data('value-max');
            var label_reasult = jQuery(this).data('label-reasult');
            var t = jQuery(this);
            jQuery(this).slider({
                range: true,
                min: min,
                max: max,
                values: [value_min, value_max],
                slide: function (event, ui) {
                    var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                    document.getElementById("min").value = ui.values[0]
                    document.getElementById("max").value = ui.values[1]
                    console.log(t);
                    t.closest('.slider-range').find('.amount-range-price').html(result);
                }
            });
        })

    /******************************************
        Footer expander
    ******************************************/

    jQuery(".collapsed-block .expander").on("click", function (e) {
        var collapse_content_selector = jQuery(this).attr("href");
        var expander = jQuery(this);
        if (!jQuery(collapse_content_selector).hasClass("open")) expander.addClass("open").html("&minus;");
        else expander.removeClass("open").html("+");
        if (!jQuery(collapse_content_selector).hasClass("open")) jQuery(collapse_content_selector).addClass("open").slideDown("normal");
        else jQuery(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
    });

    /******************************************
        Category sidebar
    ******************************************/

    jQuery(function () {
        jQuery(".category-sidebar ul > li.cat-item.cat-parent > ul").hide();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat.cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent").on("click", function () {
            if (jQuery(this).hasClass('current-cat-parent')) {
                var li = jQuery(this).closest('li');
                li.find(' > ul').slideToggle('fast');
                jQuery(this).toggleClass("close-cat");
            } else {
                var li = jQuery(this).closest('li');
                li.find(' > ul').slideToggle('fast');
                jQuery(this).toggleClass("cat-item.cat-parent open-cat");
            }
        });
        jQuery(".category-sidebar ul.children li.cat-item,ul.children li.cat-item > a").on("click", function (e) {
            e.stopPropagation();
        });
    });

    /******************************************
        colosebut
    ******************************************/

    jQuery("#colosebut1").on("click", function () {
        jQuery("#div1").fadeOut("slow");
    });
    jQuery("#colosebut2").on("click", function () {
        jQuery("#div2").fadeOut("slow");
    });
    jQuery("#colosebut3").on("click", function () {
        jQuery("#div3").fadeOut("slow");
    });
    jQuery("#colosebut4").on("click", function () {
        jQuery("#div4").fadeOut("slow");
    });


    /******************************************
        totop
    ******************************************/
    if (jQuery('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    jQuery('#back-to-top').addClass('show');
                } else {
                    jQuery('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        jQuery(window).on('scroll', function () {
            backToTop();
        });
        jQuery('#back-to-top').on('click', function (e) {
            e.preventDefault();
            jQuery('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    /******************************************
        tooltip
    ******************************************/


    jQuery('[data-toggle="tooltip"]').tooltip();

    /* ---------------------------------------------
        slider typist
    --------------------------------------------- */

    if (typeof Typist == 'function') {
        new Typist(document.querySelector('.typist-element'), {
            letterInterval: 60,
            textInterval: 3000
        });
    }

})



// muhammad medhat js 


// header js area 
// ==================================================================================================================================
var queryString = window.location.search;
var lang = "en"
var urlParams = new URLSearchParams(queryString);
if (urlParams.get('lang')) {
    lang = urlParams.get('lang')
}

if (sessionStorage.getItem("token")) {
    var user = localStorage.getItem("userName")
    document.getElementById("accountLog").innerHTML = "<a onclick=logOut() title=login id=login href=account_page.html><span>Logout</span></a>"
    document.getElementById("checkOutWord").innerHTML = "<a title=Checkout href=checkout.html><span>Checkout</span></a> "
    document.getElementById("userName").innerHTML = "<p>Welcome" + " " + user + "</p>"
    document.getElementById("myAccount").innerHTML = "<a class=current-open data-toggle=dropdown aria-haspopup=true aria-expanded=false href=#><span>My Account</span> <i class=fa fa-angle-down></i> </a> <ul class=dropdown-menu  role=menu> <li><a href=profile.html>Profile</a></li> <li><a href=wishlist.html>Wishlist</a></li><li><a href=orders_list.html>Order List</a></li><li><a href=about_us.html>About us</a></li><li onclick=getUserAddress()><a>My Address</a></li><li><a href=addPayment.html>Add Payment</a></li><li><a href=Settings.html>Settings</a></li></ul>"
} else {
    //   document.getElementById("accountLog").innerHTML="<a title=login id=login href=account_page.html><span>Login</span></a> "
}

function searchbtn() {
    var searchValue = document.getElementById("searchinp").value;

    window.location.replace("search.html?search=" + searchValue);
}


function getNotif() {
    var token = JSON.parse(sessionStorage.getItem('token'));
    var httprequest = new XMLHttpRequest();
    httprequest.open("GET", "http://aaaserver-001-site31.ftempurl.com/" + lang + "/api/Notifications/GetUserNotifications?index=0&size=10");
    httprequest.setRequestHeader('Authorization', `Bearer ${token}`)
    httprequest.send();
    httprequest.onreadystatechange = function () {
        if (httprequest.status == 200 && httprequest.readyState == 4) {
            var Data = JSON.parse(httprequest.response)
            notif = "";
            notif += `<i class="fa fa-bell"></i><span class="cart-total">` + Data.allCount + `</span>`
            document.getElementById("iconNum").innerHTML = notif;
            var notificationContent = JSON.parse(httprequest.response).items
            console.log(Data)
            console.log(notificationContent)
            displayNoti(notificationContent)
        }

    }

}
getNotif();

function displayNoti(Data) {
    notif = "";
    for (i = 0; i < Data.length; i++) {

        notif += ` <li class="item odd"> <a href="shopping_cart.html" title="Product title here" class="product-image"><img src="images/products/product-1.jpg" alt="html Template" width="65"></a>
         <p class="product-name"><a href="shopping_cart.html">` + Data[i].name + `</a> </p>
         <strong>1</strong> x <span class="price">$20.00</span> </div>
     </li>`
    }
    document.getElementById("Notifcation").innerHTML = notif;
}

function logOut() {
    sessionStorage.removeItem("token")
    document.getElementById("userName").innerHTML = "Welcome" + Data.fullName
}



function getUserAddress() {
    if (navigator.geolocation) { //check if geolocation is available
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            console.log(position.coords.latitude)
            localStorage.setItem("latitude", position.coords.latitude)
            localStorage.setItem("longitude", position.coords.longitude)
            console.log(position.coords.longitude)
            $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false&key=AIzaSyDIqJcBF6B03QbYJIMzop-V6OKZ0Bo7IGs", function (data) {
                console.log(data);
            })
            window.location.replace("http://127.0.0.1:5500/getAddress.html")
        });
    } else {
        console.log("notsub")
    }

}



function getzones() {
    var token = JSON.parse(sessionStorage.getItem('token'));
    var httprequest = new XMLHttpRequest();
    httprequest.open("GET", "http://aaaserver-001-site31.ftempurl.com/" + lang + "/api/Zones/GetZones?index=0&Size=10");
    httprequest.setRequestHeader('Authorization', `Bearer ${token}`)
    httprequest.send();
    httprequest.onreadystatechange = function () {
        if (httprequest.status == 200 && httprequest.readyState == 4) {
            var Data = JSON.parse(httprequest.response).items
            //  console.log(Data.name)
            console.log(Data)
            diplayzone(Data)


        }


    }

}
getzones();

function diplayzone(User) {
    userDe = "";
    for (i = 0; i < User.length; i++) {


        userDe += `<i class="fa fa-map-marker"  style="margin-right:10px"></i><li id=` + User[i].id + ` onclick="changeZone(this.id)" style="display:inline-block" class=""><a style="color:#000082; title="Zone" ><span>` + User[i].name + `</span></a></li>
    
        `;
    }
    document.getElementById("zones").innerHTML = userDe;
}

function changeZone(event) {

    var token = JSON.parse(sessionStorage.getItem('token'));

    fetch("http://aaaserver-001-site31.ftempurl.com/" + lang + "/api/User/ChangeCurrentUserZone/" + event, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`,

            }
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);

            }

            return response.json();


        })

        .then(function (data) {
            getProfile();
            window.location.replace(hostname + "/profile.html");


        })

}
// ======================================================================================================================
// all categories featch data 
async function catsApi() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/10/api/Categories/GetMainCategories");
    const data = await response.json();


    // all cats from api 
    let allCats = data.items;
    let catsDomInner = allCats.map((e) => {
        async function catsOnly() {
            const res = await fetch("http://aaaserver-001-site31.ftempurl.com/en/api/Categories/GetCategories/" + e.id)
            const dt = await res.json();
            if (dt.items.length === 0) {
                console.log('jhjj');
            } else {
                const catsDrow = dt.items.map((el) => {
                    return `<li style="display:none">
                    <a href="#" style="display:none">${el.name}</a>
                    </li>`
                })
                document.querySelector('.cats').innerHTML = catsDrow.join('');
            }
        }
        catsOnly();
        return `<li>
        <a class="" href="#">${e.name} </a>
        <ul class="cats" style="height: 0;	transition: .5s;
        ">
          
        </ul>
      </li>`
    });
    let catsDom = document.querySelector('.mega-menu-category .nav');
    catsDom.innerHTML = catsDomInner.join("");

}
catsApi();



// barnds Api featch data 
async function brandsApi() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/0/api/Brands/GetBrands");
    const data = await response.json();

    // all brands from api 
    let allBrands = data.items;

    let brandsDomInner = allBrands.map((e) => {
        return `<li class="menu-item col-md-3">
                    <div class="title"> <a href="${e.id}">
                        ${e.name}
                    </a></div>
                </li>`
    });
    let brandsDom = document.querySelector('#allBrans');
    brandsDom.innerHTML = brandsDomInner;

}
brandsApi();




// shops api featch 
async function ourShops() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/0/api/Offers/GetOffers");
    const data = await response.json();
    // all shops from api 
    let ourShops = data.items;
    let shopsDrow = ourShops.map((e) => {
        return `<div class="swiper-slide"><div class="banner-block">
                    <a href="offers-1012">
                    <object
                        data="http://aaaserver-001-site31.ftempurl.com/${e.image}">
                        <img class="first-img " src="images/placeholder.png " alt="${e.name}">
                    </object>
                    </a>
                    <div class="text-des-container">
                    <div class="text-des">
                        <h2>
                        ${e.name}
                        </h2>
                    </div>
                    </div>
                </div>
                </div>
                `
    })
    let ourShopsDom = document.querySelector('#ourShops .swiper-wrapper');
    ourShopsDom.innerHTML = shopsDrow.join("");
}
ourShops();



// our products featch data 
async function myApiData() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/0/api/Products/GetProducts");
    const data = await response.json();

    // all products from api 
    let allProducts = data.items;
    let ourProducts = allProducts.map((e) => {
        return `
        <div class=" product-item swiper-slide">
                    <div class="item-inner">
                        <div class="product-thumbnail">
                        <div class="pr-img-area"> <a title="${e.name}" href="single_product.html?product_id=${e.id}">
                            <object class="product-img"
                                data="http://aaaserver-001-site31.ftempurl.com${e.image}">
                                <img class="first-img product-img" src="images/placeholder.png " alt="زيت عافيه">
                            </object>
                            </a> </div>
                        <div class="pr-info-area">
                            <div class="pr-button">
                            <form action="/like/${e.id}" method="POST">
                                <div class="mt-button add_to_wishlist">
                                <button type="submit">
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div class="item-info">
                        <div class="info-inner">
                            <div class="item-title"> <a title="زيت عافيه" href="/product-1054">
                                ${e.name}
                            </a>
                            </div>
                            <div class="item-content">
                            <div class="item-price">
                                <div class="price-box"> <span class="regular-price"> <span class="price">
                                    ${e.lowPriceData.price}
                                    </span>
                                </span> </div>
                            </div>
                            <div class="pro-action">
                            <button type="button" id="` + e.id + `" onclick="addtoCart(this.id)" class="add-to-cart"><span> Add to Cart</span> </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        `
    })
    let productsItem = document.querySelector('#ourProducts .swiper-wrapper');
    productsItem.innerHTML = ourProducts.join("");
}
myApiData()



// top selling products featch data 
async function topSellingApi() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/10/api/Products/GetProductsMostSell");
    const data = await response.json();


    // all products from api 
    let mostSell = data.items;
    let mostSellProducts = mostSell.map((e) => {
        return `
        <div class=" product-item swiper-slide">
                    <div class="item-inner">
                        <div class="product-thumbnail">
                        <div class="pr-img-area"> <a title="${e.name}" href="/product-1054">
                            <object class="product-img"
                                data="http://aaaserver-001-site31.ftempurl.com${e.image}">
                                <img class="first-img product-img" src="images/placeholder.png " alt="زيت عافيه">
                            </object>
                            </a> </div>
                        <div class="pr-info-area">
                            <div class="pr-button">
                                <form action="/like/${e.id}" method="POST">
                                <div class="mt-button add_to_wishlist">
                                <button type="submit">
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div class="item-info">
                        <div class="info-inner">
                            <div class="item-title"> <a title="زيت عافيه" href="/product-1054">
                                ${e.name}
                            </a>
                            </div>
                            <div class="item-content">
                            <div class="item-price">
                                <div class="price-box"> <span class="regular-price"> <span class="price">
                                    ${e.lowPriceData.price}
                                    </span>
                                </span> </div>
                            </div>
                            <div class="pro-action">
                            <button type="button" id="${e.id}" onclick="addtoCart(${e.id})" class="add-to-cart"><span> Add to Cart</span> </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
        `

    })
    let topSell = document.querySelector('#top-selling .swiper-wrapper');
    topSell.innerHTML = mostSellProducts.join("");
}
topSellingApi()



//offers products featch data 
async function ProductsHasDiscount() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/10/api/Products/GetProductsHasDiscount");
    const data = await response.json();


    // all products from api 
    let productsHasDiscount = data.items;
    let productsHasDiscountInner = productsHasDiscount.map((e) => {
        return `
        <div class=" product-item swiper-slide">
                    <div class="item-inner">
                        <div class="product-thumbnail">
                        <div class="pr-img-area"> <a title="${e.name}" href="/product-1054">
                            <object class="product-img"
                                data="http://aaaserver-001-site31.ftempurl.com${e.image}">
                                <img class="first-img product-img" src="images/placeholder.png " alt="زيت عافيه">
                            </object>
                            </a> </div>
                        <div class="pr-info-area">
                            <div class="pr-button">
                                <form action="/like/${e.id}" method="POST">
                                <div class="mt-button add_to_wishlist">
                                <button type="submit">
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div class="item-info">
                        <div class="info-inner">
                            <div class="item-title"> <a title="زيت عافيه" href="/product-1054">
                                ${e.name}
                            </a>
                            </div>
                            <div class="item-content">
                            <div class="item-price">
                                <div class="price-box"> 
                                    <span class="regular-price"> <span class="price">
                                    ${e.lowPriceData.price}
                                    </span>
                                    </span>
                                    <del class="old-price"> <del class="price">
                                    ${e.lowPriceData.oldPrice}
                                    </del></del>
                                </div>
                            </div>
                            <div class="pro-action">
                            <button type="button" id="` + e.id + `" onclick="addtoCart(${e.id})" class="add-to-cart"><span> Add to Cart</span> </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        `
    })
    let theOffers = document.querySelector('#the-offers .swiper-wrapper');
    theOffers.innerHTML = productsHasDiscountInner.join("");
}
ProductsHasDiscount()


// Get products with zero cost
async function zeroCost() {
    const response = await fetch("http://aaaserver-001-site31.ftempurl.com/10/api/Products/GetProductsWithZeroCost");
    const data = await response.json();


    // all products from api 
    let zeroCostData = data.items;
    let zeroCostInner = zeroCostData.map((e) => {
        return `
        <div class=" product-item swiper-slide">
                    <div class="item-inner">
                        <div class="product-thumbnail">
                        <div class="pr-img-area"> <a title="${e.name}" href="/product-1054">
                            <object class="product-img"
                                data="http://aaaserver-001-site31.ftempurl.com${e.image}">
                                <img class="first-img product-img" src="images/placeholder.png " alt="زيت عافيه">
                            </object>
                            </a> </div>
                        <div class="pr-info-area">
                            <div class="pr-button">
                                <form action="/like/${e.id}" method="POST">
                                <div class="mt-button add_to_wishlist">
                                <button type="submit">
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div class="item-info">
                        <div class="info-inner">
                            <div class="item-title"> <a title="زيت عافيه" href="/product-1054">
                                ${e.name}
                            </a>
                            </div>
                            <div class="item-content">
                            <div class="item-price">
                                <div class="price-box"> 
                                    <span class="regular-price"> <span class="price">
                                    ${e.lowPriceData.price}
                                    </span>
                                    </span>
                                </div>
                            </div>
                            <div class="pro-action">
                            <button type="button" id="` + e.id + `" onclick="addtoCart(${e.id})" class="add-to-cart"><span> Add to Cart</span> </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        `
    })
    let zeroCost = document.querySelector('#zero-cost .swiper-wrapper');
    zeroCost.innerHTML = zeroCostInner.join("");
}
zeroCost()