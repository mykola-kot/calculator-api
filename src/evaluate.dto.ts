import {
  IsDefined,
  IsNotEmpty,
  IsString,
  Matches,
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class ContainsOperatorConstraint
  implements ValidatorConstraintInterface
{
  validate(expression: string) {
    return /[+\-*/]/.test(expression);
  }

  defaultMessage() {
    return 'Expression must contain at least one operator (+, -, *, /)';
  }
}

export function ContainsOperator(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ContainsOperatorConstraint,
    });
  };
}

export class EvaluateDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9+\-*/.() ]+$/, {
    message: 'Expression can only contain numbers, +, -, *, /, (, ) and spaces',
  })
  @ContainsOperator()
  expression!: string;
}
