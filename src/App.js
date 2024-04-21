
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';
import './App.css'
import axios from "axios";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";

import myContext from "./component/ContextUser/Context" ;

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./component/page/404";
import AboutPage from "./component/page/about";
import BlogPage from "./component/page/blog";
import BlogSingle from "./component/page/blog-single";
import CartPage from "./component/page/cart-page";
import ContactPage from "./component/page/contact";



//import Home from "./component/page/home";
import InstructorPage from "./component/page/instructor";
import SearchNone from "./component/page/search-none";
import SearchPage from "./component/page/search-page";
import ShopPage from "./component/page/shop";
import ShopDetails from "./component/page/shop-single";

import TeamPage from "./component/page/team";
import TeamSingle from "./component/page/team-single";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
//
import CircleLoader from "react-spinners/CircleLoader";
import { lazy,Suspense,useEffect,useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = lazy(async()=>import("./component/page/login"));
const SignupPage = lazy(async()=>import("./component/page/signup"));
const Home=lazy(async()=>import("./component/page/home"));
const CoursePage=lazy(async()=>import("./component/page/course"));
const CourseSingle=lazy(async()=>import("./component/page/course-single"));
const ForgetPass = lazy(async () => import("./component/page/forgetpass"));

function App() {
	//créatin d'un contexte pur connaitre s'il ya un user connecté ou non:

	const [context, setContext] = useState({
    connectedUser: {},
    loginRegister: true,
    response: false,
  });

	//authentification token :

	useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("Arzaaksession"));
		if (token) {
      // Configurez Axios pour inclure automatiquement le token dans les headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      //

      axios
        .get(`http://localhost:4000/users/authentification-token`)
        .then((res) => {
          console.log(res);
          setContext({
            connectedUser: res.data.user,
            loginRegister: false,
            response: true,
          });
        })
        .catch((err) => {
          console.log(err.response);
          //erreur serveur:
          if (err.response.status === 500) {
            toast.error(err.response.data.msg);
            setContext({
              connectedUser: {},
              loginRegister: true,
              response: false,
            });
          } else {
            setContext({
              connectedUser: {},
              loginRegister: true,
              response: true,
            });
          }
        });
    } else {
			axios
        .get(`http://localhost:4000/loginSuccessGoogle`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
					 setContext({
               connectedUser: res.data.user,
               loginRegister: false,
               response: true,
             });
         localStorage.setItem("Arzaaksession", JSON.stringify(res.data.token));
        })
        .catch((err) => {
          console.log(err);
					 setContext({
             connectedUser: {},
             loginRegister: true,
             response: true,
           });
        });
			
		}
    

  },[])


	//
	return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "13px",fontWeight:'bold' }}
        theme="light"
      />
      <BrowserRouter>
        <myContext.Provider value={{ context, setContext }}>
          <ScrollToTop />
          <Header />
          <div style={{ minHeight: "100vh" }}>
            <Suspense
              fallback={
                <div className="text-center">
                  <CircleLoader
                    size={350}
                    color="#f16126"
                    cssOverride={{
                      marginTop: "230px",
                      display: "inline-block",
                    }}
                  ></CircleLoader>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="course" element={<CoursePage />} />
                <Route path="/course/:id" element={<CourseSingle />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog-single" element={<BlogSingle />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="team-single" element={<TeamSingle />} />
                <Route path="instructor" element={<InstructorPage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="shop-single" element={<ShopDetails />} />
                <Route path="cart-page" element={<CartPage />} />
                <Route path="search-page" element={<SearchPage />} />
                <Route path="search-none" element={<SearchNone />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="forgetpass" element={<ForgetPass />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
