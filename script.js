document.addEventListener('DOMContentLoaded', function() {
	// Temukan elemen tombol "Home"
	var homeButton = document.querySelector('.text-wrapper');
	homeButton.addEventListener('click', function() {
		var homeSection = document.getElementById('HomeSection');
		homeSection.scrollIntoView({ behavior: 'smooth' });
	});
			
	// Temukan elemen tombol "Our Package"
	var ourPackageButton = document.querySelector('.text-wrapper-2');
	ourPackageButton.addEventListener('click', function() {
		var ourPackageSection = document.getElementById('OurPackageSection');
		ourPackageSection.scrollIntoView({ behavior: 'smooth' });
	});
			
	// Temukan elemen tombol "Call Us"
	var callUsButton = document.querySelector('.text-wrapper-3');
	callUsButton.addEventListener('click', function() {
		var callUsSection = document.getElementById('ContactUsSection');
		callUsSection.scrollIntoView({ behavior: 'smooth' });
	});
});