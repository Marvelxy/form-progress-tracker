(function() {
	// progress-color
	let progress = document.querySelector('#progress-color');
	let progressCount = 0;

	let nameValProgress = [0];
	let emailValProgress = [0];
	let phoneNumberValProgress = [0];
	let websiteValProgress = [0];
	let notesValProgress = [0];

	let name = document.querySelector('#name');
	let nameCheckBox = document.querySelector('#name-checkbox');

	name.addEventListener('change', ()=>{
		/*if(name.value.length > 0 && nameValProgress < 20){
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
		}*/

		processProgress(name, nameCheckBox, nameValProgress);
	});

	
	let email = document.querySelector('#email');
	let emailCheckBox = document.querySelector('#email-checkbox');

	email.addEventListener('change', function(){
		processProgress(email, emailCheckBox, emailValProgress);
	});


	let phone = document.querySelector('#phone');
	let phoneCheckBox = document.querySelector('#phone-checkbox');

	phone.addEventListener('change', function(){
		processProgress(phone, phoneCheckBox, phoneNumberValProgress);
	});


	
	let website = document.querySelector('#website');
	let websiteCheckBox = document.querySelector('#website-checkbox');

	website.addEventListener('change', function(){
		processProgress(website, websiteCheckBox, websiteValProgress);
	});

	
	let notes = document.querySelector('#notes');
	let notesCheckBox = document.querySelector('#notes-checkbox');

	notes.addEventListener('change', function(){
		processProgress(notes, notesCheckBox, notesValProgress);
	});
	


	function clearProgress(){
		let progressBar = document.querySelector('#progress-color');
		progressBar.classList.remove('p20', 'p40', 'p60', 'p80', 'p100');
	}

	function processProgress(element, elementCheckbox, elementValProgress){
		if(name.value.length > 0 && elementValProgress[0] < 20){
			progressCount += 20;
			elementValProgress[0] += 20;
		  	progress.classList.add('p' + progressCount);
		  	elementCheckbox.checked = true;
		}
		else if(name.value.length < 1 ){
			clearProgress();
			progressCount -= 20;
			elementValProgress[0] -= 20
		  	progress.classList.add('p'+progressCount);
		  	elementCheckbox.checked = false;
		}
	}

})();