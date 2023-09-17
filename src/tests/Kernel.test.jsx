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
import { render } from '@testing-library/react';
import Kernel from '../components/Kernel';

jest.mock('react-redux', () => ({
  connect: () => (component) => component,
}));
jest.mock('@mediapipe/tasks-vision', () => ({
  FilesetResolver: {
    forVisionTasks: async () => ({
      // // TODO
    }),
  },
  HandLandmarker: {
    createFromOptions: async () => ({
      // // TODO
    }),
  },
}));
jest.mock('../redux/gesture/gesture.ops', () => ({
  putGesture: jest.fn(),   
  putFingLock: jest.fn(),  
  putInitialze: jest.fn(), 
}));
jest.mock('../utils/allGesture', () => ({
  rightHandGestures: () => {}, 
  leftHandGestures: () => {},   
}));

describe('Kernel Component', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      value: jest.fn(() => ({
        // Mock methods & props
        fillRect: jest.fn(),
        clearRect: jest.fn(),
        getImageData: jest.fn(() => ({
          data: new Uint8Array(4),
        })),
        putImageData: jest.fn(),
        createImageData: jest.fn(() => []),
        setTransform: jest.fn(),
        drawImage: jest.fn(),
      })),
    });

    navigator.mediaDevices = {
      getUserMedia: jest.fn(() => Promise.resolve({})),
    };

    // // Suppress (TODO)
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
    console.error.mockRestore();
  });

  it('renders without errors', () => {
    const { container } = render(<Kernel />);
    expect(container).toBeDefined(); // Check if the component renders without errors
  });
});
