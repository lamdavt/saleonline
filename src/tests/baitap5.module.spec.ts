import { Baitap5Module } from './baitap5.module';

describe('Baitap5Module', () => {
  let baitap5Module: Baitap5Module;

  beforeEach(() => {
    baitap5Module = new Baitap5Module();
  });

  it('should create an instance', () => {
    expect(baitap5Module).toBeTruthy();
  });
});
