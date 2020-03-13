import {isFirstStringBiggerSecond} from '@/components/BinarTree/comparators';

describe(`isFirstStringBiggerSecond`, () => {
  describe(`must compare two stings`, () => {
    describe(`first string is BIGGER then second if`, () => {
      describe(`if alphabet order first is bigger then second`, () => {

        describe(`positive cases `, () => {
          it(`test case 1`, () => {
            const firstStr = 'dde';
            const secondStrLess = 'bgws';
            expect(isFirstStringBiggerSecond(firstStr, secondStrLess)).toBe(true);
          });

          it(`test case 2`, () => {
            const firstStr = 'gaw';
            const secondStrLess = 'd123';
            expect(isFirstStringBiggerSecond(firstStr, secondStrLess)).toBe(true);
          });
        });

        describe(`negative cases`, () => {
          it(`test case 1`, () => {
            const firstStr = 'abc';
            const secondStrLess = 'qaw';
            expect(isFirstStringBiggerSecond(firstStr, secondStrLess)).toBe(false);
          });

          it(`test case 1`, () => {
            const firstStr = 'abc';
            const secondStrLess = 'dde';
            expect(isFirstStringBiggerSecond(firstStr, secondStrLess)).toBe(false);
          });
        });
      });
    });
  });
});
