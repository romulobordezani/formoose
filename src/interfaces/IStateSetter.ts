export type Dispatch<A> = (value: A) => void

export type SetStateAction<State> = State | ((prevState: State) => State); 

export type IStateSetter<State> = Dispatch<SetStateAction<State>>