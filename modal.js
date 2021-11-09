
const btns = document.querySelectorAll('.modal_open-btn');
const spans = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

// Listen for click on open button and open the window
btns.forEach((btn, ind) => {
btn.addEventListener('click', e => {modals[ind].style.display = 'block'});
});

// Listen for click on cross and close the window
spans.forEach((span, ind) => {
//  span.onclick = () => (modals[ind].style.display = 'none');
span.addEventListener('click', e => {modals[ind].style.display = 'none'});
});


// Listen for outside click and close the modal window
window.addEventListener('click', e => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  })});


//Get picture
//function addPicture(url, imgid) {
//    document.getElementById(imgid).src=url;
//}
function addPicture(url, imgid) {
    document.querySelector(imgid).src=url;
}

const picture_0 = "body > div.picture-container > div > div > img"; 
const modalPicture_0 = "body > div:nth-child(2) > div > div > img";
const modalText_0 = "body > div:nth-child(2) > div > div > p";

//let picture_1 = "body > div:nth-child(12) > div.carousel-inner > div > div:nth-child(1) > div > img";
//let picture_2 = "body > div:nth-child(21) > div.carousel-inner > div > div:nth-child(1) > div > img";
//let picture_3 = "body > div:nth-child(30) > div.carousel-inner > div > div:nth-child(1) > div > img";
//let picture_4 = "body > div:nth-child(39) > div.carousel-inner > div > div:nth-child(1) > div > img";

const query_0 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"; 

function insertPicture(query,picture,modalPicture,modalText,rank = 0) {
  fetch(query)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    document.querySelector(picture).src = value.results[rank].image_url;
    document.querySelector(modalPicture).src = value.results[rank].image_url;
		data = value.results[rank].title + "\r\n" + value.results[rank].year + "\r\n" + value.results[rank].imdb_score + "\r\n";
    data += "\r\n";
    value.results[rank].directors.forEach((director) => data += (director + "\r\n"));
    data += "\r\n";
    value.results[rank].actors.forEach((actor) => data += (actor + "\r\n"));
		
    document.querySelector(modalText).innerText = data;

//	console.log("Title : ",value.results[rank].title);
//	console.log(value.results[rank].year);
//	console.log(value.results[rank].imdb_score);
//	value.results[rank].directors.forEach((director) => {console.log(director)});

  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

//Insert picture for highest rated movie
insertPicture(query_0, picture_0, modalPicture_0, modalText_0);

//Insert pictures for the 8 highest rated movies of the displayed categories
//There are 5 movies per pages of movie title list.  
//To report about 8 then 2 pages are required.

for (let i = 1; i <= 8; i++) {

picture_1 = `body > div:nth-child(12) > div.carousel-inner > div > div:nth-child(${i}) > div > img`;
picture_2 = `body > div:nth-child(21) > div.carousel-inner > div > div:nth-child(${i}) > div > img`;
picture_3 = `body > div:nth-child(30) > div.carousel-inner > div > div:nth-child(${i}) > div > img`;
picture_4 = `body > div:nth-child(39) > div.carousel-inner > div > div:nth-child(${i}) > div > img`;

	j1 = 3 + i;
modalPicture_1 = `body > div:nth-child(${j1}) > div > div > img`;
modalText_1 = `body > div:nth-child(${j1}) > div > div > p`;
	j2 = 12 + i;
modalPicture_2 = `body > div:nth-child(${j2}) > div > div > img`;
modalText_2 = `body > div:nth-child(${j2}) > div > div > p`;
	j3 = 21 + i;
modalPicture_3 = `body > div:nth-child(${j3}) > div > div > img`;
modalText_3 = `body > div:nth-child(${j3}) > div > div > p`;
	j4 = 30 + i;
modalPicture_4 = `body > div:nth-child(${j4}) > div > div > img`;
modalText_4 = `body > div:nth-child(${j4}) > div > div > p`;


	//entries 1-5 on page 1,entries 6-8 on page 2
	if (i <= 5){
		query_1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=1"; 
		query_2 = "http://localhost:8000/api/v1/titles/?genre=Drama&ort_by=-imdb_score&page=1"; 
		query_3 = "http://localhost:8000/api/v1/titles/?genre=History&ort_by=-imdb_score&page=1"; 
		query_4 = "http://localhost:8000/api/v1/titles/?genre=Comedy&ort_by=-imdb_score&page=1"; 
    insertPicture(query_1, picture_1, modalPicture_1, modalText_1, i - 1);
    insertPicture(query_2, picture_2, modalPicture_2, modalText_2, i - 1);
    insertPicture(query_3, picture_3, modalPicture_3, modalText_3, i - 1);
    insertPicture(query_4, picture_4, modalPicture_4, modalText_4, i - 1);
	}else{
		query_1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2"; 
		query_2 = "http://localhost:8000/api/v1/titles/?genre=Drama&ort_by=-imdb_score&page=2"; 
		query_3 = "http://localhost:8000/api/v1/titles/?genre=History&ort_by=-imdb_score&page=2"; 
		query_4 = "http://localhost:8000/api/v1/titles/?genre=Comedy&ort_by=-imdb_score&page=2"; 
    insertPicture(query_1, picture_1, modalPicture_1, modalText_1, i - 6);
    insertPicture(query_2, picture_2, modalPicture_2, modalText_2, i - 6);
    insertPicture(query_3, picture_3, modalPicture_3, modalText_3, i - 6);
    insertPicture(query_4, picture_4, modalPicture_4, modalText_4, i - 6);
	}
}
