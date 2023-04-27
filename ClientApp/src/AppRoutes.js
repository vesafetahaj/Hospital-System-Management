import { Sherbimet } from "./components/Sherbimet";
import { ContactUs } from "./components/ContactUs";
import { Home } from "./components/Home";
import { AboutUs } from './components/aboutus';
import { login } from './components/login';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/sherbimet',
    element: <Sherbimet />
  },
  {
      path: '/contactus',
      element: <ContactUs />
    },
    {
      path: "/aboutus",
      element : < AboutUs />
    },
    {
        path: "/login",
        element: < login />

    }

];

export default AppRoutes;
