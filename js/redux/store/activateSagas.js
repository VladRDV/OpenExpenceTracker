import testSaga from '../sagas/handlers/test-saga';

export default function activeteSagas (sagaMiddleware) {
	sagaMiddleware.run(testSaga);
}
