export interface ICardPet {
  img: string;
  name: string;
  features: Array<string>;
  address: string;
  saved?: boolean;
}

export interface ISavedDialog {
  name: string;
  open: boolean;
  onClose: (value: boolean) => void;
}
