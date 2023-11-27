
import TodoForm from '../todoForm/TodoForm';
import TodoList from '../todoList/TodoList';
import './app.css';

const App = () => {


    return (  <main className="app">
                <div className="content">
                    <h3>React ToDo (REDUX)</h3>
                     <TodoForm />
                    <div className="content__interactive">
                       <TodoList />
                    </div>
                </div>
            </main>)
}
export default App;