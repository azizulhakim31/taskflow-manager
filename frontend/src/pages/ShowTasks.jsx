import axios from "axios";
import { useState, useEffect } from "react";


const ShowTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/get-task")
            .then((res) => {
                setTasks(res.data || []);
            })
            .catch((err) => {
                console.error("Error fetching tasks:", err);
            });
    }, []);
    const handleUpdate = (taskId, currentStatus) => {
        axios.patch(`http://localhost:3000/update-task/${taskId}`, {
            completed: !currentStatus
        }).then((res) => {
            setTasks(tasks.map(task => task._id === taskId ? res.data : task));
        }).catch((error) => {
            console.error("Error updating task:", error);
        });
    };

    const handleDelete = (taskId) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            axios.delete(`http://localhost:3000/delete-task/${taskId}`).then(() => {
                setTasks(tasks.filter(task => task._id !== taskId));
            }).catch((error) => {
                console.error("Error deleting task:", error);
            });
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-6xl rounded-2xl border border-white/60 bg-violet-300 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur ring-1">
                <header className="mb-5">
                    <h1 className="m-0 text-4xl font-extrabold text-purple-900 text-center text-shadow-lg">Your Tasks</h1>
                    <div className="flex gap-6 mt-3">
                        <p className="text-green-800 leading-snug font-bold text-xl">Total task: {tasks.length}</p>
                        <p className="text-amber-800 leading-snug font-bold text-xl">|</p>
                        <p className="text-green-800 leading-snug font-bold text-xl">Completed: {tasks.filter(task => task.completed).length}</p>
                    </div>
                </header>

                {tasks.length === 0 ? (
                    <div className="text-center py-12 text-slate-500">
                        <div className="text-5xl mb-3">📝</div>
                        <p className="font-medium text-xl text-slate-600">No tasks yet</p>
                        <p className="text-sm text-slate-600">Add your first task using the form!</p>
                    </div>
                ) : (
                    <>
                        <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-linear-to-r from-slate-100 to-slate-50">
                                        <th className="px-4 py-3 text-left text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200">
                                            #
                                        </th>
                                        <th className="px-4 py-3 text-left text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200">
                                            Task Name
                                        </th>
                                        <th className="px-4 py-3 text-left text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200">
                                            Description
                                        </th>
                                        <th className="px-4 py-3 text-left text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200">
                                            Status
                                        </th>
                                        <th className="px-4 py-3 text-center text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task, index) => (
                                        <tr
                                            key={task._id || index}
                                            className="hover:bg-indigo-50/50 transition-colors duration-150 group"
                                        >
                                            <td className="px-4 py-4 border-b border-slate-100">
                                                <span className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                                    {index + 1}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 border-b border-slate-100">
                                                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors text-[18px]">
                                                    {task.title}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 border-b border-slate-100 text-[15px] max-w-xs">
                                                <p className="line-clamp-2">{task.description || '—'}</p>
                                            </td>
                                            <td className="px-4 py-4 border-b border-slate-100">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold ${task.completed
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {task.completed ? '✓ Completed' : '○ Pending'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 border-b border-slate-100">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => handleUpdate(task._id, task.completed)}
                                                        className={`cursor-pointer px-3 py-1.5 rounded-lg text-sm font-bold transition-all duration-150 ${task.completed
                                                            ? 'bg-amber-100 text-amber-700 hover:bg-amber-300'
                                                            : 'bg-green-100 text-green-700 hover:bg-green-300'
                                                            }`}
                                                    >
                                                        {task.completed ? 'Undo' : 'Complete'}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(task._id)}
                                                        className="cursor-pointer px-3 py-1.5 rounded-lg text-sm font-bold bg-red-200 text-red-700 hover:bg-red-400 transition-all duration-150"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4">
                            {tasks.map((task, index) => (
                                <div key={task._id || index} className="bg-white rounded-xl p-4 shadow">
                                    <div className="flex flex-col items-start justify-between gap-4">
                                        <div>
                                            <div className="text-xl text-slate-700">#{index + 1}</div>
                                            <div className="font-semibold text-slate-800 text-xl">{task.title}</div>
                                            <div className="text-sm text-slate-600 mt-1">{task.description || '—'}</div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold ${task.completed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                                {task.completed ? '✓ Completed' : '○ Pending'}
                                            </span>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleUpdate(task._id, task.completed)} className={`px-3 py-1 rounded text-sm font-bold transition-all duration-150 transform hover:scale-105 hover:shadow-md ${task.completed ? 'bg-amber-100 text-amber-700 hover:bg-amber-300' : 'bg-green-100 text-green-700 hover:bg-green-300'}`}>{task.completed ? 'Undo' : 'Complete'}</button>
                                                <button onClick={() => handleDelete(task._id)} className="px-3 py-1 rounded text-sm font-bold bg-red-200 text-red-700 hover:bg-red-400 hover:shadow-md transition-all duration-150 transform hover:scale-105">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div >
    );
};

export default ShowTasks;