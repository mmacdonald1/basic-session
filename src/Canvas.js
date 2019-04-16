import { h, Component, createRef } from 'preact';

class Canvas extends Component {
  constructor(props) {
   super(props);
    this.myRef = createRef();
    this.state = {
      isPainting:false,
      prevPos:{ offsetX: 0, offsetY: 0 },
      line:[]
    }
 }
  componentDidMount() {
  console.log(this.myRef.current)
  this.canvas = this.myRef.current
  this.ctx = this.canvas.getContext("2d")
}

onMouseDown = (e) =>{
  console.log(e, "offsetX", e.offsetX, "offsetY", e.offsetY)
  this.setState({isPainting:true, prevPos:{offsetX:e.offsetX, offsetY:e.offsetY}}, ()=>console.log(this.state))
}

onMouseMove = (e) =>{
  if(this.state.isPainting){
    console.log("offsetX", e.offsetX, "offsetY", e.offsetY)
    const offsetData={offsetX:e.offsetX, offsetY:e.offsetY}
    const positionData = {
          start: this.state.prevPos,
          stop: offsetData
    }
    this.setState({line:[...this.state.line, positionData]});
    const userStrokeStyle = '#EE92C2'
    this.paint(this.state.prevPos, offsetData, userStrokeStyle);
  }
}

paint=(prevPos, currPos, strokeStyle) => {
     const { offsetX, offsetY } = currPos;
     const { offsetX: x, offsetY: y } = prevPos;

     this.ctx.beginPath();
     this.ctx.strokeStyle = strokeStyle;
     // Move the the prevPosition of the mouse
     this.ctx.moveTo(x, y);
     // Draw a line to the current position of the mouse
     this.ctx.lineTo(offsetX, offsetY);
     // Visualize the line using the strokeStyle
     this.ctx.stroke();
     this.setState({prevPos:{ offsetX, offsetY }})
  }
  endPaintEvent = () => {
    if (this.state.isPainting) {
      this.setState({isPainting:false}, ()=>this.savePainting())
    }
  }
savePainting = () =>{
  let painting = this.canvas.toDataURL()
  console.log(painting)
}

render() {
    console.log(this.state.prevPos)
    return(
      <div>
        <canvas
          ref={this.myRef}
          width={640}
          height={425}
          className="canvas-div"
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.endPaintEvent}
          onMouseUp={this.endPaintEvent}
          />
      </div>
    )
  }
}
export default Canvas
