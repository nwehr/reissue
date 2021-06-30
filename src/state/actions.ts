import { Project } from "../core/entities/project"

export enum ActionType {
    SetSelectedProject
}

export interface Action {
    type: ActionType
    payload: string | Project
}

export function setSelectedProject(project: Project): Action {
    return {
        type: ActionType.SetSelectedProject
        , payload: project
    }
}