const fs = require('fs');

// Define the content for the .env file
const envContent = `
PUBLIC_KEY=YQ23rUiqdgWnfQdV9
PRIVATE_KEY=rLWUS9VZ5S5NeQDjZ5abm
`;

// Write the content to the .env file
fs.writeFile('.env', envContent.trim(), (err) => {
    if (err) {
        console.error('Error writing to .env file:', err);
    } else {
        console.log('.env file created successfully!');
    }
});
