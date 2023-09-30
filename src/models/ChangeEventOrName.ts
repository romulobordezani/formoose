import { ChangeEvent } from 'react';

export type ChangeEventOrName = string | ChangeEvent<HTMLInputElement | HTMLSelectElement>;
