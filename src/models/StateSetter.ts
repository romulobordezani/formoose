/**
 * @category Types and Interfaces
 */
export type Dispatch<A> = (value: A) => void;

/**
 * @category Types and Interfaces
 */
export type SetStateAction<State> = State | ((prevState: State) => State);

/**
 * @category Types and Interfaces
 */
export type StateSetter<State> = Dispatch<SetStateAction<State>>;
