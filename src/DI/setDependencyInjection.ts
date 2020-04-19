import { Container } from 'typedi';
import ItemRepository from '../repositories/ItemRepository';

const setDependencyInjection = () => {
  Container.set('ItemRepository', new ItemRepository());
};

setDependencyInjection();
