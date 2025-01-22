function HelloWorld(){
    const name:string = 'sagar'; // this variable will be called as state. why because it is used in html or at least its "state" affects applications "state"
    return (
    <>
    <h1>Hello World! {name}</h1>
    </>);
}
export default HelloWorld;