import todoReducer from './todos';
import * as actions from "../actions/actions";

describe('reducers', () => {
    describe('ADD_TODO', () => {
        it('returns state with an updated todo', () => {
            //arrange
            const addTodoAction = actions.addTodo('some text');
            const initialState = [];

            const expectedTodo = [{
                completed: false,
                id: 0,
                text: 'some text'
            }];
            //act
            const result = todoReducer(initialState, addTodoAction);
            //assert

            expect(result).toEqual(expectedTodo);
        });

        it('returns state with updated todos when store already contains one todo', () => {
            //arrange
            const addTodoAction = actions.addTodo('more text');
            const initialState = [{
                completed: false,
                id: 0,
                text: 'some text'
            }];

            const expectedState = [{
                completed: false,
                id: 0,
                text: 'some text'
            },
                {
                    completed: false,
                    id: 1,
                    text: 'more text'
                }];

            //act
            const result = todoReducer(initialState, addTodoAction);

            //assert
            expect(result[1]).toEqual(expectedState[1]);
            expect(result.length).toBe(2);
        });
    });

    describe('TOGGLE_TODO', () => {
        it('returns todo state with completed as true',  () => {
            //arrange
            const toggleTodoAction = actions.toggleTodo(0);
            const expectedTodo = [{
                completed: true,
                id: 0,
                text: 'some text'
            }];
            const initialState = [{
                completed: false,
                id: 0,
                text: 'some text'
            }];

            //act
            const result = todoReducer(initialState, toggleTodoAction);
            //assert
            expect(result).toEqual(expectedTodo);
        });

        it('returns todo state with completed as false',  () => {
            //arrange
            const toggleTodoAction = actions.toggleTodo(0);
            const expectedTodo = [{
                completed: false,
                id: 0,
                text: 'some text'
            }];
            const initialState = [{
                completed: true,
                id: 0,
                text: 'some text'
            }];

            //act
            const result = todoReducer(initialState, toggleTodoAction);
            //assert
            expect(result).toEqual(expectedTodo);
        });

        describe('REMOVE_TODO', () => {

            it('returns todo state with removed as true',  () => {
            //    arrange
                const removeTodoAction = actions.removeTodo(0);
                const expectedTodo = [{
                    completed: false,
                    id: 0,
                    removed: true,
                    text: 'some text'
                }];

                const initialState =
                    [{
                        completed: false,
                        id: 0,
                        removed: false,
                        text: 'some text'
                    }];
            //    act
                const result = todoReducer(initialState, removeTodoAction)
            //    assert
                expect(result).toEqual(expectedTodo);
            });

            it('returns todo state with removed as false',  () => {
                //    arrange
                const removeTodoAction = actions.removeTodo(0);
                const expectedTodo = [{
                    completed: false,
                    id: 0,
                    removed: false,
                    text: 'some text'
                }];

                const initialState =
                    [{
                        completed: false,
                        id: 0,
                        removed: true,
                        text: 'some text'
                    }];
                //    act
                const result = todoReducer(initialState, removeTodoAction)
                //    assert
                expect(result).toEqual(expectedTodo);
            });
        });
    })
});
