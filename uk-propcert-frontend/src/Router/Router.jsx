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
                path:'/agents',
                element: <Agents></Agents>
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
                path: '/newproperty',
                element: <NewProperty></NewProperty>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default Router;