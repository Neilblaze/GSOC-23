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
import TimeComponent from '../components/CustComponents/TimeComponent';

describe('TimeComponent', () => {
  // Mock the Date constructor to always return a fixed date and time for testing
  const originalDate = Date;
  const fixedDate = new Date('2023-09-01T12:34:56'); // Testing

  beforeAll(() => {
    global.Date = class extends originalDate {
      constructor() {
        super();
        return fixedDate;
      }
    };
  });

  afterAll(() => {
    global.Date = originalDate;
  });

  it('displays the formatted time', () => {
    render(<TimeComponent />);
    // Regex to match the time in 'hh:mm:ss' format
    const timeElement = screen.getByText(/(\d{2}:\d{2}:\d{2})/);
    expect(timeElement).toBeInTheDocument();
  });

  it('displays the day name', () => {
    render(<TimeComponent />);
    // Regex to match the day name (e.g., "Mon")
    const dayNameElement = screen.getByText(/(Sun|Mon|Tue|Wed|Thu|Fri|Sat)/);
    expect(dayNameElement).toBeInTheDocument();
  });

  it('displays the month', () => {
    render(<TimeComponent />);
    // Regex to match the month name (e.g., "Jan")
    const monthElement = screen.getByText(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    expect(monthElement).toBeInTheDocument();
  });

  it('displays the day of the month', () => {
    render(<TimeComponent />);
    // Regex to match the day of the month (e.g., "01")
    const dayElement = screen.getByText(/(\d{2})/);
    expect(dayElement).toBeInTheDocument();
  });
});
