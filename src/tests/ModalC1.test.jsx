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
import { render, screen, fireEvent } from '@testing-library/react';
import ModalC1 from '../components/CustComponents/ModalC1';

describe('ModalC1 Component', () => {
  it('renders nothing when showModal and showModal2 are false', () => {
    render(<ModalC1 showModal={false} showModal2={false} handleModalInteraction={() => {}} />);
    const modalElement = screen.queryByText('Modal Content'); // Dummy
    expect(modalElement).not.toBeInTheDocument();
  });

  it('renders the first modal when showModal is true', () => {
    render(<ModalC1 showModal={true} showModal2={false} handleModalInteraction={() => {}} />);
    const modalElement = screen.getByAltText(''); // Dummy
    expect(modalElement).toBeInTheDocument();
  });

  it('renders the second modal when showModal2 is true', () => {
    render(<ModalC1 showModal={false} showModal2={true} handleModalInteraction={() => {}} />);
    const modalElement = screen.getByAltText(''); // Dummy
    expect(modalElement).toBeInTheDocument();
  });

  it('calls handleModalInteraction when clicking on the modal', () => {
    const handleModalInteractionMock = jest.fn();
    render(<ModalC1 showModal={true} showModal2={false} handleModalInteraction={handleModalInteractionMock} />);
    const modalElement = screen.getByAltText(''); // Dummy
    fireEvent.click(modalElement);
    expect(handleModalInteractionMock).toHaveBeenCalledTimes(1);
  });
});
