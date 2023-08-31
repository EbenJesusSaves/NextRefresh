import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface searchBoysProps {
  king: () => boolean;
  array: string[];
}

// so to return type give a semicolon and write the type you wanna return

export interface searchMeProps<T> {
  array: T[];
}
