import React,{useState} from 'react'
import './App.css';
import data from './components/Data';
function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault()
    let amount=parseInt(count)
    if(count<=0){
      amount=1
    }
    if(count>8){
      amount=8
    }
    setText(data.slice(0,amount))
  }
  return (
    <>
  <section className='section-center'>
    <h1>Generate Lorem Ipsums Paragraphs</h1>
    <form
    onSubmit={handleSubmit}
    action="">
      <input type="number"
      name='amount'
      id='amount'
      value={count}
      onChange={(e)=>setCount(e.target.value)}
      />
      <button className='btn'>Generate</button>
    </form>
    <article>
      {text.map((item,index)=>{
        return <p key={index} className='para'>
          {item}
        </p>
      })}
    </article>
  </section>
    </>
  );
}

export default App;
