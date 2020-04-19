class ItemName {
  private _name: string;
  public get value() {
    return this._name;
  }

  constructor(name: string) {
    this.validate(name);
  }

  private validate(name: string) {
    if (name.length < 3) {
      throw new Error('Name too short');
    }
  }
}

export default ItemName;
