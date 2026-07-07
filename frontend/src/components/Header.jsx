import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="top-0 left-0 right-0 flex [box-shadow:0px_4px_16px_rgba(17,17,26,0.1),0px_8px_32px_rgba(17,17,26,0.05)] py-4 px-4 sm:px-6 min-h-18.75 tracking-wide relative z-50 bg-violet-600">
            <div className="flex flex-wrap items-center gap-5 w-full max-w-7xl mx-auto">
                <div className="h-14 linear-to-t from-sky-500 to-indigo-500">
                    <NavLink to="/" onClick={(e)=>e.preventDefault()}><h2 className='font-bold text-white text-4xl'>TaskFLow</h2>
                    </NavLink>

                </div>
                {/* Desktop menu */}
                <div className="hidden lg:flex lg:ml-auto">
                    <ul className="lg:flex gap-8">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold text-xl underline underline-offset-4 decoration-1 decoration-white" : "hover:text-white text-yellow-500 font-bold text-xl"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addTask" className={({ isActive }) => isActive ? "text-white font-bold text-xl underline underline-offset-4 decoration-1 decoration-white" : "hover:text-white text-yellow-500 font-bold text-xl"}>Add Task</NavLink>
                        </li>
                        <li>
                            <NavLink to="/showTasks" className={({ isActive }) => isActive ? "text-white font-bold text-xl underline underline-offset-4 decoration-1 decoration-white" : "hover:text-white text-yellow-500 font-bold block text-xl"}>Show Tasks</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile toggler fixed at top-right on small screens */}
                <div className="lg:hidden fixed top-4 right-4 z-50">
                    <button onClick={() => setOpen(true)} aria-label="Open menu" className="cursor-pointer bg-transparent p-2 rounded-md shadow-sm">
                        <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu overlay/panel */}
                {open && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div className="fixed inset-0 bg-black opacity-40" onClick={() => setOpen(false)} />
                        <nav className="fixed left-0 top-0 bottom-0 w-3/4 max-w-xs bg-sky-200 p-6 overflow-auto">
                            <div className="flex items-center justify-between mb-6">
                                <a href="#" onClick={(e)=>e.preventDefault()}></a>
                                <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center border border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                                        <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                                        <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                            <ul className="space-y-4">
                                <li>
                                    <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-500 font-bold block text-2xl" : "text-slate-900 font-bold block text-xl"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/addTask" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-500 font-bold block text-2xl" : "text-slate-900 font-bold block text-xl"}>Add Task</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/showTasks" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-500 font-bold block text-2xl" : "text-slate-900 font-bold block text-xl"}>Show Tasks</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
                
            </div>
        </header>

    );
};

export default Header;