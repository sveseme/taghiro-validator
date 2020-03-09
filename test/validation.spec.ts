import { NonEmpty, withGood, vNotEmpty } from 'taghiro';
import { Result, Success } from '../src/validator/results';
import { ErrorMessage } from '../src/validator/validator';

describe('Validator', () => {
  it('should validate all successes to Success', async () => {
    const r: Result<string, ErrorMessage> = withGood(
      (s1: (string & NonEmpty) | undefined, s2: (string & NonEmpty) | undefined): string => {
        if (s1 && s2) {
          return s1 + s2;
        } else if (s1) {
          return s1;
        } else if (s2) {
          return s2;
        } else {
          return '';
        }
      },
      vNotEmpty('hello'),
      vNotEmpty('world'),
    );
    expect((r as Success<string>).value).toEqual('helloworld');
  });
});
