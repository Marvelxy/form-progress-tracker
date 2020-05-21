(function() {
	//progress-color
	let progress = document.querySelector('#progress-color');
	let progressCount = 0;

	//name.onfocus = inputFocus;
	//name.onblur = inputBlur;

	let name = document.querySelector('#name');
	let nameCheckBox = document.querySelector('#name-checkbox');

	name.addEventListener('blur', function(){
		if(name.value){
			progressCount += 20;
		  	progress.classList.add('p'+progressCount);
		  	nameCheckBox.checked = true;
		}
		else{
			progressCount -= 20;
		  	clearProgress();
		  	progress.classList.add('p'+progressCount);
		  	nameCheckBox.checked = false;
		}
	});


	let email = document.querySelector('#email');
	let emailCheckBox = document.querySelector('#email-checkbox');

	email.addEventListener('blur', function(){
		if(email.value){
			progressCount += 20;
		  	progress.classList.add('p'+progressCount);
		  	emailCheckBox.checked = true;
		}
		else{
			progressCount -= 20;
			clearProgress();
		  	progress.classList.remove('p20');
		  	emailCheckBox.checked = false;
		}
	});


	let phone = document.querySelector('#phone');
	let phoneCheckBox = document.querySelector('#phone-checkbox');

	phone.addEventListener('blur', function(){
		if(phone.value){
			progressCount += 20;
		  	progress.classList.add('p'+progressCount);
		  	phoneCheckBox.checked = true;
		}
		else{
			progressCount -= 20;
			clearProgress();
		  	progress.classList.remove('p20');
		  	phoneCheckBox.checked = false;
		}
	});


	let website = document.querySelector('#website');
	let websiteCheckBox = document.querySelector('#website-checkbox');

	website.addEventListener('blur', function(){
		if(website.value){
			progressCount += 20;
		  	progress.classList.add('p'+progressCount);
		  	websiteCheckBox.checked = true;
		}
		else{
			progressCount -= 20;
			clearProgress();
		  	progress.classList.remove('p20');
		  	websiteCheckBox.checked = false;
		}
	});


	let notes = document.querySelector('#notes');
	let notesCheckBox = document.querySelector('#notes-checkbox');

	notes.addEventListener('blur', function(){
		if(notes.value){
			progressCount += 20;
		  	progress.classList.add('p'+progressCount);
		  	notesCheckBox.checked = true;
		}
		else{
			progressCount -= 20;
			clearProgress();
		  	progress.classList.remove('p20');
		  	notesCheckBox.checked = false;
		}
	});

	/*function inputFocus() {
	  //name.value = 'Focus is here';
	}*/

	function inputBlur() {
	  //name.value = 'Focus has been lost';
	  if(name.value){
	  	progress.classList.add('p10');
	  	//nameCheckBox.setAttribute('checked', 'checked');
	  	nameCheckBox.checked = true;
	  }
	  else{
	  	progress.classList.remove('p10');
	  	//nameCheckBox.setAttribute('checked', 'unchecked');
	  	nameCheckBox.checked = false;
	  }

	  console.log()
	}



	function clearProgress(){
		let progressBar = document.querySelector('#progress-color');
		progressBar.classList.remove('p20', 'p40', 'p60', 'p80', 'p100');
	}

})();