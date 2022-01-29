export interface iFocus {
  focus: boolean;
}
export interface iNavBarItem {
  menuItem: string;
  subMenuItem?: string[];
  icon?: React.ReactComponentElement<any>;
}
export interface iNavItems {
  menuItem: string;
  subMenuItem?: string[];
  icon?: React.ReactComponentElement<any>;
}
export interface iMenu {
  visibility: boolean;
  listItem: any;
  icon?: React.ReactComponentElement<any>;
}
export interface IShow {
  show: boolean;
}
