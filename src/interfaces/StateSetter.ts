export type Dispatch<A> = (value: A) => void

export type SetStateAction<State> = State | ((prevState: State) => State); 

export type StateSetter<State> = Dispatch<SetStateAction<State>>;