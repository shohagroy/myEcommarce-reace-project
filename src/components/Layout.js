import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Header from './Header';
import Hero from './Hero';

const router = createBrowserRouter([
    {
        path: '/', element: <Header/>,
        errorElement: <ErrorPage/>,
         
        
        children:[

        ]
    }

])

const Layout = () => {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Layout;