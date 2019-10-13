import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


class NotFoundPage extends React.Component{
    render(){
        return (
		<div class="notfound" align='center'>
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! This Page Could Not Be Found</h2>
			<Link to={'/'}>Go To Home Page></Link>
		</div>
        )
    }
}
export default NotFoundPage;