import Calculator from "./containers/Calculator/";
import ContextProvider from "./context";

function App() {
  return (
    <ContextProvider>
      <Calculator />;
    </ContextProvider>
  );
}

export default App;
