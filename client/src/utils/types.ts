export interface IAbsences {
    absences: string[];
  }
  
  export interface IAbsencesActionModel {
    type: string;
    payload: IAbsences | any;
  }
  
  export interface IMembers {
    members: string[];
  }
  
  export interface IMembersActionModel {
    type: string;
    payload: IMembers | any;
  }
  