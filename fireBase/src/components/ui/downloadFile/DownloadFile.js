import React, { Component } from "react";
import styles from "./downloadFile.module.css";

class DownloadFile extends Component {
  state = {
    image: ""
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
    const { label } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.image})`,
          backgroundSize: "cover"
        }}
        className={styles.container}
      >
        <label>
          <div className={styles.innerClickContainer}>
            <h2>{label}</h2>
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

// {
//     <input type='file' accept='image/*' onchange='openFile(event)'><br>
//     <img id='output'>
//     <script>
//       var openFile = function(event) {
//         var input = event.target;

//         var reader = new FileReader();
//         reader.onload = function(){
//           var dataURL = reader.result;
//           var output = document.getElementById('output');
//           output.src = dataURL;
//         };
//         reader.readAsDataURL(input.files[0]);
//       };
//     </script>
// }
