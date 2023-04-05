export interface Transaction {
  hash: string,
  blockNumber: number,
  from: string,
  to: string,
  value: number,
  confirmations: number,
  sentAt: Date,
  fee: string,
}
