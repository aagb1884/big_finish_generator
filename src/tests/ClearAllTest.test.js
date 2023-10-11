import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import ClearAll from '../components/ClearAll';

describe("ClearAll", () => {
  let container;

  const clearAllMock = jest.fn(); 

  beforeEach(() => {
    container = render(< ClearAll clearAll={clearAllMock}/>);
  });

  it('should call clearAll function when Clear All button is pressed', () => {
   
    const clearAllButton = container.getByTestId('clear-all-button')
    fireEvent.click(clearAllButton);
    
    expect(clearAllMock).toHaveBeenCalled();
  });

});