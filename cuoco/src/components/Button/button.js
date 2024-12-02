import "./button.css"

export default function Button({click,text}) {

  return (
    <div>
      <button className="button" onClick={click}>{text}</button>
    </div>
  );
}


