export class Microtransaction {
    private transactionHistory: Array<{ item: string; amount: number; date: Date }> = [];

    constructor() {}

    purchaseItem(item: string, amount: number): string {
        this.transactionHistory.push({ item, amount, date: new Date() });
        return `Purchased ${item} for $${amount.toFixed(2)}`;
    }

    getTransactionHistory(): Array<{ item: string; amount: number; date: Date }> {
        return this.transactionHistory;
    }
}