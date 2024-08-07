import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });

    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text identifying the content of the image", () => {
    render(<App />);

    const image = screen.getByAltText('Your Photo')
      
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'path/to/your-image.jpg')
});

test("displays a second-level heading with the text `About me`", () => {
    render(<App />)

    const secondLevelHeading = screen.getByRole("heading", {
        name: /About me/i,
        exact: false,
        level: 2,
    });
    expect(secondLevelHeading).toBeInTheDocument();
})
test("displays a paragraph of one's bio", () => {
    render(<App />)

    const paragraph = screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.length > 0;
    });
    expect(paragraph).toBeInTheDocument();
})
test('renders a GitHub link with the correct href attribute', () => {
    render(<App />);

    const githubLink = screen.getByRole('link', { name: /GitHub/i });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
});

test('renders a LinkedIn link with the correct href attribute', () => {
    render(<App />);

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
});