"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = function Component(element) {
  _classCallCheck(this, Component);

  this.dataset = element.dataset;
  this.element = element;
  this.state = {};
  this.init();
};

_defineProperty(Component, "findAll", function (componentName, init) {
  return _toConsumableArray(document.querySelectorAll("*[data-component=\"".concat(componentName, "\"]"))).map(init);
});

var ImageCutter =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageCutter, _Component);

  function ImageCutter() {
    _classCallCheck(this, ImageCutter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageCutter).apply(this, arguments));
  }

  _createClass(ImageCutter, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this$props, imageSrc, velocity, piecesCount, animate, image, amplitudeCompensator, app, containers;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.props = _objectSpread({}, ImageCutter.defaultProps, this.dataset);
                _this$props = this.props, imageSrc = _this$props.imageSrc, velocity = _this$props.velocity, piecesCount = _this$props.piecesCount;
                animate = parseInt(velocity, 10);
                PIXI.utils.skipHello();

                if (imageSrc) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _context.next = 8;
                return this.getImage();

              case 8:
                image = this.state.image = _context.sent;
                amplitudeCompensator = image.naturalWidth > image.naturalHeight ? image.naturalWidth * this.props.amplitude / 50 : image.naturalHeight * this.props.amplitude / 50;
                app = this.state.app = new PIXI.Application(image.naturalWidth + amplitudeCompensator, image.naturalHeight + amplitudeCompensator, {
                  interactive: true,
                  transparent: true,
                  antialias: false
                });

                if (this.state.app.type == PIXI.WEBGL_RENDERER) {
                  console.log('Using WebGL');
                } else {
                  console.log('Using Canvas');
                }

                ;
                this.state.app.transparent = "true";
                this.element.appendChild(app.view);
                containers = this.state.containers = this.createContainers();
                containers.forEach(function (container, i) {
                  app.stage.addChild(container);
                });
                if (animate) this.movePieces();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "createContainers",
    value: function createContainers() {
      var _this$props2 = this.props,
          imageSrc = _this$props2.imageSrc,
          rotationAngle = _this$props2.rotationAngle,
          piecesCount = _this$props2.piecesCount;
      var app = this.state.app;
      var angleInRad = Math.acosh(Math.cosh(rotationAngle * Math.PI / 180));
      var simpleRotationAngle = angleInRad / Math.PI * 180;
      var lineLength = app.screen.height + app.screen.width;
      var isRight = simpleRotationAngle > 90 && simpleRotationAngle < 180 || simpleRotationAngle > 270 && simpleRotationAngle < 360;

      var getPoint = function getPoint(t) {
        var x = app.screen.width * t;
        var y = isRight ? app.screen.height * t : app.screen.height * (1 - t);
        return {
          x: x,
          y: y
        };
      };

      var piecesCount = parseInt(piecesCount, 10);
      return new Array(piecesCount).fill(1).map(function (_, pos) {
        var point1 = getPoint(pos / piecesCount);
        var point2 = getPoint((pos + 1) / piecesCount);
        var imageContainer = new PIXI.Container();
        var texture = new PIXI.Texture.fromImage(imageSrc);
        var car = new PIXI.Sprite(texture); //const car = PIXI.Sprite.fromImage(imageSrc);

        car.anchor.set(0.5);
        car.x = app.screen.width / 2;
        car.y = app.screen.height / 2;
        imageContainer.addChild(car);
        var mask = new PIXI.Graphics();
        mask.position.x = 0;
        mask.position.y = 0;
        mask.lineStyle(0);
        mask.beginFill(0xffffff, 0);
        mask.moveTo(point1.x + Math.cos(angleInRad + Math.PI) * lineLength, point1.y + Math.sin(angleInRad + Math.PI) * lineLength);
        mask.lineTo(point1.x + Math.cos(angleInRad) * lineLength, point1.y + Math.sin(angleInRad) * lineLength);
        mask.lineTo(point2.x + Math.cos(angleInRad) * lineLength, point2.y + Math.sin(angleInRad) * lineLength);
        mask.lineTo(point2.x + Math.cos(angleInRad + Math.PI) * lineLength, point2.y + Math.sin(angleInRad + Math.PI) * lineLength);
        imageContainer.addChild(mask);
        imageContainer.mask = mask;
        return imageContainer;
      });
    }
  }, {
    key: "getImage",
    value: function getImage() {
      var imageSrc = this.props.imageSrc;
      return new Promise(function (res, rej) {
        var image = new Image();

        image.onload = function () {
          return res(image);
        };

        image.error = rej;
        image.src = imageSrc;
      });
    }
  }, {
    key: "movePieces",
    value: function movePieces() {
      var _this2 = this;

      var _this$props3 = this.props,
          velocity = _this$props3.velocity,
          rotationAngle = _this$props3.rotationAngle,
          amplitude = _this$props3.amplitude;
      var angleInRad = rotationAngle * Math.PI / 180;
      var app = this.state.app;
      var rvector = {
        x: Math.cos(angleInRad),
        y: Math.sin(angleInRad)
      };
      var step = 1 / velocity * 60;
      var t = 0.51;
      var tempT = 0.5;
      var movedTop = 0;
      var top = window.pageYOffset;
      var topOffset = this.getGlobalPosition(this.element);
      var randomizer = [];
      var that = this;
      var hovered = false;
      var isFired = false;
      var x;
      var y;
      var elementWidth = that.element.offsetWidth;
      var elementHeight = that.element.offsetHeight;
      isFired = false;
      var target = this.element;
      var hoveredT = 0.5;
      var time2;
      var parentOffset = {
        top: 1,
        left: 1
      };
      var relX = 0.5;
      var relY = 0.5;

      if (elementHeight === 0) {
        elementHeight = app.screen.Height * 0.6;
      }

      var once = function once(f) {
        isFired = false;
        return function () {
          if (!isFired) {
            f();
            isFired = true;
          }
        };
      };

      var randomizeNumbers = once(function () {
        _this2.state.containers.forEach(function (container, i) {
          randomizer[i] = getRndInteger(1, 100);
        });
      });
      randomizeNumbers();

      if (window.innerWidth > 1040) {
        var resetTimer = function resetTimer() {
          clearTimeout(time2);
          time2 = setTimeout(resetHoveredT, 1000);
        };

        var resetHoveredT = function resetHoveredT() {
          if (hovered) {
            randomizeNumbers();
          }

          hoveredT = 0.5;
        };

        $(target).mouseenter(function () {
          hoveredT = 0.5;
          hovered = !hovered;
          var tempOffset = $(this).offset();

          if (tempOffset.left != 0) {
            parentOffset.left = tempOffset.left;
          } else {
            parentOffset.left = 1;
          }

          parentOffset.top = tempOffset.top;
        });
        $(target).mouseleave(function () {
          randomizeNumbers();
          isFired = false;
          hovered = !hovered;
          hoveredT = 0.5;
          relX = 0.5;
          relY = 0.5;
        });
        $(target).mousemove(function (event) {
          //relX = (event.pageX - parentOffset.left) / (elementWidth / 1.1);
          relY = (event.pageY - parentOffset.top) / (elementHeight / 1.2);
          resetTimer();
          hoveredT = relX - relY + 0.5;

          if (hoveredT <= 0.53 && hoveredT >= 0.48) {
            randomizeNumbers();
          }
        });
      } else {}

      this.state.app.ticker.add(function (delta) {
        top = window.pageYOffset / 500;

        if (0.48 <= t && t <= 0.52 && t != 0.51 && !hovered) {
          tempT = top + 1.32 - topOffset.y / 500;
          t = 0.5; //randomizeNumbers();

          if (tempT > 0.8 || tempT < 0.2) {
            t = tempT;
            tempT = 0.51;
          }
        } else {
          isFired = false;
          t = top + 1.32 - topOffset.y / 500;
        }

        if (hovered) {
          t = hoveredT;
        }

        _this2.state.containers.forEach(function (container, i) {
          var position = randomizer[i] % 2 ? getPosition(t) : getPosition(1 - t);
          TweenMax.to(container.position, 1.5, {
            x: position.x * randomizer[i] / 100,
            y: position.y * randomizer[i] / 100,
            ease: Power3.easeOut
          });
        });
      });
      $('a.menu-burger, .js-footer-open-menu').click(function (e) {
        if ($("a.menu-burger").hasClass("is-open")) {
          that.state.app.stop();
        } else {
          that.state.app.start();
        }
      });

      var getPosition = function getPosition(t) {
        var width = _this2.state.image.naturalWidth;
        return {
          x: amplitude * (1 - 2 * t) * rvector.x * width / 100,
          y: amplitude * (1 - 2 * t) * rvector.y * width / 100
        };
      };
    }
  }, {
    key: "getGlobalPosition",
    value: function getGlobalPosition(element) {
      var xPosition = 0;
      var yPosition = 0;

      while (element) {
        xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
        element = element.offsetParent;
      }

      return {
        x: xPosition,
        y: yPosition
      };
    }
  }]);

  return ImageCutter;
}(Component);

_defineProperty(ImageCutter, "findAll", function () {
  return Component.findAll('image-cutter', function (element) {
    return new ImageCutter(element);
  });
});

_defineProperty(ImageCutter, "defaultProps", {
  rotationAngle: 60,
  piecesCount: 5,
  velocity: 3500,
  amplitude: 10
});

var ImageSlider =
/*#__PURE__*/
function (_Component2) {
  _inherits(ImageSlider, _Component2);

  function ImageSlider() {
    _classCallCheck(this, ImageSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageSlider).apply(this, arguments));
  }

  _createClass(ImageSlider, [{
    key: "init",
    value: function () {
      var _init2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this$props4, imageSrc, velocity, piecesCount, containers, animate, image, app, i;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.props = _objectSpread({}, ImageSlider.defaultProps, this.dataset);
                this.props.imageSrc = this.props.imageSrc.split(",");
                _this$props4 = this.props, imageSrc = _this$props4.imageSrc, velocity = _this$props4.velocity, piecesCount = _this$props4.piecesCount, containers = _this$props4.containers;
                this.containers = [];
                this.state.containers = [];
                this.state.slideCurrentIndex = 0;
                animate = parseInt(velocity, 10);
                PIXI.utils.skipHello();

                if (imageSrc) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return");

              case 10:
                _context2.next = 12;
                return this.getImage(0);

              case 12:
                image = this.state.image = _context2.sent;
                app = "";

                if (window.innerWidth > 1025) {
                  app = this.state.app = new PIXI.Application(window.innerWidth, window.innerHeight, {
                    interactive: true,
                    transparent: true,
                    antialias: false,
                    resolution: 1
                  });
                } else {
                  app = this.state.app = new PIXI.Application(window.innerWidth, window.innerHeight, {
                    interactive: true,
                    transparent: true,
                    antialias: false,
                    resolution: 3
                  });
                }

                this.element.appendChild(app.view);

                for (i = 0; i < imageSrc.length; i++) {
                  this.containers[i] = this.state.containers[i] = this.createContainers(i);
                  this.containers[i].forEach(function (container, index) {
                    container.alpha = 0;
                    app.stage.addChild(container);
                  });
                }

                if (animate) this.movePieces();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init2.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "createContainers",
    value: function createContainers(i) {
      var _this$props5 = this.props,
          imageSrc = _this$props5.imageSrc,
          rotationAngle = _this$props5.rotationAngle,
          piecesCount = _this$props5.piecesCount;
      var app = this.state.app;
      var angleInRad = Math.acosh(Math.cosh(rotationAngle * Math.PI / 180));
      var simpleRotationAngle = angleInRad / Math.PI * 180;
      var lineLength = app.screen.height + app.screen.width;
      var isRight = simpleRotationAngle > 90 && simpleRotationAngle < 180 || simpleRotationAngle > 270 && simpleRotationAngle < 360;

      var getPoint = function getPoint(t) {
        var x = app.screen.width * t;
        var y = isRight ? app.screen.height * t : app.screen.height * (1 - t);
        return {
          x: x,
          y: y
        };
      };

      var piecesCount = parseInt(piecesCount, 10);

      if (window.innerWidth < 650) {
        piecesCount = piecesCount / 2;
      }

      return new Array(piecesCount).fill(1).map(function (_, pos) {
        var point1 = getPoint(pos / piecesCount);
        var point2 = getPoint((pos + 1) / piecesCount);
        var imageContainer = new PIXI.Container();
        var texture = new PIXI.Texture.fromImage(imageSrc[i]);
        var car = new PIXI.Sprite(texture);

        if (window.innerWidth < 1050) {
          car.width = window.innerWidth - 40;
          car.height = (window.innerWidth - 40) / 1.57;
          car.anchor.set(0.5);
          car.x = window.innerWidth - 20 - car.width / 2;
          car.y = app.screen.height / 3;
        } else if (window.innerWidth >= 1050 && window.innerWidth < 1800) {
          car.width = window.innerWidth * 0.48;
          car.height = window.innerWidth * 0.48 / 1.57;
          car.anchor.set(0.5);
          car.x = window.innerWidth - 180 - car.width / 2;
          car.y = app.screen.height / 2;
        } else {
          var offset = (window.innerWidth - 1400) / 2;
          car.width = 900;
          car.height = 900 / 1.577;
          car.anchor.set(0.5);
          car.x = offset + 1400 - 450;
          car.y = app.screen.height / 2;
        }

        imageContainer.addChild(car);
        var mask = new PIXI.Graphics();
        mask.position.x = 0;
        mask.position.y = 0;
        mask.lineStyle(0);
        mask.beginFill(0xffffff, 0);
        mask.moveTo(point1.x + Math.cos(angleInRad + Math.PI) * lineLength, point1.y + Math.sin(angleInRad + Math.PI) * lineLength);
        mask.lineTo(point1.x + Math.cos(angleInRad) * lineLength, point1.y + Math.sin(angleInRad) * lineLength);
        mask.lineTo(point2.x + Math.cos(angleInRad) * lineLength, point2.y + Math.sin(angleInRad) * lineLength);
        mask.lineTo(point2.x + Math.cos(angleInRad + Math.PI) * lineLength, point2.y + Math.sin(angleInRad + Math.PI) * lineLength);
        imageContainer.addChild(mask);
        imageContainer.mask = mask;
        return imageContainer;
      });
    }
  }, {
    key: "getImage",
    value: function getImage(i) {
      var imageSrc = this.props.imageSrc;
      return new Promise(function (res, rej) {
        var image = new Image();

        image.onload = function () {
          return res(image);
        };

        image.error = rej;
        image.src = imageSrc[i];
      });
    }
  }, {
    key: "movePieces",
    value: function movePieces() {
      var _this3 = this;

      var _this$props6 = this.props,
          velocity = _this$props6.velocity,
          rotationAngle = _this$props6.rotationAngle,
          amplitude = _this$props6.amplitude,
          imageSrc = _this$props6.imageSrc,
          transitionTime = _this$props6.transitionTime;
      var angleInRad = rotationAngle * Math.PI / 180;
      var rvector = {
        x: Math.cos(angleInRad),
        y: Math.sin(angleInRad)
      };
      var currentSlide = this.state.slideCurrentIndex;
      var step = 1 / velocity * 60;
      var t = {
        value: 0.5
      };
      var top = window.pageYOffset;
      var topOffset = this.getGlobalPosition(this.element);
      var randomizer = [[1, 2], [1, 2]];
      var that = this;
      var transitioning = false;
      var textSlides = $('.homepage-header__text__main__absolute-wrapper');
      var isFired = false;
      var hoveredT = 0.5;
      var target = this.element;
      var w = window.innerWidth;
      var h = window.innerHeight;

      var once = function once(f) {
        isFired = false;
        return function () {
          if (!isFired) {
            f();
            isFired = true;
          }
        };
      };

      var randomizeNumbers = once(function () {
        for (var i = 0; i < imageSrc.length; i++) {
          _this3.state.containers[0].forEach(function (container, j) {
            randomizer[0][j] = getRndInteger(1, 6);
          });
        }
      });
      $(target).mousemove(function (event) {
        hoveredT = -1.5 + event.pageY / (h * 0.5) + event.pageX / (w * 0.5);
        console.log(hoveredT);

        if (hoveredT <= 0.53 && hoveredT >= 0.48) {
          randomizeNumbers();
          console.log("fired!");
        } // console.log(hoveredT);

      });
      if (pageYOffset != 0) randomizeNumbers();
      this.state.app.ticker.add(function (delta) {
        if (pageYOffset === 0) {
          if (!transitioning) {
            randomizeNumbers();
            t.value = hoveredT;
          } else {}
        } else {
          isFired = false;
          top = window.pageYOffset / 500;
          t.value = top + 0.5 - topOffset.y / 500;
        }

        for (var i = 0; i < imageSrc.length; i++) {
          _this3.state.containers[i].forEach(function (container, j) {
            var position = randomizer[0][j] % 2 ? getPosition(t.value) : getPosition(1 - t.value);
            TweenMax.to(container.position, 1.5, {
              x: position.x * randomizer[0][j] / 6,
              y: position.y * randomizer[0][j] / 6,
              ease: Power3.easeOut
            });
          });
        }
      });

      if (topOffset.y < 5) {
        setTimeout(function () {
          $('.slider-controls__line').addClass('active');
          animateIn();

          if (imageSrc.length > 1) {
            var doNextSlide = function doNextSlide() {
              if (window.pageYOffset < 100 & !transitioning) {
                nextSlide();
              }
            };

            window.setInterval(doNextSlide, 5000);
          }
        }, 1900);
      }

      var distanceOut = -10;

      if (window.innerWidth < 650) {
        distanceOut = -3;
      }

      function animateIn() {
        isFired = false;
        transitioning = true;
        var localTransitionTime = 1;
        setTimeout(function () {
          $('.slider-controls__number--all').html('0' + imageSrc.length);
          $('.slider-controls__number--current').html('0' + (currentSlide + 1));
        }, 500);
        that.state.containers[currentSlide].forEach(function (container, j) {
          TweenMax.to(container, localTransitionTime, {
            alpha: 1
          });
        });
        TweenMax.to(t, 0, {
          value: distanceOut - 4,
          onUpdate: function onUpdate() {},
          onComplete: function onComplete() {
            transitioning = true;
            setTimeout(function () {
              $(textSlides).eq(currentSlide).addClass('active');
            }, 300);
            TweenMax.to(t, localTransitionTime, {
              value: 0.5,
              onUpdate: function onUpdate() {},
              onComplete: function onComplete() {
                setTimeout(function () {
                  transitioning = false;
                  hoveredT = 0.5;
                }, 700);
                randomizeNumbers();
              },
              ease: Power3.easeOut
            });
          },
          ease: Power3.easeOut
        });
      }

      $('a.menu-burger, .js-footer-open-menu').click(function (e) {
        if ($("a.menu-burger").hasClass("is-open")) {
          that.state.app.stop();
        } else {
          that.state.app.start();
        }
      });

      function slideIn() {
        isFired = false;
        transitioning = true;
        $(textSlides).eq(currentSlide).removeClass('active'), TweenMax.to(t, transitionTime, {
          value: distanceOut,
          onUpdate: function onUpdate() {},
          onComplete: function onComplete() {
            transitioning = true;
            setTimeout(function () {
              $(textSlides).eq(currentSlide).addClass('active');
            }, 300);
            TweenMax.to(t, transitionTime, {
              value: 0.5,
              onUpdate: function onUpdate() {},
              onComplete: function onComplete() {
                setTimeout(function () {
                  transitioning = false;
                  hoveredT = 0.5;
                }, 700);
                randomizeNumbers();
              },
              ease: Power3.easeOut
            });
          },
          ease: Power3.easeOut
        });
      }

      function nextSlide() {
        slideIn();

        if (currentSlide > imageSrc.length - 1) {
          currentSlide = 0;
        }

        that.state.containers[currentSlide].forEach(function (container, j) {
          TweenMax.to(container, transitionTime, {
            alpha: 0
          });
        });
        currentSlide += 1;

        if (currentSlide >= imageSrc.length) {
          currentSlide = 0;
        }

        that.state.containers[currentSlide].forEach(function (container, j) {
          TweenMax.to(container, transitionTime, {
            alpha: 1,
            delay: 0
          });
        });
        $('.slider-controls__number--current').html('0' + (currentSlide + 1));
      }

      var getPosition = function getPosition(t) {
        var width = _this3.state.image.naturalWidth;
        return {
          x: amplitude * (1 - 2 * t) * rvector.x * width / 100,
          y: amplitude * (1 - 2 * t) * rvector.y * width / 100
        };
      };
    }
  }, {
    key: "getGlobalPosition",
    value: function getGlobalPosition(element) {
      var xPosition = 0;
      var yPosition = 0;

      while (element) {
        xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
        element = element.offsetParent;
      }

      return {
        x: xPosition,
        y: yPosition
      };
    }
  }]);

  return ImageSlider;
}(Component);

_defineProperty(ImageSlider, "findAll", function () {
  return Component.findAll('image-slider', function (element) {
    return new ImageSlider(element);
  });
});

_defineProperty(ImageSlider, "defaultProps", {
  rotationAngle: 60,
  piecesCount: 5,
  velocity: 3500,
  amplitude: 10,
  transitionTime: 0.5
});

var CuttedMenu =
/*#__PURE__*/
function (_Component3) {
  _inherits(CuttedMenu, _Component3);

  function CuttedMenu() {
    _classCallCheck(this, CuttedMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(CuttedMenu).apply(this, arguments));
  }

  _createClass(CuttedMenu, [{
    key: "init",
    value: function () {
      var _init3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var _this$props7, imageSrc, velocity, piecesCount, containers, that, animate, image, app, _loop, i;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.props = _objectSpread({}, CuttedMenu.defaultProps, this.dataset);
                this.props.imageSrc = this.props.imageSrc.split(",");
                _this$props7 = this.props, imageSrc = _this$props7.imageSrc, velocity = _this$props7.velocity, piecesCount = _this$props7.piecesCount, containers = _this$props7.containers;
                that = this;
                this.containers = [];
                this.state.containers = [];
                this.state.slideCurrentIndex = 0;
                animate = parseInt(velocity, 10);
                PIXI.utils.skipHello();

                if (imageSrc) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return");

              case 11:
                _context3.next = 13;
                return this.getImage(0);

              case 13:
                image = this.state.image = _context3.sent;
                app = this.state.app = new PIXI.Application(screen.width * 0.6, screen.height * 0.6, {
                  interactive: true,
                  transparent: true,
                  antialias: false
                });
                this.element.appendChild(app.view);

                _loop = function _loop(i) {
                  _this4.containers[i] = _this4.state.containers[i] = _this4.createContainers(i);

                  _this4.containers[i].forEach(function (container, index) {
                    if (i != _this4.state.slideCurrentIndex) {
                      container.alpha = 0;
                    }

                    app.stage.addChild(container);
                  });
                };

                for (i = 0; i < imageSrc.length; i++) {
                  _loop(i);
                }

                if (animate) this.movePieces();

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init() {
        return _init3.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "createContainers",
    value: function createContainers(i) {
      var _this$props8 = this.props,
          imageSrc = _this$props8.imageSrc,
          rotationAngle = _this$props8.rotationAngle,
          piecesCount = _this$props8.piecesCount;
      var app = this.state.app;
      var angleInRad = Math.acosh(Math.cosh(rotationAngle * Math.PI / 180));
      var simpleRotationAngle = angleInRad / Math.PI * 180;
      var lineLength = app.screen.height + app.screen.width;
      var isRight = simpleRotationAngle > 90 && simpleRotationAngle < 180 || simpleRotationAngle > 270 && simpleRotationAngle < 360;

      var getPoint = function getPoint(t) {
        var x = app.screen.width * t;
        var y = isRight ? app.screen.height * t : app.screen.height * (1 - t);
        return {
          x: x,
          y: y
        };
      };

      var piecesCount = parseInt(piecesCount, 10);
      return new Array(piecesCount).fill(1).map(function (_, pos) {
        var point1 = getPoint(pos / piecesCount);
        var point2 = getPoint((pos + 1) / piecesCount);
        var imageContainer = new PIXI.Container();
        var texture = new PIXI.Texture.fromImage(imageSrc[i]);
        var car = new PIXI.Sprite(texture); //const car = PIXI.Sprite.fromImage(imageSrc);

        car.anchor.set(0.5);
        car.x = app.screen.width / 2;
        car.y = app.screen.height / 2;
        imageContainer.addChild(car);
        var mask = new PIXI.Graphics();
        mask.position.x = 0;
        mask.position.y = 0;
        mask.lineStyle(0);
        mask.beginFill(0xffffff, 0);
        mask.moveTo(point1.x + Math.cos(angleInRad + Math.PI) * lineLength, point1.y + Math.sin(angleInRad + Math.PI) * lineLength);
        mask.lineTo(point1.x + Math.cos(angleInRad) * lineLength, point1.y + Math.sin(angleInRad) * lineLength);
        mask.lineTo(point2.x + Math.cos(angleInRad) * lineLength, point2.y + Math.sin(angleInRad) * lineLength);
        mask.lineTo(point2.x + Math.cos(angleInRad + Math.PI) * lineLength, point2.y + Math.sin(angleInRad + Math.PI) * lineLength);
        imageContainer.addChild(mask);
        imageContainer.mask = mask;
        return imageContainer;
      });
    }
  }, {
    key: "getImage",
    value: function getImage(i) {
      var imageSrc = this.props.imageSrc;
      return new Promise(function (res, rej) {
        var image = new Image();

        image.onload = function () {
          return res(image);
        };

        image.error = rej;
        image.src = imageSrc[i];
      });
    }
  }, {
    key: "movePieces",
    value: function movePieces() {
      var _this5 = this;

      var _this$props9 = this.props,
          velocity = _this$props9.velocity,
          rotationAngle = _this$props9.rotationAngle,
          amplitude = _this$props9.amplitude,
          imageSrc = _this$props9.imageSrc,
          transitionTime = _this$props9.transitionTime;
      var angleInRad = rotationAngle * Math.PI / 180;
      var rvector = {
        x: Math.cos(angleInRad),
        y: Math.sin(angleInRad)
      };
      var currentSlide = this.state.slideCurrentIndex;
      var step = 1 / velocity * 60;
      var t = {
        value: 0.5
      };
      var top = window.pageYOffset;
      var topOffset = this.getGlobalPosition(this.element);
      var randomizer = [[1, 2], [1, 2]];
      var that = this;
      var isFired = false;
      var transitioning = false;

      var once = function once(f) {
        isFired = false;
        return function () {
          if (!isFired) {
            f();
            isFired = true;
          }
        };
      };

      var randomizeNumbers = once(function () {
        for (var i = 0; i < imageSrc.length; i++) {
          _this5.state.containers[0].forEach(function (container, j) {
            randomizer[0][j] = getRndInteger(1, 30);
          });
        }
      });
      if (pageYOffset != 0) randomizeNumbers();
      this.state.app.ticker.add(function (delta) {
        if (!transitioning) {
          randomizeNumbers();
          t.value = 0.5;
        }

        for (var i = 0; i < imageSrc.length; i++) {
          _this5.state.containers[i].forEach(function (container, j) {
            var position = randomizer[0][j] % 2 ? getPosition(t.value) : getPosition(1 - t.value);
            TweenMax.to(container.position, 1, {
              x: position.x * randomizer[0][j] / 30,
              y: position.y * randomizer[0][j] / 30,
              ease: Power3.easeOut
            });
          });
        }
      });
      var currentHoverSlide = 0;
      var previousHoverSlide = 0;

      if (imageSrc.length > 1) {
        $('a.menu-burger, .js-footer-open-menu').click(function (e) {
          slideIn();
        });
        $(document).on('click', '.js-target-products', function () {
          slideIn();
        });
        $('.navigation-links__item').mouseenter(function (e) {
          previousHoverSlide = currentHoverSlide;
          currentHoverSlide = $(this).attr('data-target');
          nextSlide();
        });
      }

      function slideIn() {
        isFired = false;
        transitioning = true;
        randomizeNumbers();
        TweenMax.to(t, transitionTime, {
          value: -6,
          onUpdate: function onUpdate() {},
          onComplete: function onComplete() {
            transitioning = true;
            TweenMax.to(t, transitionTime, {
              value: 0.5,
              onUpdate: function onUpdate() {},
              onComplete: function onComplete() {
                transitioning = false;
                randomizeNumbers();
              },
              ease: Power3.easeOut
            });
          },
          ease: Power3.easeOut
        });
      }

      function nextSlide() {
        slideIn();
        that.state.containers[previousHoverSlide].forEach(function (container, j) {
          TweenMax.to(container, transitionTime, {
            alpha: 0
          });
        });
        that.state.containers[currentHoverSlide].forEach(function (container, j) {
          TweenMax.to(container, transitionTime, {
            alpha: 1,
            delay: 0
          });
        });
      }

      var getPosition = function getPosition(t) {
        var width = _this5.state.image.naturalWidth;
        return {
          x: amplitude * (1 - 2 * t) * rvector.x * width / 100,
          y: amplitude * (1 - 2 * t) * rvector.y * width / 100
        };
      };
    }
  }, {
    key: "getGlobalPosition",
    value: function getGlobalPosition(element) {
      var xPosition = 0;
      var yPosition = 0;

      while (element) {
        xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
        element = element.offsetParent;
      }

      return {
        x: xPosition,
        y: yPosition
      };
    }
  }]);

  return CuttedMenu;
}(Component);

_defineProperty(CuttedMenu, "findAll", function () {
  return Component.findAll('cutted-menu', function (element) {
    return new CuttedMenu(element);
  });
});

_defineProperty(CuttedMenu, "defaultProps", {
  rotationAngle: 60,
  piecesCount: 5,
  velocity: 3500,
  amplitude: 10,
  transitionTime: 0.5
});

var BackgroundImage =
/*#__PURE__*/
function (_Component4) {
  _inherits(BackgroundImage, _Component4);

  function BackgroundImage() {
    _classCallCheck(this, BackgroundImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(BackgroundImage).apply(this, arguments));
  }

  _createClass(BackgroundImage, [{
    key: "init",
    value: function () {
      var _init4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var imageSrc, image, app, container, currentFilter, time, totalHeight, totalWidth, backgroundAutoMovement, resetTimer;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                resetTimer = function _ref2() {
                  clearTimeout(time);
                  time = setTimeout(backgroundAutoMovement, 1500); // 1000 milliseconds = 1 second
                };

                backgroundAutoMovement = function _ref() {
                  var widthTimeline = new TimelineMax({});
                  var heightTimeline = new TimelineMax({});
                  widthTimeline.to(currentFilter.center, 5.64, {
                    x: totalWidth
                  }).to(currentFilter.center, 5.64, {
                    x: 0,
                    repeat: -1,
                    yoyo: true
                  });
                  heightTimeline.to(currentFilter.center, 5.04, {
                    y: totalHeight
                  }).to(currentFilter.center, 5.04, {
                    y: 0,
                    repeat: -1,
                    yoyo: true
                  });
                };

                this.props = _objectSpread({}, BackgroundImage.defaultProps, this.dataset);
                imageSrc = this.props.imageSrc;

                if (imageSrc) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return");

              case 6:
                _context4.next = 8;
                return this.getImage();

              case 8:
                image = this.state.image = _context4.sent;
                app = this.state.app = new PIXI.Application(image.naturalWidth, image.naturalHeight, {
                  interactive: false,
                  transparent: false,
                  antialias: false
                });
                app.stage.interactive = true;
                this.element.appendChild(app.view);
                container = this.createContainer();
                currentFilter = this.setFiltersFirst();
                container.filters = [currentFilter];
                app.stage.addChild(container);
                this.mouseEvents(currentFilter); //5.64

                document.onmousemove = resetTimer;
                document.onkeypress = resetTimer;
                totalHeight = app.screen.height;
                totalWidth = app.screen.width;
                $(document).ready(function () {
                  backgroundAutoMovement();
                  setTimeout(function () {
                    if (fps < 50) {
                      app.destroy(true, true);
                      console.log("background canvas removed for better perfomance");
                    }
                  }, 2300);
                });

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init() {
        return _init4.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "createContainer",
    value: function createContainer() {
      var imageSrc = this.props.imageSrc;
      var app = this.state.app;
      var imageContainer = new PIXI.Container();
      var car = PIXI.Sprite.fromImage(imageSrc);
      car.anchor.set(0.5);
      car.x = app.screen.width / 2;
      car.y = app.screen.height / 2;
      imageContainer.addChild(car); //imageContainer.interactive = true;

      return imageContainer;
    }
  }, {
    key: "getImage",
    value: function getImage() {
      var imageSrc = this.props.imageSrc;
      return new Promise(function (res, rej) {
        var image = new Image();

        image.onload = function () {
          return res(image);
        };

        image.error = rej;
        image.src = imageSrc;
      });
    }
  }, {
    key: "setFiltersFirst",
    value: function setFiltersFirst() {
      var app = this.state.app;
      var filter = new PIXI.filters.ZoomBlurFilter(); //filter.radius = (app.screen.width + app.screen.height) / 2;

      filter.strength = 0.2;
      filter.center.x = app.screen.width;
      filter.center.y = app.screen.height;
      filter.innerRadius = 100;
      return filter;
    }
  }, {
    key: "mouseEvents",
    value: function mouseEvents(event) {
      var app = this.state.app;
      app.stage.on('mousemove', onPointerMove);

      function onPointerMove(eventData) {
        TweenMax.to(event.center, 0.7, {
          x: eventData.data.global.x,
          y: eventData.data.global.y,
          onUpdate: function onUpdate() {},
          onComplete: function onComplete() {} //ease:Circ.easeIn,

        });
      }
    }
  }]);

  return BackgroundImage;
}(Component);

_defineProperty(BackgroundImage, "findAll", function () {
  return Component.findAll('background-image', function (element) {
    return new BackgroundImage(element);
  });
});

_defineProperty(BackgroundImage, "defaultProps", {});

window.onload = function () {
  ImageCutter.findAll();
  ImageSlider.findAll();

  if (window.innerWidth > 1040) {
    BackgroundImage.findAll();
  }

  if (window.innerWidth > 1040) {
    CuttedMenu.findAll();
  }

  hideMenuOnScroll();
  menuToggler();
  initScrollToTop();
  formInputLabel();
  loaderToggle();
  $('[data-toggle="datepicker"]').datepicker();
  formUpdate();
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollAnimations() {
  // 	init scrollmagic
  var controller = new ScrollMagic.Controller();
  var duration = 1.2;
  var stagger = 0.4;
  var animationClass = 'active';
  var offsetSticky = window.innerHeight * 0.2;
  $('.js-path-animate').each(function () {
    var clipRevealTween = TweenMax.staggerTo('.js-path-animate', 0.1, {
      className: "+=line-drawn",
      ease: Power1.easeInOut
    }, 0.25);
    var scene = new ScrollMagic.Scene({
      triggerElement: '.js-path-animate',
      triggerHook: 0.85
    }).setTween(clipRevealTween).addTo(controller);
  });

  if (window.innerWidth > 1025) {
    $('.our-mission').each(function () {
      var fadein_tween = TweenMax.fromTo('.homepage-header__image__overlay', 1, {
        opacity: 0,
        ease: Power1.easeInOut
      }, {
        opacity: 1,
        ease: Power1.easeInOut
      });
      var opacity2 = new ScrollMagic.Scene({
        triggerElement: ".our-mission",
        triggerHook: 1,
        duration: "90%"
      }).setTween(fadein_tween).addTo(controller);
    });
    $('.products-slider').each(function () {
      var fadein_tween = TweenMax.fromTo('.homepage-header__image__overlay', 1, {
        opacity: 0,
        ease: Power1.easeInOut
      }, {
        opacity: 1,
        ease: Power1.easeInOut
      });
      var opacity = new ScrollMagic.Scene({
        triggerElement: ".products-slider",
        triggerHook: 1,
        duration: "100%"
      }).setTween(fadein_tween).addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: ".text-wrapper",
        duration: "35%",
        offset: offsetSticky / 2
      }).setPin(".text-wrapper").addTo(controller);
      var fleetSliderAnimationClass = "unfixed";
      var fleetSlider = TweenMax.staggerTo('.products-slider, .homepage-header__inner, .our-mission', 0, {
        className: '+=' + fleetSliderAnimationClass
      }, 0);
      new ScrollMagic.Scene({
        triggerElement: ".js-unfix-header",
        offset: -offsetSticky / 3,
        duration: "0"
      }).setTween(fleetSlider).addTo(controller);
    });
    $('.fleet-wrapper').each(function () {
      var revealItem = this;
      var revealTween = TweenMax.staggerFromTo(".fleet-slider-img", 0.75, {
        opacity: 0,
        y: 40,
        ease: Power3.easeInOut,
        delay: -2
      }, {
        opacity: 1,
        y: 0,
        ease: Power3.easeInOut
      }, 0.1);
      var scene = new ScrollMagic.Scene({
        triggerElement: revealItem,
        triggerHook: 0.7
      }).setTween(revealTween).addTo(controller);
    });
    $('.skew-banner').each(function () {
      var revealItem = this;
      var tl = new TimelineMax({});
      tl.fromTo('.skew-banner__overlay__cut.right', 0.75, {
        x: "-82%",
        ease: Power3.easeInOut
      }, {
        x: "0%",
        ease: Power3.easeInOut
      }).to('.caption.skew-banner-text__caption', 0.5, {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -0.2
      }).to('.skew-banner-text__main', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power1.easeInOut,
        y: 0
      }).to('.skew-banner-text__secondary', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power3.easeInOut
      }).to('.skew-banner .button.button--grey', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power3.easeInOut
      }).to('.skew-banner .skew-banner__image', 1, {
        opacity: 1,
        x: 100,
        delay: -1.55,
        ease: Power3.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: revealItem,
        triggerHook: 0.8
      }).setTween(tl).addTo(controller);
    });
    $('.map-banner').each(function () {
      var revealItem = this;
      var tl = new TimelineMax({});
      tl.fromTo('.map-banner-overlay', 0.75, {
        x: "-82%",
        ease: Power3.easeInOut
      }, {
        x: "0%",
        ease: Power3.easeInOut
      }).to('.caption.map-banner-text__caption', 0.5, {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -0.2
      }).to('.map-banner-text__main', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power1.easeInOut,
        y: 0
      }).to('.map-banner .button.button--grey', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power3.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: revealItem,
        triggerHook: 0.95
      }).setTween(tl).addTo(controller);
    });
    $('.benefits-list').each(function () {
      var clipRevealTween = TweenMax.staggerTo('.benefits-list__item', 0.1, {
        className: "+=js-animation-active",
        ease: Power1.easeInOut
      }, 0.25);
      var scene = new ScrollMagic.Scene({
        triggerElement: '.benefits-list__item',
        triggerHook: 0.85
      }).setTween(clipRevealTween).addTo(controller);
    });
    $('.timeline-container').each(function () {
      var clipRevealTween = TweenMax.staggerTo('.timeline-container-block', 0.1, {
        className: "+=js-animation-active",
        ease: Power1.easeInOut
      }, 0.25);
      var scene = new ScrollMagic.Scene({
        triggerElement: '.timeline-container-block',
        triggerHook: 0.85
      }).setTween(clipRevealTween).addTo(controller);
    });
    $('.js-clip-transition, .homepage-header.homepage-header--apply.secondary .homepage-header__text__main').each(function () {
      var textReveal = this;
      var tweenRevealTween = TweenMax.to(textReveal, 0, {
        className: "+=js-animation-active",
        ease: Power1.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: textReveal,
        triggerHook: 0.9
      }).setTween(tweenRevealTween).addTo(controller);
    });
    $('.js-frombot-transition').each(function () {
      var opacityReveal = this;
      var opacityRevealTween = TweenMax.fromTo(opacityReveal, 0.5, {
        ease: Power3.easeInOut,
        y: 40
      }, {
        ease: Power1.easeInOut,
        y: -40
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: opacityReveal,
        triggerHook: 1,
        duration: "100%"
      }).setTween(opacityRevealTween).addTo(controller);
    });
  } else {
    $('.js-clip-transition, .homepage-header.homepage-header--apply.secondary .homepage-header__text__main').each(function () {
      var textReveal = this;
      var tweenRevealTween = TweenMax.to(textReveal, 0, {
        className: "+=js-animation-active",
        ease: Power1.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: textReveal,
        triggerHook: 0.9
      }).setTween(tweenRevealTween).addTo(controller);
    });
    $('.map-banner').each(function () {
      var revealItem = this;
      var tl = new TimelineMax({});
      tl.to('.caption.map-banner-text__caption', 0.5, {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -0.2
      }).to('.map-banner-text__main', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power1.easeInOut,
        y: 0
      }).to('.map-banner .button.button--grey', 0.5, {
        opacity: 1,
        delay: -0.35,
        ease: Power3.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: revealItem,
        triggerHook: 0.95
      }).setTween(tl).addTo(controller);
    });
    $('.skew-banner').each(function () {
      var revealItem = this;
      var tl = new TimelineMax({});
      tl.fromTo('.caption.skew-banner-text__caption', 0.7, {
        opacity: 0,
        ease: Power3.easeInOut
      }, {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -0.55
      }).fromTo('.skew-banner-text__main', 0.7, {
        opacity: 0,
        ease: Power3.easeInOut,
        y: 40
      }, {
        opacity: 1,
        ease: Power1.easeInOut,
        y: 0,
        delay: -0.55
      }).fromTo('.skew-banner-text__secondary', 0.7, {
        opacity: 0,
        ease: Power3.easeInOut
      }, {
        opacity: 1,
        delay: -0.55,
        ease: Power3.easeInOut
      }).fromTo('.skew-banner .button.button--grey', 0.7, {
        opacity: 0,
        ease: Power3.easeInOut
      }, {
        opacity: 1,
        delay: -0.55,
        ease: Power3.easeInOut
      }).fromTo('.skew-banner .skew-banner__image', 0.5, {
        opacity: 0,
        ease: Power3.easeInOut
      }, {
        opacity: 1,
        delay: -0.35,
        ease: Power3.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: revealItem,
        triggerHook: 0.9
      }).setTween(tl).addTo(controller);
    });
    $('.fleet-wrapper').each(function () {
      var revealItem = this;
      var revealTween = TweenMax.staggerFromTo(".fleet-slider-img", 0.75, {
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
        delay: -2
      }, {
        opacity: 1,
        y: 0,
        ease: Power3.easeInOut
      }, 0.1);
      var scene = new ScrollMagic.Scene({
        triggerElement: revealItem,
        triggerHook: 0.85
      }).setTween(revealTween).addTo(controller);
    });
    $('.js-clip-transition,.homepage-header.homepage-header--apply.secondary .homepage-header__text__main, js-frombot-transition,.products-slider__heading.big-heading, .benefits-list .benefits-list__item, .timeline-container-block').each(function () {
      var opacityReveal = this;
      var opacityRevealTween = TweenMax.fromTo(opacityReveal, 0.7, {
        opacity: 0,
        ease: Power1.easeInOut
      }, {
        opacity: 0.999,
        ease: Power1.easeInOut
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: opacityReveal,
        triggerHook: 0.9
      }).setTween(opacityRevealTween).addTo(controller);
    });
  }

  $('.js-opacity-transition').each(function () {
    var opacityReveal = this;
    var opacityRevealTween = TweenMax.fromTo(opacityReveal, 0.7, {
      opacity: 0,
      ease: Power1.easeInOut
    }, {
      opacity: 0.999,
      ease: Power1.easeInOut
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: opacityReveal,
      triggerHook: 0.9
    }).setTween(opacityRevealTween).addTo(controller);
  });
  $('.js-opacity-out, .homepage-header__text').each(function () {
    var opacityReveal = this;
    var opacityRevealTween = TweenMax.fromTo(opacityReveal, 0.1, {
      opacity: 1,
      ease: Power1.easeInOut
    }, {
      opacity: 0,
      ease: Power1.easeInOut
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: opacityReveal,
      triggerHook: 0.15,
      duration: "30%"
    }).setTween(opacityRevealTween).addTo(controller);
  });
  $('.js-opacity-translate').each(function () {
    var opacityReveal = this;
    var opacityRevealTween = TweenMax.fromTo(opacityReveal, 0.5, {
      opacity: 0,
      ease: Power3.easeInOut,
      y: 40
    }, {
      opacity: 1,
      ease: Power1.easeInOut,
      y: 0
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: opacityReveal,
      triggerHook: 0.85
    }).setTween(opacityRevealTween).addTo(controller);
  });
  var footerBottom = TweenMax.fromTo('.footer-bottom .container', 0.5, {
    opacity: 0,
    ease: Power1.easeInOut
  }, {
    opacity: 0.999,
    ease: Power1.easeInOut
  });
  new ScrollMagic.Scene({
    triggerElement: ".footer-bottom",
    triggerHook: 1
  }).setTween(footerBottom).addTo(controller);
}

function hideMenuOnScroll() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = $('header').outerHeight();
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 10);

  function hasScrolled() {
    var st = $(window).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop) {
      $('header').removeClass('nav-down').addClass('nav-up');
    } else {
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;

    if (lastScrollTop === 0) {
      $('header').removeClass('nav-down');
      $('header').removeClass('nav-up');
    }
  }
}

function menuToggler() {
  var menuTimeline = new TimelineMax({});
  var menuIsOpen = false;
  $('a.menu-burger').click(function (e) {
    $('.navigation-links.active, .button-wrapper.active').removeClass('active');
    $('.navigation-overlay, .menu-burger, .navigation-overlay__title, .navigation-bar').toggleClass('is-open');
    $('.navigation-links.js-main-menu').addClass('active');

    if (!menuIsOpen) {
      menuTimeline.staggerFromTo(".navigation-links.active .navigation-links__item", 0.5, {
        autoAlpha: 0,
        y: -40,
        ease: Power3.easeInOut
      }, {
        autoAlpha: 1,
        y: 0,
        ease: Power3.easeInOut,
        delay: 0
      }, 0.1);
    } else {
      menuTimeline.staggerTo(".navigation-links .navigation-links__item", 0.1, {
        autoAlpha: 0,
        y: -40,
        ease: Power3.easeInOut
      }, 0.05);
      $('.navigation-links.js-main-menu').removeClass('active');
    }

    menuIsOpen = !menuIsOpen; //menuTimeline.totalProgress(1).kill()

    setTimeout(function () {
      $('body').toggleClass('overflow-hidden');
    }, 500);
    e.preventDefault();
  });
  $('.js-footer-open-menu').click(function (e) {
    e.preventDefault();
    $('.button-wrapper').removeClass('active');
    $('.navigation-overlay, .menu-burger, .navigation-overlay__title, .navigation-bar').toggleClass('is-open');
    $('.button-wrapper, .navigation-links.js-products').addClass('active');
    menuTimeline.staggerFromTo(".navigation-links.js-products .navigation-links__item", 0.5, {
      autoAlpha: 0,
      y: -40,
      ease: Power3.easeInOut
    }, {
      autoAlpha: 1,
      y: 0,
      ease: Power3.easeInOut,
      delay: 0
    }, 0.1);
    menuIsOpen = true;
    setTimeout(function () {
      $('body').toggleClass('overflow-hidden');
    }, 500);
  });
  $('.js-target-products').click(function (e) {
    e.preventDefault();
    menuTimeline.staggerFromTo(".navigation-links.active .navigation-links__item", 0.4, {
      autoAlpha: 1,
      y: 0,
      ease: Power3.easeInOut,
      delay: 0
    }, {
      autoAlpha: 0,
      y: -40,
      ease: Power3.easeInOut
    }, 0.1);

    function toggleSubmenu() {
      $('.navigation-links, .button-wrapper').toggleClass('active');
      menuTimeline.staggerFromTo(".navigation-links.active .navigation-links__item", 0.4, {
        autoAlpha: 0,
        y: -40,
        ease: Power3.easeInOut
      }, {
        autoAlpha: 1,
        y: 0,
        ease: Power3.easeInOut,
        delay: 0
      }, 0.1);
    }

    menuTimeline.call(toggleSubmenu());
  });
}

var scrollToTop = function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 15);
  }
};

function initScrollToTop() {
  $('button.js-scroll-to-top').click(function (e) {
    e.preventDefault();
    scrollToTop();
  });
}

function formInputLabel() {
  $('input, textarea').change(function () {
    var _this = $(this);

    if (_this.val() !== "") {
      _this.closest('.group').find('label').addClass('focused');

      _this.closest('.group').find('.bar').addClass('focused');
    }
  });
  $('input, textarea').focusin(function () {
    var _this = $(this);

    _this.closest('.group').find('label').addClass('focused');

    _this.closest('.group').find('.bar').addClass('focused');
  });
  $('input, textarea').focusout(function () {
    var _this = $(this);

    if (_this.val() == "") {
      _this.closest('.group').find('label').removeClass('focused');

      _this.closest('.group').find('.bar').removeClass('focused');
    }
  });
}

function loaderToggle() {
  setTimeout(function () {
    $('.loader-overlay').addClass('active');
  }, 2100);
  setTimeout(function () {
    $('body').addClass('loaded');
    scrollAnimations();
  }, 2400);
}

var demo3;
var globalFrontReinit;
var contactFormUpdate;
$(document).ready(function () {
  var Demo3 =
  /*#__PURE__*/
  function () {
    function Demo3() {
      _classCallCheck(this, Demo3);

      var that = this;
      that.initCursor();
      that.initHovers();
    }

    _createClass(Demo3, [{
      key: "initCursor",
      value: function initCursor() {
        var _this6 = this;

        var _window = window,
            Back = _window.Back;
        this.outerCursor = document.querySelector(".circle-cursor--outer");
        this.innerCursor = document.querySelector(".circle-cursor--inner"); //this.outerCursorBox = this.outerCursor.getBoundingClientRect();

        this.outerCursorBox = {
          bottom: 42,
          height: 42,
          left: 0,
          right: 42,
          top: 0,
          width: 42,
          x: 0,
          y: 0
        };
        this.outerCursorSpeed = 0;
        this.easing = Back.easeOut.config(1.7);
        this.clientX = -100;
        this.clientY = -100;
        this.showCursor = false;
        this.tl = new TimelineMax({});

        var unveilCursor = function unveilCursor() {
          TweenMax.set(_this6.outerCursor, {
            x: _this6.clientX - _this6.outerCursorBox.width / 2,
            y: _this6.clientY - _this6.outerCursorBox.height / 2
          });
          _this6.showCursor = true;
        };

        document.addEventListener("mousemove", unveilCursor);
        document.addEventListener("mousemove", function (e) {
          _this6.clientX = e.clientX;
          _this6.clientY = e.clientY;
        });

        var render = function render() {
          TweenMax.set(_this6.innerCursor, {
            x: _this6.clientX,
            y: _this6.clientY
          });

          if (!_this6.isStuck) {
            TweenMax.to(_this6.outerCursor, _this6.outerCursorSpeed, {
              x: _this6.clientX - _this6.outerCursorBox.width / 2,
              y: _this6.clientY - _this6.outerCursorBox.height / 2
            });
          }

          if (_this6.showCursor) {
            document.removeEventListener("mousemove", unveilCursor);
          }

          requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
      }
    }, {
      key: "initHovers",
      value: function initHovers() {
        var _this7 = this;

        var handleMouseEnter = function handleMouseEnter(e) {
          _this7.outerCursorOriginals = {
            width: 42,
            height: 42
          };

          _this7.tl.to(_this7.outerCursor, 0.3, {
            width: 132,
            height: 132,
            top: -40,
            left: -40,
            ease: Power1.easeInOut
          }).to(_this7.outerCursor, 0.6, {
            width: 100,
            height: 100,
            top: -30,
            left: -30,
            repeat: 100,
            ease: Power1.easeInOut,
            yoyo: true
          });
        };

        var handleMouseLeave = function handleMouseLeave() {
          _this7.tl.progress(1);

          _this7.tl.to(_this7.outerCursor, 0.3, {
            width: 42,
            height: 42,
            top: 0,
            left: 0
          });
        };

        var linkItems = document.querySelectorAll("a:not(.halfed), button:not(.halfed), .cursor-change");
        linkItems.forEach(function (item) {
          item.addEventListener("mouseenter", handleMouseEnter);
          item.addEventListener("mouseleave", handleMouseLeave);
        });

        var handleHalfMouseEnter = function handleHalfMouseEnter(e) {
          _this7.outerCursorOriginals = {
            width: _this7.outerCursorBox.width,
            height: _this7.outerCursorBox.height
          };

          _this7.tl.to(_this7.outerCursor, 0.3, {
            width: 80,
            height: 80,
            top: -15,
            left: -15,
            ease: Power1.easeInOut
          }).to(_this7.outerCursor, 0.6, {
            width: 64,
            height: 64,
            top: -10,
            left: -10,
            repeat: 100,
            ease: Power1.easeInOut,
            yoyo: true
          });
        };

        var halfLinkItems = document.querySelectorAll("a.halfed:not(.unhoverable), .halfed");
        halfLinkItems.forEach(function (item) {
          item.addEventListener("mouseenter", handleHalfMouseEnter);
          item.addEventListener("mouseleave", handleMouseLeave);
        });
        var goldenHoverTween = TweenMax.to(this.outerCursor, 0.3, {
          borderColor: "#353535",
          ease: this.easing,
          paused: true
        });

        var goldenMouseEnter = function goldenMouseEnter() {
          TweenMax.to(_this7.outerCursor, 0.2, {
            borderColor: "#353535"
          });
        };

        var goldenMouseLeave = function goldenMouseLeave() {
          TweenMax.to(_this7.outerCursor, 0.2, {
            //backgroundColor: "#a6884b",
            borderColor: "#a6884b"
          });
        };

        var goldenCursor = document.querySelectorAll(".skew-banner, .js-cursor-grey");
        goldenCursor.forEach(function (item) {
          item.addEventListener("mouseenter", goldenMouseEnter);
          item.addEventListener("mouseleave", goldenMouseLeave);
        });
      }
    }]);

    return Demo3;
  }();

  var clientX = -100;
  var clientY = -100;
  var innerCursor = document.querySelector(".cursor--small");

  var initCursor = function initCursor() {
    document.addEventListener("mousemove", function (e) {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    var render = function render() {
      TweenMax.set(innerCursor, {
        x: clientX,
        y: clientY
      });
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  };

  initCursor();
  var lastX = 0;
  var lastY = 0;
  var isStuck = false;
  var showCursor = false;
  var group, stuckX, stuckY, fillOuterCursor;

  var initHovers = function initHovers() {
    // find the center of the link element and set stuckX and stuckY
    // these are needed to set the position of the noisy circle
    var handleMouseEnter = function handleMouseEnter(e) {
      var navItem = e.currentTarget;
      var navItemBox = navItem.getBoundingClientRect();
      stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
      stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
      isStuck = true;
    }; // reset isStuck on mouseLeave


    var handleMouseLeave = function handleMouseLeave() {
      isStuck = false;
    }; // add event listeners to all items


    var linkItems = document.querySelectorAll(".link");
    linkItems.forEach(function (item) {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
  };

  initHovers();
  demo3 = new Demo3();

  globalFrontReinit = function globalFrontReinit() {
    formUpdate();
    formInputLabel();
    $('[data-toggle="datepicker"]').datepicker();
    demo3.initHovers();
    demo3.initCursor();
    console.log("functions Reinit");
    var offsetHeader = $(".homepage-header__image__overlay").height();
    $("html, body").animate({
      scrollTop: offsetHeader
    }, 1000, function () {
      $('form input:text').first().focus();
    });
  };

  contactFormUpdate = function contactFormUpdate() {
    formUpdate();
    formInputLabel();
    $('[data-toggle="datepicker"]').datepicker();
    demo3.initHovers();
    demo3.initCursor();
  };
});
jQuery.event.special.touchstart = {
  setup: function setup(_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchstart", handle, {
        passive: false
      });
    } else {
      this.addEventListener("touchstart", handle, {
        passive: true
      });
    }
  }
};

function initMap() {
  var map;
  var myLatLng = {
    lat: 33.641938,
    lng: -117.7232224
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 33.641938,
      lng: -117.7232224
    },
    zoom: 17,
    fullscreenControl: false,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#111111"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#111111"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#181818"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#1b1b1b"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#2c2c2c"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#8a8a8a"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#373737"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#3c3c3c"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [{
        "color": "#4e4e4e"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#3d3d3d"
      }]
    }]
  });
  var image = new google.maps.MarkerImage('/front_path/img/map.svg', null, // size
  null, // origin
  new google.maps.Point(8, 8), // anchor (move to center of marker)
  new google.maps.Size(17, 17) // scaled size (required for Retina display icon)
  ); // then create the new marker

  var myMarker = new google.maps.Marker({
    flat: true,
    icon: image,
    title: "Evan Paul Auto Capital",
    map: map,
    optimized: false,
    position: myLatLng,
    visible: true
  });
}

var times = [];
var fps;

function refreshLoop() {
  window.requestAnimationFrame(function () {
    var now = performance.now();

    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }

    times.push(now);
    fps = times.length;
    refreshLoop();
  });
}

refreshLoop();

function formUpdate() {
  $('form').find('input, textarea').each(function () {
    var el = $(this);

    if (el.val().length > 0) {
      el.parent().addClass('completed');
    }
  });
}

function formClean() {
  $('form').find('input, textarea').each(function () {
    var el = $(this);
    el.val('');
    el.parent().removeClass('completed');
  });
  $(".focused").removeClass('focused');
}

$(".js-toggle-loader").click(function () {
  $('body').toggleClass('loaded');
});

if (typeof Array.prototype.forEach != 'function') {
  Array.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
      callback.apply(this, [this[i], i, this]);
    }
  };
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (navigator.userAgent.match(/Trident\/7\./)) {
  // if IE
  $('body').on("mousewheel", function () {
    event.preventDefault();
    var wheelDelta = event.wheelDelta;
    var currentScrollPosition = window.pageYOffset;
    window.scrollTo(0, currentScrollPosition - wheelDelta);
  });
  $('body').addClass("ie");
}