function selectServer(servers: string[], onSelect: (server: string) => void): void {
    console.log("Available Servers:");
    servers.forEach((server, index) => {
        console.log(`${index + 1}: ${server}`);
    });

    const userInput = prompt("Select a server by number: ");
    const selectedServerIndex = parseInt(userInput) - 1;

    if (selectedServerIndex >= 0 && selectedServerIndex < servers.length) {
        const selectedServer = servers[selectedServerIndex];
        console.log(`You have selected: ${selectedServer}`);
        onSelect(selectedServer);
    } else {
        console.log("Invalid selection. Please try again.");
    }
}

export { selectServer };