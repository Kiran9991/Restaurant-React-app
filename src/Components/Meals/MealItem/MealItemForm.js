const MealItemForm = props => {
    return (
        <form>
            <label htmlFor="amount">Amount</label>
            <input type="number"/>
            <br/>
            <button type="submit">+Add</button>
        </form>
    )
}

export default MealItemForm;