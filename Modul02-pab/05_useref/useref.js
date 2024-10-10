const MyApp = () => {
    const [title, setTitle] = React.useState("Learn React");

    const foo = React.useRef("Hei");
    console.log('A:', foo);

    const handleButtonClick = () => {
        console.log('B:', foo.current);
        foo.current = "Hello"; 
        console.log('C:', foo.current);

        if (title === "Learn React") {
            setTitle("Learn JavaScript");
        }
        else {
            setTitle("Learn React");
        }
    }
    const handleFooClick = () => {
        console.log('Get Foo:', foo.current);
        alert(foo.current);
    }

    return (
        <div>
            <h3>Title: {title}</h3>
            <div>
                <p><button onClick={handleButtonClick}>Change Title</button></p>
                <p><button onClick={handleFooClick}>Get Foo Value</button></p>
            </div>
        </div>
    )
}
const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
