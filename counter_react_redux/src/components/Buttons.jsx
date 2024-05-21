import { useDispatch } from "react-redux";

const Buttons = () => {

    const dispatch = useDispatch();

    const handlerOnIncrement = () => {
        dispatch({ type: "INCREMENT" })
    };

    const handlerOnDecrement = () => {
        dispatch({ type: "DECREMENT" })
    };


    return (
        <>
            <button type="button" className="btn btn-success btn-lg px-4 gap-3"
                onClick={handlerOnIncrement}
            >
                +1
            </button>
            <button type="button" className="btn btn-danger btn-lg px-4"
                onClick={handlerOnDecrement}
            >
                -1
            </button>
        </>
    )
}

export default Buttons;