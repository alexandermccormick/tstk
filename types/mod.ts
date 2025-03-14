/**
 * Make all properties in T required
 */
export type Concrete<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Returns the type of Object values
 */
export type ValueOf<T> = T[keyof T];
