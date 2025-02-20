function ChildComponent({ value }:Readonly<{value: number}>) {
    return (
        <>
        <div>just a div</div>
        <h3>Child Component the provided value is {value}</h3>
        </>
    )
}
export default ChildComponent;