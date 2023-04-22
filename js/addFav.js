let addFav = document.querySelector('#favorites')
//Сделай для всех кнопок
if (document.querySelector('#addFavBtn')) {
	let addFavBtn = document.querySelectorAll('#addFavBtn')
	addFavBtn.forEach((favBtn) => {
		favBtn.addEventListener('click', () => {
			addFavFunc()
			location.reload();
		})
		function addFavFunc() {
			if (localStorage.getItem('FavBtnActive') == 'Активный') {
				addFavCount--
				localStorage.setItem('countFav', addFavCount);
				localStorage.removeItem("FavBtnActive");
				reviewOfNull()
			} else {
				localStorage.setItem('FavBtnActive', 'Активный')
				addFavCount++
				localStorage.setItem('countFav', addFavCount);
				favBtn = localStorage.getItem('FavBtnActive')
				reviewOfNull()
			}
		}
		if (localStorage.getItem('FavBtnActive') == 'Активный') {
			favBtn.innerHTML = `
			<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22.0718 1.95979C19.4616 -0.652909 15.2154 -0.652909 12.6059 1.95979L11.9998 2.56628L11.394 1.95979C8.78455 -0.653262 4.53795 -0.653262 1.92847 1.95979C-0.628032 4.51944 -0.644633 8.57675 1.88997 11.3977C4.2017 13.9698 11.0196 19.5265 11.3089 19.7617C11.5053 19.9215 11.7416 19.9993 11.9765 19.9993C11.9842 19.9993 11.992 19.9993 11.9994 19.999C12.2424 20.0103 12.4872 19.9268 12.6899 19.7617C12.9792 19.5265 19.7979 13.9698 22.1103 11.3974C24.6445 8.57675 24.6279 4.51944 22.0718 1.95979Z" fill="#F53B49"/>
		</svg>
		В Избранное
		`
		}
	})
}


function reviewOfNull() {
	if (addFavCount !== null || addFavCount == 1) {
		addFav.innerHTML = `
		<img src="./images/heart.svg" alt=""></a>
		<p class="count" id="card-icon-count">${addFavCount}</p>
		`
	}
	if (addFavCount == 0) {
		addFav.innerHTML = `
		<img src="./images/heart.svg" alt=""></a>
		`
	}
}

let addFavCount = localStorage.getItem('countFav');

reviewOfNull()

export { addFav }