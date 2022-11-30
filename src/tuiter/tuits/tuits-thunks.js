import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service";

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits',
    async (thunkAPI) =>
                    await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk (
    'delete/tuit',
    async(tid) => await service.deleteTuit(tid)
)

export const createTuitThunk = createAsyncThunk (
    'createTuit',
    async(tuitText) => await service.createTuit(tuitText)
)


export const updateTuitThunk = createAsyncThunk (
    'updateTuit',
    async(tuit) => await service.updateTuit(tuit)
)



