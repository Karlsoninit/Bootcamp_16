import React, { Component } from "react";

const defaultStyles = color => ({
  container: {
    border: `1px solid ${color}`,
    padding: 50
  }
});

const borderHOC = prev => BaseComponent => {
  console.log("prev ---", prev);
  return class BorderHOC extends Component {
    render() {
      const styles = defaultStyles(this.props.isOpen ? "green" : "red");
      console.log("rpoooops", this.props);
      return (
        <div style={styles.container}>
          <BaseComponent {...this.props} {...prev} />
        </div>
      );
    }
  };
};

export default borderHOC;
