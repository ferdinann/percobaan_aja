window.addEventListener("scroll", function() {
	let footer = document.querySelector("footer");
	let content = document.querySelector(".content");
	let contentHeight = content.offsetHeight;
	let scrollTop = window.pageYOffset;
	let footerTop = contentHeight + footer.offsetHeight - window.innerHeight;
	if (scrollTop >= footerTop) {
		footer.classList.add("hide");
	} else {
		footer.classList.remove("hide");
	}

const scrollBtn = document.querySelector('.scroll-btn');
const targetElement = document.querySelector('.tabel1');

scrollBtn.addEventListener('click', () => {
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
});


});
