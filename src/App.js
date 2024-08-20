import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';

function App() {
  return (
    <div className="p-8 bg-gray-950">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


