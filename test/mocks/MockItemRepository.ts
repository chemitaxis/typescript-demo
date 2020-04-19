import { IItem } from '../../src/models/Item';
import { IItemRepository } from '../../src/repositories/ItemRepository';

class MockRepository implements IItemRepository {
  private data: Array<IItem>;

  constructor() {
    this.data = [];
  }
  count(): Number {
    return this.data.length;
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
}

export default MockRepository;
export { IItemRepository };
