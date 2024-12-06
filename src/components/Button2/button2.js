import "./button2.css"

export default function Button2({click,text}) {

  return (
    <div>
      <button className="button2" onClick={click}>{text}</button>
    </div>
  );
}


