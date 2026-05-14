import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

function useBudget() {
    const value = useContext(BudgetContext);

    if (value === null) {
        throw new Error(
            "BudgetProvider non é stato inserito come wrapper nel return di App()",
        );
    }

    return value;
}
export default useBudget;
