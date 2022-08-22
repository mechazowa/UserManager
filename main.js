window.addEventListener('load', () => {
	const form = document.querySelector("#new-user-form");
	const input = document.querySelector("#new-user-input");
	const list_el = document.querySelector("#users");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const emailInput = document.getElementById('new-user-input');
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (!emailInput.value.match(emailRegex)) 
		{
			alert('Invalid email address.');
			user_el.classList.remove(emailInput);
		}

		const user = input.value;

		const user_el = document.createElement('div');
		user_el.classList.add('user');

		const user_content_el = document.createElement('div');
		user_content_el.classList.add('content');

		user_el.appendChild(user_content_el);

		const user_input_el = document.createElement('input');
		user_input_el.classList.add('text');
		user_input_el.type = 'text';
		user_input_el.value = user;
		user_input_el.setAttribute('readonly', 'readonly');

		user_content_el.appendChild(user_input_el);

		const user_actions_el = document.createElement('div');
		user_actions_el.classList.add('actions');
		
		const user_edit_el = document.createElement('button');
		user_edit_el.classList.add('edit');
		user_edit_el.innerText = 'Edit';

		const user_delete_el = document.createElement('button');
		user_delete_el.classList.add('delete');
		user_delete_el.innerText = 'Delete';

		user_actions_el.appendChild(user_edit_el);
		user_actions_el.appendChild(user_delete_el);

		user_el.appendChild(user_actions_el);

		list_el.appendChild(user_el);

		input.value = '';

		/*if (list_el === user.value) {
      alert('The name already exist')*/
    }

		user_edit_el.addEventListener('click', (e) => {
			if (user_edit_el.innerText.toLowerCase() == "edit") {
				user_edit_el.innerText = "Save";
				user_input_el.removeAttribute("readonly");
				user_input_el.focus();
			} else {
				user_edit_el.innerText = "Edit";
				user_input_el.setAttribute("readonly", "readonly");
			}
		});

		user_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(user_el);
		});
	});
});
