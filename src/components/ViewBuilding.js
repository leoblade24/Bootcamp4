import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { selectedBuilding, data }=this.props;
		
		if(selectedBuilding===0){
			return(
				<div>
					<div>
						<p>
							{' '}
							<i>Click on a name to view more information</i>
						</p>
					</div>
				</div>
			)
		}
		const {address, coordinates}=data[data.findIndex(x=>x.id===selectedBuilding)]
		
		var long;
		var lat;
		if(coordinates!=null){
			long=coordinates.longitude;
			lat=coordinates.latitude;
		}
		else{
			long=0;
			lat=0;
		}
		
		return (
			<div>
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					
					</p>
				</div>
				<div>
				<u1 key={selectedBuilding} >
						Address: 
						<li >
							{address}
						</li>
						Coordinates:
						Latitude:  
						<l1>
							{lat}
							<u1>,
								Longitude: 
							</u1>
							{long}
						</l1>
					</u1>
				</div>
			</div>
		);
	}
}
export default ViewBuilding;
