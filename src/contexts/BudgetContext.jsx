import { createContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({children}) {
    
    const [budgetMode, setBudgetMode] = useState(false);
    const [maxPrice, setMaxPrice] = useState('');
    
    const value = {
        maxPrice,
        setMaxPrice,
        budgetMode,
        setBudgetMode
    };
    return (
        <BudgetContext value={value}>
            {children}
        </BudgetContext>
    )
}
export { 
    BudgetContext,
    BudgetProvider 

}