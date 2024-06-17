webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".logo {\n    max-width: 150px;\n}\n\n.latestproject {\n    max-width: 300px;\n    margin: auto;\n}\n\n.brandLogo {\n    margin: auto;\n    max-width: 150px;\n}\n\n.image-center {\n    text-align: center;\n}\n\n.logoImageProject {\n    max-width: 150px;\n    margin: auto;\n}\n\n.project-item {\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n}\n\n.detail-image {\n    max-width: 200px !important;\n}\n\n.project-media {\n    width: 300px !important;\n    background-color: aqua !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-spy=\"scroll\" data-target=\"#main-nav\" data-offset=\"400\">\n\n    <!--=== PAGE PRELOADER ===-->\n    <div id=\"page-loader\"><span class=\"page-loader-gif\"></span></div>\n\n    <!-- ==============================================\n      MAIN NAV\n      =============================================== -->\n    <div id=\"main-nav\" class=\"navbar navbar-fixed-top\">\n        <div class=\"container\">\n\n            <div class=\"navbar-header\">\n\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#site-nav\">\n              <span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\n            </button>\n\n                <!-- ======= LOGO ========-->\n                <a class=\"navbar-brand scrollto\" href=\"#home\"><img class=\"logo\" src=\"assets/images/aaronlai.png\" alt=\"\" /></a>\n\n            </div>\n\n            <div id=\"site-nav\" class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav navbar-right\">\n\n                    <li>\n                        <a href=\"#about\" class=\"scrollto\"><i class=\"fa fa-graduation-cap\"></i>Profile</a>\n                    </li>\n                    <li>\n                        <a href=\"#portfolio\" class=\"scrollto\"><i class=\"fa fa-briefcase\"></i>Portfolio</a>\n                    </li>\n\n                </ul>\n            </div>\n            <!--End navbar-collapse -->\n\n        </div>\n        <!--End container -->\n\n    </div>\n    <!--End main-nav -->\n\n    <!-- ==============================================\n      HEADER\n      =============================================== -->\n    <header id=\"home\">\n\n        <div class=\"container\">\n\n            <div class=\"row\">\n\n                <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n\n                    <h1 class=\"scrollimation fade-down d1\">I am Aaron Lai</h1>\n                    <h2 class=\"scrollimation fade-down d3\"><span class=\"main-color\">D</span>eveloper, <span class=\"main-color\">D</span>reamer</h2>\n\n                </div>\n\n            </div>\n\n\n        </div>\n\n    </header>\n    <!--End header -->\n\n    <div id=\"main-content\">\n\n        <div class=\"scroll-down\">\n            <a href=\"#services\" class=\"scrollto\">Learn More</a>\n        </div>\n\n\n\n        <section class=\"big-padding gray-bg\">\n\n            <div class=\"container\">\n\n                <h1 class=\"section-title\">Latest Projects<span class=\"main-color\"></span></h1>\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">Notifs - Crypto investment tracking</h2>\n                        <a class=\"btn btn-dc btn-small btn-main-color\" href=\"https://www.notifs.co/\">Visit Website</a>\n                        <p></p>\n                        <p>Stack applied:</p>\n                        <p>Flutter  </p>\n                        <p>Rust</p>\n                        <p>AWS</p>\n                        <p>Gen AI (Gpt & Gemeni)</p>\n                        <p>RNN</p>\n\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n\n\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/projects/notifs2.jpg\" alt=\"\" />\n\n\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">Credentialproof -  Linkedin in web3</h2>\n                        <a class=\"btn btn-dc btn-small btn-main-color\" href=\"https://credentialproof.io/\">Visit Website</a>\n                        <p></p>\n\n                        <p>Web3 react web app </p>\n                        <p>Stack applied:</p>\n                        <p>react  </p>\n                        <p>node.js</p>\n                        <p>solidity</p>\n                        <p>wallet connected : metamask</p>\n                        <p>mongodb</p>\n                        <p>redis</p>\n\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n\n\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/projects/web3.png\" alt=\"\" />\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/projects/web3b.png\" alt=\"\" />\n\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">Preface mobile app(Interal Beta) </h2>\n\n                        <p>Coffee ordering app</p>\n                        <p>Stack applied:</p>\n                        <p>flutter  </p>\n                        <p>node.js</p>\n                        <p>google cloud</p>\n                        <p>mongodb</p>\n\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n\n\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/projects/preface1.PNG\" alt=\"\" />\n\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">CitiFun </h2>\n\n                        <p>Mobile loyalty program of Citistore</p>\n                        <p>Stack applied:</p>\n                        <p>ionic 2 </p>\n                        <p>angular 2</p>\n                        <p>rethinkDB</p>\n                        <p>redis</p>\n\n                        <p><a class=\"btn btn-dc btn-small btn-main-color\" href=\"https://itunes.apple.com/us/app/citi-fun/id1187775117?ls=1&mt=8\">Visit Website</a></p>\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n\n\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/citifun.jpg\" alt=\"\" />\n\n                    </div>\n\n                </div>\n\n                <hr>\n\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">The Rink </h2>\n\n                        <p>Skating lesson booking application </p>\n\n                        <p>Support online payment  </p>\n                        <p>Stack applied:</p>\n                        <p>React native</p>\n                        <p>Expo</p>\n                        <p>graphQL</p>\n\n                        <p>mongoDb</p>\n                        <p>redis</p>\n                        <p><a class=\"btn btn-dc btn-small btn-main-color\" href=\"https://apps.apple.com/hk/app/the-rink/id1185418663?l=en\">Visit Website</a></p>\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/therinkv2.png\" alt=\"\" />\n                    </div>\n\n                </div>\n                <hr>\n\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">Alpha I </h2>\n\n                        <p> </p>\n\n                        <p>Securities Trading Platform With Charting and AI Alert</p>\n                        <p>Stack applied:</p>\n                        <p>React native</p>\n                     \n                        <p><a class=\"btn btn-dc btn-small btn-main-color\" href=\"https://apps.apple.com/hk/app/alpha-i/id1361914895?l=en\">Visit Website</a></p>\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/projects/alphiscreen.jpg\" alt=\"\" />\n                    </div>\n\n                </div>\n\n                <hr>\n\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n\n                        <h2 class=\"row-title\">Sei Hub</h2>\n\n                        <p> </p>\n\n                        <p>Resources sharing platform for social enterprise</p>\n                        <p>Stack applied:</p>\n                        <p>React native</p>\n                        <p>Expo</p>\n                     \n                        <p><a class=\"btn btn-dc btn-small btn-main-color\" href=\"https://apps.apple.com/bz/app/sei-hub/id1494850149\">Visit Website</a></p>\n\n                    </div>\n\n                    <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n                        <img class=\"img-responsive latestproject\" src=\"assets/images/seihub.png\" alt=\"\" />\n                    </div>\n\n                </div>\n                \n             \n            </div>\n\n        </section>\n\n\n\n        <!-- ==============================================\n        ABOUT\n        =============================================== -->\n        <section id=\"about\" class=\"big-padding\">\n\n            <div class=\"container\">\n\n                <h1 class=\"section-title\">My Profile<span class=\"main-color\"></span></h1>\n\n                <div class=\"row profile\">\n\n                    <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n\n\n                        <p class=\"margin-top scrollimation fade-right\">10 years of senior software engineering experience, with strong analytical skills and a broad range of full stack development. </p>\n\n                        <p class=\"margin-top scrollimation fade-right\"> Coding enthusiast , enjoy coding for solving problem and studying new developing technique .</p>\n\n                        <p class=\"margin-top scrollimation fade-right\"> Strong background in retail and finance industry . </p>\n\n                        <p class=\"margin-top scrollimation fade-right\"> Entrepreneurial spirit , Working for passion ; Computational-thinking , Coding for solving problem .</p>\n\n                        <p class=\"lead margin-top scrollimation fade-left\">Coding is not just a job for me, it's a passion. </p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </section>\n\n        <!-- ==============================================\n        SKILLS\n        =============================================== -->\n        <section id=\"skills\" class=\"small-padding dark-bg\">\n\n            <div class=\"container\">\n\n                <div class=\"row skills\">\n\n                    <div class=\"col-sm-6 col-md-3 text-center\">\n                        <span class=\"chart plus-symbol\" data-percent=\"90\"><span class=\"percent\">90</span></span>\n                        <h2 class=\"text-center\">Front End</h2>\n                    </div>\n                    <div class=\"col-sm-6 col-md-3 text-center\">\n                        <span class=\"chart plus-symbol\" data-percent=\"80\"><span class=\"percent\">80</span></span>\n                        <h2 class=\"text-center\">Back End</h2>\n                    </div>\n                    <div class=\"col-sm-6 col-md-3 text-center\">\n                        <span class=\"chart equal-symbol\" data-percent=\"95\"><span class=\"percent\">95</span></span>\n                        <h2 class=\"text-center\">Support</h2>\n                    </div>\n                    <div class=\"col-sm-6 col-md-3 text-center\">\n                        <span class=\"chart\" data-percent=\"90\"><span class=\"percent\">90</span></span>\n                        <h2 class=\"text-center main-color\">High Score</h2>\n                    </div>\n\n                </div>\n                <!--End row -->\n\n            </div>\n\n        </section>\n\n        <!-- ==============================================\n        PORTFOLIO\n        =============================================== -->\n        <section id=\"portfolio\" class=\"big-padding\">\n\n            <div class=\"container\">\n\n                <h1 class=\"section-title\">My portfolio<span class=\"main-color\"></span></h1>\n\n                <!--==== Portfolio Filters ====-->\n\n                <div class=\"text-center scrollimation fade-up\">\n                    <div id=\"filter-works\" class=\"btn-group\">\n                        <button data-filter=\"*\" type=\"button\" class=\"btn btn-default active\">All Items<span class=\"project-count\"></span></button>\n                        <button data-filter=\".native\" type=\"button\" class=\"btn btn-default\">Native Mobile<span class=\"project-count\"></span></button>\n                        <button data-filter=\".hybrid\" type=\"button\" class=\"btn btn-default\">Hybrid Mobile<span class=\"project-count\"></span></button>\n                        <button data-filter=\".reactnative\" type=\"button\" class=\"btn btn-default\">React Native<span class=\"project-count\"></span></button>\n                        <button data-filter=\".fullstack\" type=\"button\" class=\"btn btn-default\">Full Stack<span class=\"project-count\"></span></button>\n\n\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"container scrollimation fade-up\">\n\n                <div id=\"projects-container\" class=\"row\">\n\n                    <!-- ==============================================\n              SINGLE PROJECT ITEM\n              =============================================== -->\n\n\n\n\n\n                    <a class=\"project-item col-md-4\" [ngClass]=\"project.tag\" (click)=\"onClick(i)\" *ngFor=\"let project of projects; let i = index\">\n\n                        <img class=\"img-responsive project-image image-center logoImageProject\" src=\"{{project.logoUrl}}\" alt=\"\">\n\n                        <div class=\"hover-title\">\n                            <h2 class=\"project-title\">{{project.name}}</h2>\n                            <!--Project Title -->\n                            <p>{{project.caption}} </p>\n                            <!--Project Subtitle -->\n                        </div>\n\n                    </a>\n\n\n\n                </div>\n\n\n\n            </div>\n\n        </section>\n\n\n        <!-- ==============================================\n        TESTIMONIALS\n        =============================================== -->\n\n\n\n        <!-- ==============================================\n        CONTACT\n        =============================================== -->\n\n\n        <!-- ==============================================\n        FOOTER\n        =============================================== -->\n\n        <footer id=\"main-footer\">\n\n            <div class=\"container\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-sm-2\">\n\n                        <a class=\"logo-link scrollto\" href=\"#home\">\n                            <img class=\"img-responsive\" src=\"assets/images/aaronlai.png\" alt=\"\" />\n                        </a>\n\n                    </div>\n\n                    <div class=\"col-sm-8\">\n\n                        <nav>\n\n                            <ul class=\"footer-nav\">\n                                <li><a class=\"scrollto\" href=\"#home\">Home</a></li>\n                                <li><a class=\"scrollto\" href=\"#portfolio\">Portfolio</a></li>\n                            </ul>\n\n                        </nav>\n\n                    </div>\n\n                    <div class=\"col-sm-2 text-right social-links\">\n\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </footer>\n\n    </div>\n\n    <div id=\"project-viewer\" class=\"modal fade\">\n\n        <span id=\"close-project-viewer\" data-dismiss=\"modal\">&times;</span>\n\n        <div class=\"container\">\n\n            <div id=\"project-viewer-content\"></div>\n\n            <div id=\"project-viewer-footer\">\n\n                <div class=\"project-nav\">\n\n                    <span class=\"previous-project\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Previous Project\"><i class=\"fa fa-long-arrow-left\"></i></span>\n                    <span class=\"back-to-portfolio\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Back to Portfolio\" data-dismiss=\"modal\"><i class=\"fa fa-th-large\"></i></span>\n                    <span class=\"next-project\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Next Project\"><i class=\"fa fa-long-arrow-right\"></i></span>\n\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n    <!-- /.modal -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("./node_modules/ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(modal) {
        this.modal = modal;
        this.title = 'app';
        this.content = '<h1 class="project-title">Project with featured slider(<span>2015</span>)</h1>' +
            '<p class="project-subtitle">Branding / Web</p>' +
            '<div class="project-media">' +
            '<li><img class="img-responsive img-center" src="assets/images/projects/slide-2-1.jpg" alt="" /></li>' +
            '<h2>About Project</h2>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>' +
            '<p>Phasellus porta eros vel lacus euismod consequat. Phasellus eleifend, nibh non feugiat hendrerit, lacus enim adipiscing eros, a pharetra erat neque eget est. Quisque vitae aliquet urna. Integer suscipit lectus eu enim porttitor fringilla. Ut blandit, urna in auctor euismod, arcu eros pharetra metus, a porta purus libero a nibh.</p>' +
            '<p>Nam eget urna pellentesque nisl ultrices dapibus. Mauris accumsan vehicula nisl, sed tempus mauris facilisis eu. Donec a iaculis nisi, quis malesuada justo. Pellentesque ut enim sit amet ipsum dignissim egestas. Morbi tincidunt rhoncus urna eget placerat.</p>' +
            '<p class="text-center margin-top"><a class="btn btn-dc btn-main-color" href="#link">Visit Website</a></p>' +
            '</div>';
        this.projects = [
            {
                "name": "Cash Security Trade",
                "tag": "native",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/st.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/st-d1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["Objective C", "Android"]
            },
            {
                "name": "Cash RealTimeQuote",
                "tag": "hybrid",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/rtq.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/rtq-d1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["ionic 1 ", "angular 1"]
            },
            {
                "name": "Cash FutureTrader",
                "tag": "native",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/ft.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/ft-d1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["Objective C", "Android"]
            },
            {
                "name": "Citifun",
                "tag": "hybrid, fullstack",
                "caption": "iOS & Android & Web ",
                "logoUrl": "assets/images/citistore.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/citifun.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["Objective C", "Android"]
            },
            {
                "name": "The Rink",
                "tag": "reactnative , fullstack",
                "caption": "iOS & Android & Full stack",
                "logoUrl": "assets/images/projects/therink.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/tr-d1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["reactnative", "expo", "redis", "mongoDb", "node.js"]
            },
            {
                "name": "Sei Hub",
                "tag": "reactnative",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/seihub.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/seihub.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["reactnative", "expo"]
            },
            {
                "name": "Alpha I ",
                "tag": "reactnative",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/alphai.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/alphiscreen.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["reactnative", "expo", "redis", "mongoDb", "node.js"]
            },
            {
                "name": "Jobdoh empolyee",
                "tag": "hybrid , fullstack",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/jdee.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/jdee-d1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["Objective C", "Android"]
            },
            {
                "name": "Jobdoh empolyer",
                "tag": "hybrid , fullstack",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/jder.png",
                "contents": [
                    {
                        "type": "img",
                        img: "assets/images/projects/jder-d1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ],
                stacks: ["Objective C", "Android"]
            },
        ];
    }
    AppComponent.prototype.createContent = function (index) {
        var project = this.projects[index];
        var result = '<h1 class="project-title">' + project.name + '<span></span></h1>';
        result += '<p class="project-subtitle">' + project.caption + '</p>';
        result += '<div class="project-media">';
        for (var _i = 0, _a = project.contents; _i < _a.length; _i++) {
            var content = _a[_i];
            if (content.type == 'img') {
                result += '<img class="img-responsive img-center" style="width:300px;" src="' + content['img'] + '" alt="" />';
            }
        }
        result += '<h2>Stack:</h2>';
        for (var _b = 0, _c = project.stacks; _b < _c.length; _b++) {
            var stack = _c[_b];
            result += '<p>' + stack + '</p>';
        }
        result += '</div>';
        return result;
    };
    AppComponent.prototype.onClick = function (index) {
        var dialogRef = this.modal.alert()
            .size('lg')
            .showClose(true)
            .title(this.projects[index].name)
            .body(this.createContent(index))
            .open();
        dialogRef.result
            .then();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["b" /* Modal */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("./node_modules/ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_project_component__ = __webpack_require__("./src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_modialog_plugins_bootstrap__ = __webpack_require__("./node_modules/ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__project_project_component__["a" /* ProjectComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["e" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_modialog_plugins_bootstrap__["a" /* BootstrapModalModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  project works!\n</p>\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("./src/app/project/project.component.html"),
            styles: [__webpack_require__("./src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map