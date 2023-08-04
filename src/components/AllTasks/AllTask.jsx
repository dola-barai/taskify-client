import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";

const AllTask = () => {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API endpoint
        axios.get('http://localhost:5000/alltasks')
            .then(response => {
                setAllTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleDelete = (task) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/alltasks/${task._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Task has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleCompleted = (task) => {
        fetch(`http://localhost:5000/alltasks/completed/${task._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task Completed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div className="m-3">
            <h1 className="text-xl font-semibold text-purple-900">All Tasks: {allTasks.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className="text-2xl text-purple-900">
                            <th>#</th>
                            <th>Task Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTasks.map((task, index) => (
                            <tr key={task._id}>
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.deadline}</td>
                                <td>
                                    {task.status === 'In progress' &&
                                        <>
                                            <span className="text-green-600 font-bold me-2">{task.status}</span>
                                            <button onClick={() => handleCompleted(task)} className="btn btn-ghost btn-sm me-2  bg-base-200  text-green-400 rounded-full"><MdFileDownloadDone></MdFileDownloadDone></button>
                                        </>
                                    }
                                    {task.status === 'Pending' &&
                                        <>
                                            <span className="text-green-600 font-bold me-2">{task.status}</span>
                                            <Link to={`/alltasks/${task._id}`}><button className="btn btn-sm "><MdFileDownloadDone></MdFileDownloadDone></button></Link>
                                        </>
                                    }
                                    {task.status === 'Completed' &&
                                        <>
                                            <span className="text-green-600 font-bold me-2">{task.status}</span>
                                        </>
                                    }
                                </td>
                                <td>
                                    <td>
                                        {task.status === 'Completed' ?
                                            <>
                                                <Link to={`/alltasks/${task._id}`}><button disabled className="btn btn-sm btn-info rounded-xl">Update</button></Link> :
                                            </>   
                                            :
                                            <>
                                              <Link to={`/alltasks/${task._id}`}><button className="btn btn-sm btn-info rounded-xl">Update</button></Link>
                                            </>
                                        }
                                        
                                    </td>
                                    <td><button onClick={() => handleDelete(task)} className="btn btn-sm btn-ghost bg-red-600  text-white rounded-3xl"><FaTrashAlt></FaTrashAlt></button></td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTask;