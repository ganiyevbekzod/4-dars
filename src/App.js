import { useState, useEffect, useRef } from 'react';
import { Card } from './components/Card/Card';

function App() {
	const [country, setCountry] = useState({
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

	return (
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
	);
}

export default App;
