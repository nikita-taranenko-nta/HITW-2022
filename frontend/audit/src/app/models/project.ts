import {APrioriQuestion} from "../enums/a-priori-question";
import { TermsOfUse } from "./terms-of-use";

export class Project {
  public id: string;
  public personId: string;
  public productiveUnit: string;
  public country: string;
  public region: string;
  public municipality: string;
  public producer: string;
  public contactDetails: string;
  public confidentialInformation: string;
  public preAssessment: Map<APrioriQuestion, string>;
  public termsOfUse: TermsOfUse;
}