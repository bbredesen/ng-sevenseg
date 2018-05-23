import { SevenSegModule } from './seven-seg.module';

describe('SevenSegModule', () => {
  let sevenSegModule: SevenSegModule;

  beforeEach(() => {
    sevenSegModule = new SevenSegModule();
  });

  it('should create an instance', () => {
    expect(sevenSegModule).toBeTruthy();
  });
});
