import Swal from "sweetalert2";

const AddTask = () => {
    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const status = form.status.value;
        const addTask = {
            title: title,
            description: description,
            deadline: deadline,
            status: status,
        }
        console.log(addTask);

        fetch('https://taskify-server-delta.vercel.app/alltasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Add a Task successfully',
                        'success'
                    )

                }
            })
    }
    return (
        <div className="bg-sky-200 rounded-xl"> 
            <div className="m-10">
                <h2 className="text-4xl font-bold text-center mb-5">Add a Task</h2>
                <form onSubmit={handleAddTask}>
                    <div className="grid grid-cols-1 w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue='' name="title" placeholder="Task Title" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" defaultValue='' name="description" placeholder="Description" className="input input-bordered" />
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
                        <button className="btn btn-primary">Add A Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;