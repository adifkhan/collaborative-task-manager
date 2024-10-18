"use client";
import axios from "axios";
import React from "react";

export default function Home() {
  const [create, setCreate] = React.useState(false);
  const [taskData, setTaskData] = React.useState({ title: "", description: "" });

  const createTask = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/create-task", taskData);
      setTaskData({ title: "", description: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center py-5">
        {create ? (
          <div>
            <h2 className="text-center mb-5 font-bold text-2xl">Sign In</h2>
            <form>
              <div className="my-1 flex flex-col">
                <label htmlFor="">Task Title</label>
                <input
                  type="text"
                  placeholder="Enter Task Title"
                  required
                  value={taskData.title}
                  className="input input-bordered w-full max-w-xs text-white"
                  onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                />
              </div>
              <div className="my-1 flex flex-col gap-2">
                <label htmlFor="">Description</label>
                <textarea
                  className="textarea text-white"
                  required
                  value={taskData.description}
                  placeholder="Enter Description"
                  onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                ></textarea>
              </div>
              <div>
                <button className="btn btn-accent cursor-pointer mt-4" onClick={createTask}>
                  Create
                </button>
                <button
                  className="btn btn-neutral cursor-pointer mt-4"
                  onClick={() => setCreate(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button className="btn btn-accent cursor-pointer mt-4" onClick={() => setCreate(true)}>
            ADD TASK
          </button>
        )}
      </div>
    </div>
  );
}
