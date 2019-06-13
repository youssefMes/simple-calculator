import React, { Component } from "react";
import $ from "jquery";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: "",
      firstValue: 0,
      secondValue: 0,
      result: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    if (event.target.name == "first") {
      this.setState({ firstValue: event.target.value });
      console.log(this.state.firstValue);
    } else if (event.target.name == "second") {
      this.setState({ secondValue: event.target.value });
      console.log(this.state.secondValue);
    }
  }
  Submit(e) {
    event.preventDefault();
    if (this.state.firstValue == "0" || this.state.secondValue == "") {
      alert("input/s empty !");
    } else if (this.state.operation == "") {
      alert("no operation chosen !");
    } else {
      $.ajax({
        url: "/",
        data: {
          operation: this.state.operation,
          fValue: this.state.firstValue,
          sValue: this.state.secondValue
        },
        success: (res, textStatus, jqXHR) => {
          var response = JSON.parse(res);
          this.setState({ result: response.finaleResult });
          console.log(res);
        },
        error: function(xhr, textStatus, errorThrown) {
          alert("Ajax request failed.");
        },
        dataType: "text",
        type: "POST"
      });
    }
  }
  render() {
    return (
      <div>
        <form className="form-style" onSubmit={this.Submit}>
          <input
            name="first"
            type="number"
            step="any"
            placeholder="Input 1"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="second"
            type="number"
            step="any"
            placeholder="Input 2"
            onChange={this.handleChange}
          />
          <br />
          <label>Choose an Operation</label>
          <br />
          <select
            size="4"
            onChange={e => {
              this.setState({ operation: e.target.value });
              console.log(this.state.operation);
            }}
          >
            <option value="Add">Add</option>
            <option value="Substract">Substract</option>
            <option value="Multiply">Multiply</option>
            <option value="Divide">Divide</option>
          </select>
          <br />
          <input type="submit" value="Calculate" />
          <br />
          <br />
          <input
            name="result"
            type="text"
            placeholder="Result"
            defaultValue={this.state.result}
            readOnly
          />
        </form>
        <button
          className="clr-button"
          onClick={() => {
            this.setState({ result: "" });
          }}
        >
          Clear Result
        </button>
      </div>
    );
  }
}

export default Form;
