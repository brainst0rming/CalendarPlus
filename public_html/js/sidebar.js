const main = document.getElementById('sidebar');

// Initializes the main sidebar view
function initializeMain() {
    const createButton = document.createElement('button');
    createButton.type = 'button';
    createButton.id = 'create';
    createButton.innerText = 'Create';
    createButton.addEventListener('click', () => {
        clearSidebar();
        initializeCreate();
    });
    main.appendChild(createButton);
}

// CLears sidebar content
function clearSidebar() {
    main.innerHTML = '';
}

// Initializes the create sidebar
function initializeCreate() {
    // Form creation
    const createForm = document.createElement('form');
    createForm.id = 'manageEvent';

        // Container for form fields
        const formFields = document.createElement('div');
        formFields.className = 'formFields';

            // Field for event name
            const titleField = document.createElement('input');
            titleField.type = 'text';
            titleField.id = 'title';
            titleField.name = 'title';
            titleField.placeholder = 'Title';
            formFields.appendChild(titleField);
            
            // Label for start time field
            const startLabel = document.createElement('label');
            startLabel.innerText = 'Start Time';
            formFields.appendChild(startLabel);

            // Field for start time
            const startTime = document.createElement('input');
            startTime.type = 'datetime-local';
            formFields.appendChild(startTime);

            // Label for end time field
            const endLabel = document.createElement('label');
            endLabel.innerText = 'End Time';
            formFields.appendChild(endLabel);

            // Field for end time
            const endTime = document.createElement('input');
            endTime.type = 'datetime-local';
            formFields.appendChild(endTime);

            // Label for all day checkbox
            const allDayLabel = document.createElement('label');
            allDayLabel.className = 'allday';
            allDayLabel.innerText = 'All Day'

                // Checkbox element
                const allDay = document.createElement('input');
                allDay.type = 'checkbox';
                allDayLabel.appendChild(allDay);

                // Element for custom checkbox (replaces default visually)
                const checkmark = document.createElement('span');
                checkmark.className = 'checkmark';
                allDayLabel.appendChild(checkmark);

            formFields.appendChild(allDayLabel);

            // Field for event location
            const locationField = document.createElement('input');
            locationField.type = 'text';
            locationField.id = 'location';
            locationField.name = 'location';
            locationField.placeholder = 'Location';
            formFields.appendChild(locationField);

            // Field for event description
            const descriptionField = document.createElement('textarea');
            descriptionField.id = 'description';
            descriptionField.name = 'description';
            descriptionField.placeholder = 'Description';
            formFields.appendChild(descriptionField);

        createForm.appendChild(formFields);
        
        // Container for form buttons
        const formButtons = document.createElement('div');
        formButtons.className = 'formButtons';

            // Back button (returns user to main sidebar)
            const backButton = document.createElement('button');
            backButton.type = 'button';
            backButton.id = 'back';
            backButton.innerText = 'Back';
            backButton.addEventListener('click', () => {
                clearSidebar();
                initializeMain();
            });
            formButtons.appendChild(backButton);

            // Save button (saves event)
            const saveButton = document.createElement('button');
            saveButton.id = 'save';
            saveButton.innerText = 'Save';
            formButtons.appendChild(saveButton);

        createForm.appendChild(formButtons);

    main.appendChild(createForm);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

initializeMain();