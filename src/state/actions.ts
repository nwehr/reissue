import { Project } from "../core/entities/project"

export enum ActionType {
    SetSelectedProject
    , SetNumProjects
}

export interface Action {
    type: ActionType
    payload: string | number | Project
}

export function setSelectedProject(project: Project): Action {
    return {
        type: ActionType.SetSelectedProject
        , payload: project
    }
}

export function setNumProjects(numProjects: number): Action {
    return {
        type: ActionType.SetNumProjects
        , payload: numProjects
    }
}