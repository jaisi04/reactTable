var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CellReact = function (_React$Component) {
    _inherits(CellReact, _React$Component);

    function CellReact(props) {
        _classCallCheck(this, CellReact);

        var _this = _possibleConstructorReturn(this, (CellReact.__proto__ || Object.getPrototypeOf(CellReact)).call(this, props));

        _this.setState({
            cellData: props.value
        });
        return _this;
    }

    _createClass(CellReact, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'td',
                null,
                'this.state.cellData'
            );
        }
    }]);

    return CellReact;
}(React.Component);

var RowReact = function (_React$Component2) {
    _inherits(RowReact, _React$Component2);

    function RowReact(props) {
        _classCallCheck(this, RowReact);

        var _this2 = _possibleConstructorReturn(this, (RowReact.__proto__ || Object.getPrototypeOf(RowReact)).call(this, props));

        _this2.setState({
            rowData: props.value
        });
        return _this2;
    }

    _createClass(RowReact, [{
        key: 'renderCells',
        value: function renderCells(rowData) {
            for (i in rowData) {
                React.createElement(CellReact, { value: rowData[i] });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'tr',
                null,
                this.renderCells(this.state.rowData)
            );
        }
    }]);

    return RowReact;
}(React.Component);

var TableReact = function (_React$Component3) {
    _inherits(TableReact, _React$Component3);

    function TableReact() {
        _classCallCheck(this, TableReact);

        return _possibleConstructorReturn(this, (TableReact.__proto__ || Object.getPrototypeOf(TableReact)).call(this));
    }

    _createClass(TableReact, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            fetch('./data/table_data.json', { mode: 'no-cors' }).then(function (response) {
                return response.json();
            }).then(function (findResponse) {
                _this4.setState({
                    data: findResponse
                });
            });
        }
    }, {
        key: 'renderRows',
        value: function renderRows(data) {
            data.forEach(function (data) {
                React.createElement(RowReact, { value: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                null,
                this.renderRows(this.state.data)
            );
        }
    }]);

    return TableReact;
}(React.Component);

ReactDOM.render(React.createElement(TableReact, null), document.getElementById('table-div'));