export class BattlePass {
    private level: number;
    private rewards: string[];

    constructor() {
        this.level = 0;
        this.rewards = [];
    }

    public progressPass(): void {
        this.level++;
        this.rewards.push(`Reward for level ${this.level}`);
    }

    public claimReward(): string | null {
        if (this.level > 0) {
            const reward = this.rewards.pop();
            return reward ? `Claimed: ${reward}` : null;
        }
        return null;
    }

    public getCurrentLevel(): number {
        return this.level;
    }

    public getRewards(): string[] {
        return this.rewards;
    }
}