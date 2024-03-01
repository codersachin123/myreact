import './Jarvis.css';
function CodeWraper(props)  
{
    const style = "10"

    return <div className="CodeWrapper">
        { props.children}
        {style}
    </div>
}
export default CodeWraper

