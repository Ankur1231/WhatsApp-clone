//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <AccountProvider>
      <Messenger />
    </AccountProvider>
  );
}

export default App;
