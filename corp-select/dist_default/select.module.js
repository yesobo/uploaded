/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BkCorpSelectOptionComponent = (function () {
    function BkCorpSelectOptionComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.selected = false;
        this.select = new core_1.EventEmitter();
        this.hover = new core_1.EventEmitter();
        this.unSelect = new core_1.EventEmitter();
        this.selectNext = new core_1.EventEmitter();
        this.selectPrev = new core_1.EventEmitter();
    }
    BkCorpSelectOptionComponent.prototype.ngAfterViewInit = function () {
    };
    BkCorpSelectOptionComponent.prototype.selectWithTab = function ($event) {
        if ($event.keyCode === 9 || $event.keyCode === 13) {
            this.onSelect();
        }
        else if ($event.keyCode === 40) {
            this.selectNext.emit(this);
        }
        else if ($event.keyCode === 38) {
            this.selectPrev.emit(this);
        }
    };
    BkCorpSelectOptionComponent.prototype.onSelect = function () {
        this.selected = true;
        this.select.emit(this);
    };
    return BkCorpSelectOptionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BkCorpSelectOptionComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BkCorpSelectOptionComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BkCorpSelectOptionComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BkCorpSelectOptionComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BkCorpSelectOptionComponent.prototype, "hover", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BkCorpSelectOptionComponent.prototype, "unSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BkCorpSelectOptionComponent.prototype, "selectNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BkCorpSelectOptionComponent.prototype, "selectPrev", void 0);
BkCorpSelectOptionComponent = __decorate([
    core_1.Component({
        selector: 'bk-corp-select-option',
        template: "\n      <li role='menuitem'\n        tabindex=\"2\"\n        (keydown)='selectWithTab($event)'\n        [ngClass]=\"{'match': selected}\"\n        (click)='onSelect()' class=\"custom-item-select\">\n        {{ label }}\n        <ng-content></ng-content>\n      </li>\n  ",
        styles: [__webpack_require__(4)]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], BkCorpSelectOptionComponent);
exports.BkCorpSelectOptionComponent = BkCorpSelectOptionComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(7);
var select_component_1 = __webpack_require__(3);
var select_option_component_1 = __webpack_require__(1);
var BkCorpSelectModule = (function () {
    function BkCorpSelectModule() {
    }
    return BkCorpSelectModule;
}());
BkCorpSelectModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            select_component_1.BkCorpSelectComponent,
            select_option_component_1.BkCorpSelectOptionComponent
        ],
        providers: [],
        exports: [
            select_component_1.BkCorpSelectComponent,
            select_option_component_1.BkCorpSelectOptionComponent
        ]
    })
], BkCorpSelectModule);
exports.BkCorpSelectModule = BkCorpSelectModule;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(8);
var select_option_component_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(6);
// TODO: Move this function to a helper library because is used in selectOption component
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
var BkCorpSelectComponent = BkCorpSelectComponent_1 = (function () {
    function BkCorpSelectComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.change = new core_1.EventEmitter();
        this.isDropdownVisible = false;
        this._required = false;
        this._disabled = false;
        this.propagateChange = function (_) {
            return;
        };
    }
    Object.defineProperty(BkCorpSelectComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BkCorpSelectComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    BkCorpSelectComponent.prototype.clickOutComponent = function ($event) {
        if (!this.element.nativeElement.contains(event.target))
            this.isDropdownVisible = false;
    };
    BkCorpSelectComponent.prototype.ngOnInit = function () {
        this.checkDefautText();
    };
    BkCorpSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.optionsArray = this.getOptionsAsArray(this.options);
        this.options.changes.startWith(null)
            .subscribe(function (options) {
            _this._resetOptions();
            _this.optionsArray = options;
        });
    };
    BkCorpSelectComponent.prototype.registerOnTouched = function (fn) {
        return;
    };
    BkCorpSelectComponent.prototype.toggleDropdown = function () {
        this.isDropdownVisible = !this.isDropdownVisible;
    };
    BkCorpSelectComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null && value.length > 0) {
            var option = this.getOptionByValue(value);
            this.selectOption(option);
        }
    };
    BkCorpSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    BkCorpSelectComponent.prototype._resetOptions = function () {
        this._dropSubscriptions();
        this._listenToOptions();
    };
    BkCorpSelectComponent.prototype._listenToOptions = function () {
        var _this = this;
        this._optionSubscription = this.optionSelectionChanges
            .subscribe(function (event) {
            _this.onOptionSelectListener(event);
        });
    };
    BkCorpSelectComponent.prototype._dropSubscriptions = function () {
        if (this._optionSubscription) {
            this._optionSubscription.unsubscribe();
            this._optionSubscription = null;
        }
    };
    Object.defineProperty(BkCorpSelectComponent.prototype, "optionSelectionChanges", {
        /** Combined stream of all of the child options' change events. */
        get: function () {
            return Rx_1.Observable.merge.apply(Rx_1.Observable, this.options.map(function (option) { return option.select; }));
        },
        enumerable: true,
        configurable: true
    });
    // TODO: find options with keys
    // findOption(key: any): void {
    //   console.log('TODO: key press');
    //   // this.search = this.search + key.key;
    //   // setTimeout(() => this.search = '', 750);
    //   // this.keyPressSubject.next(key);
    // }
    BkCorpSelectComponent.prototype.getOptionsAsArray = function (query) {
        return query.map(function (item) { return item; });
    };
    BkCorpSelectComponent.prototype.onOptionSelectListener = function (option) {
        this.selectOption(option);
        this.isDropdownVisible = false;
    };
    BkCorpSelectComponent.prototype.checkDefautText = function () {
        if (!this.placeholder || this.placeholder === '')
            this.placeholder = 'DefaultPlaceholder';
        if (!this.label || this.label === '')
            this.label = 'DefaultLabel';
    };
    BkCorpSelectComponent.prototype.unselectOptions = function () {
        this.options
            .forEach(function (option) { return option.selected = false; });
    };
    BkCorpSelectComponent.prototype.selectOption = function (selectedOption) {
        this.unselectOptions();
        this.selectedOption = selectedOption;
        this.selectedOption.selected = true;
        this.emitValue(this.selectedOption.value);
    };
    BkCorpSelectComponent.prototype.emitValue = function (value) {
        this.propagateChange(value);
        this.change.emit(value);
    };
    BkCorpSelectComponent.prototype.getOptionByValue = function (value) {
        return this.options.filter(function (option) { return option.value === value; })[0];
    };
    return BkCorpSelectComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BkCorpSelectComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BkCorpSelectComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BkCorpSelectComponent.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BkCorpSelectComponent.prototype, "required", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BkCorpSelectComponent.prototype, "change", void 0);
__decorate([
    core_1.ContentChildren(select_option_component_1.BkCorpSelectOptionComponent),
    __metadata("design:type", core_1.QueryList)
], BkCorpSelectComponent.prototype, "options", void 0);
__decorate([
    core_1.HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BkCorpSelectComponent.prototype, "clickOutComponent", null);
BkCorpSelectComponent = BkCorpSelectComponent_1 = __decorate([
    core_1.Component({
        selector: 'bk-corp-select',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return BkCorpSelectComponent_1; }),
                multi: true
            }
        ],
        template: "\n    <div class='custom-select'>\n      <button\n        id=\"button1\" \n        tabindex=\"1\"\n        (click)=\"toggleDropdown($event)\"\n        [disabled]='disabled'\n        [ngClass]=\"{ 'required': required, 'dropdown-visible':isDropdownVisible }\"\n        class=\"dropdown-btn\" \n        type=\"button\">\n        <div class=\"text-wrapper\">\n          <p class=\"custom-label\">{{ label }}\n            <span class=\"required-icon\" [style.display]=\"required?'block':'none'\">*</span>\n          </p>\n          <span *ngIf=\"!(selectedOption?.selected)\" class=\"custom-placeholder\">\n            {{ placeholder }}\n          </span>\n          <span *ngIf=\"selectedOption?.selected\" class=\"value\">\n            {{ selectedOption?.element?.nativeElement?.textContent?.trim() }}\n          </span>\n        </div>\n        <div class=\"dropdown-icon-wrapper\">  \n          <span class=\"dropdown-icon\" \n            [ngClass]=\"{ 'bki-ac-unfold-down': !isDropdownVisible, \n                         'bki-ac-unfold-up': isDropdownVisible }\">\n          </span>\n        </div>\n      </button>\n\n      <ul class=\"dropdown-list\" role=\"menu\"\n          *ngIf=\"isDropdownVisible\">\n        <ng-content></ng-content>\n      </ul>\n    </div>\n  ",
        styles: [__webpack_require__(5)]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], BkCorpSelectComponent);
exports.BkCorpSelectComponent = BkCorpSelectComponent;
var BkCorpSelectComponent_1;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "li.custom-item-select {\n  border-bottom: 1px solid #d3d3d2;\n  color: #3d3935;\n  font-family: Arial;\n  font-size: 16px;\n  height: 50px;\n  padding: 14px 12px; }\n  li.custom-item-select:hover, li.custom-item-select.match {\n    background-color: #e3e3e2;\n    color: #867e76;\n    cursor: pointer; }\n  li.custom-item-select:focus {\n    outline: 0; }\n  li.custom-item-select:last-child {\n    border-bottom: 0; }\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "/* App common */\n/* Form Input common */\n/* Component specific */\n:host(.ng-invalid) .custom-select .dropdown-btn {\n  border: 1px solid #cc1e1e; }\n\n.custom-select {\n  font-size: 0;\n  min-width: 240px;\n  position: relative; }\n  .custom-select .dropdown-btn {\n    background-color: #fff;\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    height: 60px;\n    outline: none;\n    padding: 0;\n    position: relative;\n    width: 100%; }\n    .custom-select .dropdown-btn.required {\n      background-color: #f9f9d5; }\n    .custom-select .dropdown-btn[disabled] {\n      background-color: #fbfbfb;\n      border: 1px solid #dededd;\n      cursor: not-allowed; }\n      .custom-select .dropdown-btn[disabled] .custom-label {\n        color: #adacab; }\n      .custom-select .dropdown-btn[disabled] .dropdown-icon-wrapper {\n        background-color: #f2f2f2;\n        border-color: #dededd; }\n      .custom-select .dropdown-btn[disabled] .dropdown-icon {\n        color: #d6d6d5; }\n      .custom-select .dropdown-btn[disabled] .custom-placeholder,\n      .custom-select .dropdown-btn[disabled] .value, .custom-select .dropdown-btn[disabled] .custom-placeholder {\n        color: #aaa8a7; }\n    .custom-select .dropdown-btn.dropdown-visible {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-color: #3d3935; }\n      .custom-select .dropdown-btn.dropdown-visible .dropdown-icon {\n        color: #3d3935; }\n  .custom-select .custom-label {\n    font-family: Arial;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1;\n    margin: -1px 0 4px;\n    text-transform: uppercase; }\n  .custom-select .required-icon {\n    float: right;\n    font-weight: bolder; }\n  .custom-select .value, .custom-select .custom-placeholder {\n    color: #3d3935;\n    font-family: Arial;\n    font-size: 16px;\n    position: relative;\n    top: 1px; }\n  .custom-select .custom-placeholder {\n    color: #958e87; }\n  .custom-select .text-wrapper {\n    height: 100%;\n    margin-right: 43px;\n    padding: 12px 14px 10px;\n    text-align: left; }\n  .custom-select .dropdown-icon-wrapper {\n    background-color: #e8e8e8;\n    border-left: 1px solid #d3d3d3;\n    display: table;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n    vertical-align: middle;\n    width: 43px; }\n    .custom-select .dropdown-icon-wrapper.dropdown-visible {\n      border-left-color: #3d3935; }\n    .custom-select .dropdown-icon-wrapper .dropdown-icon {\n      color: #bababa;\n      display: table-cell;\n      font-size: 16px;\n      position: relative;\n      vertical-align: middle; }\n  .custom-select .dropdown-list {\n    background-color: #fff;\n    border: 1px solid #3d3935;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    border-top: 0;\n    list-style-type: none;\n    margin: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0;\n    position: absolute;\n    width: 100%;\n    z-index: 10; }\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
//# sourceMappingURL=select.module.js.map