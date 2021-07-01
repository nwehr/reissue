import { Project } from "../core/entities/project"

export enum ActionType {
    SetSelectedProject
    , SetNumProjects
    , IncrementCreatedIssues
}

export interface Action {
    type: ActionType
    payload: string | number | Project
}

export const setSelectedProject = (project: Project): Action => {
    return {
        type: ActionType.SetSelectedProject
        , payload: project
    }
}

export const setNumProjects = (numProjects: number): Action => {
    return {
        type: ActionType.SetNumProjects
        , payload: numProjects
    }
}

export const incrementCreatedIssues = (numIssues: number): Action => {
    return {
        type: ActionType.IncrementCreatedIssues
        , payload: 1
    }
}