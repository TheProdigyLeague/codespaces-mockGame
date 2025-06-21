export interface Server {
    id: string;
    name: string;
    playerCount: number;
    maxPlayers: number;
}

export interface Character {
    id: string;
    name: string;
    level: number;
    experience: number;
}

export interface LootItem {
    id: string;
    name: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
    description: string;
}