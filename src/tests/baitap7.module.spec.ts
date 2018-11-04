import { Baitap7Module } from './baitap7.module';

describe('Baitap7Module', () => {
  let baitap7Module: Baitap7Module;

  beforeEach(() => {
    baitap7Module = new Baitap7Module();
  });

  it('should create an instance', () => {
    expect(baitap7Module).toBeTruthy();
  });
});
