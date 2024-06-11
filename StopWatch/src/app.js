import './App.css';
import {useTimer} from 'use-timer';
const App=()=>{
  const {time,start,pause,reset,status}=useTimer();
  return (
   <>
   <div className="stopwatch">
    <h1>StopWatch in React</h1>
    <div className="buttons">

   <button onClick={start}>Start</button>
   <button onClick={pause}>Pause</button>
   
   <button onClick={reset}>Reset</button>
   </div>
   <p>Start Timer: {time}</p>
   {status==="RUNNING" && <p>Running....</p>}
   {status==="PAUSED" && <p>Paused....</p>}
   {status==='STOPPED' && <p>Stopped....</p>}
   </div>
   </>
  );
}

export default App;
