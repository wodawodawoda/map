import React from 'react';
import './Searches.css'

const Searches = ({toggleCategory, markers}) => (
	<section className="searches" onChange={toggleCategory}>
		{Object.keys(markers).map((name, idx) => (
			<div key={name + idx} className={`searches__term searches__term--${name}`}>
				<header className="searches__header">
					<h2 className="searches__name">{name}</h2>
					<input type="checkbox"
								 name="category"
								 id={name}
								 className="searches__toggle searches__toggle--term"
								 defaultChecked={true}
					/>
				</header>
				<section className="searches__list">
					{markers[name].map((marker, idx) => (
						<div key={marker.title + idx} className="searches__marker">
							<p>{marker.title}</p>
							<small>{marker.phone}</small>
							<p>{marker.destination && marker.destination.distance.text}</p>
							<p>{marker.destination && marker.destination.duration.text}</p>
							<input type="checkbox"
										 name="marker"
										 id={marker.title}
										 data-category={name}
										 className="searches__toggle searches__toggle--marker"
										 checked={!!marker.map}
							/>
						</div>
					))}
				</section>
			</div>
		))}
	</section>
)

export default Searches