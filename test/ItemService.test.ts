import ItemService from '../src/services/ItemService';
import { Container } from 'typedi';
import MockRepository from './mocks/MockItemRepository';

beforeEach(() => {
  Container.set('ItemRepository', new MockRepository());
});

test('Add item', () => {
  const service = new ItemService(Container.get('ItemRepository'));
  service.createItem('Chema');
  expect(service.count()).toEqual(1);
});

test('Add item with short name', () => {
  const service = new ItemService(Container.get('ItemRepository'));
  expect(() => {
    service.createItem('SH');
  }).toThrowError('Name too short');
});
