# MMORPG Lobby Simulation

## Overview
This project simulates an addictive MMORPG lobby, featuring server selection, ASCII character names, loot boxes, a never-ending battle pass, and aggressive microtransactions. Upon entering the game, users will be greeted with a company logo display.

## Features
- **Server Selection**: Users can choose from a list of available servers to join the game.
- **ASCII Character Names**: Players can generate unique ASCII character names with validation.
- **Loot Boxes**: Simulate loot box mechanics, allowing players to open boxes and receive random items.
- **Never-Ending Battle Pass**: Manage user progression through a continuous battle pass system with rewards.
- **Aggressive Microtransactions**: Implement in-game purchases to enhance the gaming experience.
- **Company Logo Display**: Show the company logo upon entering the game, complete with animation.

## Project Structure
```
mmorpg-lobby-sim
├── src
│   ├── index.ts
│   ├── lobby
│   │   ├── serverSelection.ts
│   │   ├── characterNames.ts
│   │   ├── logoDisplay.ts
│   ├── features
│   │   ├── lootBoxes.ts
│   │   ├── battlePass.ts
│   │   └── microtransactions.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mmorpg-lobby-sim
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Compile the TypeScript files:
   ```
   npm run build
   ```
5. Start the simulation:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.