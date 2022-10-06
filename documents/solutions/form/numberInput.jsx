function NumberInput(props) {
  const { register, name, required, label, errors } = props;

  return (
    <div className="flex flex-col w-1/2">
      <label>{label}</label>
      <input
        className="border px-4 py-2"
        type="number"
        {...register(name, {
          required: required,
        })}
      />
      <div className="text-red-600">{errors[name]?.message}</div>
    </div>
  );
}

export default NumberInput;
