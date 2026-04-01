import type { TodosState } from "../feature/todoList";
import type { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
	try {
		const appState = JSON.stringify({
      todoList: state.todoList,
    }
);
		localStorage.setItem('appState', appState);
	} catch (error) {
		console.warn(error);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const appState = localStorage.getItem('appState');
		if (!appState) return undefined;
		return JSON.parse(appState) as { todoList: TodosState };
	} catch (error) {
		console.warn(error);
    return undefined
	}
};