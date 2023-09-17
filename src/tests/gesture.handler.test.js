// Copyright 2023 The MediaPipe Authors.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//      http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// ---------------------------------------------------------------------------------------- //


import gestureHandler from "../redux/gesture/gesture.handler";
import { GEST_ASSIGN } from "../redux/gesture/gesture.forms";

describe("gestureHandler reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      gesture: null,
      finger_locx: null,
      loaded: false,
    };
    expect(gestureHandler(undefined, {})).toEqual(initialState);
  });

  it("should handle GEST_ASSIGN action", () => {
    const initialState = {
      gesture: null,
      finger_locx: null,
      loaded: false,
    };
    const action = {
      type: GEST_ASSIGN,
      payload: "swipe",
    };
    const expectedState = {
      ...initialState,
      gesture: "swipe",
    };
    expect(gestureHandler(initialState, action)).toEqual(expectedState);
  });
});
