const addModel = {
  namespace: 'add',
  state: {
    result: 0
  },
  reducers: {
    setState: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    *addResult(_, {put, select}) {
      const { baseNum } = yield select(state => state.baseNum)
      const { result } = yield select(state => state.add)
      yield put({
        type: 'setState',
        payload: {
          result: result + baseNum
        }
      })
    }
  }
}

export default addModel