import React from "react";

function Form(props) {
  const { definition, onSubmit } = props;

  return (
    <div className="p-8 w-full">
      <form>
        <div className="flex flex-col gap-8">dynamic form</div>
      </form>
    </div>
  );
}

export default Form;
