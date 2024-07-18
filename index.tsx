import useState from 'react'
import React from 'react'
import { useRef, useCallback } from 'react'
import './styles.css'


const Window98 = (props: any) => {

    const draggable = props.draggable
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const elementRef = useRef<HTMLDivElement>(null);
    const bottomBorder = props.bottomBorder
    
 
    
    const onMouseDown = useCallback(
        (event) => {
          const onMouseMove = (event: MouseEvent) => {
            
            position.x += event.movementX;
            position.y += event.movementY;
               const element = elementRef.current;
            if (element) {
              element.style.transform = `translate(${position.x}px, ${position.y}px)`;
           
                      
            }
            
                
           
            setPosition(position);
          };
          const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          };
          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        },
        [position, setPosition, elementRef]
      );



    const buttonStyles = {
        backgroundColor: "#c3c3c3",
        borderLeft: "2px solid white",
        borderTop: "2px solid white",
        borderRight: "2px solid black",
        borderBottom: "2px solid black",
        width: "18px",
        height: "17px",
        marginTop: "4%",
         color: "black"
    
     }
    

const Button = (props: any) => {
  return (
    <div style={buttonStyles}>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11">
      <g transform="translate(0.000000,9.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
      <path fill="#000000" d={props.inside}/>
     </g>
      </svg>
         </div>
  )
}

const optionStyle ={fontSize: "14px", padding: "",color: "black", backgroundColor: "#c3c3c3", width: "auto", '&:hover': { background: '#707070',borderColor: '#707070' } }


const Option = (props: any) => {
    return (
      <>
      <div className="option" style={optionStyle}>
        <a style={{fontFamily: "sans-serif",padding: "5px", color: "black"}}>{props.option}</a>
           </div>
        </>
    )
  }
  


 const styles = {
    backgroundColor: "#c3c3c3",
    borderLeft: "2px solid white",
    borderTop: "2px solid white",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
    width: props.width,
    height: "auto",
    userSelect: "none",
    overflow: "hidden",
    zIndex: props.zIndex
}


const first = props.color ? props.color : 'darkBlue'
const second = props.color2 ? props.color2 : 'royalBlue'

const titleStyles = {
    display: 'flex',
    color: "white",
    width: "99%",
    marginTop: "4px",
    background: `linear-gradient(to right, ${first} , ${second})`,
    textOverflow: "ellipsis"
}


const svgData = {
  close: "M24 71 c15 -16 15 -19 1 -31 -9 -7 -13 -15 -10 -18 2 -3 11 1 20 8 12 10 18 10 30 0 9 -7 18 -11 20 -8 3 3 -1 11 -10 18 -14 12 -14 15 1 31 19 21 6 27 -14 7 -9 -9 -15 -9 -24 0 -20 20 -33 14 -14 -7z",
  maximize: "M10 50 c0 -40 0 -40 40 -40 40 0 40 0 40 40 0 40 0 40 -40 40 -40 0 -40 0 -40 -40z m70 -5 c0 -21 -5 -25 -30 -25 -25 0 -30 4 -30 25 0 21 5 25 30 25 25 0 30 -4 30 -25z",
  minimize: "M33 23 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -17 0 -22 -2 -12 -5z"
}


const a = props.options?.map((i: any) => <Option option={i}/> )


const b = props.actions?.map((action: string, index: number) => <Button key={index} inside={svgData[action]}/>)
return(

    <>
    <div class="window" ref={elementRef}  style={styles}>
    <center>
<div onMouseDown={draggable ? onMouseDown : undefined} style={titleStyles}>
<div style={{display: "flex", width: "98%", height: "30px", overflow: "hidden"}}>
    <img style={{ marginTop: "0.5vh", width: "18px", height: "18px"}} src={props.icon}></img>
<a style={{color: "white", marginTop: "2px"}}>{props.title} </a>

</div>
<div style={{height: "3vh", display: "flex", marginRight: "4px", marginTop: "1px"}}>
{b}
</div>
</div>
</center>
<div style={{marginLeft: "1%",display: "flex"}}>
        {a}
</div>
<center><div style={{overflow: "hidden", width: "98%",borderTop: "1px solid black", borderBottom: "1px solid white", borderLeft:"1px solid black", borderRight: "1px solid white"}}>
    {props.content}
</div></center>
{props.bottomBorder && <div style={{marginLeft: "0.9%", display: "flex", width: "98.2%"}}>
<div style={{borderTop: "1px solid gray",borderBottom: "1px solid white",borderLeft: "1px solid gray",borderRight: "1px solid white",height: "26px",
  width: "29.9%"
}}></div>
<div style={{
  borderTop: "1px solid gray",borderBottom: "1px solid white",borderLeft: "1px solid gray", borderRight: "1px solid white",height: "26px",
  width: "60%"
}}></div>
<div style={{
  borderTop: "1px solid gray",
  borderBottom: "1px solid white",
  borderLeft: "1px solid gray",
  borderRight: "1px solid white",
  height: "10%",
  width: "8vw"
}}><a style={{fontFamily: "sans-serif", color: "black"}}> {props.title}</a></div>
</div>}

    </div>
    </>
)
}

export default Window98