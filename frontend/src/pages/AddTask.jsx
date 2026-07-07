import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {

  const { register, handleSubmit, reset } = useForm();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/get-task").then((response) => {
      setTasks(response.data || []);
    }).catch((error) => {
      console.error("Error connecting to server:", error);
    });
  }, []);

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/add-task", data).then((res) => {
      setTasks([...tasks, res.data]);
      alert("Task added successfully!");
    }).catch((error) => {
      console.error("Error adding task:", error);
    });
    reset();
  };

  return (
    <div className="flex flex-col justify-center mt-25">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-white/60 bg-violet-300 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur ring-1">
          <header className="mb-4.5">
            <h1 className="m-0 text-4xl font-extrabold text-purple-900 text-center text-shadow-lg">Add Task</h1>
            <p className="mt-3 text-slate-900 font-bold leading-snug text-center">
              Start by adding a task to your workflow.            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3.5">
            <div className="grid gap-1.5">
              <label htmlFor="title" className="text-2xl font-bold text-purple-900">
                Task name
              </label>
              <input
                id="title"
                type="text"
                placeholder="Task that needs to be done"
                required
                {...register("title")}
                className="w-full rounded-xl border bg-white border-violet-400 px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="description" className="text-2xl font-bold text-purple-900">
                Details
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Add context, steps, links, or other details about the task"
                required
                {...register("description")}
                className="w-full resize-y rounded-xl border bg-white border-violet-400 px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div className="mt-1 flex gap-2.5">
              <button
                type="submit"
                className="flex-1 cursor-pointer rounded-xl border-0 bg-linear-to-br from-blue-600 to-green-600 px-3.5 py-3 font-extrabold text-white shadow-[0_10px_22px_rgba(37,99,235,0.25)]"
              >
                Add Task
              </button>

              <button
                type="button"
                onClick={() => reset()}
                className="cursor-pointer rounded-xl border border-slate-300 text-white bg-red-500 hover:bg-red-600 px-3.5 py-3 font-extrabold"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;