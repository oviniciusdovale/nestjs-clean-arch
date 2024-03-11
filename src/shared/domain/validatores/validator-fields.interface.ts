export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldInterface<PropsValidated> {
  errors: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
