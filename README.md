# AI Insurance Help Center

A modern AI-powered insurance help center built with Next.js, React, TypeScript, and Tailwind CSS.

## Project Goal

The goal of this project is to build a customer support portal for an insurance company where users can:

- Browse insurance help topics
- Search insurance-related questions
- Read help articles
- Ask questions to an AI assistant
- Receive grounded answers based on available help-center content

## Tech Stack

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- App Router

## Step 1: Project Setup

- Created a new Next.js application
- Enabled TypeScript
- Enabled Tailwind CSS
- Enabled App Router
- Initialized Git repository
- Created initial project commit

## Local Development

```bash
npm install
npm run dev

Open: http://localhost:3000

--------------------------------------------------------

## Step 1: Project Setup

- Created Next.js app with TypeScript and Tailwind
- Using App Router architecture
- Verified local development server

## Step 2: Project Structure

Created a modular folder structure:

- `components/layout` for shared layout components
- `components/help-center` for help center UI
- `components/chat` for AI assistant UI
- `lib` for utility and backend logic
- `data` for static help center content

## Step 3: Help Center Dataset

Added a static insurance help-center dataset with:

- Article title
- Category
- Summary
- Tags
- Content

For this MVP, the dataset is manually curated and AI-synthetic. In production, this can be replaced with CMS data, crawled content, or a knowledge-base integration.


## Step 4: Article Card Component

Created a reusable ArticleCard component to display help-center articles.

Features:
- Displays category badge
- Shows article title and summary
- Shows top tags for quick context

This component will be reused in the help center listing and search results.

## Step 5: Help Center Listing

Implemented the main help center listing UI:

- Displays all articles using a reusable ArticleCard component
- Grid layout for responsive design

## Step 6: Category Filtering

Added category-based filtering for help articles:

- Users can filter articles by category
- Active category is highlighted
- Improves navigation and discoverability
- Enhances browsing experience, search and AI interaction

## Step 7: Category-based Filtering Integration

- Added React state for selected category
- Filtered articles dynamically based on selection

## Step 8: Search Input

Added a reusable SearchBox component:

- Controlled input using React state
- Designed for help-center article search
- Supports searching across claims, policy, travel, and payments topics

## Step 9: Search Integration

- Search checks title, category, summary, tags, and article content
- Search works together with category filtering
- Added empty state when no articles match
- It improves discoverability and helps users quickly find insurance-related information

## Step 12: Header Layout

Added a top navigation header:

- Brand logo and product name
- "Ask AI" button

## Step 13: Sidebar Navigation

Implemented a left sidebar for category navigation:

- Vertical category list
- Active category highlighting
- Improves structured navigation vs horizontal chips
- Aligns with real help-center UX patterns which is provide in assessment document

## Step 14: Banner

- Blue gradient help-center banner
- Search input integrated inside Banner
- AI assistance Button

## Step 15: Popular Questions

- Added a popular questions section:
- Displays commonly asked insurance questions
- Clickable chips for quick search
- Improves discoverability and user guidance
- Displayed result count

## Step 16: Chat Types

- ChatMessage type for user and assistant messages
- Role-based messaging system
- Starter questions for better user experience

## Step 17: Chat Panel

- Starter questions
- User can input questions and ask from AI
- Manage Layout based on scroll

## Step 18: Chat API Integration

- Connected chat UI with backend API
- Sends user questions to /api/chat
- Displays response in chat UI
- Handling API errors

## Step 27: RAG + LLM Integration

- Retrieves relevant articles from dataset
- Builds context for LLM
- Sends context and question to OpenRouter
- Making sure grounded responses
- Handled Fallback if API key is missing

## Final Features

- Help center browsing (categories + search)
- AI assistant with chat interface
- Lightweight RAG implementation
- Context-based AI responses
- Loading states and error handling
- Auto-scroll chat UX
- Starter questions for guidance

## AI Design

- Context injection to LLM
- OpenRouter for model access
- No vector DB (tradeoff for simplicity) 

## Tradeoffs

- Did not implement full vector DB RAG due to time and complexity
- Used lightweight retrieval for explainability
- Focused on practical AI integration into user flow