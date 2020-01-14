import * as  actions from './actions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('actions', () => {
    describe('add todo', () => {
        it('dispatches an ADD_TODO function', () => {
            const store = mockStore([]);
            const addTodoAction = actions.addTodo('some text');
            expect(addTodoAction).toEqual({
                type: 'ADD_TODO',
                id: 0,
                text: 'some text'
            });
            store.dispatch(addTodoAction);
            expect(store.getActions()[0].type).toBe('ADD_TODO');
            expect(store.getActions()[0].text).toBe('some text');
        })
    });
});
