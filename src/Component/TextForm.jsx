import React from "react";

function TextForm(props) {
  return (
    <div>
      <div class="form-group container">
        <label for="exampleFormControlTextarea1">{props.name}</label>
        {props.children}
        <textarea rows="8" className="form-control"></textarea>
        <div className="m-2 text-center">
          <button className="btn btn-primary">Convert To Upper Case </button>
        </div>
      </div>
    </div>
  );
}

export default TextForm;
