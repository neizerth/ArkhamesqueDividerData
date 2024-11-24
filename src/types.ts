export type IArkhamesqueBuild = {
  prefix: string;
  stories: IArkhamesqueCategory<IArkhamesqueStory>[]
  player: IArkhamesqueCategory<IArkhamesquePlayerItem>[]
}

export type IArkhamesquePlayerItem = {
  name: string;
  type: string;
  xp?: number;
}

export type IArkhamesqueCategory<T> = {
  prefix?: string;
  data: T[]
}

export type IArkhamesqueStory = {
  code: string;
  name: string;
  return_name?: string;
  scenarios?: IArkhamesqueStoryScenario[]
  campaigns?: Array<{
    id: string
    name: string
  }>
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