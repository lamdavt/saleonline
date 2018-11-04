import { Baitap1Module } from './baitap1.module';

describe('Baitap1Module', () => {
  let baitap1Module: Baitap1Module;

  beforeEach(() => {
    baitap1Module = new Baitap1Module();
  });

  it('should create an instance', () => {
    expect(baitap1Module).toBeTruthy();
  });
});
