(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/PpX":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function PpX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<fa-icon [icon]=\"question\" class=\"guide\" (click)=\"tourStart()\"></fa-icon>\r\n<header>\r\n  <h1>Welcome</h1>\r\n  <h2>{{ username }}</h2>\r\n</header>\r\n<section class=\"indexContainer\">\r\n  <mat-card routerLink=\"cp\" class=\"first-element\">\r\n    <fa-icon [icon]=\"chair\" class=\"icon\"></fa-icon>\r\n    <mat-card-title>Check In</mat-card-title>\r\n  </mat-card>\r\n  <mat-card routerLink=\"cp/fanSetting\" class=\"second-element\">\r\n    <fa-icon [icon]=\"fan\" class=\"icon\"></fa-icon>\r\n    <mat-card-title>Temperature</mat-card-title>\r\n  </mat-card>\r\n  <mat-card routerLink=\"learningelement\" class=\"third-element\">\r\n    <fa-icon [icon]=\"cap\" class=\"icon\"></fa-icon>\r\n    <mat-card-title>Learning</mat-card-title>\r\n  </mat-card>\r\n  <mat-card routerLink=\"profile\" class=\"fourth-element\">\r\n    <fa-icon [icon]=\"user\" class=\"icon\"></fa-icon>\r\n    <mat-card-title>Profile</mat-card-title>\r\n  </mat-card>\r\n  <!--  <mat-card routerLink=\"**\" disabled>-->\r\n  <!--    <mat-card-title>Schedule</mat-card-title>-->\r\n  <!--    <fa-icon [icon]=\"calender\" class=\"watermarkIcon\"></fa-icon>-->\r\n  <!--    <fa-icon [icon]=\"arrow\" class=\"arrow\"></fa-icon>-->\r\n  <!--  </mat-card>-->\r\n  <!--  <mat-card routerLink=\"**\" disabled>-->\r\n  <!--    <mat-card-title>Contact</mat-card-title>-->\r\n  <!--    <fa-icon [icon]=\"contact\" class=\"watermarkIcon\"></fa-icon>-->\r\n  <!--    <fa-icon [icon]=\"arrow\" class=\"arrow\"></fa-icon>-->\r\n  <!--  </mat-card>-->\r\n</section>\r\n<p>Vent2U is your solution for the best possible indoor climate!</p>\r\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\FinalVentk2\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Ddd":
    /*!*********************************************!*\
      !*** ./src/app/signup/signup.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Ddd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*:host {*/\r\n    /*display: flex;*/\r\n    /*justify-content: center;*/\r\n    /*margin: 100px 0px;*/\r\n    /*}*/\r\n    form{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n    .mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n}\r\n    .error {\r\n    padding: 16px;\r\n    width: 300px;\r\n    color: white;\r\n    background-color: red;\r\n}\r\n    .button {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n    .mat-alert-danger {\r\n    color: #f44336;\r\n    /* Red */\r\n}\r\n    #logincard {\r\n    background-color: rgb(240, 245, 245);\r\n}\r\n    .register-button {\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    border: solid white 2px;\r\n    padding: .3rem 1.8rem;\r\n    margin: auto;\r\n    font-size: 1rem;\r\n    border-radius: 50px;\r\n}\r\n    .inOut{\r\n  color: white;\r\n  font-size: 13pt;\r\n  margin-top: 35px;\r\n  text-align: center;\r\n}\r\n    label{\r\n  color: white;\r\n  font-size: 17pt;\r\n  padding-left: 17px;\r\n}\r\n    input{\r\n  padding: 5px 10px;\r\n\r\n  font-size: 28px;\r\n  border-width: 2px;\r\n  border-color: white;\r\n  background-color: rgba(0, 0 ,0, 0.2);;\r\n  color: #FFFFFF;\r\n  border-style: solid;\r\n  border-radius: 50px;\r\n  box-shadow: 0px 0px 10px rgba(66,66,66,.45);\r\n  text-shadow: 0px 0px 5px rgba(66,66,66,.75);\r\n  width: 100%;\r\n  /*text-align: center;*/\r\n}\r\n    .dangerMan{\r\n  color: lightcoral;\r\n  font-size: 12pt;\r\n  padding-left: 17px;\r\n  margin-bottom: 25px;\r\n}\r\n    ::ng-deep .mat-form-field .mat-form-field-label{\r\n    color: white;\r\n    font-size: 1rem;\r\n}\r\n    /* Change label color on focused */\r\n    ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: white !important;\r\n}\r\n    /* underline border color on focused */\r\n    ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple{\r\n    background-color: white !important;\r\n}\r\n    ::ng-deep .mat-form-field-underline{\r\n    background-color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7SUFDTixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUN6QixJQUFJO0lBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtJQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtJQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0lBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0lBRUE7SUFDSSxjQUFjO0lBQ2QsUUFBUTtBQUNaO0lBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7SUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7SUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtJQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7SUFDQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtJQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0lBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtJQUVBLGtDQUFrQztJQUNsQztJQUNJLHVCQUF1QjtBQUMzQjtJQUVBLHNDQUFzQztJQUN0QztJQUNJLGtDQUFrQztBQUN0QztJQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo6aG9zdCB7Ki9cclxuICAgIC8qZGlzcGxheTogZmxleDsqL1xyXG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gICAgLyptYXJnaW46IDEwMHB4IDBweDsqL1xyXG4vKn0qL1xyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5tYXQtYWxlcnQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgLyogUmVkICovXHJcbn1cclxuXHJcbiNsb2dpbmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ1LCAyNDUpO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gICAgcGFkZGluZzogLjNyZW0gMS44cmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4uaW5PdXR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5sYWJlbHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxN3B0O1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxufVxyXG5pbnB1dHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuXHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwICwwLCAwLjIpOztcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoNjYsNjYsNjYsLjQ1KTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg2Niw2Niw2NiwuNzUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbn1cclxuLmRhbmdlck1hbntcclxuICBjb2xvcjogbGlnaHRjb3JhbDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIENoYW5nZSBsYWJlbCBjb2xvciBvbiBmb2N1c2VkICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiB1bmRlcmxpbmUgYm9yZGVyIGNvbG9yIG9uIGZvY3VzZWQgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "0rzt":
    /*!*****************************************************!*\
      !*** ./src/app/my-profile/my-profile.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function rzt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container{\r\n\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n\r\nh2{\r\n    font-weight: bold;\r\n    font-size: 1.7rem;\r\n    margin: unset;\r\n}\r\n\r\nh3{\r\n    font-weight: normal;\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.flex{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n}\r\n\r\ndiv.flex span{\r\n    color: green;\r\n    border: green solid 1px;\r\n    padding: .3rem .5rem;\r\n    margin-left: 20px;\r\n}\r\n\r\n.user-button, .user-delete{\r\n    color: white;\r\n    border: white solid 1px;\r\n    padding: .3rem .5rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n    display: block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.user-delete{\r\n    color: red;\r\n}\r\n\r\n/*.example-card{*/\r\n\r\n/*    width: 400px;*/\r\n\r\n/*}*/\r\n\r\n/*.user-button{*/\r\n\r\n/*margin-left: 110px;*/\r\n\r\n/*background-color: #3f51b5;*/\r\n\r\n/*color: white;*/\r\n\r\n/*height: 40px;*/\r\n\r\n/*text-align: center;*/\r\n\r\n/*}*/\r\n\r\n#title{\r\n    margin: 25px;\r\n}\r\n\r\nmat-card-content{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQSxpQkFBaUI7O0FBQ2pCLG9CQUFvQjs7QUFDcEIsSUFBSTs7QUFDSixnQkFBZ0I7O0FBQ1osc0JBQXNCOztBQUN0Qiw2QkFBNkI7O0FBQzdCLGdCQUFnQjs7QUFDaEIsZ0JBQWdCOztBQUNoQixzQkFBc0I7O0FBQzFCLElBQUk7O0FBQ0o7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im15LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblxyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBtYXJnaW46IHVuc2V0O1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmRpdi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5kaXYuZmxleCBzcGFue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4udXNlci1idXR0b24sIC51c2VyLWRlbGV0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMXB4O1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnVzZXItZGVsZXRle1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi8qLmV4YW1wbGUtY2FyZHsqL1xyXG4vKiAgICB3aWR0aDogNDAwcHg7Ki9cclxuLyp9Ki9cclxuLyoudXNlci1idXR0b257Ki9cclxuICAgIC8qbWFyZ2luLWxlZnQ6IDExMHB4OyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7Ki9cclxuICAgIC8qY29sb3I6IHdoaXRlOyovXHJcbiAgICAvKmhlaWdodDogNDBweDsqL1xyXG4gICAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cclxuLyp9Ki9cclxuI3RpdGxle1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "1EH4":
    /*!***********************************************************************!*\
      !*** ./src/app/fan-setting/fan-container/fan-container.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function EH4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fan-button{\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    min-width: 160px;\r\n    color:rgba(0,0,0,.87);\r\n}\r\ndiv{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nhr{\r\n    width: 320px;\r\n    margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbi1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoiZmFuLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhbi1idXR0b257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGNvbG9yOnJnYmEoMCwwLDAsLjg3KTtcclxufVxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "3XrV":
    /*!********************************************************!*\
      !*** ./src/app/controlpanel/controlpanel.component.ts ***!
      \********************************************************/

    /*! exports provided: ControlpanelComponent, QrScannerDialogComponent */

    /***/
    function XrV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlpanelComponent", function () {
        return ControlpanelComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerDialogComponent", function () {
        return QrScannerDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_controlpanel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./controlpanel.component.html */
      "6O2n");
      /* harmony import */


      var _controlpanel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./controlpanel.component.css */
      "t6eZ");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _raw_loader_qr_dialog_component_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! raw-loader!./qr.dialog.component.html */
      "O8g8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var angular_shepherd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-shepherd */
      "wfSS");
      /* harmony import */


      var _qr_qr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./qr/qr.component */
      "wqCw");

      var ControlpanelComponent = /*#__PURE__*/function () {
        /** Constructor */
        function ControlpanelComponent(dialog, shepherdService) {
          _classCallCheck(this, ControlpanelComponent);

          this.dialog = dialog;
          this.shepherdService = shepherdService;
          this.qrCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faQrcode"];
          this.question = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faQuestionCircle"];
          /** Properties */

          this.currentPosition = {
            currentZone: null,
            currentRoom: null
          };
        }
        /* Dialog/Modal for QR Scanner */


        _createClass(ControlpanelComponent, [{
          key: "qrScanner",
          value: function qrScanner() {
            var dialogRef = this.dialog.open(_qr_qr_component__WEBPACK_IMPORTED_MODULE_9__["QrComponent"], {
              width: '80%',
              height: 'fit-content',
              hasBackdrop: true,
              panelClass: ['dialogClass']
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
          /* Page tour! */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.shepherdService.defaultStepOptions = {
              scrollTo: false,
              cancelIcon: {
                enabled: true
              }
            };
            this.shepherdService.modal = true;
            this.shepherdService.confirmCancel = false;
            this.shepherdService.addSteps([{
              id: 'intro',
              attachTo: {
                element: '.first-element',
                on: 'bottom'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'QR Scan',
              text: ['You can use your phones QR Scanner to automatically fill in Room and Zone!'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }, {
              id: 'intro',
              attachTo: {
                element: '.second-element',
                on: 'top'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'End Tour',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Zone Select',
              text: ['You can select your room and zone manually'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }]);
          }
          /* Method to start Tour, called from the question mark in HTML */

        }, {
          key: "tourStart",
          value: function tourStart() {
            this.shepherdService.start();
          }
          /** OnInit */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ControlpanelComponent;
      }();

      ControlpanelComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: angular_shepherd__WEBPACK_IMPORTED_MODULE_8__["ShepherdService"]
        }];
      };

      ControlpanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-controlpanel',
        template: _raw_loader_controlpanel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_controlpanel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], ControlpanelComponent);
      /* Dialog component for the QR Scanner */

      var QrScannerDialogComponent = /*#__PURE__*/function () {
        function QrScannerDialogComponent(dialogRef) {
          _classCallCheck(this, QrScannerDialogComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(QrScannerDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return QrScannerDialogComponent;
      }();

      QrScannerDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
        }];
      };

      QrScannerDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-dialog-qrscanner',
        template: _raw_loader_qr_dialog_component_html__WEBPACK_IMPORTED_MODULE_4__["default"]
      })], QrScannerDialogComponent);
      /***/
    },

    /***/
    "5pey":
    /*!************************************************!*\
      !*** ./src/app/_services/in-memory.service.ts ***!
      \************************************************/

    /*! exports provided: InMemoryService */

    /***/
    function pey(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InMemoryService", function () {
        return InMemoryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var baseUrl = 'http://localhost:8080/api/presets';

      var InMemoryService = /*#__PURE__*/function () {
        function InMemoryService(http) {
          _classCallCheck(this, InMemoryService);

          this.http = http;
        }

        _createClass(InMemoryService, [{
          key: "create",
          value: function create(data) {
            return this.http.post(baseUrl, data);
          }
        }, {
          key: "getbyId",
          value: function getbyId(uid) {
            return this.http.get("http://localhost:8080/api/presets/".concat(uid));
          }
        }]);

        return InMemoryService;
      }();

      InMemoryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      InMemoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], InMemoryService);
      /***/
    },

    /***/
    "6O2n":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controlpanel/controlpanel.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<fa-icon [icon]=\"question\" class=\"guide\" (click)=\"tourStart()\"></fa-icon>\r\n\r\n<header>\r\n  <h1>Check In</h1>\r\n  <p>Current Room: {{currentPosition.currentRoom || '---'}} | Current Zone: {{currentPosition.currentZone || '---'}}</p>\r\n</header>\r\n\r\n<mat-card (click)=\"qrScanner()\" class=\"first-element\">\r\n  <fa-icon [icon]=\"qrCode\" class=\"icon\"></fa-icon>\r\n  <mat-card-title>QR scanner</mat-card-title>\r\n</mat-card>\r\n\r\n<div class=\"divider\">\r\n  <hr>\r\n  <span>OR</span>\r\n  <hr>\r\n</div>\r\n<section class=\"zoneContainer\" class=\"second-element\">\r\n  <app-zone-select [(position)]=\"currentPosition\">\r\n<!--    Component for zone selection -->\r\n  </app-zone-select>\r\n</section>\r\n";
      /***/
    },

    /***/
    "7/Ie":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\r\n    <h1>Profile</h1>\r\n</header>\r\n\r\n<section class=\"container\">\r\n\r\n    <h2>Username</h2>\r\n    <!-- <h3>{{name}}</h3> -->\r\n\r\n    <div class=\"flex\">\r\n        <h2>Email</h2> <span>EDIT</span>\r\n    </div>\r\n    <!-- <h3>{{email}}</h3> -->\r\n\r\n    <div class=\"flex\">\r\n        <h2>Password</h2> <span>EDIT</span>\r\n    </div>\r\n\r\n    <span class=\"user-button\" (click)=\"logout()\">LogOut</span>\r\n    <span class=\"user-delete\">Delete Account</span>\r\n\r\n\r\n</section>\r\n\r\n\r\n<!--<div class=\"container\">-->\r\n\r\n<!--<div mat-card-avatar class=\"example-header-image\">-->\r\n<!--<img [src]='photoUrl'>-->\r\n<!--</div>-->\r\n<!--<button class=\"user-button\" (click)=\"logout()\" mat-button>LogOut</button>-->\r\n\r\n\r\n<!--<p>Provided Email Address: {{email}}</p>-->\r\n<!--<h3>Saved Presets</h3>-->\r\n<!--<ul>-->\r\n<!--<li>Room:{{userData[0].room}}</li>-->\r\n<!--<li>Zone:{{userData[0].zone}}</li>-->\r\n<!--<li>AirFlow:{{userData[0].airflow}}</li>-->\r\n<!--</ul>-->\r\n\r\n<!--</div>-->";
      /***/
    },

    /***/
    "7Vn+":
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AUTH_API = 'http://localhost:8080/api/auth/';
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(credentials) {
            return this.http.post(AUTH_API + 'signin', {
              username: credentials.username,
              password: credentials.password
            }, httpOptions);
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post(AUTH_API + 'signup', {
              username: user.username,
              email: user.email,
              password: user.password
            }, httpOptions);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "7baR":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controlpanel/qr/qr.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function baR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>QR Scanner</h1>\r\n  <zxing-scanner\r\n    [torch]=\"torchEnabled\"\r\n    [device]=\"deviceCurrent\"\r\n    (deviceChange)=\"onDeviceChange($event)\"\r\n    (scanSuccess)=\"onCodeResult($event)\"\r\n    [formats]=\"formatsEnabled\"\r\n    [tryHarder]=\"tryHarder\"\r\n    (permissionResponse)=\"onHasPermission($event)\"\r\n    (camerasFound)=\"onCamerasFound($event)\"\r\n    (torchCompatible)=\"onTorchCompatible($event)\">\r\n  </zxing-scanner>\r\n";
      /***/
    },

    /***/
    "7jCS":
    /*!**********************************************************************!*\
      !*** ./src/app/newlearningelements/newlearningelements.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NewlearningelementsComponent */

    /***/
    function jCS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewlearningelementsComponent", function () {
        return NewlearningelementsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newlearningelements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newlearningelements.component.html */
      "o3TQ");
      /* harmony import */


      var _newlearningelements_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newlearningelements.component.css */
      "cMB2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NewlearningelementsComponent = /*#__PURE__*/function () {
        function NewlearningelementsComponent(router) {
          _classCallCheck(this, NewlearningelementsComponent);

          this.router = router;
        }

        _createClass(NewlearningelementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goNext",
          value: function goNext() {
            this.router.navigate(['learningelement/info']);
          }
        }]);

        return NewlearningelementsComponent;
      }();

      NewlearningelementsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      NewlearningelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newlearningelements',
        template: _raw_loader_newlearningelements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newlearningelements_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewlearningelementsComponent);
      /***/
    },

    /***/
    "8w3S":
    /*!*********************************************!*\
      !*** ./src/app/_services/preset.service.ts ***!
      \*********************************************/

    /*! exports provided: PresetService */

    /***/
    function w3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresetService", function () {
        return PresetService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var presetUrl = 'http://localhost:8080/api/preset';

      var PresetService = /*#__PURE__*/function () {
        function PresetService(http) {
          _classCallCheck(this, PresetService);

          this.http = http;
        }

        _createClass(PresetService, [{
          key: "postPreset",
          value: function postPreset(data) {
            return this.http.post(presetUrl, data);
          }
        }, {
          key: "getPreset",
          value: function getPreset(id) {
            return this.http.get("".concat(presetUrl, "/").concat(id));
          }
        }, {
          key: "putPresets",
          value: function putPresets(id, data) {
            return this.http.post("".concat(presetUrl, "/").concat(id), data);
          }
        }]);

        return PresetService;
      }();

      PresetService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PresetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PresetService);
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "Gd4t");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "RV7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(router) {
          _classCallCheck(this, HomeComponent);

          this.router = router;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "learningElement",
          value: function learningElement() {
            this.router.navigate(['learningelement']);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-nav{\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  z-index: 100;\r\n}\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 800px) {\r\n    section{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        background-color: #565896 ;\r\n        padding: 5px 0;\r\n    }\r\n    app-nav{\r\n        position: unset;\r\n        bottom: unset;\r\n        left: unset;\r\n        right: unset;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWLFlBQVk7QUFDZDs7Ozs7QUFLQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwwQkFBMEI7UUFDMUIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7UUFDYixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7QUFFSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1uYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1ODk2IDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuICAgIGFwcC1uYXZ7XHJcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgICAgIGJvdHRvbTogdW5zZXQ7XHJcbiAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "AgAX":
    /*!************************************!*\
      !*** ./src/app/_styles/styles.css ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function AgAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Everywhere */\r\nh1, h2, h3{\r\n    color: white;\r\n}\r\n.guide{\r\n    color: white;\r\n    opacity: 70%;\r\n    font-size: 1.7rem;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 60px;\r\n}\r\nheader{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 20px 0;\r\n    padding: 1rem 0;\r\n    color: white;\r\n\r\n}\r\nheader h1{\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n/* Cards navigation box */\r\nmat-card{\r\n    width: 45%;\r\n    max-width: 300px;\r\n    margin-bottom: 35px;\r\n    background-color: rgba(86, 88, 150, 0.51);\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 1.5rem;\r\n}\r\n.icon{\r\n    font-size: 2.5rem;\r\n    margin-bottom: 20px;\r\n    width: 60px;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    background: rgb(18,181,72);\r\n    background: radial-gradient(circle, rgba(18,181,72,1) 0%, rgba(53,199,102,1) 52%, rgba(138,255,177,1) 100%);\r\n}\r\n/* App-component */\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n@media screen and (min-width: 800px) {\r\n    /* Everywhere */\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMkdBQTJHO0FBQy9HO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFJQTtJQUNJLGVBQWU7OztBQUduQiIsImZpbGUiOiJzdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXZlcnl3aGVyZSAqL1xyXG5oMSwgaDIsIGgze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3VpZGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbn1cclxuXHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbmhlYWRlciBoMXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBDYXJkcyBuYXZpZ2F0aW9uIGJveCAqL1xyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODYsIDg4LCAxNTAsIDAuNTEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwxODEsNzIpO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOCwxODEsNzIsMSkgMCUsIHJnYmEoNTMsMTk5LDEwMiwxKSA1MiUsIHJnYmEoMTM4LDI1NSwxNzcsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi8qIEFwcC1jb21wb25lbnQgKi9cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLyogRXZlcnl3aGVyZSAqL1xyXG5cclxuXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D1CG":
    /*!***********************************************!*\
      !*** ./src/app/_services/check-in.service.ts ***!
      \***********************************************/

    /*! exports provided: CheckInService */

    /***/
    function D1CG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckInService", function () {
        return CheckInService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var roomUrl = 'http://localhost:8080/api/room';
      var zoneByRoomUrl = 'http://localhost:8080/api/zone';
      var seatByZoneUrl = 'http://localhost:8080/api/seat';

      var CheckInService = /*#__PURE__*/function () {
        function CheckInService(conn) {
          _classCallCheck(this, CheckInService);

          this.conn = conn;
        }
        /** Rooms */


        _createClass(CheckInService, [{
          key: "getRooms",
          value: function getRooms() {
            return this.conn.get(roomUrl);
          }
          /** Zones */

        }, {
          key: "getZones",
          value: function getZones(roomID) {
            return this.conn.get("".concat(zoneByRoomUrl, "/").concat(roomID), roomID);
          }
          /** Chairs */

        }, {
          key: "getSeats",
          value: function getSeats(zoneID) {
            return this.conn.get("".concat(seatByZoneUrl, "/").concat(zoneID), zoneID);
          }
          /** User */

        }, {
          key: "getUser",
          value: function getUser() {
            return 'guest';
          }
          /** Preset */

        }, {
          key: "getPreset",
          value: function getPreset() {
            return 'preset';
          }
        }]);

        return CheckInService;
      }();

      CheckInService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CheckInService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CheckInService);
      /***/
    },

    /***/
    "DN7M":
    /*!*********************************************!*\
      !*** ./src/app/header/header.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function DN7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-toolbar{\r\n    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.3);\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    background-color: #565896;\r\n    border-bottom-left-radius: 50%;\r\n    border-bottom-right-radius: 50%;\r\n}\r\n.v2u{\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    text-decoration: none;\r\n    text-align: center;\r\n}\r\n.v2u span{\r\n    color: #6ea81a;\r\n}\r\n@media screen and (min-width: 800px) {\r\n    mat-toolbar{\r\n        box-shadow: unset;\r\n        border-radius: unset;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksNENBQTRDO0lBQzVDLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJO1FBRUksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTg5NjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbn1cclxuLnYydXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi52MnUgc3BhbntcclxuICAgIGNvbG9yOiAjNmVhODFhO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgbWF0LXRvb2xiYXJ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "FQmJ":
    /*!****************************************************!*\
      !*** ./src/app/_services/token-storage.service.ts ***!
      \****************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function FQmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(sessionStorage.getItem(USER_KEY));
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ctorParameters = function () {
        return [];
      };

      TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TokenStorageService);
      /***/
    },

    /***/
    "GNNs":
    /*!*******************************************************************!*\
      !*** ./src/app/controlpanel/qr/qr-result/qr-result.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function GNNs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Gd4t":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Gd4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Vent</title>\r\n</head>\r\n<body>\r\n    <mat-grid-list cols=\" \" rowHeight=\"12:1\">\r\n        <mat-grid-tile> \r\n            <button mat-button class=\"mat-buttons\">Control Panel <span class=\"material-icons\">\r\n                chevron_right\r\n                </span></button></mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <button mat-button class=\"mat-buttons\" (click)= 'learningElement()'>Learning Elements \r\n                <span class=\"material-icons\">\r\n                    chevron_right\r\n                    </span>\r\n            </button>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n       \r\n</body>\r\n</html>";
      /***/
    },

    /***/
    "Ik+H":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function IkH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div mat-dialog-content class=\"dialog\">\r\n    Please Login to Continue!\r\n    <div>\r\n        <button mat-button class=\"continue\" (click)=\"continueTo()\" [mat-dialog-close]>Ok</button>\r\n        <button mat-button class=\"cancel\" [mat-dialog-close]>cancel</button>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "KQ97":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KQ97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 >\r\n    Cannot Load the requested page. Please check the Url..\r\n  </h1>";
      /***/
    },

    /***/
    "MMQ2":
    /*!*******************************************************************!*\
      !*** ./src/app/controlpanel/zone-select/zone-select.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ZoneSelectComponent */

    /***/
    function MMQ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoneSelectComponent", function () {
        return ZoneSelectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_zone_select_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./zone-select.component.html */
      "UHHt");
      /* harmony import */


      var _zone_select_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./zone-select.component.css */
      "yCwc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_check_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_services/check-in.service */
      "D1CG");
      /* harmony import */


      var _services_in_memory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_services/in-memory.service */
      "5pey");
      /* harmony import */


      var _services_preset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_services/preset.service */
      "8w3S");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_services/token-storage.service */
      "FQmJ");

      var ZoneSelectComponent = /*#__PURE__*/function () {
        function ZoneSelectComponent(checkIn, presetService, inmemory, tokenStorage) {
          _classCallCheck(this, ZoneSelectComponent);

          this.checkIn = checkIn;
          this.presetService = presetService;
          this.inmemory = inmemory;
          this.tokenStorage = tokenStorage;
          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Properties */

          this.panelOpenState = false;
        }

        _createClass(ZoneSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRooms();

            if (this.tokenStorage.getToken()) {
              this.userId = this.tokenStorage.getUser().id;
            }

            this.getPreset();
          }
          /** Methods */

        }, {
          key: "getRooms",
          value: function getRooms() {
            var _this = this;

            this.checkIn.getRooms().subscribe(function (data) {
              _this.rooms = data;
              console.log(_this.rooms);
            }, function (error) {});
          }
        }, {
          key: "setRoom",
          value: function setRoom(id) {
            this.currentRoom = id;
            this.inmemory.room = id;
            console.log(this.currentRoom, 'set as current room');
            this.getZones();
            this.getSeats();
          }
        }, {
          key: "getZones",
          value: function getZones() {
            var _this2 = this;

            this.checkIn.getZones(this.currentRoom).subscribe(function (data) {
              _this2.zones = data;
              console.log(_this2.zones);
            }, function (error) {});
          }
        }, {
          key: "getSeats",
          value: function getSeats() {
            var _this3 = this;

            this.checkIn.getSeats(this.currentRoom).subscribe(function (data) {
              _this3.seats = data;
              console.log(_this3.seats);
            }, function (error) {
              console.log('fail at getSeat');
            });
          }
        }, {
          key: "setLocalZone",
          value: function setLocalZone(i) {
            this.currentZoneId = i;
            console.log(this.currentZoneId, 'set as local current Zone');
          }
        }, {
          key: "setZone",
          value: function setZone(id, localId) {
            this.currentZone = id;
            this.inmemory.zone = id;
            this.currentZoneId = localId;
            this.position.currentRoom = this.currentRoom;
            this.position.currentZone = localId + 1;
            console.log(this.currentZone, 'set as current Zone');
            this.positionChange.emit(this.position);
            this.updatePreset(this.currentZone, this.userId, this.currentRoom);
          }
        }, {
          key: "getPreset",
          value: function getPreset() {
            var _this4 = this;

            this.presetService.getPreset(this.userId).subscribe(function (data) {
              _this4.preset = data;
              console.log(_this4.preset);
              _this4.position.currentZone = _this4.preset.zone_id;
              console.log(_this4.position.currentZone);
            }, function (error) {
              console.log('fail at get preset');
            });
          }
        }, {
          key: "updatePreset",
          value: function updatePreset(climateID, userID, roomID) {
            var data = {
              zone_id: climateID,
              room_id: roomID
            };
            this.presetService.putPresets(userID, data).subscribe(function (response) {
              console.log(data);
            });
          }
        }]);

        return ZoneSelectComponent;
      }();

      ZoneSelectComponent.ctorParameters = function () {
        return [{
          type: _services_check_in_service__WEBPACK_IMPORTED_MODULE_4__["CheckInService"]
        }, {
          type: _services_preset_service__WEBPACK_IMPORTED_MODULE_6__["PresetService"]
        }, {
          type: _services_in_memory_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      ZoneSelectComponent.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ZoneSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-zone-select',
        template: _raw_loader_zone_select_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_zone_select_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ZoneSelectComponent);
      /***/
    },

    /***/
    "O8g8":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controlpanel/qr.dialog.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function O8g8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Scan your QR code</h2>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "QgHB":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fan-setting/fan-basic/fan-basic.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QgHB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\r\n  <h1>Fan Setting</h1>\r\n  <p>Current Airflow : {{ airflow }}</p>\r\n</header>\r\n<fa-icon [icon]=\"question\" class=\"guide\" (click)=\"tourStart()\"></fa-icon>\r\n<header class=\"subhead\">\r\n  <h2>How do you feel?</h2>\r\n</header>\r\n<section class=\"container\">\r\n  <mat-card class=\"card first-element\" (click)=\"coldClicked('coldSetting')\">\r\n    <fa-icon [icon]=\"cold\" class=\"icon cold\"></fa-icon>\r\n    <p>Cold</p>\r\n  </mat-card>\r\n  <mat-card class=\"card second-element\" (click)=\"coldClicked('goodSetting')\">\r\n    <fa-icon [icon]=\"good\" class=\"icon good\"></fa-icon>\r\n    <p>Good</p>\r\n  </mat-card>\r\n  <mat-card class=\"card third-element\" (click)=\"coldClicked('warmSetting')\">\r\n    <fa-icon [icon]=\"warm\" class=\"icon warm\"></fa-icon>\r\n    <p>Warm</p>\r\n  </mat-card>\r\n</section>";
      /***/
    },

    /***/
    "RV7M":
    /*!*****************************************!*\
      !*** ./src/app/home/home.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function RV7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-buttons{\r\n    background-color: #673ab7;\r\n    color: white;\r\n    width: 200px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTs7QUFFaEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1idXR0b25ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIFxyXG59Il19 */";
      /***/
    },

    /***/
    "SECP":
    /*!***************************************!*\
      !*** ./src/app/nav/nav.component.css ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function SECP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " mat-toolbar{\r\n    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.3);\r\n     background-color: #565896;\r\n     border-top-left-radius: 50%;\r\n     border-top-right-radius: 50%;\r\n     padding-top: 20px;\r\n     height: -webkit-fit-content;\r\n     height: -moz-fit-content;\r\n     height: fit-content;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    mat-toolbar button{\r\n        margin: 0 10px;\r\n\r\n    }\r\n    mat-toolbar{\r\n        box-shadow: unset;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBRUcsNENBQTRDO0tBQzNDLHlCQUF5QjtLQUN6QiwyQkFBMkI7S0FDM0IsNEJBQTRCO0tBQzVCLGlCQUFpQjtLQUNqQiwyQkFBbUI7S0FBbkIsd0JBQW1CO0tBQW5CLG1CQUFtQjtBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksY0FBYzs7SUFFbEI7SUFDQTtRQUVJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIG1hdC10b29sYmFye1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjU4OTY7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIG1hdC10b29sYmFyIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuXHJcbiAgICB9XHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'SemesterProjectVent2U';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TR6w":
    /*!*******************************************!*\
      !*** ./src/app/index/index.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function TR6w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".indexContainer{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\np{\r\n    color: white;\r\n    padding: 20px 15%;\r\n    font-size: 1.3rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n@media screen and (min-width: 800px) {\r\n    .indexContainer{\r\n        display: flex;\r\n        justify-content: space-around;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDZCQUE2QjtJQUNqQzs7QUFFSiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGV4Q29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxucHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMTUlO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuaW5kZXhDb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "UHHt":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controlpanel/zone-select/zone-select.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UHHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "    <mat-form-field class=\"dropDowns\" appearance=\"no-line\">\r\n      <mat-label mat-raised>Choose a Room</mat-label>\r\n      <mat-select class=\"selectValue\" matNativeControl>\r\n        <mat-option\r\n          *ngFor=\"let room of rooms; index as i;\"\r\n          value=\"{{room.id}}\"\r\n          (onSelectionChange)=\"setRoom(room.id)\"\r\n        >\r\n          {{room.id}} - {{room.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"no-line\" class=\"dropDowns\">\r\n\r\n      <mat-label>{{ currentRoom == null ? \"---\" : \"Select Zone\" }}</mat-label>\r\n      <mat-select matNativeControl [(value)]=\"currentZoneId\">\r\n        <mat-option\r\n          *ngFor=\"let zone of zones index as i;\"\r\n          (onSelectionChange)=\"setZone(zone.id, i)\"\r\n          value=\"{{i}}\"\r\n        >\r\n          <mat-icon>view_module</mat-icon>\r\n          {{ i + 1 }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"selectZone\">\r\n      <div class=\"zone\"\r\n           *ngFor=\"let zone of zones index as i;\"\r\n           (click)=\"setZone(zone.id, i)\"\r\n      >\r\n<!--        <p>Current Air Flow : 100</p>-->\r\n        <div *ngFor=\"let seat of seats;\">\r\n          <mat-icon *ngIf=\"seat.zone_id === zone.id\"\r\n            [ngStyle]=\"{'color':seat.occupied === false ? 'red' : 'green'}\"\r\n          >\r\n            chair\r\n          </mat-icon>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n<!--</mat-expansion-panel>-->\r\n";
      /***/
    },

    /***/
    "VITL":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function VITL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var userUrl = 'http://localhost:8080/api/users/';

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "userlogin",
          value: function userlogin(email) {
            return this.http.get(userUrl + "".concat(email));
          }
        }, {
          key: "userRegistration",
          value: function userRegistration(data) {
            return this.http.post(userUrl, data);
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.http.get(userUrl);
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginService);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"navigation-bars\"><app-header></app-header><app-nav></app-nav>\r\n</section>\r\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "XSv0":
    /*!****************************************!*\
      !*** ./src/app/info/info.component.ts ***!
      \****************************************/

    /*! exports provided: InfoComponent */

    /***/
    function XSv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
        return InfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./info.component.html */
      "ed8f");
      /* harmony import */


      var _info_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./info.component.css */
      "dqee");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var InfoComponent = /*#__PURE__*/function () {
        function InfoComponent(router) {
          _classCallCheck(this, InfoComponent);

          this.router = router;
          this.currentSection = 0;
          this.fan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFan"];
        }

        _createClass(InfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeSection",
          value: function changeSection(delta) {
            // some checks
            this.currentSection += delta;
          }
        }, {
          key: "goToquiz",
          value: function goToquiz() {
            this.router.navigate(['quiz']);
          }
        }]);

        return InfoComponent;
      }();

      InfoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      InfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info',
        template: _raw_loader_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InfoComponent);
      /***/
    },

    /***/
    "XlMj":
    /*!********************************************!*\
      !*** ./src/app/_pipes/seat-filter.pipe.ts ***!
      \********************************************/

    /*! exports provided: SeatFilterPipe */

    /***/
    function XlMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeatFilterPipe", function () {
        return SeatFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SeatFilterPipe = /*#__PURE__*/function () {
        function SeatFilterPipe() {
          _classCallCheck(this, SeatFilterPipe);
        }

        _createClass(SeatFilterPipe, [{
          key: "transform",
          value: function transform(chairs) {
            if (chairs) {
              return chairs.filter(function (chair) {// return Object.FK_Climate_Zone === 1;
              });
            } // return chairs.filter(chair => chair.FK_Climate_Zone.indexOf(filter.FK_Climate_Zone) !== -1);

          }
        }]);

        return SeatFilterPipe;
      }();

      SeatFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'seatFilter',
        pure: false
      })], SeatFilterPipe);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../material/material.module */
      "tLcC");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing */
      "mbAy");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./controlpanel/controlpanel.component */
      "3XrV");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      "ZYp2");
      /* harmony import */


      var _fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./fan-setting/fan-basic/fan-basic.component */
      "hRUC");
      /* harmony import */


      var _fan_setting_fan_container_fan_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./fan-setting/fan-container/fan-container.component */
      "zWuc");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _index_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./index/index.component */
      "aUdj");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./my-profile/my-profile.component */
      "kMBp");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @zxing/ngx-scanner */
      "7Ub2");
      /* harmony import */


      var _controlpanel_zone_select_zone_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./controlpanel/zone-select/zone-select.component */
      "MMQ2");
      /* harmony import */


      var _controlpanel_qr_qr_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./controlpanel/qr/qr.component */
      "wqCw");
      /* harmony import */


      var _newlearningelements_newlearningelements_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./newlearningelements/newlearningelements.component */
      "7jCS");
      /* harmony import */


      var _info_info_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./info/info.component */
      "XSv0");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _controlpanel_qr_qr_result_qr_result_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./controlpanel/qr/qr-result/qr-result.component */
      "vWlr");
      /* harmony import */


      var _fan_setting_fan_setting_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./fan-setting/fan-setting.component */
      "g3DJ");
      /* harmony import */


      var _pipes_seat_filter_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./_pipes/seat-filter.pipe */
      "XlMj");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_15__["IndexComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"], _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_9__["ControlpanelComponent"], _fan_setting_fan_container_fan_container_component__WEBPACK_IMPORTED_MODULE_12__["FanContainerComponent"], _fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_11__["FanBasicComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"], _controlpanel_zone_select_zone_select_component__WEBPACK_IMPORTED_MODULE_22__["ZoneSelectComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_17__["MyProfileComponent"], _controlpanel_qr_qr_result_qr_result_component__WEBPACK_IMPORTED_MODULE_27__["QrResultComponent"], _fan_setting_fan_setting_component__WEBPACK_IMPORTED_MODULE_28__["FanSettingComponent"], _pipes_seat_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["SeatFilterPipe"], _controlpanel_qr_qr_component__WEBPACK_IMPORTED_MODULE_23__["QrComponent"], _newlearningelements_newlearningelements_component__WEBPACK_IMPORTED_MODULE_24__["NewlearningelementsComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_25__["InfoComponent"], _fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_11__["ColdDialogComponent"], _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_9__["QrScannerDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_21__["ZXingScannerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
        providers: [],
        entryComponents: [_fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_11__["ColdDialogComponent"], _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_9__["QrScannerDialogComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZYp2":
    /*!********************************************!*\
      !*** ./src/app/dialog/dialog.component.ts ***!
      \********************************************/

    /*! exports provided: DialogComponent */

    /***/
    function ZYp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
        return DialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "Ik+H");
      /* harmony import */


      var _dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dialog.component.css */
      "n1xT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DialogComponent = /*#__PURE__*/function () {
        function DialogComponent(router) {
          _classCallCheck(this, DialogComponent);

          this.router = router;
        }

        _createClass(DialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "continueTo",
          value: function continueTo() {
            this.router.navigate(['login']);
          }
        }]);

        return DialogComponent;
      }();

      DialogComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dialog',
        template: _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DialogComponent);
      /***/
    },

    /***/
    "a/QD":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fan-setting/fan-setting.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function aQD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "aUdj":
    /*!******************************************!*\
      !*** ./src/app/index/index.component.ts ***!
      \******************************************/

    /*! exports provided: IndexComponent */

    /***/
    function aUdj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
        return IndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index.component.html */
      "/PpX");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _index_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index.component.css */
      "TR6w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");
      /* harmony import */


      var angular_shepherd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-shepherd */
      "wfSS");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "FQmJ");

      var IndexComponent = /*#__PURE__*/function () {
        function IndexComponent(loginuser, shepherdService, tokenStorage) {
          _classCallCheck(this, IndexComponent);

          this.loginuser = loginuser;
          this.shepherdService = shepherdService;
          this.tokenStorage = tokenStorage;
          this.fan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFan"];
          this.chair = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChair"];
          this.cap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGraduationCap"];
          this.arrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltCircleRight"];
          this.user = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
          this.calender = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"];
          this.contact = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAddressCard"];
          this.question = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faQuestionCircle"];
          this.username = 'Guest12314';
        }
        /* Tour method. */


        _createClass(IndexComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.shepherdService.defaultStepOptions = {
              scrollTo: false,
              cancelIcon: {
                enabled: true
              }
            };
            this.shepherdService.modal = true;
            this.shepherdService.confirmCancel = false;
            this.shepherdService.addSteps([{
              id: 'intro',
              attachTo: {
                element: '.first-element',
                on: 'bottom'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Check In',
              text: ['At check in you can select what room you are in and what climate zone'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }, {
              id: 'intro',
              attachTo: {
                element: '.second-element',
                on: 'bottom'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Fan Settings',
              text: ['At fan settings you can choose the ventilation speed'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }, {
              id: 'intro',
              attachTo: {
                element: '.third-element',
                on: 'top'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Learning',
              text: ['In learning you can learn a bit more about this app'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }, {
              id: 'intro',
              attachTo: {
                element: '.fourth-element',
                on: 'top'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'End Tour',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Profile',
              text: ['In profile you can change your personal settings if you are logged in'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }]);
          }
          /* Method to start the tour, click questionmark! */

        }, {
          key: "tourStart",
          value: function tourStart() {
            this.shepherdService.start();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getToken()) {
              this.username = this.tokenStorage.getUser().username;
            } //    this.personsname = this.authfire.auth.currentUser.displayName;

          }
        }]);

        return IndexComponent;
      }();

      IndexComponent.ctorParameters = function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
        }, {
          type: angular_shepherd__WEBPACK_IMPORTED_MODULE_7__["ShepherdService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-index',
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _index_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], IndexComponent);
      /***/
    },

    /***/
    "cMB2":
    /*!***********************************************************************!*\
      !*** ./src/app/newlearningelements/newlearningelements.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function cMB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ventk2-project{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 50px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\nh1{\r\n    text-align: center;\r\n    color: #2D2D4F;\r\n}\r\n#info-tab{\r\n    height: 300px;\r\n}\r\nbutton{\r\n    background-color: #673ab7;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2xlYXJuaW5nZWxlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6Im5ld2xlYXJuaW5nZWxlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW50azItcHJvamVjdHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMkQyRDRGO1xyXG59XHJcbiNpbmZvLXRhYntcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "dqee":
    /*!*****************************************!*\
      !*** ./src/app/info/info.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function dqee(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1{\r\n    text-align: center;\r\n}\r\nfa-icon{\r\n    font-size: 10rem;\r\n    margin: 10px;\r\n    margin-left: 150px;\r\n    color: #2D2D4F;\r\n}\r\n.airflow{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 50px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\nbutton{\r\n    background-color: #673ab7;\r\n    color: white;\r\n    width: 100px;\r\n    margin-top: 20px\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    fa-icon {\r\n     margin-left: 100px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 600px) {\r\n    .airflow, img{\r\n     width: 100%;\r\n    }\r\n\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSTtLQUNDLGtCQUFrQjtJQUNuQjtFQUNGO0FBQ0E7SUFDRTtLQUNDLFdBQVc7SUFDWjs7RUFFRiIsImZpbGUiOiJpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5mYS1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIGNvbG9yOiAjMkQyRDRGO1xyXG59XHJcbi5haXJmbG93e1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYWlyZmxvdywgaW1ne1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "ed8f":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function ed8f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sections\">\r\n    <mat-card class=\"airflow\" *ngIf=\"currentSection== 0\">\r\n        <h1>Ventilation Units</h1>\r\n        <mat-card>\r\n            <fa-icon [icon]=\"fan\"></fa-icon>\r\n            <p>In ventk2 you can set your own airflow</p>\r\n            <p>If you are <strong>Zealand</strong> area you may experience the airflow of <strong>25-30\r\n                    cf/m</strong> in normal day.\r\n            </p>\r\n            <hr>\r\n            <button mat-button id=\"next-button\" (click)=\"changeSection(1)\">Next</button>\r\n        </mat-card>\r\n\r\n    </mat-card>\r\n\r\n    <mat-card class=\"airflow\" *ngIf=\"currentSection== 1\">\r\n        <h1>Temperature</h1>\r\n        <mat-card>\r\n            <img src=\"../../assets/humantemp.gif\">\r\n            <p>A safe temperature is accepted to be between <strong>68- and 74-degrees Fahrenheit</strong> for\r\n                people above the age\r\n                of 65.<br> If you feel cold you can choose to stay in Warm through <strong>ventk2 app</strong>.<br>\r\n                If you feel warm\r\n                you can make your climate zone warm.\r\n\r\n            </p>\r\n            <hr>\r\n            <button mat-button id=\"next-button\" (click)=\"goToquiz()\">Next</button>\r\n        </mat-card>\r\n\r\n    </mat-card>\r\n</div>";
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "kjkU");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "DN7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.shadowToggle = true;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "fLLn":
    /*!*************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function fLLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1{\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "g3DJ":
    /*!******************************************************!*\
      !*** ./src/app/fan-setting/fan-setting.component.ts ***!
      \******************************************************/

    /*! exports provided: FanSettingComponent */

    /***/
    function g3DJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FanSettingComponent", function () {
        return FanSettingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fan_setting_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fan-setting.component.html */
      "a/QD");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _fan_setting_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fan-setting.component.css */
      "g63a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FanSettingComponent = /*#__PURE__*/function () {
        function FanSettingComponent() {
          _classCallCheck(this, FanSettingComponent);
        }

        _createClass(FanSettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FanSettingComponent;
      }();

      FanSettingComponent.ctorParameters = function () {
        return [];
      };

      FanSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-fan-setting',
        template: _raw_loader_fan_setting_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _fan_setting_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], FanSettingComponent);
      /***/
    },

    /***/
    "g63a":
    /*!*******************************************************!*\
      !*** ./src/app/fan-setting/fan-setting.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function g63a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "header{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  padding-bottom: 0;\r\n}\r\nheader h1{\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n.fan-nav{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbi1zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJmYW4tc2V0dGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuaGVhZGVyIGgxe1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZmFuLW5hdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "hRUC":
    /*!**************************************************************!*\
      !*** ./src/app/fan-setting/fan-basic/fan-basic.component.ts ***!
      \**************************************************************/

    /*! exports provided: FanBasicComponent, ColdDialogComponent */

    /***/
    function hRUC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FanBasicComponent", function () {
        return FanBasicComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColdDialogComponent", function () {
        return ColdDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fan_basic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fan-basic.component.html */
      "QgHB");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _fan_basic_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fan-basic.component.css */
      "q9V0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_preset_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_services/preset.service */
      "8w3S");
      /* harmony import */


      var angular_shepherd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-shepherd */
      "wfSS");

      var FanBasicComponent = /*#__PURE__*/function () {
        function FanBasicComponent(dialog, presetService, shepherdService) {
          _classCallCheck(this, FanBasicComponent);

          this.dialog = dialog;
          this.presetService = presetService;
          this.shepherdService = shepherdService;
          this.cold = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSnowflake"];
          this.warm = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSun"];
          this.good = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsUp"];
          this.question = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faQuestionCircle"];
        }
        /* Dialog method */


        _createClass(FanBasicComponent, [{
          key: "coldClicked",
          value: function coldClicked(parameter) {
            this.currentFan = parameter;
            var settingType;
            /* Switch to determine what setting has been clicked */

            switch (this.currentFan) {
              case 'coldSetting':
                settingType = 'Cold';
                this.updatePreset(1, 80);
                break;

              case 'goodSetting':
                settingType = 'Good';
                this.updatePreset(1, 0);
                break;

              case 'warmSetting':
                settingType = 'Warm';
                this.updatePreset(1, 20);
                break;
            }
            /* Refer to the dialog */


            var dialogRef = this.dialog.open(ColdDialogComponent, {
              width: '80%',
              height: 'fit-content',
              hasBackdrop: true,
              panelClass: ['dialogClass'],
              data: {
                settings: settingType
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "getPreset",
          value: function getPreset() {
            var _this5 = this;

            this.presetService.getPreset(1).subscribe(function (data) {
              _this5.preset = data;
              _this5.airflow = _this5.preset[0].airflow;
            });
          }
        }, {
          key: "updatePreset",
          value: function updatePreset(userID, airflow) {
            this.preset[0].airflow = airflow;
            var data = {
              airflow: airflow
            };
            this.presetService.putPresets(userID, data).subscribe(function (response) {
              console.log(data);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.shepherdService.defaultStepOptions = {
              scrollTo: false,
              cancelIcon: {
                enabled: true
              }
            };
            this.shepherdService.modal = true;
            this.shepherdService.confirmCancel = false;
            this.shepherdService.addSteps([{
              id: 'intro',
              attachTo: {
                element: '.first-element',
                on: 'bottom'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Cold',
              text: ['If you are feeling cold use this setting. It will slow down the ventilation speed so it does not feel too cold'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }, {
              id: 'intro',
              attachTo: {
                element: '.second-element',
                on: 'bottom'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Good',
              text: ['If you are feeling okay and do not need any changes done to the ventilation this is the settings for you. it will keep the ventilation at current settings'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }, {
              id: 'intro',
              attachTo: {
                element: '.third-element',
                on: 'top'
              },
              buttons: [{
                classes: 'shepherd-button-primary',
                text: 'End Tour',
                type: 'next'
              }],
              cancelIcon: {
                enabled: true
              },
              classes: 'tour custom-class-name-2',
              highlightClass: 'highlight',
              scrollTo: false,
              title: 'Warm',
              text: ['If you are feeling warm/hot use this setting. It will increase the ventilation speed. More fresh air will be pushed around the room at a higher speed.'],
              when: {
                show: function show() {
                  console.log('show step');
                },
                hide: function hide() {
                  console.log('hide step');
                }
              }
            }]);
          }
          /* Method to start the tour, click questionmark! */

        }, {
          key: "tourStart",
          value: function tourStart() {
            this.shepherdService.start();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPreset();
          }
        }]);

        return FanBasicComponent;
      }();

      FanBasicComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _services_preset_service__WEBPACK_IMPORTED_MODULE_7__["PresetService"]
        }, {
          type: angular_shepherd__WEBPACK_IMPORTED_MODULE_8__["ShepherdService"]
        }];
      };

      FanBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-fan-basic',
        template: _raw_loader_fan_basic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _fan_basic_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], FanBasicComponent);
      /* Dialog component */

      var ColdDialogComponent = /*#__PURE__*/function () {
        function ColdDialogComponent(dialogRef, data) {
          _classCallCheck(this, ColdDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ColdDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return ColdDialogComponent;
      }();

      ColdDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      ColdDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dialog-cold',
        template: "<h2>You clicked that you are feeling <span class=\"{{data.settings}}\">{{data.settings}}</span>.</h2>\n    <p>The system will take care of any changes to the ventilation unit.</p>\n    <p>You may not feel a change immediately</p>\n",
        styles: [_fan_basic_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], ColdDialogComponent);
      /***/
    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\r\n  <h1>Login</h1>\r\n</header>\r\n<form\r\n  *ngIf=\"!isLoggedIn\"\r\n  name=\"form\"\r\n  (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n  #f=\"ngForm\"\r\n  novalidate\r\n>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      id=\"username\"\r\n      name=\"username\"\r\n      [(ngModel)]=\"form.username\"\r\n      required\r\n      #username=\"ngModel\"\r\n    />\r\n    <div class=\"dangerMan\">\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        role=\"alert\"\r\n        *ngIf=\"f.submitted && username.invalid\"\r\n      >\r\n        Username is required!\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      id=\"password\"\r\n      name=\"password\"\r\n      [(ngModel)]=\"form.password\"\r\n      required\r\n      minlength=\"6\"\r\n      #password=\"ngModel\"\r\n    />\r\n    <div class=\"dangerMan\">\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        role=\"alert\"\r\n        *ngIf=\"f.submitted && password.invalid\"\r\n      >\r\n        <div *ngIf=\"password.errors.required\">Password is required</div>\r\n        <div *ngIf=\"password.errors.minlength\">\r\n          Password must be at least 6 characters\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          role=\"alert\"\r\n          *ngIf=\"f.submitted && isLoginFailed\"\r\n        >\r\n          Login failed {{ errorMessage }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"register-button\" type=\"submit\" mat-button>\r\n      Login\r\n    </button>\r\n  </div>\r\n\r\n<div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\r\n  Logged in as {{ roles }}.\r\n</div>\r\n\r\n  </form>\r\n<div class=\"inOut\">\r\n  <p (click)=\"register()\">New User ? Register</p>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "izVM":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function izVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav.component.html */
      "keMZ");
      /* harmony import */


      var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav.component.css */
      "SECP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent() {
          _classCallCheck(this, NavComponent);

          this.shadowToggle = true;
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavComponent;
      }();

      NavComponent.ctorParameters = function () {
        return [];
      };

      NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavComponent);
      /***/
    },

    /***/
    "jPrO":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fan-setting/fan-container/fan-container.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jPrO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fan-nav\">\r\n    <button mat-button class=\"fan-button\">Basic</button>\r\n    <button mat-button class=\"fan-button\" (click) =\"openDialog()\">Advance</button>\r\n</div>\r\n<hr>\r\n";
      /***/
    },

    /***/
    "kMBp":
    /*!****************************************************!*\
      !*** ./src/app/my-profile/my-profile.component.ts ***!
      \****************************************************/

    /*! exports provided: MyProfileComponent */

    /***/
    function kMBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
        return MyProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "7/Ie");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _my_profile_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-profile.component.css */
      "0rzt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");
      /* harmony import */


      var _services_in_memory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/in-memory.service */
      "5pey");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MyProfileComponent = /*#__PURE__*/function () {
        function MyProfileComponent(userout, ab, router) {
          _classCallCheck(this, MyProfileComponent);

          this.userout = userout;
          this.ab = ab;
          this.router = router;
          this.airflow = 0;
          this.uid = 0;
          this.room = 0;
          this.zone = 0;
          this.name = 'name';
          this.email = 'email';
          this.userData = {
            airflow: this.airflow,
            uid: this.uid,
            room: this.room,
            zone: this.zone
          };
        }

        _createClass(MyProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.router.navigate(['']);
          }
        }]);

        return MyProfileComponent;
      }();

      MyProfileComponent.ctorParameters = function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }, {
          type: _services_in_memory_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      MyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-my-profile',
        template: _raw_loader_my_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _my_profile_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], MyProfileComponent);
      /***/
    },

    /***/
    "keMZ":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function keMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n  <mat-toolbar>\r\n    <button mat-button><a routerLink=\"cp\"><i class=\"fas fa-chair\"></i></a></button>\r\n    <button mat-button><a routerLink=\"cp/fanSetting\"><i class=\"fas fa-fan\"></i></a></button>\r\n    <button mat-button><a routerLink=\"learningelement\"><i class=\"fas fa-graduation-cap\"></i></a></button>\r\n    <button mat-button><a routerLink=\"login\"><i class=\"fas fa-user\"></i></a></button>\r\n  </mat-toolbar>\r\n</div>";
      /***/
    },

    /***/
    "kjkU":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n    <mat-toolbar>\r\n        <button mat-button><a routerLink=\"\" class=\"v2u\"><span>V</span>2U</a></button>\r\n    </mat-toolbar>\r\n</div>";
      /***/
    },

    /***/
    "mbAy":
    /*!********************************!*\
      !*** ./src/app/app-routing.ts ***!
      \********************************/

    /*! exports provided: routing */

    /***/
    function mbAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routing", function () {
        return routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index/index.component */
      "aUdj");
      /* harmony import */


      var _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./controlpanel/controlpanel.component */
      "3XrV");
      /* harmony import */


      var _fan_setting_fan_container_fan_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fan-setting/fan-container/fan-container.component */
      "zWuc");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fan-setting/fan-basic/fan-basic.component */
      "hRUC");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./my-profile/my-profile.component */
      "kMBp");
      /* harmony import */


      var _fan_setting_fan_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./fan-setting/fan-setting.component */
      "g3DJ");
      /* harmony import */


      var _newlearningelements_newlearningelements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./newlearningelements/newlearningelements.component */
      "7jCS");
      /* harmony import */


      var _info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./info/info.component */
      "XSv0");

      var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([{
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]
      }, {
        path: 'index',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]
      }, {
        path: 'cp',
        component: _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_2__["ControlpanelComponent"]
      }, // TODO This needs to be changed
      {
        path: 'cp/fanSetting',
        component: _fan_setting_fan_setting_component__WEBPACK_IMPORTED_MODULE_9__["FanSettingComponent"],
        children: [{
          path: '',
          component: _fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_5__["FanBasicComponent"]
        }, {
          path: 'basic',
          component: _fan_setting_fan_basic_fan_basic_component__WEBPACK_IMPORTED_MODULE_5__["FanBasicComponent"]
        }]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'profile',
        component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__["MyProfileComponent"]
      }, {
        path: 'login/:invalidLoginMessage',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
      }, {
        path: 'signup/:invalidLoginMessage',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
      }, {
        path: 'cp/fan',
        component: _fan_setting_fan_container_fan_container_component__WEBPACK_IMPORTED_MODULE_3__["FanContainerComponent"]
      }, {
        path: 'learningelement',
        component: _newlearningelements_newlearningelements_component__WEBPACK_IMPORTED_MODULE_10__["NewlearningelementsComponent"]
      }, {
        path: 'learningelement/info',
        component: _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"]
      }, {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
      }]);
      /***/

    },

    /***/
    "n1xT":
    /*!*********************************************!*\
      !*** ./src/app/dialog/dialog.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function n1xT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dialog{\r\n    height: 100px;\r\n    font-size: 20px;\r\n}\r\n.continue{\r\n    background-color:#3f51b5;\r\n    margin-top: 20px !important;\r\n    color: white\r\n}\r\n.cancel{\r\n    background-color: #3f51b5;\r\n    margin-left: 80px;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0I7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNvbnRpbnVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuLmNhbmNlbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "n7sk":
    /*!*******************************************!*\
      !*** ./src/app/login/login.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n7sk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*:host {*/\r\n/*    display: flex;*/\r\n/*    justify-content: center;*/\r\n/*    margin: 100px 0px;*/\r\n/*}*/\r\nform{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\nmat-card-title,\r\nmat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.error {\r\n    padding: 16px;\r\n    width: 300px;\r\n    color: white;\r\n    background-color: red;\r\n}\r\n.button {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n.mat-alert-danger {\r\n    color: #f44336;\r\n    /* Red */\r\n}\r\n.user-button {\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    border: solid white 2px;\r\n    padding: .3rem 1.8rem;\r\n    margin: auto;\r\n    font-size: 1rem;\r\n}\r\n.register-button {\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  border: solid white 2px;\r\n  padding: .3rem 1.8rem;\r\n  margin: auto;\r\n  font-size: 1rem;\r\n}\r\n.inOut{\r\n  color: white;\r\n  font-size: 13pt;\r\n  margin-top: 35px;\r\n  text-align: center;\r\n}\r\n.dangerMan{\r\n  color: lightcoral;\r\n  font-size: 12pt;\r\n  padding-left: 17px;\r\n  margin-bottom: 25px;\r\n}\r\nlabel{\r\n  color: white;\r\n  font-size: 17pt;\r\n  padding-left: 17px;\r\n}\r\ninput{\r\n  padding: 5px 10px;\r\n\r\n  font-size: 28px;\r\n  border-width: 2px;\r\n  border-color: white;\r\n  background-color: rgba(0, 0 ,0, 0.2);;\r\n  color: #FFFFFF;\r\n  border-style: solid;\r\n  border-radius: 50px;\r\n  box-shadow: 0px 0px 10px rgba(66,66,66,.45);\r\n  text-shadow: 0px 0px 5px rgba(66,66,66,.75);\r\n  width: 100%;\r\n  /*text-align: center;*/\r\n}\r\n::ng-deep .mat-form-field .mat-form-field-label{\r\n    color: white;\r\n}\r\n/* Change label color on focused */\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: white !important;\r\n}\r\n/* underline border color on focused */\r\n::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple{\r\n    background-color: white !important;\r\n}\r\n::ng-deep .mat-form-field-underline{\r\n    background-color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCLElBQUk7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGNBQWM7SUFDZCxRQUFRO0FBQ1o7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qOmhvc3QgeyovXHJcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cclxuLyogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cclxuLyogICAgbWFyZ2luOiAxMDBweCAwcHg7Ki9cclxuLyp9Ki9cclxuXHJcbmZvcm17XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5tYXQtYWxlcnQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgLyogUmVkICovXHJcbn1cclxuXHJcblxyXG4udXNlci1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAxLjhyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gIHBhZGRpbmc6IC4zcmVtIDEuOHJlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5pbk91dHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxM3B0O1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kYW5nZXJNYW57XHJcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmxhYmVse1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG59XHJcbmlucHV0e1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAgLDAsIDAuMik7O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSg2Niw2Niw2NiwuNDUpO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDY2LDY2LDY2LC43NSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBsYWJlbCBjb2xvciBvbiBmb2N1c2VkICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiB1bmRlcmxpbmUgYm9yZGVyIGNvbG9yIG9uIGZvY3VzZWQgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "nxdH":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controlpanel/qr/qr-result/qr-result.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nxdH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>qr-result works!</p>\r\n";
      /***/
    },

    /***/
    "o3TQ":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newlearningelements/newlearningelements.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o3TQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card class=\"ventk2-project\">\r\n    <h1> Indoor Ventk2 System</h1>\r\n    <mat-card id=\"info-tab\">\r\n        <p>Welcome to Play game on Ventilation System</p>\r\n        <p>This app is designed to help users to set their own prefer climate.</p>\r\n        <h2><strong>Note:</strong> Read the information on each section and <strong>drag & drop</strong> your\r\n            choice based\r\n            on your understanding</h2>\r\n        <button mat-button (click)=\"goNext()\">Start</button>\r\n    </mat-card>\r\n</mat-card>";
      /***/
    },

    /***/
    "q9V0":
    /*!***************************************************************!*\
      !*** ./src/app/fan-setting/fan-basic/fan-basic.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function q9V0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".subhead{\r\n    margin: 10px 0;\r\n}\r\n.subhead h2{\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    margin: unset;\r\n}\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.container mat-card{\r\n    margin: 5px;\r\n    padding: 10px;\r\n}\r\nmat-card p{\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n}\r\nfa-icon.icon{\r\n    margin-bottom: 5px;\r\n}\r\n.icon.cold{\r\n    background: rgb(23,18,181);\r\n    background: radial-gradient(circle, rgba(23,18,181,1) 0%, rgba(53,120,199,1) 52%, rgba(138,209,255,1) 100%);\r\n}\r\n.icon.good{\r\n    background: rgb(18,181,72);\r\n    background: radial-gradient(circle, rgba(18,181,72,1) 0%, rgba(53,199,102,1) 52%, rgba(138,255,177,1) 100%);\r\n}\r\n.icon.warm{\r\n    background: rgb(181,75,18);\r\n    background: radial-gradient(circle, rgba(181,75,18,1) 0%, rgba(199,65,53,1) 52%, rgba(255,185,138,1) 100%);\r\n}\r\n.Cold{\r\n    color: rgb(23,18,181);\r\n    font-weight: bold;\r\n}\r\n.Good{\r\n    color: rgb(18,181,72);\r\n    font-weight: bold;\r\n}\r\n.Warm{\r\n    color: rgb(181,75,18);\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbi1iYXNpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJHQUEyRztBQUMvRztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJHQUEyRztBQUMvRztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDBHQUEwRztBQUM5RztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJmYW4tYmFzaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJoZWFke1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLnN1YmhlYWQgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgbWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbmZhLWljb24uaWNvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uaWNvbi5jb2xke1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzLDE4LDE4MSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzLDE4LDE4MSwxKSAwJSwgcmdiYSg1MywxMjAsMTk5LDEpIDUyJSwgcmdiYSgxMzgsMjA5LDI1NSwxKSAxMDAlKTtcclxufVxyXG5cclxuLmljb24uZ29vZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwxODEsNzIpO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOCwxODEsNzIsMSkgMCUsIHJnYmEoNTMsMTk5LDEwMiwxKSA1MiUsIHJnYmEoMTM4LDI1NSwxNzcsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi5pY29uLndhcm17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgxLDc1LDE4KTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTgxLDc1LDE4LDEpIDAlLCByZ2JhKDE5OSw2NSw1MywxKSA1MiUsIHJnYmEoMjU1LDE4NSwxMzgsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi5Db2xke1xyXG4gICAgY29sb3I6IHJnYigyMywxOCwxODEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLkdvb2R7XHJcbiAgICBjb2xvcjogcmdiKDE4LDE4MSw3Mik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uV2FybXtcclxuICAgIGNvbG9yOiByZ2IoMTgxLDc1LDE4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "rQPh":
    /*!************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.ts ***!
      \************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function rQPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "KQ97");
      /* harmony import */


      var _page_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-not-found.component.css */
      "fLLn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ctorParameters = function () {
        return [];
      };

      PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PageNotFoundComponent);
      /***/
    },

    /***/
    "rd1V":
    /*!********************************************!*\
      !*** ./src/app/signup/signup.component.ts ***!
      \********************************************/

    /*! exports provided: SignupComponent */

    /***/
    function rd1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.component.html */
      "zwQV");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _signup_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.component.css */
      "0Ddd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(authService, router) {
          _classCallCheck(this, SignupComponent);

          this.authService = authService;
          this.router = router;
          this.form = {};
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.errorMessage = '';
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            this.authService.register(this.form).subscribe(function (data) {
              console.log(data);
              _this6.isSuccessful = true;
              _this6.isSignUpFailed = false;
            }, function (err) {
              _this6.errorMessage = err.error.message;
              _this6.isSignUpFailed = true;
            });
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['login']);
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _signup_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], SignupComponent);
      /***/
    },

    /***/
    "t6eZ":
    /*!*********************************************************!*\
      !*** ./src/app/controlpanel/controlpanel.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function t6eZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".divider{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    padding: 0 15%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.divider hr{\r\n    width: 100%;\r\n    color: white;\r\n}\r\n.divider span{\r\n    color: white;\r\n    opacity: 70%;\r\n    margin: 0 10px;\r\n    font-size: 1.3rem;\r\n}\r\n.zoneContainer{\r\npadding: 15px;\r\n}\r\nmat-card{\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xwYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBR0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNvbnRyb2xwYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDE1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmRpdmlkZXIgaHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGl2aWRlciBzcGFue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLnpvbmVDb250YWluZXJ7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "tLcC":
    /*!*****************************************!*\
      !*** ./src/material/material.module.ts ***!
      \*****************************************/

    /*! exports provided: MaterialModule */

    /***/
    function tLcC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG"); // import { FlexLayoutModule } from '@angular/flex-layout';


      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], // FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]]
      })], MaterialModule);
      /***/
    },

    /***/
    "vWlr":
    /*!******************************************************************!*\
      !*** ./src/app/controlpanel/qr/qr-result/qr-result.component.ts ***!
      \******************************************************************/

    /*! exports provided: QrResultComponent */

    /***/
    function vWlr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrResultComponent", function () {
        return QrResultComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qr_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qr-result.component.html */
      "nxdH");
      /* harmony import */


      var _qr_result_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qr-result.component.css */
      "GNNs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QrResultComponent = /*#__PURE__*/function () {
        function QrResultComponent() {
          _classCallCheck(this, QrResultComponent);
        }

        _createClass(QrResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QrResultComponent;
      }();

      QrResultComponent.ctorParameters = function () {
        return [];
      };

      QrResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-result',
        template: _raw_loader_qr_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_result_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QrResultComponent);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_styles/styles.css */
      "AgAX");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.component.css */
      "n7sk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "FQmJ");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, tokenStorage, router) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.form = {};
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.errorMessage = '';
          this.roles = [];
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getToken()) {
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getUser().roles;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.authService.login(this.form).subscribe(function (data) {
              _this7.tokenStorage.saveToken(data.accessToken);

              _this7.tokenStorage.saveUser(data);

              _this7.isLoginFailed = false;
              _this7.isLoggedIn = true;
              _this7.roles = _this7.tokenStorage.getUser().roles;

              _this7.reloadPage();
            }, function (err) {
              _this7.errorMessage = err.error.message;
              _this7.isLoginFailed = true;
            });
          }
        }, {
          key: "reloadPage",
          value: function reloadPage() {
            window.location.reload();
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['signup']);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"], _login_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "wqCw":
    /*!*************************************************!*\
      !*** ./src/app/controlpanel/qr/qr.component.ts ***!
      \*************************************************/

    /*! exports provided: QrComponent */

    /***/
    function wqCw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrComponent", function () {
        return QrComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qr.component.html */
      "7baR");
      /* harmony import */


      var _qr_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qr.component.css */
      "yMMV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var QrComponent = /*#__PURE__*/function () {
        function QrComponent(dialogRef) {
          _classCallCheck(this, QrComponent);

          this.dialogRef = dialogRef;
          this.panelOpenState = false;
        }

        _createClass(QrComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
          /** Methods */

        }, {
          key: "clearResult",
          value: function clearResult() {
            this.qrResultString = null;
          }
        }, {
          key: "onCamerasFound",
          value: function onCamerasFound(devices) {
            this.availableDevices = devices;
            this.hasDevices = Boolean(devices && devices.length);
          }
        }, {
          key: "onCodeResult",
          value: function onCodeResult(resultString) {
            this.qrResultString = resultString;
            console.log(resultString);
          }
        }, {
          key: "onDeviceSelectChange",
          value: function onDeviceSelectChange(selected) {
            var selectedStr = selected || '';

            if (this.deviceSelected === selectedStr) {
              return;
            }

            this.deviceSelected = selectedStr;
            var device = this.availableDevices.find(function (x) {
              return x.deviceId === selected;
            });
            this.deviceCurrent = device || undefined;
          }
        }, {
          key: "onDeviceChange",
          value: function onDeviceChange(device) {
            var selectedStr = (device === null || device === void 0 ? void 0 : device.deviceId) || '';

            if (this.deviceSelected === selectedStr) {
              return;
            }

            this.deviceSelected = selectedStr;
            this.deviceCurrent = device || undefined;
          }
        }, {
          key: "onHasPermission",
          value: function onHasPermission(has) {
            this.hasPermission = has;
          }
        }, {
          key: "openInfoDialog",
          value: function openInfoDialog() {
            var data = {
              hasDevices: this.hasDevices,
              hasPermission: this.hasPermission
            };
            this.deviceCurrent = this.availableDevices[0]; // this.dialog.open(AppInfoDialogComponent, { data });
          }
        }, {
          key: "onTorchCompatible",
          value: function onTorchCompatible(isCompatible) {// this.torchAvailable$.next(isCompatible || false);
          }
        }, {
          key: "toggleTorch",
          value: function toggleTorch() {
            this.torchEnabled = !this.torchEnabled;
          }
        }, {
          key: "toggleTryHarder",
          value: function toggleTryHarder() {
            this.tryHarder = !this.tryHarder;
          }
        }]);

        return QrComponent;
      }();

      QrComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      };

      QrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr',
        template: _raw_loader_qr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QrComponent);
      /***/
    },

    /***/
    "yCwc":
    /*!********************************************************************!*\
      !*** ./src/app/controlpanel/zone-select/zone-select.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function yCwc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".selectZone{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  margin-top: 15px;\r\n}\r\n.zone{\r\n  width: 45%;\r\n  border: 1px solid black;\r\n  border-radius: 20px;\r\n  margin-bottom: 25px;\r\n  background-color: rgba(86, 88, 150, 0.51);\r\n  color: white;\r\n}\r\n.zone{\r\n  padding: 10px;\r\n  max-width: 45%;\r\n  display: grid;\r\n  grid-template-areas:\r\n            \"hl hl hl\"\r\n            \". . .\"\r\n            \". . .\";\r\n\r\n  -moz-column-gap: 5px;\r\n\r\n       column-gap: 5px;\r\n  align-content: center;\r\n}\r\n.dropDowns{\r\n  width: 90%;\r\n  margin: 10px 20px;\r\n  background-color: rgba(86, 88, 150, 0.51);\r\n  color: white;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n}\r\nmat-label{\r\n  color: white;\r\n  font-size: 16pt;\r\n\r\n}\r\n.selectValue{\r\n  font-size: 15pt;\r\n  color: white;\r\n}\r\n.ng-star-inserted{\r\n  font-size: 18pt;\r\n}\r\n.select{\r\n  background-color: rgba(86, 88, 150, 0.51);\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbmUtc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYjs7O21CQUdpQjs7RUFFakIsb0JBQWU7O09BQWYsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFlBQVk7QUFDZCIsImZpbGUiOiJ6b25lLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdFpvbmV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLnpvbmV7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwgODgsIDE1MCwgMC41MSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi56b25le1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICBcImhsIGhsIGhsXCJcclxuICAgICAgICAgICAgXCIuIC4gLlwiXHJcbiAgICAgICAgICAgIFwiLiAuIC5cIjtcclxuXHJcbiAgY29sdW1uLWdhcDogNXB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZHJvcERvd25ze1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwgODgsIDE1MCwgMC41MSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWxhYmVse1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHQ7XHJcblxyXG59XHJcbi5zZWxlY3RWYWx1ZXtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uZy1zdGFyLWluc2VydGVke1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxufVxyXG5cclxuLnNlbGVjdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg2LCA4OCwgMTUwLCAwLjUxKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "yMMV":
    /*!**************************************************!*\
      !*** ./src/app/controlpanel/qr/qr.component.css ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function yMMV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dropDowns{\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcERvd25ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zWuc":
    /*!**********************************************************************!*\
      !*** ./src/app/fan-setting/fan-container/fan-container.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FanContainerComponent */

    /***/
    function zWuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FanContainerComponent", function () {
        return FanContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fan_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fan-container.component.html */
      "jPrO");
      /* harmony import */


      var _fan_container_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fan-container.component.css */
      "1EH4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../dialog/dialog.component */
      "ZYp2");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var FanContainerComponent = /*#__PURE__*/function () {
        function FanContainerComponent(dialog) {
          _classCallCheck(this, FanContainerComponent);

          this.dialog = dialog;
        }

        _createClass(FanContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }]);

        return FanContainerComponent;
      }();

      FanContainerComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      };

      FanContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fan-container',
        template: _raw_loader_fan_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fan_container_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FanContainerComponent);
      /***/
    },

    /***/
    "zwQV":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function zwQV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\r\n    <h1>Create Account</h1>\r\n</header>\r\n<form\r\n  *ngIf=\"!isSuccessful\"\r\n  name=\"form\"\r\n  (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n  #f=\"ngForm\"\r\n  novalidate\r\n>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      id=\"username\"\r\n      name=\"username\"\r\n      [(ngModel)]=\"form.username\"\r\n      required\r\n      minlength=\"3\"\r\n      maxlength=\"20\"\r\n      #username=\"ngModel\"\r\n    />\r\n    <div class=\"dangerMan\">\r\n    <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n      <div *ngIf=\"username.errors.required\">Username is required</div>\r\n      <div *ngIf=\"username.errors.minlength\">\r\n        Username must be at least 3 characters\r\n      </div>\r\n      <div *ngIf=\"username.errors.maxlength\">\r\n        Username must be at most 20 characters\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input\r\n      type=\"email\"\r\n      class=\"form-control\"\r\n      id=\"email\"\r\n      name=\"email\"\r\n      [(ngModel)]=\"form.email\"\r\n      required\r\n      email\r\n      #email=\"ngModel\"\r\n    />\r\n    <div class=\"dangerMan\">\r\n    <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\r\n      <div *ngIf=\"email.errors.required\">Email is required</div>\r\n      <div *ngIf=\"email.errors.email\">\r\n        Email must be a valid email address\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input\r\n      type=\"password\"\r\n      id=\"password\"\r\n      class=\"form-control\"\r\n      name=\"password\"\r\n      [(ngModel)]=\"form.password\"\r\n      required\r\n      minlength=\"6\"\r\n      #password=\"ngModel\"\r\n    />\r\n    <div class=\"dangerMan\">\r\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n        <div *ngIf=\"password.errors.required\">Password is required</div>\r\n        <div *ngIf=\"password.errors.minlength\">\r\n          Password must be at least 6 characters\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"register-button\" type=\"submit\" mat-button>Sign Up</button>\r\n  </div>\r\n\r\n  <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n    Signup failed!<br />{{ errorMessage }}\r\n  </div>\r\n</form>\r\n\r\n<div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n  Your registration is successful!\r\n</div>\r\n<div class=\"inOut\">\r\n  <p (click)=\"login()\">Got Account ? Login</p>\r\n</div>\r\n\r\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map