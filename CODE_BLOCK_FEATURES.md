# Code Block Enhancements

This document describes the enhanced code block features that have been added to the PalJS documentation site.

## Features Added

### 1. Copy Button

- **Location**: Top-right corner of each code block
- **Functionality**: Copies the entire code content to clipboard
- **Visual Feedback**: Shows "Copied!" message for 2 seconds after successful copy
- **Icons**: Uses Lucide React icons (Copy and Check)

### 2. Line Numbers

- **Display**: Automatically added to multi-line code blocks
- **Styling**: Right-aligned, muted color, tabular numbers
- **Behavior**: Only shows for code blocks with more than one line
- **Accessibility**: Marked with `aria-hidden="true"` to avoid screen reader interference

### 3. Language Labels

- **Display**: Shows the programming language in the top-left corner
- **Fallback**: Shows "CODE" if no language is specified
- **Styling**: Uppercase, monospace font, tracking-wider

### 4. Enhanced Styling

- **Theme Integration**: Uses shadcn/ui color system for perfect theme consistency
- **Dark/Light Mode**: Automatically adapts to your site's theme
- **Interactive Elements**: Hover states on lines and copy button with visual feedback
- **Custom Scrollbar**: Themed scrollbar that matches the overall design
- **Professional Look**: Clean, modern appearance with proper spacing and borders

## Implementation Details

### Files Modified/Created

1. **`components/code-block.tsx`** - New React component for enhanced code blocks
2. **`styles/code-block.css`** - CSS styles for code block enhancements
3. **`mdx-components.tsx`** - Updated to use the new CodeBlock component
4. **`app/globals.css`** - Added import for code block styles

### Technical Approach

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS + Custom CSS with shadcn/ui color system
- **Syntax Highlighting**: Continues to use `rehype-pretty-code` with Shiki
- **State Management**: React hooks for copy functionality
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Color System**: Fully integrated with your existing theme colors

### Color Scheme

Uses your existing shadcn/ui color tokens:

- **Header background**: `bg-secondary` with `text-secondary-foreground`
- **Code background**: `bg-muted` for subtle contrast
- **Copy button**: `bg-background` with `border-border` and `hover:bg-accent`
- **Line numbers**: `muted-foreground` with opacity for subtle visibility
- **Hover effects**: `accent` background with `primary` border accents
- **Scrollbar**: `accent` track with `muted-foreground` thumb

This ensures perfect consistency with your existing theme and automatic adaptation to any theme changes you make.

### Code Block Structure

```
┌─────────────────────────────────────┐
│ LANGUAGE               [Copy Button] │ ← Header with language and copy
├─────────────────────────────────────┤
│ 1  │ code line 1                    │ ← Line numbers + code content
│ 2  │ code line 2                    │
│ 3  │ code line 3                    │
│ ...│ ...                            │
└─────────────────────────────────────┘
```

### Browser Compatibility

- **Clipboard API**: Modern browsers (Chrome 66+, Firefox 63+, Safari 13.1+)
- **Fallback**: Graceful degradation for older browsers
- **CSS Features**: Uses modern CSS with fallbacks

## Usage

The enhanced code blocks work automatically with all existing MDX content. No changes are needed to existing documentation files.

### Example

```javascript
// This code block will automatically have:
// - Copy button
// - Line numbers
// - Language label ("JAVASCRIPT")
// - Enhanced styling

function example() {
  console.log("Enhanced code block!");
}
```

### Inline Code

Inline code like `const example = "value"` remains unchanged and uses the original styling.

## Testing

Test the features by:

1. Visiting `/test-mdx` page which contains various code examples
2. Clicking the copy button to test clipboard functionality
3. Hovering over lines to see interactive effects
4. Testing in both light and dark modes
5. Checking different programming languages (JavaScript, TypeScript, Prisma, Bash, etc.)

## Future Enhancements

Potential improvements that could be added:

- **Line highlighting**: Highlight specific lines with special syntax
- **Code folding**: Collapse/expand sections of code
- **Download button**: Download code as a file
- **Multiple themes**: Switch between different syntax highlighting themes
- **Code execution**: Run code snippets in supported languages
