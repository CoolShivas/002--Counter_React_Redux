import { useSelector } from "react-redux";

const DisplayValue = () => {

    const counter = useSelector((store) => store.counter);

    return (
        // <p className="lead mb-4"> Counter Value is = 0 .</p>
        <p className="lead mb-4"> Counter Value is =  {counter} .</p>
    )
}

export default DisplayValue;