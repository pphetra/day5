function singlechoices(props) {
  return (
    <div className="flex flex-col w-1/2">
      <label>{props.label}</label>
      <div className="flex flex-col gap-3">
        {props.choices.map((choice, index) => {
          return (
            <div key={index} className="">
              <input
                className="px-4 py-2"
                type="radio"
                value={choice.value}
                id={choice.value}
                {...props.register(props.name, {
                  required: props.required,
                })}
              />
              <label className="ml-4" htmlFor={choice.value}>
                {choice.label}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-red-600">{props.errors[props.name]?.message}</div>
    </div>
  );
}

export default singlechoices;
