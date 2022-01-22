export type StakingType<g> = {
  data: {
    [value:number]: g[];
  };
  count: number;
  loading: boolean;
}

export type DelegationType = {
  validator: string;
  amount: TokenUnit;
  reward: TokenUnit;
}

export type UnbondingType = {
  validator: string;
  entries: {
    amount: TokenUnit;
    completionTime: string;
  }[];
}

export type DelegationsType = StakingType<DelegationType>;
export type UnbondingsType = StakingType<UnbondingType>;

export type StakingState = {
  tab: number;
  delegations: DelegationsType;
  unbondings: UnbondingsType;
}