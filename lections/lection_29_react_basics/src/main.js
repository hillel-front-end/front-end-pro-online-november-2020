const NAMES = ["Vasya", "Katya", "Petya", "Kiril", "Galya", "Savelii", "Lisa", "Ivan", "Aleksandra"];
const NAMES2 = ["Vasya", "Lisa", "Ivan", "Aleksandra"];

const isTrue = false;
const failClass = 'fail';
const x = 3;



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
const data = {
    x: 10,
    y: 20
}
// Properties -> props
function HelloFR(props) {
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
class RenderFriends extends React.Component {
    constructor(props){
        super(props);

        // create state
        // this.state = {
        //     x: 10,
        //     y: 50,
        // };

        this.state = {
            // localFriends: props.friends.slice()
            localFriends: [...props.friends]
        };

        // update state
        // setTimeout(() => {
        //     this.setState({
        //         x: 90,
        //     });
        // }, 1000)

        setInterval(() => {
            console.log('WHAAAT');
            // this.state.localFriends.pop();
            this.setState({
                localFriends: this.state.localFriends.slice(0, -1)
            });
        }, 1000);
    }
    render() {
        if (this.state.localFriends.length === 0) {
            return <h3>Empty</h3>;
        }
        return <ul className="list-container">
            {/* <li>{this.state.x} === {this.state.y}</li> */}
            {this.state.localFriends.map((item, index) => <li key={`pr_${index}`}>{item}</li>)}
        </ul>;
    }
}

// React - State Intro



const root = <div>
    Hello
    <hr />
    <HelloFR 
        asdasdasdas="hello world"
        test="false"
        test-real={false}
        list={NAMES}
        exact 
        path="/"
    />
    <hr />
    <RenderFriends friends={NAMES} />
    <hr />
    <RenderFriends friends={NAMES2} />
    <hr />
    {/* <RenderFriends /> */}
</div>;

/*
    <HelloFR test="value" x="1" /> -> div.append( HelloFR({ test: 'value', x: 1 }) );
*/



ReactDOM.render(
    root,
    document.getElementById('root-elem')
);