import { Container } from 'typedi';

import './src/DI/setDependencyInjection';

import ItemService from './src/services/ItemService';

const service = new ItemService(Container.get('ItemRepository'));

service.createItem('Item 1');
service.createItem('Item 2');

service.printItems();
