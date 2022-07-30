import {HomePage} from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Admin} from './pages/Admin';
import {AdminLog} from './pages/AdminLogIn';
import {EditProjectsPage} from './pages/EditProjectsPage';
import {AddProject} from './pages/AddProject';

export function App () {
  
  return (
    <div className="app">
      <BrowserRouter basename={'/FooCoding/my-portfolio/'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logIn" element={<AdminLog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/projects/edit/:id" element={<EditProjectsPage />} />
          <Route path="/admin/projects/add" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
