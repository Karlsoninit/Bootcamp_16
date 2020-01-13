import React from "react";
import Loader from "react-loader-spinner";

const activateSpinner = () => ({
  activate: {
    position: "absolute",
    top: "50%",
    left: " 50%",
    transform: "translate(-50%, -50%)"
  }
});

const Spinner = ({ chooseLoader }) => {
  console.log("chooseLoader", chooseLoader);

  const styles = activateSpinner();

  let content = (
    <Loader
      type="Watch"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={100000} //3 secs
    />
  );

  if (chooseLoader === "post") {
    content = (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={100000} //3 secs
      />
    );
  }

  return <div style={styles.activate}>{content}</div>;
};

export default Spinner;
