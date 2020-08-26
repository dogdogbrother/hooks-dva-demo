 const baseNumModel = {
  namespace: 'baseNum',
  state: {
    baseNum: 0
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
    *addBaseNum({payload}, {put, select}) {
      const { baseNum } = yield select(state => state.baseNum)
      yield put({
        type: 'setState',
        payload: {
          baseNum: baseNum + payload
        }
      })
    }
  }
}

export default baseNumModel