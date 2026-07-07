// import taskImage2 from '../assets/taskImage2.jpg';
import taskImage2 from '../image/taskImage2.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex-1 min-h-full flex flex-col items-center justify-center text-center'
        >
            <h1 className="text-3xl sm:text-4xl font-bold text-center p-4 rounded mt-3">
                Manage your daily tasks efficiently with TaskFlow!
            </h1>
            <h3 className='text-xl text-gray-600'>
                A smart solution to plan, track, and complete your work on time
            </h3>
            <div className="my-5">
                <NavLink to="/addTask" className="inline-block px-6 py-3 bg-purple-600 text-white font-bold text-lg rounded shadow">Add Task</NavLink>
            </div>
            <div className="flex items-center justify-center my-6">
                <img src={taskImage2} alt="task" className="w-40 sm:w-56 md:w-64 lg:w-80 h-auto object-contain rounded shadow" />
            </div>
        </div>
    );
};

export default Home;