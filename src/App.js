import React, { useState, useEffect } from "react"; // Importing React hooks and useEffect from react package
import { IoIosCheckmarkCircle } from "react-icons/io"; // Importing icon from react-icons/io package
import { MdDeleteForever } from "react-icons/md"; // Importing icon from react-icons/md package
import { FiCircle } from "react-icons/fi"; // Importing icon from react-icons/fi package
import Practice from "./components/Practice";
import Sachika from "./components/Sachika";

const App = () => {

  return (
    <div className="app-container">

{/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}
{/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}

<Practice></Practice>
      <Practice></Practice>
    <Sachika></Sachika>

    </div>
  );
}

export default App;