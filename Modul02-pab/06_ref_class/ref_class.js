class MyApp extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "Learn React"
        };

        this.foo = "Hei";
        console.log('A:', this.foo);
    }


    handleButtonClick = () => {
        console.log('B:', this.foo);
        this.foo = "Hello"; 
        console.log('C:', this.foo);

        if (this.state.title === "Learn React") {
            this.setState({ title: "Learn JavaScript" });
        }
        else {
            this.setState({ title: "Learn React" });
        }
    }

    handleFooClick = () => {
        console.log('Get Foo:', this.foo);
        alert(this.foo);
    }

    render() {
        return (
            <div>
                <h3>Title: {this.state.title}</h3>
                <div>
                    <p><button onClick={this.handleButtonClick}>Change Title</button></p>
                    <p><button onClick={this.handleFooClick}>Get Foo Value</button></p>
                </div>
            </div>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
