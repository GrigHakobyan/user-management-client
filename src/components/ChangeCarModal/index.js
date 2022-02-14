import React from 'react';
import {changeCar} from "../../actions/carAction";

const ChangeCarModal = ({name, model}) => {

    const changeCarData = async () => {
        const data = await changeCar(name, model)
    }

    return (
        <div className='content' style={{
            background: "#6f6f6f",
            width: "400px",
            height: "400px"
        }}>
            <input type="text"/>
            <input type="text"/>
            <button onClick={changeCar}>SAVE</button>
        </div>
    );
};

export default ChangeCarModal;
