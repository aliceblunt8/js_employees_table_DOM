parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i=document.querySelector("table"),l=i.tBodies[0];function c(){var e=document.createElement("form");e.classList.add("new-employee-form"),i.after(e),e.insertAdjacentHTML("afterbegin",'\n    <label>Name:\n      <input\n        name="name"\n        type="text"\n        minlength="4"\n        required\n        >\n    </label>\n    <label>Position:\n      <input\n        name="position"\n        type="text"\n        minlength="4"\n        required\n        >\n    </label>\n    <label for="office">Office:\n      <select name="office" id="office">\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n     <label>Age:\n      <input\n        name="age"\n        type="number"\n        required\n        >\n    </label>\n    <label>Salary:\n      <input\n        name="salary"\n        type="number"\n        required\n        >\n    </label>\n    <button type="submit">Save to table</button>\n')}function u(){var e=!1,n=null;i.tHead.addEventListener("click",function(t){var r=t.target;e=!e,n!==r&&(e=!0),n=r,m(r.cellIndex,r.innerText,e)})}function s(){var e=null;i.tBodies[0].addEventListener("click",function(n){var t=n.target.closest("tr");e!==t&&null!==e&&e.classList.remove("active"),e=t,t.classList.add("active")})}function d(){document.querySelector("form").addEventListener("submit",function(e){var n=e.target;e.preventDefault(),f(n)&&(v(n),n.reset())})}function p(){l.addEventListener("dblclick",function(e){var n=e.target,t=n.textContent,r=document.createElement("input");r.className="cell-input",r.value=t,r.style.width=window.getComputedStyle(n).width,n.textContent="",n.append(r),r.addEventListener("blur",function(){y(n,r,t),r.remove()}),r.addEventListener("keydown",function(e){"Enter"===e.code&&(y(n,r,t),r.remove())})})}function m(n,t,r){var o=e(l.rows);o.sort(function(e,o){var a=e.cells[n].textContent,i=o.cells[n].textContent;return"Salary"===t&&(a=+a.replace(/[$,]/g,""),i=+i.replace(/[$,]/g,"")),r?isNaN(+a)?a.localeCompare(i):Number(a)-Number(i):isNaN(+a)?i.localeCompare(a):Number(i)-Number(a)}),l.append.apply(l,e(o))}function f(e){var n=e.age.value,t=e.salary.value;return n<18?(b(440,230,"Error!","Employee's age must be over 18!","error"),!1):n>90?(b(440,230,"Error!","Employee's age must be less than 90!","error"),!1):!(t<5e4)||(b(440,230,"Error!","Employee's salary must be greater than $50,000!","error"),!1)}function v(e){var n="$".concat((+e.salary.value).toLocaleString());l.insertAdjacentHTML("beforeend","\n  <tr>\n    <td>".concat(e.name.value,"</td>\n    <td>").concat(e.position.value,"</td>\n    <td>").concat(e.office.value,"</td>\n    <td>").concat(e.age.value,"</td>\n    <td>").concat(n,"</td>\n  </tr>\n  ")),b(440,230,"Success!","New employee was added to the table!","success")}function b(e,n,t,r,o){var a=document.createElement("div");a.classList.add("notification"),a.classList.add(o),a.style.top=e+"px",a.style.right=n+"px",a.innerHTML='\n    <h2 class="title">'.concat(t,"</h2>\n    <p>").concat(r,"</p>\n    "),document.body.append(a),setTimeout(function(){return a.remove()},2e3)}function y(e,n,t){n.value?e.textContent=n.value:e.textContent=t}c(),u(),s(),d(),p();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.030c8eda.js.map