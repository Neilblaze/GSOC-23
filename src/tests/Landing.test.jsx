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


import React from 'react';
import Landing from '../components/Landing';

beforeAll(() => {
  Object.defineProperty(navigator, 'mediaDevices', {
    value: {
      getUserMedia: jest.fn(),
    },
  });
});

// Restore original
afterAll(() => {
  navigator.mediaDevices.getUserMedia.mockRestore();
});

describe('Landing Component', () => {
  it('renders the Landing component when loaded is false', () => {
    // Simulate camera permission not allowed
    navigator.mediaDevices.getUserMedia.mockRejectedValue(new Error('Camera permission not allowed'));
  });

  it('renders the DashboardUI component when loaded is true', () => {
    // Simulate camera permission allowed
    navigator.mediaDevices.getUserMedia.mockResolvedValue({});
  });
});
