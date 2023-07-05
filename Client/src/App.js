
import MasterComponent from './components/MasterComponent';
//import LoginLogout from './components/LoginLogout';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<MasterComponent />}></Route>
          <Route path='/home' element={<MasterComponent />}></Route>
          { <Route path='/login' element={<LoginLogout />}></Route> }
        </Routes>
      </BrowserRouter> */}
      <MasterComponent />
    </div>
  );
}

export default App;

  