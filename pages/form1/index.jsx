import { useForm } from "react-hook-form";

export default function Form1Page() {
  // use react-hook-form

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl">Register</h1>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="border bg-gray-50 w-1/2 px-4 py-2"
            type="text"
            id="name"
            name="name"
          />
          <div className="text-red-500 text-sm italic">error</div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border bg-gray-50 w-1/2 px-4 py-2"
            type="email"
            id="email"
            name="email"
          />
          <div className="text-red-500 text-sm italic">error</div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border bg-gray-50 w-1/2 px-4 py-2"
            type="password"
            id="password"
            name="password"
          />
          <div className="text-red-500 text-sm italic">error</div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="border bg-gray-50 w-1/2 px-4 py-2"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <div className="text-red-500 text-sm italic">error</div>
        </div>

        <button
          type="submit"
          className="border rounded text-white bg-green-600 w-1/2 p-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
