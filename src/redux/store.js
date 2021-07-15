import {configureStore} from '@reduxjs/toolkit'
import wordListReducer from './features/WordList/wordListSlice'

export default configureStore({reducer: {wordlist: wordListReducer }})