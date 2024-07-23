import { useState, useEffect } from "react";
import Loader from "./components/GenricComponents/Loader";
import FormView from "./components/views";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className={"parent_loader__container"}>
          <Loader />
        </div>
      ) : (
        <FormView />
      )}
    </div>
  );
}

export default App;
