import { Baitap6Module } from './baitap6.module';

describe('Baitap6Module', () => {
  let baitap6Module: Baitap6Module;

  beforeEach(() => {
    baitap6Module = new Baitap6Module();
  });

  it('should create an instance', () => {
    expect(baitap6Module).toBeTruthy();
  });
});
