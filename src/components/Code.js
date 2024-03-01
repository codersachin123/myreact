import './Jarvis.css';
import CodeSubitem from './CodeSubitem';
function Code(props) {
	return <p className='Code'>
<h1>{props.message}</h1>
		<CodeSubitem message="Sub Item" ></CodeSubitem>

	</p>
}
export default Code;