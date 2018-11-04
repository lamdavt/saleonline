import { Baitap2Module } from './baitap2.module';

describe('Baitap2Module', () => {
  let baitap2Module: Baitap2Module;

  beforeEach(() => {
    baitap2Module = new Baitap2Module();
  });

  it('should create an instance', () => {
    expect(baitap2Module).toBeTruthy();
  });
});
