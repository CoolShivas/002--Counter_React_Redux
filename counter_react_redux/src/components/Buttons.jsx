import { useRef } from "react";
import styles from "./Buttons.module.css";
import { useDispatch } from "react-redux";

const Buttons = () => {

    const inputValue = useRef();

    const dispatch = useDispatch();

    const handlerOnIncrement = () => {
        dispatch({ type: "INCREMENT" })
    };

    const handlerOnDecrement = () => {
        dispatch({ type: "DECREMENT" })
    };

    const handlerOnAddBtn = () => {
        dispatch({ type: "ADDITION", payload: { num: Number(inputValue.current.value) } })
        // Here, Number(inputValue.current.value) will convert it into number format whereas if we are going to use num : inputValue.current.value like this then it will give a string only;
        inputValue.current.value = "";
    };

    const handlerOnSubtractBtn = () => {
        dispatch({ type: "SUBTRACTION", payload: { num: Number(inputValue.current.value) } })
        inputValue.current.value = "";
    };

    const handlerOnPrivacyToggle = () => {
        dispatch({ type: "PRIVACY_TOGGLE" })
    };

    return (
        <div className={styles.buttons_container}>
            <div className={styles.add_subtract_div}>
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

                <button type="button" className="btn btn-dark btn-lg px-4"
                    onClick={handlerOnPrivacyToggle}
                >
                    Private
                </button>

            </div>

            <div className={styles.input_field_div}>

                <input type="text" className="form-control btn-lg" placeholder="enter number here" ref={inputValue} />

                <div className={styles.btn_actions}>
                    <button type="button" className="btn btn-info btn-lg px-4"
                        onClick={handlerOnAddBtn}
                    >
                        Add
                    </button>

                    <button type="button" className="btn btn-warning btn-lg px-4"
                        onClick={handlerOnSubtractBtn}
                    >
                        Subtract
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buttons;