import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import playerSlice from "./features/playerSlice";
import { shazamCoreApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    // player: playerSlice,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
