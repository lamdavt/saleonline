import { Baitap8Module } from './baitap8.module';

describe('Baitap8Module', () => {
  let baitap8Module: Baitap8Module;

  beforeEach(() => {
    baitap8Module = new Baitap8Module();
  });

  it('should create an instance', () => {
    expect(baitap8Module).toBeTruthy();
  });
});
