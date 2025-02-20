import { Outlet, useNavigate } from "react-router-dom";

function HelloWorld(){
    const name:string = 'sagar'; // this variable will be called as state. why because it is used in html or at least its "state" affects applications "state"
    const navigate = useNavigate();
    function navigateToParent() {
        navigate("/HelloWorld/ParentComponent");
    }
    function navigateToCounter(){
        navigate("/HelloWorld/Counter");
    }

    return (
    <>
    <h1>Hello World! {name}</h1>
    <button className="btn" onClick={()=>navigateToParent()}>parent and CHild</button>
    <button className="btn" onClick={()=>navigateToCounter()}>Counter Component</button>
    <Outlet></Outlet>
    </>);
}
export default HelloWorld;