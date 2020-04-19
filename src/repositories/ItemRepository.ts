import { IItem } from '../models/Item';

interface IItemRepository {
  find(id: string): void;
  add(item: any): void;
  list(): Array<IItem>;
  count(): Number;
}

class ItemRepository implements IItemRepository {
  private data: Array<IItem>;

  constructor() {
    this.data = [];
  }
  find(id: string) {
    this.data.filter((item) => item.id === id);
  }
  add(item: IItem) {
    this.data.push(item);
  }

  list() {
    return this.data;
  }

  count(): Number {
    return this.data.length;
  }
}

export default ItemRepository;
export { IItemRepository };
