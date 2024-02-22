import RoutesApp from "@/routes";
import { store } from "@/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutesApp />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
