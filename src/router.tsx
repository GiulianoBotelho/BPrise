
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import TelaDeLogin from './assets/intro/login'
import PaginaInicial from './assets/home';


const router = createBrowserRouter([
    {
        path:'/',
        element:<PaginaInicial/>,
    },
    {
        path:'/login',
        element:<TelaDeLogin/>,
    },
]);
export default function Rotas(){
    return <RouterProvider router ={router}/>
}
