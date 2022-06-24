import {ProjectInfo} from "./project-info";
import {APrioriQuestion} from "../enums/a-priori-question";

export class Project {
  public id: string;
  public projectInfo: ProjectInfo;
  public preAssessment: Map<APrioriQuestion, string>;
}