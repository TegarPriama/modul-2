const Counter = () => {
    // State Declaration
    const [counter, setCounter] = React.useState(0);

    const handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        setCounter(counter + val);
    }

    React.useEffect(() => {
        console.log("Ini seperti componentDidMount()");
        return () => {
            console.log("Ini seperti componentWillUnmount()");
        }
    }, []);

    React.useEffect(() => {
        console.log("Ini seperti componentDidMount() & componentDidUpdate()");
    });

    return (
        <div>
            <h1>{counter}</h1>
            <button val="+1" onClick={handleButtonClick}>Counter + 1</button>
            <button val="-1" onClick={handleButtonClick}>Counter - 1</button>
        </div>
    )
}

const MyApp = () => {
    const [showCounter, setShowCounter] = React.useState(false);

    const handleButtonClick = () => {
        setShowCounter(!showCounter);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                {showCounter ? "Hide counter" : "Show counter"}
            </button>
            {showCounter && <Counter />}
        </div>
    )
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
