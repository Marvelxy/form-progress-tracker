(function() {
	//progress-color
	let progress = document.querySelector('#progress-color');
	let progressCount = 0;

	let nameValProgress = 0;
	let emailValProgress = 0;
	let phoneNumberValProgress = 0;
	let websiteValProgress = 0;
	let notesValProgress = 0;

	let name = document.querySelector('#name');
	let nameCheckBox = document.querySelector('#name-checkbox');

	name.addEventListener('change', ()=>{
		if(name.value.length > 0 && nameValProgress < 20){
			progressCount += 20;
			nameValProgress += 20;
		  	progress.classList.add('p' + progressCount);
		  	nameCheckBox.checked = true;
		}
		else if(name.value.length < 1 ){
			clearProgress();
			progressCount -= 20;
			nameValProgress -= 20
		  	progress.classList.add('p'+progressCount);
		  	nameCheckBox.checked = false;
		}
	});

	
	let email = document.querySelector('#email');
	let emailCheckBox = document.querySelector('#email-checkbox');

	email.addEventListener('change', function(){
		if(email.value.length > 0 && emailValProgress < 20){
			progressCount += 20;
			emailValProgress += 20;
		  	progress.classList.add('p' + progressCount);
		  	emailCheckBox.checked = true;
		}
		else if(email.value.length < 1 ){
			clearProgress();
			progressCount -= 20;
			emailValProgress -= 20
		  	progress.classList.add('p'+progressCount);
		  	emailCheckBox.checked = false;
		}
	});


	let phone = document.querySelector('#phone');
	let phoneCheckBox = document.querySelector('#phone-checkbox');

	phone.addEventListener('change', function(){
		if(phone.value.length > 0 && phoneNumberValProgress < 20){
			progressCount += 20;
			phoneNumberValProgress += 20;
		  	progress.classList.add('p' + progressCount);
		  	phoneCheckBox.checked = true;
		}
		else if(phone.value.length < 1 ){
			clearProgress();
			progressCount -= 20;
			phoneNumberValProgress -= 20
		  	progress.classList.add('p'+progressCount);
		  	phoneCheckBox.checked = false;
		}
	});


	
	let website = document.querySelector('#website');
	let websiteCheckBox = document.querySelector('#website-checkbox');

	website.addEventListener('change', function(){
		if(website.value.length > 0 && websiteValProgress < 20){
			progressCount += 20;
			websiteValProgress += 20;
		  	progress.classList.add('p' + progressCount);
		  	websiteCheckBox.checked = true;
		}
		else if(website.value.length < 1 ){
			clearProgress();
			progressCount -= 20;
			websiteValProgress -= 20
		  	progress.classList.add('p'+progressCount);
		  	websiteCheckBox.checked = false;
		}
	});

	
	let notes = document.querySelector('#notes');
	let notesCheckBox = document.querySelector('#notes-checkbox');

	notes.addEventListener('change', function(){
		if(notes.value.length > 0 && notesValProgress < 20){
			progressCount += 20;
			notesValProgress += 20;
		  	progress.classList.add('p' + progressCount);
		  	notesCheckBox.checked = true;
		}
		else if(notes.value.length < 1 ){
			clearProgress();
			progressCount -= 20;
			notesValProgress -= 20
		  	progress.classList.add('p'+progressCount);
		  	notesCheckBox.checked = false;
		}
	});
	


	function clearProgress(){
		let progressBar = document.querySelector('#progress-color');
		progressBar.classList.remove('p20', 'p40', 'p60', 'p80', 'p100');
	}

})();