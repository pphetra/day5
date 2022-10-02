import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

export default function SelectFormPage() {
  /* ใช้ control ของ useForm ในการเชื่อมต่อกับ react-select */
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="p-8">
      {/* ใช้ Controller wrap Select component */}
      <Select />
      <button
        className="border bg-green-500 text-white px-4 py-2 rounded mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
