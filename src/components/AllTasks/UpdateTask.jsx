import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const tasks = useLoaderData();
    
    const handleUpdateTask = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        const deadline = form.deadline.value;
        const updatedTask = {
            title: title,
            description: description,
            status: status,
            deadline: deadline
        }
        console.log(updatedTask);

        // send data to the server
        fetch(`https://taskify-server-delta.vercel.app/alltasks/${tasks._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div>
            <div className="m-10">
                <h2 className="text-4xl font-bold text-center mb-5">Update a Task</h2>
                <form onSubmit={handleUpdateTask}>
                    <div className="grid grid-cols-1 w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue={tasks.title} name="title" placeholder="Task Title" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" defaultValue="" name="description" placeholder="Description" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" placeholder="deadline" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name="status" placeholder="Status" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Update Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;