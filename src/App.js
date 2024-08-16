import { RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';

function App() {

  return (
    <div className="m-8">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


