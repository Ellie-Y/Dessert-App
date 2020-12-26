import { add, update, increaseOne, decreaseOne, deleteItem } from './cartSlice';

const mockObj = [
  {
    chosenItem: {
      id: 2,
      pid: '11',
      name: 'Cup Cake',
    },
    count: 6,
  },
];

test('Reducer delete item', () => {
  const result = deleteItem(mockObj, { payload: 2 });
  console.log(result);
  expect(result).toBeTruthy();
});
