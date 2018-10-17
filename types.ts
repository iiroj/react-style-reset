import * as CSS from "csstype";

export type CSSBaseObject = CSS.PropertiesFallback<number | string>;

export type CSSPseudoObject = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSOthersObject {
  [propertiesName: string]: Interpolation;
}

export interface CSSObject
  extends CSSBaseObject,
    CSSPseudoObject,
    CSSOthersObject {}

export interface ArrayInterpolation extends Array<Interpolation> {}

export type Interpolation =
  | undefined
  | null
  | boolean
  | string
  | number
  | TemplateStringsArray
  | CSSObject
  | ArrayInterpolation;
