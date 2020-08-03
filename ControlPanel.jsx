import React,{useState,useRef} from 'react';
import styleclasses from './ControlPanel.module.css'


let time=0;
let setTime;
let c1= "item";
let c2= "active";
let classes = c1 + " " + c2;
const timer=()=>{
setTime(time+1);
}
let interval; //

const ControlPanel = () => {
    const [time1, setTime1] = useState(0)
    time=time1;
    setTime=setTime1;
    return (
        <nav className={styleclasses.nav}>
            <div className ={styleclasses.item}>
                <a>Ходов сделано:</a>

            </div>
            <div className = {styleclasses.item}>
                <a>Время: {time}</a>
            </div>
            <div className = {styleclasses.item}>
                <button onClick={
                    ()=>{
                        if (interval) clearInterval(interval);
                        setTime(0);
                        interval=setInterval(timer,1000);
                    }
                }>Начать</button>
            </div>

        </nav>
    )
}
export default ControlPanel;
