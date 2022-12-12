import React from "react";
class Reactref extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textref = React.createRef();
      this.focusTextInput = 
      this.focusTextInput.bind(this);
    }
     focusTextInput() {
        this.textref.current.focus();
        alert(this.textref.current.value)
    }
     render() {
          return (
        <div>
  <input type="text"  ref={this.textref} />
<input type="button" value="Focus the text input"
            onClick={this.focusTextInput} />
        </div>
      );
    }
  }
  export default Reactref;