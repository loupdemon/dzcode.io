import { FilterDto } from "@dzcode.io/api/dist/contribution/types";
import { Model } from "@dzcode.io/models/dist/_base";
import { ContributionEntity } from "@dzcode.io/models/dist/contribution";
import { LOADABLE } from "@dzcode.io/utils/dist/loadable";

import { Action } from "../..";

export interface ContributeScreenState {
  filters: FilterDto[] | null;
  contributions: LOADABLE<Model<ContributionEntity, "project">[]>;
  refreshing: boolean;
}

export const contributeScreen = (
  state: ContributeScreenState = {
    filters: null,
    contributions: null,
    refreshing: false,
  },
  action: Action<ContributeScreenState>,
) => {
  switch (action.type) {
    case "UPDATE_CONTRIBUTE_SCREEN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
