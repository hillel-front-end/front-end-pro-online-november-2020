var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NAMES = ["Vasya", "Katya", "Petya", "Kiril", "Galya", "Savelii", "Lisa", "Ivan", "Aleksandra"];
var NAMES2 = ["Vasya", "Lisa", "Ivan", "Aleksandra"];

var isTrue = false;
var failClass = 'fail';
var x = 3;

// JSX - Element
// const root = <div>
//     <ul>
//         {
//             NAMES.map(item => <li>{item}</li>)
//         }
//     </ul>
//     {isTrue ? 
//         <span>Optional Text</span> : 
//         <span className={failClass}>False Text</span>
//     }
// </div>;


// React - Component (only function)
var data = {
    x: 10,
    y: 20
    // Properties -> props
};function HelloFR(props) {
    console.log(props);
    return 'Hello, I"m Component ' + data.x;
}

// Functional components
// const RenderFriends = props => {
//     if (!props.friends || props.friends.length === 0) {
//         return null;
//     }
//     return <ul className="list-container">
//         {props.friends.map(item => <li>{item}</li>)}
//     </ul>;
// }

// Class components

var RenderFriends = function (_React$Component) {
    _inherits(RenderFriends, _React$Component);

    function RenderFriends(props) {
        _classCallCheck(this, RenderFriends);

        // create state
        // this.state = {
        //     x: 10,
        //     y: 50,
        // };

        var _this = _possibleConstructorReturn(this, (RenderFriends.__proto__ || Object.getPrototypeOf(RenderFriends)).call(this, props));

        _this.state = {
            // localFriends: props.friends.slice()
            localFriends: [].concat(_toConsumableArray(props.friends))
        };

        // update state
        // setTimeout(() => {
        //     this.setState({
        //         x: 90,
        //     });
        // }, 1000)

        setInterval(function () {
            console.log('WHAAAT');
            // this.state.localFriends.pop();
            _this.setState({
                localFriends: _this.state.localFriends.slice(0, -1)
            });
        }, 1000);
        return _this;
    }

    _createClass(RenderFriends, [{
        key: "render",
        value: function render() {
            if (this.state.localFriends.length === 0) {
                return React.createElement(
                    "h3",
                    null,
                    "Empty"
                );
            }
            return React.createElement(
                "ul",
                { className: "list-container" },
                this.state.localFriends.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: "pr_" + index },
                        item
                    );
                })
            );
        }
    }]);

    return RenderFriends;
}(React.Component);

// React - State Intro


var root = React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("hr", null),
    React.createElement(HelloFR, {
        asdasdasdas: "hello world",
        test: "false",
        "test-real": false,
        list: NAMES,
        exact: true,
        path: "/"
    }),
    React.createElement("hr", null),
    React.createElement(RenderFriends, { friends: NAMES }),
    React.createElement("hr", null),
    React.createElement(RenderFriends, { friends: NAMES2 }),
    React.createElement("hr", null)
);

/*
    <HelloFR test="value" x="1" /> -> div.append( HelloFR({ test: 'value', x: 1 }) );
*/

ReactDOM.render(root, document.getElementById('root-elem'));