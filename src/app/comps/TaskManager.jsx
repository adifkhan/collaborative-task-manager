import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function TaskManager({ refetch }) {
  const [tasks, setTasks] = React.useState([]);
  const router = useRouter();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/get-tasks");
        console.log(res);
        setTasks(res.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [refetch]);
  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      {tasks.map((task) => (
        <div key={task._id} className="border rounded p-4">
          <p>title: {task.title}</p>
          <p>created: {task.createdAt}</p>
          <p>title: {task.description}</p>
          <button className="btn btn-accent" onClick={() => router.push(`/tasks/${task._id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
