"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _api = _interopRequireDefault(require("./services/api"));

require("./styles.css");

function App() {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      repositories = _useState2[0],
      setRepositories = _useState2[1];

  (0, _react.useEffect)(function () {
    _api["default"].get("repositories").then(function (response) {
      setRepositories(response.data);
    });
  }, []);

  function handleAddRepository() {
    return _handleAddRepository.apply(this, arguments);
  }

  function _handleAddRepository() {
    _handleAddRepository = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var response, repository;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api["default"].post("repositories", {
                id: "123",
                url: "https://github.com/josepholiveira",
                title: "Novo Reposit\xF3rio ".concat(Date.now()),
                techs: ["React", "Node.js"]
              });

            case 2:
              response = _context.sent;
              repository = response.data;
              setRepositories([].concat((0, _toConsumableArray2["default"])(repositories), [repository]));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleAddRepository.apply(this, arguments);
  }

  function handleRemoveRepository(_x) {
    return _handleRemoveRepository.apply(this, arguments);
  }

  function _handleRemoveRepository() {
    _handleRemoveRepository = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(id) {
      var response;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _api["default"]["delete"]("repositories/".concat(id));

            case 2:
              _context2.next = 4;
              return _api["default"].get("repositories");

            case 4:
              response = _context2.sent;
              setRepositories(response.data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleRemoveRepository.apply(this, arguments);
  }

  return (
    /*#__PURE__*/
    _react["default"].createElement("div", null,
    /*#__PURE__*/
    _react["default"].createElement("ul", {
      "data-testid": "repository-list"
    }, repositories.map(function (repository) {
      return (
        /*#__PURE__*/
        _react["default"].createElement("li", {
          key: repository.id
        }, repository.title,
        /*#__PURE__*/
        _react["default"].createElement("button", {
          onClick: function onClick() {
            return handleRemoveRepository(repository.id);
          }
        }, "Remover"))
      );
    })),
    /*#__PURE__*/
    _react["default"].createElement("button", {
      onClick: handleAddRepository
    }, "Adicionar"))
  );
}

var _default = App;
exports["default"] = _default;