import { useState, useEffect,useRef} from 'react';
import { Card } from './components/Card/Card';
import {Header} from "./components/Header/Header"


function App() {
	const elChangeInput = useRef();
	const elSelected=useRef()

	let [country, setCountry] = useState({
		isLoading: false,
		data: [],
		isError: '',
	});

	useEffect(() => {
		setCountry({
			...country,
			isLoading: true,
		});
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					setCountry({
						...country,
						isLoading: false,
						data: data,
					});
				}
			})
			.catch((err) => {
				if (err) {
					setCountry({
						...country,
						isLoading: false,
						data: [],
						isError: err.message,
					});
				}
			});
	}, []);


	const handleChange = () => {
		console.log("Change");
		fetch("https://restcountries.com/v3.1/name/" + elChangeInput.current.value)
		  .then((res) => res.json())
		  .then((data) => {
			if (data.length > 0) {
			  setCountry({
				isLoading: false,
				data: data,
				isError: "",
			  });
			}
		  })
		  .catch((err) => console.log(err));
	  };
	  const HandleSelected=()=>{
		fetch("https://restcountries.com/v3.1/region/"+elSelected.current.value)
		.then((res)=>res.json())
		.then((data)=>{
			if(data){
				setCountry({
				isLoading: false,
				data: data,
				isError: "",
				})
			}
		})
		.catch((err)=>console.log(err))
	  }


	return (
		<div>
				<Header/>
				<section className='sort'>
        <div className='container'>
          <div className='sort__inner pt-5'>
            <form
              className='sort__form d-flex align-items-center justify-content-between '
              action='https://echo.htmlacademy.ru/'
            >
              <input
                className='sort__input form-control w-25'
                id='focus'
                type='text'
                onChange={handleChange}
                ref={elChangeInput}
                placeholder='Search for a country…'
              />
		<select onChange={HandleSelected} ref={elSelected} className='sort__select form-select w-25'>
                <option selected disabled>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
              </select>
            </form>
          </div>
        </div>
      </section>
					<div className='container py-5'>
			{country.isLoading ? <h1>Loading...</h1> : ''}
			{country.isError ? <h1>{country.isError}</h1> : ''}
			
			{country.data.length ? (
				<ul className='row gy-4 justify-content-center list-unstyled'>
					{country.data.map((item, index) => (
						<Card key={index} obj={item} />
					))}
				</ul>
			) : (
				''
			)}
		
		</div>
		</div>
		
	

	);
}

export default App;
