# Pop Quiz Application

A dynamic quiz application that automatically detects quiz files and loads them dynamically.

## Features

- Automatically detects all `quiz*.json` files in the directory
- Uses filename (without extension) as quiz title
- No need to manually update the quiz list in code
- Simple, clean interface

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and go to `http://localhost:3000`

## Adding New Quizzes

Simply add new JSON files with the naming pattern `quiz*.json` (e.g., `quiz3.json`, `quiz4.json`, etc.). The application will automatically detect them and add them to the quiz selector.

## Quiz File Format

Each quiz file should be a JSON array of question objects:

```json
[
  {
    "question": "Your question here?",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "answer": "Correct Answer"
  }
]
```

## Development

For development with auto-restart:
```bash
npm run dev
```
