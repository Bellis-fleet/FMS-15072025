import FuelLog from './components/FuelLog';
 import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Alerts from './components/Alerts';
import NotificationBar from './components/NotificationBar';
const App = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    const newNotif = { id, message, type };

    setNotifications((prev) => [...prev, newNotif]);

    // Auto-remove after duration
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    addNotification('Welcome to Fleet Management System!', 'success');
  }, []);
function AppLayout() {
  return (
     <div><NotificationBar notifications={notifications} removeNotification={removeNotification} />
    <div>
      <h1>FLEET MANAGEMENT SYSTEM</h1>
   
    <div className="d-flex">
    
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <FuelLog />
            </div>
          </div>
        </div>

           </div>
        </div>
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <Alerts />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
}