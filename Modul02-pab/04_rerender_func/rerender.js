const MyApp = () => {
    const [title, setTitle] = React.useState("Learn React");
    let foo = "Hei";
    console.log('A:', foo);

    const handleButtonClick = () => {
        console.log('B:', foo);
        foo = "Hello";
        console.log('C:', foo);
        if (title === "Learn React") {
            setTitle("Learn JavaScript");
        }
        else {
            setTitle("Learn React");
        }
    }

    const handleFooClick = () => {
        console.log(foo);
        alert(foo);
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
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);