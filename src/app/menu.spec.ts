import { Menu } from './menu';

describe('Menu', () => {
  it('should create an instance', () => {
    expect(new Menu(null, '', null, 0.0)).toBeTruthy();
  });
});
