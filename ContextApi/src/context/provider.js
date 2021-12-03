import react, { useState } from "react";
import PackageContext from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState("Not accept");

  return (
    <PackageContext.Provider
      value={{
        data: mission,
        acceptMission: () => setMission("Acceptd"),
        rejectMission: () => setMission("Reject Mission"),
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
