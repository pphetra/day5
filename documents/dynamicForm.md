## Dynamic Form

### Question definition

เริ่มจาก form แบบง่ายสุดก่อน คือมีหน้าเดียว

```json
{
  "questions": [
    {
      "id": "1",
      "label": "ชื่อ-สกุล",
      "name": "name",
      "type": "text",
      "required": "this field is required"
    },
    {
      "id": 2,
      "label": "อายุ",
      "name": "age",
      "type": "number",
      "required": "this field is required"
    }
  ]
}
```

สร้าง file /pages/dynamicform.jsx

```jsx
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
      <Form definition={definition} onSubmit={(data) => alert(data)} />
    </div>
  );
}

export default DynamicFormPage;
```

สร้าง file /components/form/index.tsx

```jsx
import React from "react";

function Form(props) {
  const { definition, onSubmit } = props;
  return (
    <div className="p-8 w-full">
      <form></form>
    </div>
  );
}

export default Form;
```

เราจะเริ่ม render question ด้วย array map function

```jsx
<form>
  {definition.questions.map((question) => (
    <div>{question.label}</div>
  ))}
</form>
```

เรียกใช้ react-hook-form

```javascript
// react-hook-form
const {
  register,
  control,
  handleSubmit,
  formState: { errors },
} = useForm();
```

ร้อย onSubmit

```javascript
<form onSubmit={handleSubmit(onSubmit)}>
  {definition.questions.map((question) => (
    <div>{question.label}</div>
  ))}
</form>
```

สร้าง TextInput component ที่ /components/form/textInput.tsx

```jsx
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
```

สร้าง NumberInput component ที่ /components/form/numberInput.tsx

```jsx
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
```

ใส่ if statement เพื่อเลือก render component ให้ตรงกับ type ของ question

```jsx
{
  definition.questions.map((question) => {
    if (question.type === "text") {
      return (
        <TextInput
          register={register}
          label={question.label}
          name={question.name}
          required={question.required}
          errors={errors}
        />
      );
    }
    return (
      <div>
        unimplement question type {question.type} for {question.label}
      </div>
    );
  });
}
```

NumberInput

```jsx
if (question...) {
  ...
} else if (question.type === "number") {
  return (
    <NumberInput
      register={register}
      label={question.label}
      name={question.name}
      required={question.required}
      errors={errors}
    />
  );
}

```

เพิ่มปุ่ม submit ใน components/form/index.tsx

```jsx
<button
  type="submit"
  className="bg-green-500 text-white px-8 py-2 rounded mt-4"
>
  Save
</button>
```

ลองเพิ่ม single choices field
เริ่มจาก definition

```jsx
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
    {
      id: 3,
      label: "อาชีพ",
      name: "occupation",
      type: "singlechoices",
      required: "this field is required",
      choices: [
        {
          label: "ราชการ",
          value: "ราชการ",
        },
        {
          label: "เอกชน",
          value: "เอกชน",
        },
      ],
    },
  ],
};
```

สร้าง file /components/form/singleChoices.jsx

```jsx
function singlechoices(props) {
  return (
    <div>
      <label>{props.label}</label>
    </div>
  );
}

export default singlechoices;
```

แก้ไข index.jsx

```jsx
else if (question.type === "singlechoices") {
  return (
    <SingleChoices
      key={question.id}
      register={register}
      label={question.label}
      name={question.name}
      required={question.required}
      errors={errors}
    />
  );
}

```

render choices

```jsx
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
```

เพิ่ม multiplechoices definition

```jsx
    {
      id: 4,
      label: "โรคประจำตัว",
      name: "ncd",
      type: "multiplechoices",
      required: "this field is required",
      choices: [
        {
          label: "ความดันโลหิตสูง",
          value: "ความดันโลหิตสูง",
        },
        {
          label: "เบาหวาน",
          value: "เบาหวาน",
        },
        {
          label: "ไขมันในเลือดสูง",
          value: "ไขมันในเลือดสูง",
        },
      ],
    },
```

สร้าง file /components/form/multipleChoices.jsx

```jsx
function MultipleChoices(props) {
  return (
    <div className="flex flex-col w-1/2">
      <label>{props.label}</label>
      <div className="flex flex-col gap-3">
        {props.choices.map((choice, index) => {
          return (
            <div key={index} className="">
              <input
                className="px-4 py-2"
                type="checkbox"
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

export default MultipleChoices;
```

แก้ไข if statement ใน form/index.jsx

```jsx
} else if (question.type === "multiplechoices") {
  return (
    <MultipleChoices
      key={question.id}
      register={register}
      label={question.label}
      name={question.name}
      required={question.required}
      errors={errors}
      choices={question.choices}
    />
  );
}
```

## feature display when

เพิ่ม TextField ที่จะแสดงผลต่อเมื่อมีการเลือกอาชีพเป็นรับราชการ

```jsx
{
  id: 3.5,
  label: "หน่วยงานทีสังกัด",
  name: "department",
  type: "text",
  required: "this field is required",
  displayWhen: {
    field: "occupation",
    operator: "==",
    value: "ราชการ",
  },
},
```

แก้ไข form/index.jsx ให้ render field ต่อเมื่อเงื่อนไขเป็นจริง

```jsx
if (question.displayWhen) {
  const displayWhen = question.displayWhen;
  const targetValue = watch(displayWhen.field);
  if (displayWhen.operator === "==") {
    console.log(targetValue, displayWhen.value);
    if (targetValue != displayWhen.value) {
      return null;
    }
  }
}
```
