// This file initializes the lobby simulation and handles user interactions for server selection and character naming.

import { selectServer } from './lobby/serverSelection';
import { generateAsciiName } from './lobby/characterNames';
import { displayLogo } from './lobby/logoDisplay';

function initLobby() {
    displayLogo();
    
    const server = selectServer();
    const characterName = generateAsciiName();

    console.log(`Welcome to the MMORPG Lobby! You have selected the server: ${server}`);
    console.log(`Your character name is: ${characterName}`);
}

initLobby();