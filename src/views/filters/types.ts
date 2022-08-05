export type IFiltersFormValues = {
  type: string
  race: string
  size: string
  fromYou: number
  age: Array<number>
}

export interface IFiltersForm {
  onSubmit: (values: IFiltersFormValues) => void
}
