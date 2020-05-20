(function() {
	//progress-color
	let name = document.querySelector('#name');
	let progress = document.querySelector('#progress-color');

	let nameCheckBox = document.querySelector('#name-checkbox');

	name.onfocus = inputFocus;
	name.onblur = inputBlur;

	function inputFocus() {
	  //name.value = 'Focus is here';
	}

	function inputBlur() {
	  //name.value = 'Focus has been lost';
	  if(name.value){
	  	progress.classList.add('p10');
	  	nameCheckBox.setAttribute('checked', 'checked');
	  }

	  console.log()
	}

})();