/*Use offsetwidth to get the carousel width from the stylesheet*/
let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
	carouselWidth = document.querySelector('.carousel-container').offsetWidth;
});

function setupCarousel(carouselContainer) {

	const prev = carouselContainer.querySelector('.prev');
	const next = carouselContainer.querySelector('.next');
	const track = carouselContainer.querySelector('.track');

	let index = 0;

	next.addEventListener('click', () => {
		index++;
		prev.classList.add('show');
		track.style.transform = `translateX(-${index * carouselWidth}px)`;


		if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
			next.classList.add('hide');
		}
		console.log(track.offsetWidth);
	});

	prev.addEventListener('click', () => {
		index--;
		next.classList.remove('hide');
		if (index === 0) {
			prev.classList.remove('show');
		}
		track.style.transform = `translateX(-${index * carouselWidth}px)`;
	});
}


const carouselContainers = document.querySelectorAll('.carousel-container');
carouselContainers.forEach(setupCarousel);
