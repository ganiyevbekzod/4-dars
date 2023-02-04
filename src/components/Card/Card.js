import { NavLink } from "react-router-dom";
export const Card = ({ obj }) => {
	return (
		
		<li className='col-md-3'>
			<div className='card'>
			<NavLink to={`/name/${obj.name.common}`}>
			<img
					className='card-img-top'
					width='100%'
					height='150px'
					src={obj.flags.svg}
					alt=''
				/>
			</NavLink>
				<div className='card-body'>
					<h3 className='card-title'>{obj.name.common}</h3>
					<p className='card-text'>Population: {obj.population}</p>
					<p className='card-text'>Region: {obj.region}</p>
					<p className='card-text'>Capital: {obj.capital?.[0]}</p>
				</div>
			</div>
		</li>
	);
};
