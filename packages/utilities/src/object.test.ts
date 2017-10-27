import { assign, filteredAssign, mapEnumByName, deepMerge } from './object';

describe('assign', () => {
  it('can copy an object', () => {
    let source = {
      a: 1,
      b: 'string',
      c: {
        d: 2
      }
    };

    let resultTarget = {};
    let result = assign(resultTarget, source);

    expect(result).not.toBe(source);
    expect(result).toBe(resultTarget);
    expect(result).toEqual(source);
  });
});

describe('filteredAssign', () => {
  it('can copy an object but avoid copying some parameters', () => {
    let source = {
      a: 1,
      b: 'string'
    };
    let result = filteredAssign((propName: string) => propName !== 'b', {}, source);

    expect(result.a).toEqual(1);
    expect(result.b).toBeUndefined();
  });
});

describe('mapEnumByName', () => {
  it('iterates over all the strings of an enum', () => {
    enum foo {
      first,
      second,
      third,
      fourth
    }

    let result: string[] = [];
    mapEnumByName(foo, (name: string) => {
      if (name) {
        result.push(name);
      } else {
        expect(name).not.toBeFalsy;
      }
    });

    expect(result).toEqual(['first', 'second', 'third', 'fourth']);
  });
});

describe('deepMerge', () => {
  it('merges two objects with nested objects', () => {
    const target = {
      small: {
        size: 6
      },
      medium: {
        font: 'times',
        size: 12,
        options: {
          color: 'green',
          underline: true
        }
      }
    };

    const source = {
      small: {
        font: 'arial'
      },
      medium: {
        font: 'helvetica',
        weight: 300,
        options: {
          color: 'red',
          hover: 'orange'
        }
      },
      large: {
        size: 20
      }
    };

    /**
     * Expected result should have:
     *  1. All the properties of `source`, including nested objects
     *  2. Properties of `target` that are not in `source` (therefore not overwritten)
     */
    const expected = {
      small: {
        font: 'arial',
        size: 6
      },
      medium: {
        font: 'helvetica',
        size: 12,
        weight: 300,
        options: {
          color: 'red',
          hover: 'orange',
          underline: true
        }
      },
      large: {
        size: 20
      }
    };

    const result = deepMerge(target, source);
    expect(result).toEqual(expected);

  });
});