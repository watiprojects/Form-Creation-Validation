//Declare an async function called fetchUserData

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    //select data container element
    const dataContainer = document.getElementById('api-data');

    //fetch data using try-catch
    try {
        const response = await fetch (apiUrl);
        const users = await response.json();

        //Clear the loading data message
        dataContainer.innerHTML = '';

        //Create and Append User List
        const userList = document.createElement('ul');

        //Add user list to data container
        dataContainer.appendChild(userList);

        users.forEach(user => {
            const newItem = document.createElement('li');

            //add list item to the list
            userList.appendChild(newItem);

            //add text to the list
            newItem.textContent = user.name;
        });

    } catch (error) {

        //Clear the loading data message
        dataContainer.innerHTML = '';

        dataContainer.textContent = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);


