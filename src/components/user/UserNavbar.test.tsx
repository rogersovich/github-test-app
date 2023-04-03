import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import UserNavbar from './UserNavbar';

describe('UserNavbar', () => {
  it('renders user name and Github icon button', () => {
    const { getByText, getByLabelText } = render(<UserNavbar />);
    const userName = getByText('Dimas Roger Widianto');
    const githubButton = getByLabelText('Github');

    expect(userName).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();

  });
});
