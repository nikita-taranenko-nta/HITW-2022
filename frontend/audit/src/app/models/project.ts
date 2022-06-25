import {ProjectInfo} from "./project-info";
import {APrioriQuestion} from "../enums/a-priori-question";
import { TermsOfUse } from "./terms-of-use";

export class Project {
  public id: string;
  public projectInfo: ProjectInfo;
  public preAssessment: Map<APrioriQuestion, string>;
  public termsOfUse: TermsOfUse;
}