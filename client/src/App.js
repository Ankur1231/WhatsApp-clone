//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
