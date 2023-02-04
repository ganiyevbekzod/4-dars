import {Header} from "./components/Header/Header"
import {Routes,Route} from "react-router-dom"
import { SingleUser } from './pages/SingleUser/SingleUser';
import { Main } from './pages/Main/Main';


function App() {
	return (
		<div>
			<Header/>
			<Routes>
			<Route index path="/" element={<Main/>}/>
			<Route path='/name/:name' element={<SingleUser/>}/>
			</Routes>
		</div>
	);
}

export default App;
