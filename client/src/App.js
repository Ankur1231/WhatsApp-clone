//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </TemplateProvider>
  );
}

export default App;
