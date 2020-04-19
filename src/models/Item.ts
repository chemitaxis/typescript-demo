import { v4 as uuidV4 } from 'uuid';
import ItemName from './ValueObject/ItemName';
interface IItem {
  id: string;
  name: ItemName;
}

class Item implements IItem {
  private _id: string;
  public name: ItemName;

  get id(): string {
    return this._id;
  }

  constructor(name: ItemName) {
    this._id = uuidV4();
    this.name = name;
  }
}

export default Item;
export { IItem };
