// @flow

declare var __DEV__: boolean;

const validateFormat = __DEV__
  ? function(format: mixed): void {}
  : function(format: mixed): void {
      if (format === undefined) {
        throw new Error('invariant(...): Second argument must be a string.');
      }
    };

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */
export default function invariant(
  condition: mixed,
  format: string,
  ...args: Array<mixed>
): void {
  validateFormat(format);

  if (!condition) {
    let error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
      );
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, () => String(args[argIndex++])));
      error.name = 'Invariant Violation';
    }

    (error: any).framesToPop = 1; // Skip invariant's own stack frame.
    throw error;
  }
}
