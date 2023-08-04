import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
    const task = useLoaderData();
    
    const { _id, title, description, status, deadline } = task;
    return (
        <div>
            <div className="m-10">
                <h2 className="text-4xl font-bold text-center mb-5">Update a Task</h2>
                <form>
                    <div className="grid grid-cols-1 w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue={title} name="title" placeholder="Task Title" className="input input-bordered" />
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
                        <button className="btn btn-warning">Add A Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;