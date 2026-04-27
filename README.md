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