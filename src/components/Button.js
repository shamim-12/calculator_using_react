import React from "react";

const Button = (props) => {
    const {setTotalAmount } = props;
    const {settipedAmount} = props;
    const {person} = props;
    const { number} = props;
    const {bValue} = props;
    const {setInputbutton} = props;
    const{inputbutton} = props;

    function tip_func(e) {
        if (bValue[0].value === e.value) {
            if (person !== 0) {
                let y = (number / person) * 0.15;

                let yrounded = Math.round((y + Number.EPSILON) * 100) / 100;
                settipedAmount(yrounded);
                let a = number / person + y;
                let arounded = Math.round((a + Number.EPSILON) * 100) / 100;
                setTotalAmount(arounded);
            }
        
        } else if (bValue[1].value === e.value) {
            if (person !== 0) {
                let y = (number / person) * 0.15;

                let yrounded = Math.round((y + Number.EPSILON) * 100) / 100;
                settipedAmount(yrounded);
                let a = number / person + y;
                let arounded = Math.round((a + Number.EPSILON) * 100) / 100;
                setTotalAmount(arounded);
            }
        } else if (bValue[2].value === e.value) {
            if (person !== 0) {
                let y = (number / person) * 0.15;

                let yrounded = Math.round((y + Number.EPSILON) * 100) / 100;
                settipedAmount(yrounded);
                let a = number / person + y;
                let w = 0;
                let arounded = Math.round((a + Number.EPSILON) * 100) / 100;
                setTotalAmount(arounded);
            }
        } else if (bValue[3].value === e.value) {
            if (person !== 0) {
                let y = (number / person) * 0.15;

                let yrounded = Math.round((y + Number.EPSILON) * 100) / 100;
                settipedAmount(yrounded);
                let a = number / person + y;
                let w = 0;
                let arounded = Math.round((a + Number.EPSILON) * 100) / 100;
                setTotalAmount(arounded);
            }
        } else if (bValue[4].value === e.value) {
            if (person !== 0) {
                let y = (number / person) * 0.15;

                let yrounded = Math.round((y + Number.EPSILON) * 100) / 100;
                settipedAmount(yrounded);
                let a = number / person + y;
                let w = 0;
                let arounded = Math.round((a + Number.EPSILON) * 100) / 100;
                setTotalAmount(arounded);
            }
        } else
            if (person !== 0) {
                let y = (number / person) * 0.15;

                let yrounded = Math.round((y + Number.EPSILON) * 100) / 100;
                settipedAmount(yrounded);
                let a = number / person + y;
                let w = 0;
                let arounded = Math.round((a + Number.EPSILON) * 100) / 100;
                setTotalAmount(arounded);
            
        }
    }
    return ( 
    <div className = "buttonContainer" > {
            bValue.map((item) => {
                return item.value === "CUSTOM" ? ( <input key = {item.value }
                    className = "buttons btn_input"
                    placeholder = {
                        item.value
                    }
                    />
                ) :
                
             ( <button onClick = {
                        () => tip_func(item)
                    }
                    key = {
                        item.value
                    }
                    className = "buttons" > {
                        item.value
                    }
                    </button>
                );
            
            })
        } </div>
    );
};

export default Button;