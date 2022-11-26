//import useState dan useEffect dan axios
import { useEffect, useState } from "react";
import axios from 'axios';

function Technology() {
	const [Berita,setBerita] = useState([]);

	useEffect(() => {
		axios
	      .get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=51dfd39984fe476f90f625457f70c96a')
	      .then(response=>{
	        console.log(response.data.articles);
	        setBerita(response.data.articles);
	    });
	},[]);

	return (
		<div className="Technology mt-5">
			<div className="row">
				<div className="col">
					<h2>Berita Teknologi</h2>
				</div>
			</div>
      		<div className="row">
      			{Berita.map((item) => ( 
      				<div className="col m-3">
				        <div className="card">
				          <img src={item.urlToImage} className="card-img-top" alt="" style={{width: '20rem'}} />        
				          <div className="card-body">
				            <h5 className="card-title">{item.title}</h5>
				            <p className="card-text">{item.description}</p>
				          </div>
				        </div>
				    </div>
      			))}
		      
		    </div>
    	</div>

	);
}

export default Technology;