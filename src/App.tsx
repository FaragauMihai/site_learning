import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Tasta from "./components/Tasta";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" click={() => setAlertVisible(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
