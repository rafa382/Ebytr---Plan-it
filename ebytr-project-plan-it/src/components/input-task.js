import React from "react";

class InputTask extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTask: ''
    }
  }

  setInput(event) {
    const val = event.target.value;
    this.setState({ inputTask: val });
  }

  render() {
    const { inputTask } = this.state;
    return(
      <div>
        <form>
          <label htmlFor="input-task">
            <input
              type="text"
              name="inputTask"
              value={ inputTask }
              onChange={ event => this.setInput(event) }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default InputTask;