import React from "react";
import { useForm } from "react-hook-form";
import NumberInput from "./numberInput";
import TextInput from "./textInput";
import SingleChoices from "./singleChoices";
import MultipleChoices from "./multiplechoices";

function Form(props) {
  const { definition, onSubmit } = props;

  // react-hook-form
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="p-8 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          {definition.questions.map((question, index) => {
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

            if (question.type === "text") {
              return (
                <TextInput
                  key={question.id}
                  register={register}
                  label={question.label}
                  name={question.name}
                  required={question.required}
                  errors={errors}
                />
              );
            } else if (question.type === "number") {
              return (
                <NumberInput
                  key={question.id}
                  register={register}
                  label={question.label}
                  name={question.name}
                  required={question.required}
                  errors={errors}
                />
              );
            } else if (question.type === "singlechoices") {
              return (
                <SingleChoices
                  key={question.id}
                  register={register}
                  label={question.label}
                  name={question.name}
                  required={question.required}
                  errors={errors}
                  choices={question.choices}
                />
              );
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
            return (
              <div key={index}>
                unimplement question type {question.type} for {question.label}
              </div>
            );
          })}
          <button
            type="submit"
            className="bg-green-500 text-white px-8 py-2 rounded mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
