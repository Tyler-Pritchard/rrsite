// sagas.ts
import { all, call } from 'redux-saga/effects';

function watchUserActions() {
  console.log("User saga initialized");
}

function watchMenuActions() {
  console.log("Menu saga initialized");
}

export default function* rootSaga() {
  yield all([
    call(watchUserActions),
    call(watchMenuActions),
  ]);
}
