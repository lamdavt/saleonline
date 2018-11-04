import { Baitap4Module } from './baitap4.module';

describe('Baitap4Module', () => {
  let baitap4Module: Baitap4Module;

  beforeEach(() => {
    baitap4Module = new Baitap4Module();
  });

  it('should create an instance', () => {
    expect(baitap4Module).toBeTruthy();
  });
});
