import React, { Component } from "react";
import styles from "./downloadFile.module.css";

class DownloadFile extends Component {
  state = {
    image: "",
    x: this.props.change
  };

  downloadImage = event => {
    let reader = new FileReader();
    reader.onload = () => {
      let dataURL = reader.result;
      console.log(dataURL);
      this.setState({
        image: dataURL
      });

      this.props.getPhoto(dataURL);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    const { label, change } = this.props;
    const { image } = this.state;
    console.log("prooops", change);
    return (
      <div
        style={{
          backgroundImage: `url(${!change ? this.state.image : ""})`,
          backgroundSize: "cover"
        }}
        className={styles.container}
      >
        <label>
          <div className={styles.innerClickContainer}>
            <h2>{!image ? label : ""}</h2>
            {change ? <h2>{label}</h2> : ""}
            <input
              onChange={this.downloadImage}
              className={styles.input}
              type="file"
            />
          </div>
        </label>
      </div>
    );
  }
}

export default DownloadFile;
