import axios from 'axios';
import { Employee } from './types';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Use your JSON Server URL
});

export const fetchEmployees = () => api.get<Employee[]>('/employees');
export const addEmployeeApi = (employee: Employee) => api.post<Employee>('/employees', employee);
export const updateEmployeeApi = (employee: Employee) => api.put<Employee>(`/employees/${employee.id}`, employee);
export const deleteEmployeeApi = (id: number) => api.delete(`/employees/${id}`);
