import { createStore } from 'redux'
import { Project } from "../core/entities/project"
import { Action, ActionType } from "./actions"

export interface AppState {
    selectedProject: Project | null
}

const initialState: AppState = {
    selectedProject: null
}

const rootReducer = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case ActionType.SetSelectedProject:
            return { ...state, selectedProject: action.payload as Project }
        default:
            return state
    }
}

const store = createStore(rootReducer)

export default store