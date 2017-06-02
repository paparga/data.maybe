type mCata<S,P> = {
  Nothing: (n:void) => S;
  Just: (j: P) => S
}

declare class Maybe<T> {
  
    
  //Comparing and testing
  isNothing: boolean
  isJust: boolean
  isEqual(a: Maybe<T>): boolean
  
      
  //Constructing
  static Nothing<S>(): Maybe<S>
  static Just<S>(a: S): Maybe<S>
  static of<S>(a: S): Maybe<S>
  static fromNullable<S>(a?: S): Maybe<S>
  
  //Converting
  toString<S>(): string
  toJSON<S>(): string  
  
  //Extracting
  getOrElse(a: T): T
  get(): T
  fold<S>(cbNot: (n: void) => S, cbJust: (j:T) => S ): S 
  cata<S>(fnG: mCata<S,T>): S  
  
  //Transforming
  map<S>(fn: (t: T) => S): Maybe<S>
  chain<S>(fn: (t: T) => Maybe<S>): Maybe<S> 
  orElse<S>(fn: () => Maybe<S>): Maybe<S>
  
  //Map N
  map2<S, N>(fn: (t1: T, t2: N) => S, n2: Maybe<N>): Maybe<S>  
  map3<S, N, O>(fn: (t1: T, t2: N, t3: O) => S, n2: Maybe<N>, n3: Maybe<O>): Maybe<S>  
  map4<S, N, O, P>(fn: (t1: T, t2: N, t3: O, t4: P) => S, n2: Maybe<N>, n3: Maybe<O>, n4: Maybe<P>): Maybe<S>  
  map5<S, N, O, P, Q>(fn: (t1: T, t2: N, t3: O, t4: P, t5: Q) => S, n2: Maybe<N>, n3: Maybe<O>, n4: Maybe<P>, n5: Maybe<Q>): Maybe<S>
    
    
}

export default Maybe