import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


function MainLayout() {

    

    return (
        <>
            <div className='d-flex flex-column min-vh-100'>
                <header>
                    <Navbar/>
                </header>
                <main className='flex-grow-1'>
                    <Outlet />
                </main>
                <footer className='border-top border-primary bg-dark border-3 py-2'>
                    <div className="container text-center">
                        <small className="text-white">© 2026 FakeShop</small>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default MainLayout