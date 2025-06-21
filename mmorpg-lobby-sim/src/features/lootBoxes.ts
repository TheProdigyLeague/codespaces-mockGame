export class LootBox {
    private lootItems: string[];

    constructor() {
        this.lootItems = [
            "Rare Sword",
            "Epic Shield",
            "Legendary Armor",
            "Health Potion",
            "Mana Potion",
            "Gold Coins"
        ];
    }

    openLootBox(): string {
        const randomIndex = Math.floor(Math.random() * this.lootItems.length);
        return this.lootItems[randomIndex];
    }

    getLootItems(): string[] {
        return this.lootItems;
    }
}