import { NavLink } from 'react-router-dom'
import useBudget from '../hooks/useBudget';



function Navbar() {

    const handleActive = ({ isActive }) => isActive ? "nav-link text-white my-active" : "text-white nav-link";
    const {budgetMode, setBudgetMode, maxPrice, setMaxPrice} = useBudget();
    //const btnLabel = budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget';
    //const btnClass = budgetMode ? 'btn-danger' : 'btn-success';
    //const budgetModeToggle = () => (setBudgetMode(!budgetMode));
    
    const handleChange = (event) => {
        const {value} = event.target;
        console.log(value);
        return setMaxPrice(value);
        
    }

    return (
        <nav className="navbar  bg-dark">
            <div className="container-fluid">
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <img className='img-navbar' src='/navbar-logo.png' alt="logo" />
                    <NavLink className={handleActive} to='/'>Home</NavLink>
                    <NavLink className={handleActive} to='chi_siamo'>Chi Siamo</NavLink>
                    <NavLink className={handleActive} to='prodotti'>Prodotti</NavLink>
                    {/*<button className={`btn ${btnClass}`} onClick={budgetModeToggle}>{btnLabel}</button>*/}
                    <div className='d-flex align-items-center column-gap-1'>
                        <label htmlFor="max-price" className='text-white text-nowrap'>Prezzo Massimo</label>
                        <input className="form-control-sm" type="number" id='max-price' value={maxPrice}  onChange={handleChange}></input>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar