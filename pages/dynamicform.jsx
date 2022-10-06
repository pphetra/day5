import Form from "../components/form";
const definition = {
  questions: [
    {
      id: "1",
      label: "ชื่อ-สกุล",
      name: "name",
      type: "text",
      required: "this field is required",
    },
    {
      id: 2,
      label: "อายุ",
      name: "age",
      type: "number",
      required: "this field is required",
    },
  ],
};

function DynamicFormPage(props) {
  return (
    <div>
      <Form
        definition={definition}
        onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
      />
    </div>
  );
}

export default DynamicFormPage;
