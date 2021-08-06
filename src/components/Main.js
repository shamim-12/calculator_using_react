import React ,{useState} from 'react'
import dollar from './icon-dollar.svg';
import FinalCalculation from './FinalCalculation';
import Button from './Button';
import person from './icon-person.svg';

const Main = () => {
  
        const bValue = [
            {"value":"5%"},
            {"value":"10%"},
            {"value":"15%"},
            {"value":"25%"},
            {"value":"50%"},
            {"value":"CUSTOM"}
    
        ]
        const [tipedAmount, settipedAmount] = useState();
        const [totalAmount, setTotalAmount] = useState();
        const [person, setperson] = useState();
        const [number,setNumber]= useState();
        const [inputbutton,setInputbutton] = useState();
        function reset_func(){
            setperson(0)
            setNumber(0)
            settipedAmount("$0.00")
            setTotalAmount("$0.00");
            console.log(number);
          }
        
          function zeroError(e){
              setperson(e)
              if(person === 0) 
                {
               console.log(person);
               document.querySelector('.inputnumber').classList.add("inputError")
               document.querySelector('.error1').classList.toggle('error')
               console.log(e.target.value);
                }
                else {
                    document.querySelector('.inputnumber').classList.remove("inputError")
                    document.querySelector('.error1').classList.remove('error')
                    console.log(e.target.value); 
                }
              }
          

    return (
        <div className = "main">
        <div className="mainLeft">
            <label>Bill</label>
            <div className = "tip">
                <div className="img">
                <img src = {dollar} alt = "dollorSign"/>
                </div>
                <input  type = "number" placeholder="0" onChange={e=> setNumber(e.target.value)}/>
            </div>
            <div>
                <section>
                <label>Select Tip %</label>
                <div>  
                <Button bValue = {bValue} inputbutton={inputbutton} setInputbutton={setInputbutton} setTotalAmount={setTotalAmount} settipedAmount={settipedAmount} person={person} number ={number}/>
                </div>
                </section>
                <div class = "error_message">
                    <label >Number of People</label>
                    <p className = "error error1">Can't be zero</p>
                    </div>
                    <div className = "tip">
                        <div className="img">
                        <img src = {person} alt = "personIcon"/>
                        </div>
                        <input className = "inputnumber"  type = "number" onChange={e=> setperson(e.target.value)} onInputCapture={zeroError} placeholder="0"/>
                    </div>
            </div>
        </div>
        <div className = "mainRight">
            <FinalCalculation tipedAmount= {tipedAmount} totalAmount={totalAmount}/>
            <button onClick = {reset_func} style={{backgroundColor:"darkcyan",color:"rgb(23, 49, 49)"}} >RESET</button>
            
        </div>
        </div>
    )
}

export default Main
