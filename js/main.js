/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/load_more-2.js":
/*!******************************************!*\
  !*** ./src/js/components/load_more-2.js ***!
  \******************************************/
/***/ (() => {

const showMore_2 = document.querySelector('.load-more_2');
const contentItem_2 = document.querySelector('.loaded-img');
showMore_2.addEventListener("click", () => {
  contentItem_2.classList.add('loaded-img-all-end');
  if (contentItem_2.classList.contains('loaded-img-all-end')) {
    showMore_2.style.display = 'none';
  }
});

/***/ }),

/***/ "./src/js/components/load_more.js":
/*!****************************************!*\
  !*** ./src/js/components/load_more.js ***!
  \****************************************/
/***/ (() => {

const showMore = document.querySelector('.load-more');
const contentItem = document.querySelector('.loaded');
showMore.addEventListener("click", () => {
  contentItem.classList.add('end-load');
  if (contentItem.classList.contains('end-load')) {
    showMore.style.display = 'none';
  }
});

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (() => {

const largePhotoSliderLine = document.querySelector('.large-photo-slider-line');
const reviewSlider = document.querySelector('.review-slider-line');
const nameSlider = document.querySelector('.name-slider-line');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const photos = document.querySelectorAll('.photo');
const userBoxes = document.querySelectorAll('.user-box');
const reviews = document.querySelectorAll('.review');
const largePhotos = document.querySelectorAll('.large-photo');
let position = 0;
let photoIndex = 0;
let reviewPosition = 0;
let namePosition = 0;
const nextSlide = () => {
  if (position < 498 && reviewPosition < 180 && namePosition < 180) {
    position += 166;
    photoIndex++;
    reviewPosition += 60;
    namePosition += 60;
  } else {
    position = 0;
    photoIndex = 0;
    reviewPosition = 0;
    namePosition = 0;
  }
  largePhotoSliderLine.style.left = -position + 'px';
  reviewSlider.style.top = -reviewPosition + 'px';
  nameSlider.style.top = -namePosition + 'px';
  thisPhoto(photoIndex);
  thisBox(photoIndex);
  thisReview(photoIndex);
  thisLargePhoto(photoIndex);
};
const prevSlide = () => {
  if (position > 0 && reviewPosition > 0 && namePosition > 0) {
    position -= 166;
    photoIndex--;
    reviewPosition -= 60;
    namePosition -= 60;
  } else {
    position = 498;
    photoIndex = 3;
    reviewPosition = 180;
    namePosition = 180;
  }
  largePhotoSliderLine.style.left = -position + 'px';
  reviewSlider.style.top = -reviewPosition + 'px';
  nameSlider.style.top = -namePosition + 'px';
  thisPhoto(photoIndex);
  thisBox(photoIndex);
  thisReview(photoIndex);
  thisLargePhoto(photoIndex);
};
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
const thisPhoto = index => {
  for (let photo of photos) {
    photo.classList.remove('active-photo');
  }
  photos[index].classList.add('active-photo');
};
const thisBox = index => {
  for (let userBox of userBoxes) {
    userBox.classList.remove('lp-active');
  }
  userBoxes[index].classList.add('lp-active');
};
const thisReview = index => {
  for (let review of reviews) {
    review.classList.remove('lp-active');
  }
  reviews[index].classList.add('lp-active');
};
const thisLargePhoto = index => {
  for (let largePhoto of largePhotos) {
    largePhoto.classList.remove('lp-active');
  }
  largePhotos[index].classList.add('lp-active');
};
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    position = 166 * index;
    largePhotoSliderLine.style.left = -position + 'px';
    reviewPosition = 60 * index;
    reviewSlider.style.top = -reviewPosition + 'px';
    namePosition = 60 * index;
    nameSlider.style.top = -reviewPosition + 'px';
    photoIndex = index;
    thisPhoto(photoIndex);
    thisBox(photoIndex);
    thisReview(photoIndex);
    thisLargePhoto(photoIndex);
  });
});

/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/***/ (() => {

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(onTabClick);
function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
        item.classList.remove('arrow');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
      currentBtn.classList.add('arrow');
    }
  });
}
document.querySelector('.tabs__nav-btn').click();

/***/ }),

/***/ "./src/js/components/tab_2.js":
/*!************************************!*\
  !*** ./src/js/components/tab_2.js ***!
  \************************************/
/***/ (() => {

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", event => {
    let tabsChildren = event.target.parentElement.children;
    for (let t = 0; t < tabsChildren.length; t++) {
      tabsChildren[t].classList.remove("tab--active");
    }
    tabs[i].classList.add("tab--active");
    let tabContentChildren = event.target.parentElement.nextElementSibling.children;
    for (let c = 0; c < tabContentChildren.length; c++) {
      tabContentChildren[c].classList.remove("content--active");
    }
    contents[i].classList.add("content--active");
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_tab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab_2 */ "./src/js/components/tab_2.js");
/* harmony import */ var _components_tab_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_tab_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_load_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/load_more */ "./src/js/components/load_more.js");
/* harmony import */ var _components_load_more__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_load_more__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_load_more_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/load_more-2 */ "./src/js/components/load_more-2.js");
/* harmony import */ var _components_load_more_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_load_more_2__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=main.js.map