
export interface TaskData {
    task_title   : string;
    task_desc   : string;
    project_id : number;
    qualification : number;
    workenv       : number;
    quality       : number;
    leadtime      : number;
    capacity      : number;
    economic      : number;
    independance  : number;
    capital       : number;
}

export interface SubTask {
  subtaskname: string 
  task_id: number
  subtask_finished: number
}

export interface update_effects{
    qualification: any
    workenv: any
    quality: any
    leadtime: any
    capacity: any
    economic: any
    independance: any
    capital: any
    task_id: number
}

