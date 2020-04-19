import Item from '../models/Item';
import { IItemRepository } from '../repositories/ItemRepository';
import ItemName from '../models/ValueObject/ItemName';
interface IItemService {
  findItem(id: string): void;
  createItem(itemName: string): void;
  printItems(): void;
  count(): Number;
}
class ItemService implements IItemService {
  private _itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this._itemRepository = itemRepository;
  }
  findItem(id: string): void {
    this._itemRepository.find(id);
  }
  createItem(itemName: string): void {
    this._itemRepository.add(new Item(new ItemName(itemName)));
  }
  printItems(): void {
    const items = this._itemRepository.list();
    console.log(items);
  }

  count(): Number {
    return this._itemRepository.count();
  }
}

export default ItemService;
export { IItemService };
