import React, { lazy, Suspense } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactLoading from "react-loading";

const Login = lazy(() => wait(500).then(()=> import('./Components/Auth/Login')));
const Register = lazy(() => wait(500).then(()=> import('./Components/Auth/Register')));
const NavBar = lazy(() => wait(500).then(()=> import('./Components/Header/NavBar')));
const Pratice = lazy(() => wait(500).then(()=> import('./Components/Pages/Pratice')));

function App() {
  const handleToast = () => {
    toast.success('Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce, 
    });
    toast.warning('Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce, 
    });
    toast.error('Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce, 
    });
  }
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
       <BrowserRouter>
        <Suspense fallback={ 
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spinningBubbles" color="#0000FF" />
        </div>
        }>
          <Routes>
            <Route path='/' element={<NavBar/>}>
             <Route path='/' element={<Pratice/>}/>
               {/* <Route path='/kanban' element={<Kanban/>}/>
              <Route path='/members' element={<Members/>}/>
              <Route path='/addmember/:ccode' element={<AddMember/>}/>
              <Route path='/ccode' element={<CCode/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/msg' element={<ViewMessages/>}/> */}
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
      
    </>   
  );
}

export default App;



function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
