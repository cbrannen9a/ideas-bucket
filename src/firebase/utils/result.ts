export const ok = <T, E>(value: T): Result<T, E> => new Ok(value);

export const err = <T, E>(error: E): Result<T, E> => new Err(error);

export type Result<T, E> =
  | Ok<T, E> // contains a success value of type T
  | Err<T, E>; // contains a failure value of type E

export class Ok<T, E> {
  constructor(readonly value: T) {}

  isOk(): this is Ok<T, E> {
    return true;
  }

  isErr(): this is Err<T, E> {
    return !this.isOk();
  }

  map<A>(f: (t: T) => A): Result<A, E> {
    return ok(f(this.value));
  }

  mapErr<U>(_f: (e: E) => U): Result<T, U> {
    return ok(this.value);
  }

  // add info on how this is really useful for converting a
  // Result<Result<T, E2>, E1>
  // into a Result<T, E2>
  andThen<U>(f: (t: T) => Result<U, E>): Result<U, E> {
    return f(this.value);
  }

  async asyncMap<U>(f: (t: T) => Promise<U>): Promise<Result<U, E>> {
    const newInner = await f(this.value);

    return ok(newInner);
  }

  match = <A>(ok: (t: T) => A, _err: (e: E) => A): A => {
    return ok(this.value);
  };

  _unsafeUnwrap(): T {
    return this.value;
  }

  _unsafeUnwrapErr(): E {
    throw new Error("Called `_unsafeUnwrapErr` on an Ok");
  }
}

export class Err<T, E> {
  constructor(readonly error: E) {}

  isOk(): this is Ok<T, E> {
    return false;
  }

  isErr(): this is Err<T, E> {
    return !this.isOk();
  }

  map<A>(_f: (t: T) => A): Result<A, E> {
    return err(this.error);
  }

  mapErr<U>(f: (e: E) => U): Result<T, U> {
    return err(f(this.error));
  }

  andThen<U>(_f: (t: T) => Result<U, E>): Result<U, E> {
    return err(this.error);
  }

  async asyncMap<U>(_f: (t: T) => Promise<U>): Promise<Result<U, E>> {
    return err(this.error);
  }

  match = <A>(_ok: (t: T) => A, err: (e: E) => A): A => {
    return err(this.error);
  };

  _unsafeUnwrap(): T {
    throw new Error("Called `_unsafeUnwrap` on an Err");
  }

  _unsafeUnwrapErr(): E {
    return this.error;
  }
}
