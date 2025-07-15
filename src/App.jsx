
 import Sidebar from './components/Sidebar';
import Header from './components/Header';

function AppLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="p-4">
          {/* Routes go here */}
        </div>
      </div>
    </div>
  );
}
