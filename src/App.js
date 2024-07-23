import { useState, useEffect } from "react";
import FamilyDetail from "./components/FamilyDetail";
import MemberDirectory from "./components/MemberDirectory";
import MembershipDetail from "./components/MembershipDetail";
import Loader from "./components/GenricComponents/Loader";

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
        <>
          <MembershipDetail />
          <MemberDirectory />
          <FamilyDetail />
        </>
      )}
    </div>
  );
}

export default App;
