import React from "react";

export default function Alert(props) {
  return (
    //' props.alert && '- agar null h to aage waali cheez nai milegi anmd agr null nai h to vo execute ho jaayegi, basically if else statement ki agar props.alert null to ye krop warna rhene do
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>
    )
  );
}
