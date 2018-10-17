import * as CSS from "csstype";

export declare type CSSBaseObject = CSS.PropertiesFallback<number | string>;

export declare type CSSPseudoObject = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSOthersObject {
  [propertiesName: string]: Interpolation;
}

export interface CSSObject
  extends CSSBaseObject,
    CSSPseudoObject,
    CSSOthersObject {}

export interface ArrayInterpolation extends Array<Interpolation> {}

export declare type Interpolation =
  | undefined
  | null
  | boolean
  | string
  | number
  | TemplateStringsArray
  | CSSObject
  | ArrayInterpolation;

export { default, default as reset } from "./reset.css.object";
export { default as normalize } from "./normalize.css.object";
