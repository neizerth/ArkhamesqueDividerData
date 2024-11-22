export type IArkhamesqueBuild = {
  prefix: string;
  stories: IArkhamesqueCategory[]
}

export type IArkhamesqueCategory = {
  prefix?: string;
  data: IArkhamesqueStory[]
}

export type IArkhamesqueStory = {
  code: string;
  name: string;
  return_name?: string;
  scenarios?: IArkhamesqueStoryScenario[]
}

export type IArkhamesqueStoryScenarioWithCode = IBaseScenario & {
  code: string
}

export type IArkhamesqueStoryScenarioWithMultipleCodes = IBaseScenario & {
  codes: string[]
}

export type IBaseScenario = {
  name: string;
  number_text?: string;
}

export type IArkhamesqueStoryScenario = IArkhamesqueStoryScenarioWithCode | IArkhamesqueStoryScenarioWithMultipleCodes;