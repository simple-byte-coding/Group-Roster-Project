import {useState, useEffect} from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("https://localhost:3000/message")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    });

    return (
        <div className="app">
            <header>
                <nav>
                </nav>
            </header>
      
            <main>
                <h1>{message}</h1>
            </main>
        </div>
  );
}

export default App;