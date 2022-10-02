import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select";
import provinces from "../components/select/province.json";

export default function Contacts() {
  const { control, handleSubmit, register } = useForm();

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
            <tr className="text-center border-b h-10">
              <td>1234567890123</td>
              <td>นาย สมชาย สมบัติ</td>
              <td>ชาย</td>
              <td>30</td>
              <td>0812345678</td>
              <td>กรุงเทพมหานคร</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
