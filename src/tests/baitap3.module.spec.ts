import { Baitap3Module } from './baitap3.module';

describe('Baitap3Module', () => {
  let baitap3Module: Baitap3Module;

  beforeEach(() => {
    baitap3Module = new Baitap3Module();
  });

  it('should create an instance', () => {
    expect(baitap3Module).toBeTruthy();
  });
});
