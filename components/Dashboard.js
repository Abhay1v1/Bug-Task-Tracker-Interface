import styled from "styled-components";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useTaskStore } from "../store/useTaskStore";

const DashboardWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export default function Dashboard() {
  const { tasks } = useTaskStore();

  return (
    <DashboardWrapper>
      <Title>Task Dashboard</Title>
      <TaskForm />
      <TaskList tasks={tasks} />
    </DashboardWrapper>
  );
}

