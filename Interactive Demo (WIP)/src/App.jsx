import Aeronexus from "./components/Aeronexus";
import CursorTip from "./components/CustComponents/CursorTip";
import UIalert from "./components/CustComponents/UIalert";
import Landing from "./components/Landing";

function App() {
  return (
      <div className="bg-gray-900 h-screen w-screen">
        <Aeronexus />
        <CursorTip />
        <UIalert />
        <Landing />
      </div>
  );
}

export default App;
