import { Toaster } from "react-hot-toast";
import FormPage from "./pages/form";

function App() {
  return (
    <div className="App">
      <FormPage />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
