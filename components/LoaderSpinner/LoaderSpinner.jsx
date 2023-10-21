// @ts-nocheck
import { useState, CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    top: "10"
};

function LoaderSpinner() {
    let [color, setColor] = useState("#f2f2f2");
    return (
        <div className="sweet-loading absolute top-[40%] left-[45%]">
            <SyncLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderSpinner;