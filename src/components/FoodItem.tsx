export default class FoodItem {
  private name:string;
  private expiryDate:Date;
  private priority?:number;
  private owner?:string;
  private note?:string;
  
  constructor(name:string, expiryDate:Date, priority?:number, 
      owner?:string, note?:string) {
    this.name = name;
    this.expiryDate = expiryDate;
    this.priority = priority;
    this.owner = owner;
    this.note = note
  }
  
  setName(name:string) { this.name = name }
  getName() { return this.name }
  
  setExpiryDate(date: Date) { this.expiryDate = date }
  getExpiryDate() { return this.expiryDate }
  
  setPriority(priority:number) { this.priority = priority }
  getPriority() { return this.priority }
  
  setOwner(owner:string) { this.owner = owner }
  getOwner() { return this.owner }
  
  setNote(note:string) { this.note = note }
  getNote() { return this.note }
  
  setFields(name:string, expiryDate:Date, priority?:number, 
      owner?:string, note?:string) {
    this.name = name;
    this.expiryDate = expiryDate;
    this.priority = priority;
    this.owner = owner;
    this.note = note;
  }
}