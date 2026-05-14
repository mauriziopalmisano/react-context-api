import { NavLink } from 'react-router-dom'



function Navbar() {

    const handleActive = ({ isActive }) => isActive ? "nav-link text-white my-active" : "text-white nav-link";


    return (
        <nav className="navbar  bg-dark">
            <div className="container-fluid">
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <img className='img-navbar' src='/navbar-logo.png' alt="logo" />
                    <NavLink className={handleActive} to='/'>Home</NavLink>
                    <NavLink className={handleActive} to='chi_siamo'>Chi Siamo</NavLink>
                    <NavLink className={handleActive} to='prodotti'>Prodotti</NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar