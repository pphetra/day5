function TodoExcercise(props) {
  return (
    <div id="todo" className="p-8 text-center">
      <h1 className="text-4xl">TodoMatic</h1>
      <form className="m-8 bg-yellow-100">
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg ">
            What needs to be done?
          </label>
        </h2>
        <input
          className="border rounded p-2 m-2 b-gray-300 w-1/2"
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
        />
        <button
          type="submit"
          className="w-24 py-2 rounded border bg-blue-400 text-white"
        >
          Add
        </button>
      </form>
      <div className="m-8 ">
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list"
          className="p-4  w-2/3 m-auto list-none "
          aria-labelledby="list-heading"
        >
          <li className="border rounded flex flex-row p-4 my-2 b-blue-50 bg-blue-100 justify-between items-center">
            <div className="px-8 flex flex-row gap-4 items-center">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label className="text-xl" htmlFor="todo-0">
                Eat
              </label>
            </div>
            <div className="flex flex-row gap-4 text-right">
              <button
                type="button"
                className="border rounded bg-red-400 text-white w-32 py-2"
              >
                Edit <span className="visually-hidden">Eat</span>
              </button>
              <button
                type="button"
                className="border rounded bg-gray-50 text-black w-32 py-2"
              >
                Delete <span className="visually-hidden">Eat</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ยังใช้งานไม่ได้ เพราะยังขาดส่วนที่สำคัญไปอยู่
