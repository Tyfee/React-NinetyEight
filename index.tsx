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
      <img style={{marginBottom: "28%"}} src={props.inside}></img>
         </div>
  )
}

const optionStyle ={fontSize: "14px", padding: "",color: "black", backgroundColor: "#c3c3c3", width: "auto", '&:hover': { background: '#707070',borderColor: '#707070' } }


const Option = (props: any) => {
    return (
      <>
      <div class="option" style={optionStyle}>
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





const a = props.options?.map((i) => <Option option={i}/> )


const b = props.actions?.map((i) => <Button inside={`https://raw.githubusercontent.com/Tyfee/React-NinetyEight/main/assets/${i}-icon.png`}/>)
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