import styled from "styled-components";
import { useTaskStore } from "../store/useTaskStore";

const ListWrapper = styled.div`
  margin-top: 20px;
`;

const TaskItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TaskTitle = styled.h3`
  margin: 0;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #c82333;
  }
`;

export default function TaskList({ tasks }) {
  const { deleteTask } = useTaskStore();

  return (
    <ListWrapper>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <TaskItem key={index}>
          <TaskTitle>{task.title}</TaskTitle>
          <p>{task.description}</p>
          <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
        </TaskItem>
      ))}
    </ListWrapper>
  );
}
