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

module.exports = ".logo{\n\n    max-width: 150px;\n}\n\n.latestproject{\n\n    max-width: 300px;\n\n\n}\n\n.brandLogo{\n\n    max-width: 150px;\n\n}\n\n.image-center{\n\n    text-align: center;\n}\n\n.logoImageProject{\n\n    margin: auto;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<div data-spy=\"scroll\" data-target=\"#main-nav\" data-offset=\"400\">\n\t\n      <!--=== PAGE PRELOADER ===-->\n      <div id=\"page-loader\"><span class=\"page-loader-gif\"></span></div>\n      \n      <!-- ==============================================\n      MAIN NAV\n      =============================================== -->\n      <div id=\"main-nav\" class=\"navbar navbar-fixed-top\">\n        <div class=\"container\">\n        \n          <div class=\"navbar-header\">\n          \n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#site-nav\">\n              <span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\n            </button>\n            \n            <!-- ======= LOGO ========-->\n            <a class=\"navbar-brand scrollto\" href=\"#home\"><img class=\"logo\" src=\"assets/images/aaronlai.png\" alt=\"\" /></a>\n            \n          </div>\n          \n          <div id=\"site-nav\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                <a href=\"#services\" class=\"scrollto\"><i class=\"fa fa-cog\"></i>Specialties</a>\n              </li>\n              <li>\n                <a href=\"#about\" class=\"scrollto\"><i class=\"fa fa-graduation-cap\"></i>Profile</a>\n              </li>\n              <li>\n                <a href=\"#portfolio\" class=\"scrollto\"><i class=\"fa fa-briefcase\"></i>Portfolio</a>\n              </li>\n              <li>\n                <a href=\"#contact\" class=\"scrollto\"><i class=\"fa fa-envelope\"></i>Contact</a>\n              </li>\n            </ul>\n          </div><!--End navbar-collapse -->\n          \n        </div><!--End container -->\n        \n      </div><!--End main-nav -->\n      \n      <!-- ==============================================\n      HEADER\n      =============================================== -->\n      <header id=\"home\">\n      \n        <div class=\"container\">\n        \n          <div class=\"row\">\n          \n            <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n            \n              <h1 class=\"scrollimation fade-down d1\">I am Aaron Lai</h1>\n              <h2 class=\"scrollimation fade-down d3\"><span class=\"main-color\">D</span>eveloper, <span class=\"main-color\">D</span>reamer</h2>\n            \n            </div>\n          \n          </div>\n        \n      \n        </div>\n        \n      </header><!--End header -->\n  \n      <div id=\"main-content\">\n        \n        <div class=\"scroll-down\">\n          <a href=\"#services\" class=\"scrollto\">Learn More</a>\n        </div>\n        \n    \n        \n        <section class=\"big-padding gray-bg\">\n        \n          <div class=\"container\">\n            \n            <h1 class=\"section-title\">Latest Projects<span class=\"main-color\">2</span></h1>\n          \n            <div class=\"row\">\n            \n                <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n              \n                <img class=\"img-responsive brandLogo\" src=\"assets/images/citistore.png\" alt=\"\" />\n                <h2 class=\"row-title\">CitiFun </h2>\n\n                <p>Mobile loyalty program of Citistore</p>\n                <p>Stack applied:</p>\n                <p>ionic 2 </p>\n                <p>angular 2</p>\n                <p>rethinkDB</p>\n                <p>redis</p>\n\n                <p><a class=\"btn btn-dc btn-small btn-main-color\" href=\"#link\">Visit Website</a></p>\n              \n              </div>\n            \n              <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n                \n\n                <img class=\"img-responsive latestproject\" src=\"assets/images/citifun.jpg\" alt=\"\" />\n              \n              </div>\n              <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n                \n                  <img class=\"img-responsive brandLogo\" src=\"assets/images/citistore.png\" alt=\"\" />\n\n              \n              </div>\n            \n            </div>\n          \n            <hr>\n          \n            <div class=\"row\">\n            \n              <div class=\"col-sm-6 col-sm-push-6 push-down scrollimation fade-left\">\n              \n                <h2 class=\"row-title\">The Rink(Element)  </h2>\n                \n                <p>Skating lesson booking application </p>\n              \n                <p>Support online payment and apple pay </p>\n                <p>Stack applied:</p>\n                <p>ionic 3 </p>\n                <p>angular 2</p>\n                <p>graphQL</p>\n\n                <p>mongoDb</p>\n                <p>redis</p>\n                <p><a class=\"btn btn-dc btn-small btn-main-color\" href=\"#link\">Visit Website</a></p>\n              \n              </div>\n            \n              <div class=\"col-sm-6 col-sm-pull-6 scrollimation fade-right\">\n                <img class=\"img-responsive latestproject\" src=\"assets/images/therink1.jpg\" alt=\"\" />\n              </div>\n            \n            </div>\n            \n          </div>\n          \n        </section>\n        \n        \n        <!-- ==============================================\n        CALL TO ACTION\n        =============================================== -->\n        <section id=\"cta1\" class=\"bg-main-color cta\">\n        \n          <div class=\"container text-center scrollimation fade-up\">\n          \n            <p>It's not about ideas. It's about making ideas happen.</p>\n            \n            <a class=\"btn btn-dc btn-white scrollto\" href=\"#contact\">Contact Me</a>\n          \n          </div>\n        \n        </section>\n          \n        <!-- ==============================================\n        ABOUT\n        =============================================== -->\n        <section id=\"about\" class=\"big-padding\">\n        \n          <div class=\"container\">\n            \n            <h1 class=\"section-title\">My Profile<span class=\"main-color\">3</span></h1>\n          \n            <div class=\"row profile\">\n            \n              <div class=\"col-sm-10 col-sm-offset-1 text-center\">\n           \n \n                <p class=\"margin-top scrollimation fade-right\">6 years of senior software engineering experience, with strong analytical skills and a broad range of full stack development. </p>\n\n                <p class=\"margin-top scrollimation fade-right\"> Coding enthusiast , enjoy coding for solving problem and studying new developing technique .</p>\n                    \n                <p class=\"margin-top scrollimation fade-right\">   Strong background in retail and finance industry . </p>\n                    \n                <p class=\"margin-top scrollimation fade-right\">   Entrepreneurial spirit , Working for passion ; Computational-thinking , Coding for solving problem .</p>\n                \n                <p class=\"lead margin-top scrollimation fade-left\">Creating is not just a job for me, it's a passion. </p>\n                \n              </div>\n              \n            </div>\n            \n          </div>\n        \n        </section>\n        \n        <!-- ==============================================\n        SKILLS\n        =============================================== -->\n        <section id=\"skills\" class=\"small-padding dark-bg\">\n        \n          <div class=\"container\">\n          \n            <div class=\"row skills\">\n  \n              <div class=\"col-sm-6 col-md-3 text-center\">\n                <span class=\"chart plus-symbol\" data-percent=\"90\"><span class=\"percent\">90</span></span>\n                <h2 class=\"text-center\">Front End</h2>\n              </div>\n              <div class=\"col-sm-6 col-md-3 text-center\">\n                <span class=\"chart plus-symbol\" data-percent=\"80\"><span class=\"percent\">80</span></span>\n                <h2 class=\"text-center\">Back End</h2>\n              </div>\n              <div class=\"col-sm-6 col-md-3 text-center\">\n                <span class=\"chart equal-symbol\" data-percent=\"95\"><span class=\"percent\">95</span></span>\n                <h2 class=\"text-center\">Support</h2>\n              </div>\n              <div class=\"col-sm-6 col-md-3 text-center\">\n                <span class=\"chart\" data-percent=\"90\"><span class=\"percent\">90</span></span>\n                <h2 class=\"text-center main-color\">High Score</h2>\n              </div>\n              \n            </div><!--End row -->\n            \n          </div>\n        \n        </section>\n          \n        <!-- ==============================================\n        PORTFOLIO\n        =============================================== -->\n        <section id=\"portfolio\" class=\"big-padding\" >\n        \n          <div class=\"container\">\n          \n            <h1 class=\"section-title\">My portfolio<span class=\"main-color\">4</span></h1>\n            \n            <!--==== Portfolio Filters ====-->\n            \n            <div class=\"text-center scrollimation fade-up\">\n              <div id=\"filter-works\" class=\"btn-group\">\n                <button data-filter=\"*\" type=\"button\" class=\"btn btn-default active\">All Items<span class=\"project-count\"></span></button>\n                <button data-filter=\".native\" type=\"button\" class=\"btn btn-default\">Native Mobile<span class=\"project-count\"></span></button>\n                <button data-filter=\".hybrid\" type=\"button\" class=\"btn btn-default\">Hybrid Mobile<span class=\"project-count\"></span></button>\n                <button data-filter=\".web\" type=\"button\" class=\"btn btn-default\">Web<span class=\"project-count\"></span></button>\n              </div>\n            </div>\n            \n          </div>\t\n          \n          <div class=\"container scrollimation fade-up\">\n        \n            <div id=\"projects-container\" class=\"row\">\n            \n              <!-- ==============================================\n              SINGLE PROJECT ITEM\n              =============================================== -->\n\n\n\n         \n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 \"   [ngClass]=\"project.tag\" (click)=\"onClick(i)\"  *ngFor=\"let project of projects; let i = index\">\n                \n                <img class=\"img-responsive project-image image-center logoImageProject\" src=\"{{project.logoUrl}}\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">{{project.name}}</h2><!--Project Title -->\n                  <p>{{project.caption}} </p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 web\" href=\"#?youtube-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-2.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Video project</h2><!--Project Title -->\n                  <p>Youtube video</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 web\" href=\"#?images-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-3.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Fullwidth images</h2><!--Project Title -->\n                  <p>Professional Web Design</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 web\" href=\"#?vimeo-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-4.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Another Video project</h2><!--Project Title -->\n                  <p>Vimeo video</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 print\" href=\"#?slider-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-6.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Project with Slider</h2><!--Project Title -->\n                  <p>Modern Business Card</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 print\" href=\"#?images-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-7.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Fullwidth images</h2><!--Project Title -->\n                  <p>Poster Design</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 print\" href=\"#?slider-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-8.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Project with Slider</h2><!--Project Title -->\n                  <p>Personal Business Card</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 print\" href=\"#?vimeo-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-5.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Video project</h2><!--Project Title -->\n                  <p>Vimeo video</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 video\" href=\"#?slider-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-9.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Project with Slider</h2><!--Project Title -->\n                  <p>Professional Brand Identity</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 video\" href=\"#?vimeo-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-10.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Another Video project</h2><!--Project Title -->\n                  <p>Vimeo video</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 video\" href=\"#?images-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-11.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Fullwidth images</h2><!--Project Title -->\n                  <p>Creative Business Card</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n              <a class=\"project-item col-sm-6 col-md-4 col-lg-3 video\" href=\"#?youtube-project.html\">\n                \n                <img class=\"img-responsive project-image\" src=\"assets/images/projects/thumb-12.jpg\"  alt=\"\">\n                \n                <div class=\"hover-title\">\n                  <h2 class=\"project-title\">Video project</h2><!--Project Title -->\n                  <p>Youtube video</p><!--Project Subtitle -->\n                </div>\n                \n              </a>\n              \n            </div>\t\n            \n            <p class=\"lead text-center\">Like what you see? Contact me to discuss about your project!</p>\n            <p class=\"text-center\"><a class=\"btn btn-dc btn-main-color scrollto\" href=\"#contact\">Contact Me</a></p>\n            \n          </div>\t\n          \n        </section>\n        \n        <!-- ==============================================\n        TWITTER\n        =============================================== -->\n        <section id=\"twitter-feeds\" class=\"bg-main-color\">\n        \n          <div class=\"container text-center scrollimation fade-right\">\n          \n            <div class=\"row\">\n            \n              <div class=\"col-sm-10 col-sm-offset-1\">\n              \n                <h1>Latest tweets</h1>\n                <p><i class=\"fa fa-twitter\"></i></p>\n                \n                <div id=\"twitter-slider\" class=\"flexslider\" data-widget-id=\"386017398488186880\" data-max-tweets=\"5\"></div>\n            \n                <p><a href=\"https://twitter.com/qthemes\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Follow Me on Twitter\" target=\"_blank\">@johndoe</a></p>\n              \n              </div>\n              \n            </div>\n            \n          </div>\n        \n        </section>\n        \n        <!-- ==============================================\n        TESTIMONIALS\n        =============================================== -->\n        <section id=\"testimonials\" class=\"big-padding gray-bg\">\n        \n          <div class=\"container\">\n          \n            <h1 class=\"section-title\">Happy Clients<span class=\"main-color\">5</span></h1>\n            <p class=\"subtitle\">See what people say about my work</p>\n            \n            <div class=\"row\">\n            \n              <div class=\"col-lg-10 col-lg-offset-1 col-sm-12\">\n              \n                \n                <div class=\"testimonial-controls\">\n                  <span class=\"previous\"><i class=\"fa fa-angle-left\"></i></span>\n                  <span class=\"next\"><i class=\"fa fa-angle-right\"></i></span>\n                </div>\n                \n                <div id=\"testimonials-slider\" class=\"flexslider\">\n                \n                  <ul class=\"slides\">\n                  \n                    <li>\n                      <div class=\"media scrollimation fade-right\">\n                      \n                        <div class=\"media-left\">\n                        \n                          <img class=\"media-object img-circle\" src=\"assets/images/client-1.jpg\" alt=\"\">\n                        \n                        </div>\n                        \n                        <div class=\"media-body\">\n                        \n                          <p class=\"testimonial\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nec magna eget ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nec magna eget ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>\n                          <p class=\"client\">John Doe / <a href=\"#link\">Google Inc.</a></p>\n                          \n                        </div>\n                        \n                      </div>\n                    \n                      <div class=\"media scrollimation fade-left\">\n                      \n                        <div class=\"media-body\">\n                        \n                          <p class=\"testimonial\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nec magna eget ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>\n                          <p class=\"client\">John Doe / <a href=\"#link\">Google Inc.</a></p>\n                          \n                        </div>\n                        \n                        <div class=\"media-right\">\n                        \n                          <img class=\"media-object img-circle\" src=\"assets/images/client-2.jpg\" alt=\"\">\n                        \n                        </div>\n                        \n                      </div>\n                    </li>\n                    \n                    <li>\n                    \n                      <div class=\"media\">\n                      \n                        <div class=\"media-body\">\n                        \n                          <p class=\"testimonial\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nec magna eget ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>\n                          <p class=\"client\">John Doe / <a href=\"#link\">Google Inc.</a></p>\n                          \n                        </div>\n                        \n                        <div class=\"media-right\">\n                        \n                          <img class=\"media-object img-circle\" src=\"assets/images/client-3.jpg\" alt=\"\">\n                        \n                        </div>\n                        \n                      </div>\n                      \n                      <div class=\"media\">\n                      \n                        <div class=\"media-left\">\n                        \n                          <img class=\"media-object img-circle\" src=\"assets/images/client-4.jpg\" alt=\"\">\n                        \n                        </div>\n                        \n                        <div class=\"media-body\">\n                        \n                          <p class=\"testimonial\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nec magna eget ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>\n                          <p class=\"client\">John Doe / <a href=\"#link\">Google Inc.</a></p>\n                          \n                        </div>\n                        \n                      </div>\n                    \n                    </li>\n                  \n                  </ul>\n                  \n                </div>\n                  \n              </div>\n            \n            </div>\n            \n          </div>\n          \n        </section>\n        \n        <div class=\"white-bg\">\n        \n          <div class=\"container\">\n          \n            <div class=\"row\">\n            \n              <div class=\"col-sm-3\">\n              \n                <a href=\"#\"><img class=\"img-responsive client-logo\" src=\"assets/images/client-logo-1.png\" alt=\"\" /></a>\n              \n              </div>\n            \n              <div class=\"col-sm-3\">\n              \n                <a href=\"#\"><img class=\"img-responsive client-logo\" src=\"assets/images/client-logo-2.png\" alt=\"\" /></a>\n              \n              </div>\n              \n              <div class=\"col-sm-3\">\n              \n                <a href=\"#\"><img class=\"img-responsive client-logo\" src=\"assets/images/client-logo-3.png\" alt=\"\" /></a>\n              \n              </div>\n              \n              <div class=\"col-sm-3\">\n              \n                <a href=\"#\"><img class=\"img-responsive client-logo\" src=\"assets/images/client-logo-4.png\" alt=\"\" /></a>\n              \n              </div>\n            </div>\n          \n          </div>\n        \n        </div>\n        \n        \n        <!-- ==============================================\n        CONTACT\n        =============================================== -->\n        <section id=\"contact\" class=\"big-padding light-typo color-overlay\">\n        \n          <div class=\"container\">\n          \n            <h1 class=\"section-title\">Contact Me<span class=\"main-color\">6</span></h1>\n            \n            <div class=\"row\">\n            \n              <div class=\"col-sm-6 col-md-5 scrollimation fade-right\">\n              \n                <p class=\"lead\">I am available for freelance. <br/>Can't wait for the next exciting project! Could it be yours?</p>\n              \n                <p>\n                  John Doe<br/>\n                  W325 State Road 123<br/>\n                  Mondovi, WI(Wisconsin) 98746-54321<br/>\n                  (123) 456 - 7890 <br/>\n                </p>\n              \n                <div class=\"social-links\">\n                  <a href=\"#\"><i class=\"fa fa-fw fa-twitter\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-facebook-square\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-linkedin-square\"></i></a>\n                </div>\n              \n                <p><a class=\"mail-styled\" href=\"mailto:mail@example.com\">contact@johndoe.com</a></p>\n              \n              </div>\n            \n              <!--=== Contact Form ===-->\n  \n              <form id=\"contact-form\" class=\"col-sm-6 col-md-offset-1 scrollimation fade-left\" action=\"contact.php\" method=\"post\" novalidate>\n                \n                <div class=\"form-group\">\n                  <div class=\"controls\">\n                    <input id=\"contact-name\" name=\"contactName\" class=\"form-control requiredField\" type=\"text\" data-error-empty=\"is required\">\n                    <label class=\"control-label\" for=\"contact-name\">Name</label>\n                  </div>\n                </div><!-- End name input -->\n                \n                <div class=\"form-group\">\n                  <div class=\"controls\">\n                    <input id=\"contact-mail\" name=\"email\" class=\"form-control requiredField\" type=\"email\" data-error-empty=\"is required\" data-error-invalid=\"is invalid\">\n                    <label class=\"control-label\" for=\"contact-mail\">Email</label>\n                  </div>\n                </div><!-- End email input -->\n                \n                <div class=\"form-group\">\n                  <div class=\"controls\">\n                    <textarea id=\"contact-message\" name=\"comments\" class=\"form-control requiredField\" rows=\"6\" data-error-empty=\"is required\"></textarea>\n                    <label class=\"control-label\" for=\"contact-message\">Message</label>\n                  </div>\n                </div><!-- End textarea -->\n                \n                <button name=\"submit\" type=\"submit\" class=\"btn\" data-error-message=\"Please fill the required fields\" data-sending-message=\"Sending Message\" data-ok-message=\"Your Message has been sent!\">Send It</button>\n                <input type=\"hidden\" name=\"submitted\" id=\"submitted\" value=\"true\" />\n                \n              </form><!-- End contact-form -->\n              \n            </div>\n            \n          </div>\n        \n        </section>\n        \n        <!-- ==============================================\n        FOOTER\n        =============================================== -->\t\n        \n        <footer id=\"main-footer\">\n        \n          <div class=\"container\">\n          \n            <div class=\"row\">\n            \n              <div class=\"col-sm-2\">\n              \n                <a class=\"logo-link scrollto\" href=\"#home\">\n                  <img class=\"img-responsive\" src=\"assets/images/logo-bw.png\" alt=\"\" />\n                </a>\n                \n              </div>\n            \n              <div class=\"col-sm-8\">\n              \n                <nav>\n                \n                  <ul class=\"footer-nav\">\n                    <li><a class=\"scrollto\" href=\"#home\">Home</a></li>\n                    <li><a class=\"scrollto\" href=\"#services\">Services</a></li>\n                    <li><a class=\"scrollto\" href=\"#portfolio\">Portfolio</a></li>\n                    <li><a class=\"scrollto\" href=\"#contact\">Contact</a></li>\n                  </ul>\n                \n                </nav>\n              \n              </div>\n            \n              <div class=\"col-sm-2 text-right social-links\">\n              \n                <a href=\"#\" data-toggle=\"tooltip\" title=\"Follow me on Twitter\"><i class=\"fa fa-fw fa-twitter\"></i></a>\n                <a href=\"#\" data-toggle=\"tooltip\" title=\"Follow me on Facebook\"><i class=\"fa fa-fw fa-facebook\"></i></a>\n                <a href=\"#\" data-toggle=\"tooltip\" title=\"Follow me on LinkedIn\"><i class=\"fa fa-fw fa-linkedin\"></i></a>\n              \n              </div>\n              \n            </div>\n          \n          </div>\n          \n        </footer>\n        \n      </div>\n      \n      <div id=\"project-viewer\" class=\"modal fade\">\n        \n        <span id=\"close-project-viewer\" data-dismiss=\"modal\">&times;</span>\n        \n        <div class=\"container\">\n      \n          <div id=\"project-viewer-content\"></div>\n          \n          <div id=\"project-viewer-footer\">\n        \n            <div class=\"project-nav\">\n            \n              <span class=\"previous-project\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Previous Project\"><i class=\"fa fa-long-arrow-left\"></i></span>\n              <span class=\"back-to-portfolio\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Back to Portfolio\" data-dismiss=\"modal\"><i class=\"fa fa-th-large\"></i></span>\n              <span class=\"next-project\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Next Project\"><i class=\"fa fa-long-arrow-right\"></i></span>\n            \n            </div>\n          </div>\n          \n        </div>\n        \n      </div><!-- /.modal -->\n        \n \n      </div>\n    "

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
                    { "type": "img",
                        "img": "assets/images/projects/slide-2-1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ]
            },
            {
                "name": "Cash Security Trade",
                "tag": "native",
                "caption": "iOS & Android",
                "logoUrl": "assets/images/projects/st.png",
                "contents": [
                    { "type": "img",
                        img: "assets/images/projects/slide-2-1.jpg"
                    },
                    {
                        "type": "text",
                        "text": "Role"
                    }
                ]
            }
        ];
    }
    AppComponent.prototype.createContent = function (index) {
        var project = this.projects[index];
        var result = '<h1 class="project-title">' + project.name + '<span>(2012-2017)</span></h1>';
        result += '<p class="project-subtitle">' + project.caption + '</p>';
        result += '<div class="project-media">';
        for (var _i = 0, _a = project.contents; _i < _a.length; _i++) {
            var content = _a[_i];
            if (content.type == 'img') {
                result += '<img class="img-responsive img-center" src="' + content['img'] + '" alt="" />';
            }
        }
        result += '<h2>Role</h2>';
        result += '<p>Development & Maintance</p>';
        result += '</div>';
        return result;
    };
    AppComponent.prototype.onClick = function () {
        var dialogRef = this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(this.createContent(0))
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