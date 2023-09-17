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
import { render, screen } from '@testing-library/react';
import CombinedCard from '../components/CustComponents/CombinedCard';

// Mock connect from react-redux
jest.mock('react-redux', () => ({
  connect: () => (Component) => Component,
}));

// Mock Redux store with required state
const mockStore = {
  hand: {
    gesture: 'CLICK',
    finger_locx: [
      { x: 0, y: 0 },
    ],
  },
};

// Mock Redux store provider
jest.mock('react-redux', () => ({
  connect: (mapStateToProps) => (Component) => (props) => (
    <Component {...mapStateToProps(mockStore)} {...props} />
  ),
}));

describe('CombinedCard Component', () => {
  it('renders without errors', () => {
    render(<CombinedCard />);
  });

  it('renders child components', () => {
    render(
      <CombinedCard>
        <div>Child Component</div>
      </CombinedCard>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});
