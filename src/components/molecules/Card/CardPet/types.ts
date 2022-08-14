export interface ICardPet {
  id:number
  idpost:number
  img: string
  name: string
  features: Array<string>
  address: string
  origin: string
  saved?: boolean;
}

export interface ISavedDialog {
  name: string;
  open: boolean;
  onClose: (value: boolean) => void;
}
