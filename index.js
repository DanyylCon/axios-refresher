const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
	removeOldSearch();
    let searchTerm = form.elements.q.value;
	const config = {params: {q: searchTerm}}   
    const response = await axios.get('http://api.tvmaze.com/search/shows', config);
    addImage(response.data)
   
});

const addImage = (shows) => {
	for(let result of shows){
		if(result.show.image){	
			const img = document.createElement('img');
		
			img.src = result.show.image.medium;
			document.body.append(img);
		}			
	}
}

const removeOldSearch = () => {
	let allImg = document.querySelectorAll('img');
	if(allImg){
		for(let thing of allImg){
			thing.remove();
		}
	}
}

