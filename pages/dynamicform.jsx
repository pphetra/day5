import Form from "../components/form";
const definition = {
  questions: [],
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
