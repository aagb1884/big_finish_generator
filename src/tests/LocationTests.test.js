import EventLocation from '../components/lists/Location';
import {render, fireEvent} from '@testing-library/react';
import React from 'react';

describe("EventLocation", () => {
  let container;

  beforeEach(() => {
    container = render(< EventLocation />);
  });

  it('should call the setLocation function when the button is pressed', () => {
    const setLocation = jest.fn();
    expect(setLocation).toHaveBeenCalledTimes(0);
    const locationButton = container.getByTestId("location-button");
    fireEvent.click(locationButton);
    expect(setLocation).toHaveBeenCalledTimes(1);
  })
})

// have elected not to do repeated tests for other components as they work in an identical way