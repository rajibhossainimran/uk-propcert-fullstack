import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Agents from '../Pages/Agents/Agents';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import Service from '../Pages/Service/Service';
import NewProperty from '../NewProperties/NewProperty';
import FAQ from '../Pages/FAQ/FAQ';
import Blogs from '../Pages/Blogs/Blogs';
import OrderTracking from '../Pages/OrderTracking/OrderTracking';
import PropertySelector from '../Pages/PropertySelector/PropertySelector';
import Layoutdashboard from '../Dashboard/DashboardLayout/LayoutDashboard';
import DashboardHome from '../Dashboard/DashboardPages/DashboardHome/DashboardHome';
import DashboardProperty from '../Dashboard/DashboardPages/DashboardProperty/DashboardProperty';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Logout from '../hooks/Logout';
import CustomerDashboard from '../customer/CustomerDashboard';
import ServiceList from '../Pages/ServiceList';
import Category from '../Dashboard/DashboardPages/Category/Category';
import CreateServiceForm from '../Dashboard/DashboardPages/CreateService/CreateServiceForm';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/faqs',
                element: <FAQ></FAQ>
            },
            {
                path:'/propertySelector',
                element: <PropertySelector></PropertySelector>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/ordetracking',
                element: <OrderTracking></OrderTracking>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/logout',
                element: <Logout></Logout>
            }
            ,
            {
                path: '/services',
                element: <ServiceList></ServiceList>
            }
            
            
            
        ]
    },
    {
        path: '/dashboard',
        element: <Layoutdashboard></Layoutdashboard>,
        children: [
            {
                path: 'dashboardhome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'dashboardproperty',
                element: <DashboardProperty></DashboardProperty>
            }
            ,
            {
                path: 'categories',
                element: <Category></Category>
            }
            ,
            {
                path: 'manage-service',
                element: <CreateServiceForm></CreateServiceForm>
            }
        ]
    },
    {
        path: '/mydashboard',
        element: <CustomerDashboard></CustomerDashboard>
    }
])

export default Router;