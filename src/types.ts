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

type HasCode = {
  code: string
}

type HasMultipleCodes = {
  codes: string[]
}

type WithCode = HasCode | HasMultipleCodes

export type IArkhamesqueStoryScenario = {
  name: string;
} & WithCode;