export type IArkhamesqueBuild = {
  prefix: string;
  stories: IArkhamesqueStoriesCategory[]
  player: IArkhamesquePlayerCategory[]
  investigators: IArkhamesqueInvestigatorCategory[]
}

export type IArkhamesqueStoriesCategory = IArkhamesqueCategory<IArkhamesqueStory>;
export type IArkhamesquePlayerCategory = IArkhamesqueCategory<IArkhamesquePlayerItem>;
export type IArkhamesqueInvestigatorCategory = IArkhamesqueCategory<IArkhamesqueInvestigator>;

export type IArkhamesqueInvestigator = {
  prefix?: string
  name: string
  code: string
}

export type IArkhamesquePlayerItem = {
  name: string
  type: string
  xp?: number | boolean
  icon?: boolean
  previewIcon?: boolean
  faction?: string
}

export type IArkhamesqueCategory<T> = {
  prefix?: string
  code?: string
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