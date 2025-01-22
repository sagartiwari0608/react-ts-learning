import ChildComponent from "./ChildComponent"

function ParentComponent(){
    return (
    <>
    <h2>I am Parent component</h2>
    <ChildComponent value={124}></ChildComponent>
    </>)
}
export default ParentComponent;