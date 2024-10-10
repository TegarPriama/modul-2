class MyApp extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { 
            input: "" 
        };
    }

    handleInputChange = (event) => {
        this.setState({ 
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Judul: {this.state.input}</h1>
                <input type="text" onChange={this.handleInputChange} />
            </div>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
