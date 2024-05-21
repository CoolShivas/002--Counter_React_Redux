import styles from "./Buttons.module.css";
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
            </div>

            <div className={styles.input_field_div}>

                <input type="text" className="form-control btn-lg" placeholder="enter here" />

                <div className={styles.btn_actions}>
                    <button type="button" className="btn btn-info btn-lg px-4"
                    >
                        Add
                    </button>

                    <button type="button" className="btn btn-warning btn-lg px-4"
                    >
                        Subtract
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buttons;