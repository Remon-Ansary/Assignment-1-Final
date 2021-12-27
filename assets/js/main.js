(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );
})();

//-----Navigation area finish-------

// Range selector
var slideg1;
var slideg2;
function getVals() {
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    var tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  var displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML =
    "Price Range" + "৳" + slide1 + " - " + "৳" + slide2;
  slideg1 = slide1;
  slideg2 = slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

// -----Guest Number---
//initialising a variable name data
var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
  data = data + 1;
  document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
  data = data - 1;
  if (data < 0) {
    data = 0;
  }
  document.getElementById("counting").innerText = data;
}

// let fetchRes = fetch(
//   "https://www.vacationhomerentals.com/content/srp/saut?s=madrid"
// );

// fetchRes is the promise to resolve
// it by using.then() method
// fetchRes
//   .then((res) => res.json())
//   .then((d) => {
//     console.log(d);
//   });

// To Stop dropdown behaviour
$(document).on("click", ".dropdown-menu", function (e) {
  e.stopPropagation();
});

// Date Picker
var hdpkr = new HotelDatepicker(document.getElementById("input-id"));

var s = this.startDate;
var input = document.getElementById("input-id");

//Showing data in display
function countGuest() {
  document.getElementById("count-value").innerHTML = data;
}
function priceRange() {
  document.getElementById("price-value").innerHTML =
    "৳" + slideg1 + "-" + "৳" + slideg2;
}
function priceRange() {
  document.getElementById("price-value").innerHTML =
    "৳" + slideg1 + "-" + "৳" + slideg2;
}
function showDate() {
  document.getElementById("dateData").innerHTML = input.value;
}
function onOpenDatepicker() {
  console.log("Day clicked!");
}

console.log(hdpkr);
function allData() {
  console.log(data);
  console.log(slideg1);
  console.log(slideg2);
  //console.log(input.value);s
  const splitData = input.value.split(" ");
  console.log(splitData[0]);
  console.log(splitData[2]);
  document.getElementById("modalLocation").innerHTML = checkVal.value;
  document.getElementById("modalCheckin").innerHTML = splitData[0];
  document.getElementById("modalCheckout").innerHTML = splitData[2];
  document.getElementById("Guests").innerHTML = data;
  document.getElementById("priceRange").innerHTML =
    "৳" + slideg1 + "-" + "৳" + slideg2;
}

// api section

var checkVal = document.querySelector("#search");
var matchList = document.querySelector("#list");
var searchValue = async (e) => {
  fetch("https://www.vacationhomerentals.com/content/srp/saut?s=Las%20vegas", {
    method: "GET",
    mode: "no-cors",
  }).then(function (res) {
    json;
    if (res.body === null) {
      var matchData = json.filter((json) => {
        var regex = new RegExp(e.split("").join("\\w*").replace(/\W/, ""), "i");
        return json.Name.match(regex);
      });
      if (e.length < 1) {
        matchData = [];
        list.innerHTML = " ";
      }
      show(matchData);
    }
  });
};

var show = (matchData) => {
  if (matchData.length > 0) {
    const showhtml = matchData.map((check) => `<p>${check.Name}</p>`).join("");
    list.innerHTML = showhtml;
    list.onclick = function (e) {
      const clickedValue = e.target.innerText;
      checkVal.value = clickedValue;
      console.log(clickedValue);
      this.innerHTML = "";
    };
  }
};
checkVal.addEventListener("input", () => searchValue(checkVal.value));
const json = [
  {
    id: 503358,
    Name: "Province of Ragusa, Sicily, Italy",
    Count: 51,
    SlashName: "italy/sicily/province-of-ragusa-vacation-rentals/g100503358",
  },
  {
    id: 416298,
    Name: "Jerusalem, Jerusalem District, Israel",
    Count: 4,
    SlashName: "Israel/Jerusalem-vacation-rentals/g2579/",
  },
  {
    id: 407700,
    Name: "Jerusalem District, Israel",
    Count: 4,
    SlashName: "israel/jerusalem-district-vacation-rentals/g100407700",
  },
  {
    id: 686343,
    Name: "Marausa, Trapani, Italy",
    Count: 2,
    SlashName:
      "sicily/province-of-trapani/trapani/marausa-vacation-rentals/g100686343",
  },
  {
    id: 414003,
    Name: "Husafell, West Region, Iceland",
    Count: 2,
    SlashName: "iceland/west-region/husafell-vacation-rentals/g100414003",
  },
  {
    id: 414006,
    Name: "Husavik, Northeast Region, Iceland",
    Count: 2,
    SlashName: "iceland/northeast-region/husavik-vacation-rentals/g100414006",
  },
  {
    id: 574074,
    Name: "Llanddeusant, Anglesey, United Kingdom",
    Count: 1,
    SlashName:
      "wales/north-wales/anglesey/llanddeusant-vacation-rentals/g100574074",
  },
];
