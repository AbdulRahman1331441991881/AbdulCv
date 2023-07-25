let list = document.querySelectorAll(".main .page .nav .links ul li");
let pages = document.querySelectorAll(".main .page .section .part");
let colors = document.querySelectorAll(".sid .colors .span");
let skills = document.querySelectorAll(
  ".main .page .section .part:nth-of-type(2) .titles .skills .skillsname span .rang"
);
let Active = (Element) => {
  Element.target.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });
  Element.target.classList.add("active");
};

let saveColor = window.localStorage.getItem("color");

if (saveColor !== null) {
  document.documentElement.style.setProperty("--color--or", saveColor);
  colors.forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.colors === saveColor) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("load", () => {
  let saveList = window.sessionStorage.getItem("bage");
  if (saveList !== null) {
    // console.log(saveList);
    let activeElementIndex = parseInt(saveList);
    list.forEach((ele, index) => {
      if (index === activeElementIndex) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
    pages.forEach((ele, index) => {
      if (index === activeElementIndex) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
  }
});

document.querySelector(".sid .siite i").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".sid ").classList.toggle("open");
};

list.forEach((element, i) => {
  element.addEventListener("click", (ele) => {
    
    window.sessionStorage.setItem("bage", i.toString());
    Active(ele);
    pages.forEach((int, intex) => {
      int.classList.remove("active");
      if (intex === i) {
        pages[intex].classList.add("active");
      }
    });
  });
});
colors.forEach((Element) => {
  Element.addEventListener("click", (El) => {
    Active(El);
    console.log(El.target.dataset.colors);
    let inColorLO = window.localStorage.setItem(
      "color",
      El.target.dataset.colors
    );
    document.documentElement.style.setProperty(
      "--color--or",
      El.target.dataset.colors
    );
  });
});
skills.forEach((el) => {
  el.style.width = el.dataset.width;
});
document.querySelector(
  ".main .page .section .part:first-of-type button"
).onclick = function () {
  document
    .querySelector(".main .page .section .part:first-of-type p")
    .classList.toggle("active");
};

document.querySelector(".main .page .nav .fa-solid").onclick = function () {
  document.querySelector(".main .page .nav .links").classList.toggle("opened");
};

let Age = document.querySelector(
  ".main .page .section .part:nth-of-type(2) .titles .info .text h3"
);
let data = new Date();
Age.innerHTML = `Age : ${data.getFullYear() - 1997}`;

let dowanlod = document.querySelector(
  ".main .page .section .part:nth-of-type(2) .titles .info .text button a"
);

// dowanlod.addEventListener('click', (e) => {
//   e.preventDefault();
// })
let main = document.querySelector(".main .page .section .part:nth-of-type(4)");
let pac = document.querySelectorAll(
  ".main .page .section .part:nth-of-type(4) .Project .pro"
);
pac.forEach((element) => {
  element.addEventListener("click", (el) => {
    let div = document.createElement("div");
    div.style.cssText =
      "width:100% ; height:100vh; position:fixed; top:0; right:0 ; zIndex:1000 ; background:var(--color--or)";
    let sec = document.createElement("div");
    sec.style.cssText =
      "width:35%; height:350px;padding:10px; border:solid 2px  #000; position:absolute; top:15%; left:33%; ttransform:translate(-50%,-50%); background-color:#fff; opacity:1";
    sec.classList = "sec";
    let imge = document.createElement("img");
    imge.classList = "imge";
    imge.src = el.target.src;
    imge.style.cssText = "width:100%; height:100%;";
    let close = document.createElement("i");
    close.classList = "fa-solid fa-x";
    close.style.cssText =
      "position:absolute; top:-6%; right:-4%; zIndex:1000; padding:  10px ; background-color:#fff ; border: solid 2px #000;  borderRadius:20px; ";
    close.addEventListener("click", () => {
      sec.parentElement.remove();
    });
    listImge = document.createElement("div");
    listImge.classList = "listeImge";
    let ArryImge = [
      "./img/Untitled design (1).png",
      "./img/Untitled design.png",
      "./img/Untitled design1.png",
      "./img/Untitled design2.png",
      "./img/Absolute_Reality_v16_a_table_with_a_number_of_test_results_on_1.jpg",
      "./img/Untitled design3.png",
    ];
    for (let i = 0; i < ArryImge.length; i++) {
      let imges = document.createElement("img");
      // let imgess=/()/
      imges.classList = "imges";
      imges.src = ArryImge[i];
      imges.style.cssText = "width:100%; height:100%; border:1px solid #000";
      listImge.appendChild(imges);
      imges.addEventListener("click", (ele) => {
        imge.src = ele.target.src;
      });
    }
 
    sec.appendChild(close);
    sec.appendChild(imge);
    div.appendChild(listImge);
    div.appendChild(sec);
    main.appendChild(div);
  });
});
