import React, {Component} from 'react';
import Back from './Back';

class Error404 extends React.PureComponent {
	render() {
		var img = '/app/images/404.png';
		return (
			<div className="pageError">
				<Back />

				<div className="errorContent">
					<img src={img} />
					<p>Page Not Found</p>
				</div>
			</div>
		);
	}
}

export default Error404; {/* exportamos componente */}
