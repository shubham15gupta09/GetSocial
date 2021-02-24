import React, { useState } from "react";
import Welcome from "./Components/Welcome";

const App = () => {

  const [initial, setinitial] = useState("");

  return (
    <div>

      <Welcome setinitial={setinitial} />

      {initial}

    </div>
  );
};

export default App;
