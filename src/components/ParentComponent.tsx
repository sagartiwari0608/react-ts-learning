import ChildComponent from "./ChildComponent"

function ParentComponent(){
    return (
    <>
    <h2>I am Parent component</h2>
    <ChildComponent value={123}></ChildComponent>
    </>)
}
export default ParentComponent;