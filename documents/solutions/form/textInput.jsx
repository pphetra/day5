function TextInput(props) {
  const { register, name, required, label, errors } = props;
  return (
    <div className="flex flex-col w-1/2">
      <label>{label}</label>
      <input
        type="text"
        className="border px-4 py-2"
        {...register(name, {
          required: required,
        })}
      />
      <div className="text-red-600">{errors[name]?.message}</div>
    </div>
  );
}

export default TextInput;
