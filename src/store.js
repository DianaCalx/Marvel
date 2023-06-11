import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer, //especificamos el reducer
  compose(applyMiddleware(thunk), //especificamos para poder usar reducer asincronos
      typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
          window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
          //Valida si tenemos instalados redux developer tools y sino aun seguira funcionando nuestra aplicacion
  )  
);

export default store;