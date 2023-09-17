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


import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../components/Kernel", () => () => <div data-testid="kernel" />);
jest.mock("../components/CustComponents/CursorTip", () => () => (
  <div data-testid="cursor-tip" />
));
jest.mock("../components/CustComponents/UIalert", () => () => (
  <div data-testid="ui-alert" />
));
jest.mock("../components/Landing", () => () => <div data-testid="landing" />);

test("renders App component", () => {
  render(<App />);
  
  // Check if components are rendered
  expect(screen.getByTestId("kernel")).toBeInTheDocument();
  expect(screen.getByTestId("cursor-tip")).toBeInTheDocument();
  expect(screen.getByTestId("ui-alert")).toBeInTheDocument();
  expect(screen.getByTestId("landing")).toBeInTheDocument();
});
