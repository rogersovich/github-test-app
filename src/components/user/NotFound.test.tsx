import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound';
import EmptyUser from '../../assets/empty-user.svg'

describe('simple working test', () => {
  it('the text is visible', () => {
    render(<NotFound />)
    expect(screen.getByText("I'm sorry there's no username found")).toBeInTheDocument()
    expect(screen.getByText(/Please search github username in text input below/i)).toBeInTheDocument()
  })
})

describe('image must have src', () => {
  it('the image have src', () => {
    const { getByAltText } = render(<NotFound />);
    const imageElement = getByAltText("Empty User");
    expect(imageElement).toHaveAttribute('src', EmptyUser);
  })
})