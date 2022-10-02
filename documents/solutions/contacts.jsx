import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select";
import provinces from "../components/select/province.json";

export default function Contacts() {
  const { control, handleSubmit, register } = useForm();
  const { fields, append, prepent, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "contacts",
    }
  );

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <div className="p-8">
      <h1>Case Id: 123232</h1>
      <h2 className="text-3xl font-bold">Contacts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-center h-12">
              <td className="">เลขบัตรประชาชน</td>
              <td>ชื่อสกุล</td>
              <td>เพศ</td>
              <td>อายุ</td>
              <td>เบอร์โทร</td>
              <td>จังหวัด</td>
            </tr>
          </thead>
          <tbody>
            {fields.map((item, index) => {
              return (
                <tr key={item.id} className="text-center border-b h-10">
                  <td>
                    <input
                      className="border rounded w-full"
                      type="text"
                      {...register(`contacts.${index}.nid`)}
                    />
                  </td>
                  <td>
                    <input
                      className="border rounded w-full"
                      type="text"
                      {...register(`contacts.${index}.name`)}
                    />
                  </td>
                  <td>
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="radio"
                        id={`${index}.male`}
                        value="M"
                        {...register(`contacts.${index}.gender`)}
                      />
                      <label htmlFor={`${index}.male`}>ชาย</label>
                      <input
                        type="radio"
                        id={`${index}.female`}
                        value="F"
                        {...register(`contacts.${index}.gender`)}
                      />
                      <label htmlFor={`${index}.female`}>หญิง</label>
                    </div>
                  </td>
                  <td>
                    <input
                      className="border rounded w-full"
                      type="number"
                      {...register(`contacts.${index}.age`)}
                    />
                  </td>
                  <td>
                    <input
                      className="border rounded w-full"
                      type="text"
                      {...register(`contacts.${index}.telephone`)}
                    />
                  </td>
                  <td>
                    <Controller
                      name={`contacts.${index}.province`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={provinces}
                          getOptionLabel={(option) => option.PROVINCE_NAME}
                          getOptionValue={(option) => option.PROVINCE_CODE}
                        />
                      )}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="border bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => {
            append({
              nid: "",
              name: "",
              age: "",
              telephone: "",
              province: "",
              gender: "M",
            });
          }}
        >
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
