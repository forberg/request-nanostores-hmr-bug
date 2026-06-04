# 🚨 UPDATE:

This issue was resolved in this PR: https://github.com/withastro/astro/pull/16924


# Request Nanostores - Shared Store Bug Demo

This project demonstrates a bug with `@inox-tools/request-nanostores` when using the `shared` scope during hot module reloading (HMR).

## Setup

This is an Astro project with React integration and `@inox-tools/request-nanostores` installed.

## Project Structure

- `src/stores/userStore.ts` - Contains a `requestAtom` with `scope: 'shared'` and mock user data
- `src/components/UserList.tsx` - React component that consumes the shared store
- `src/pages/index.astro` - Main page that renders the component

## How to Reproduce the Bug

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser (typically http://localhost:4321)

4. Make any change to `src/components/UserList.tsx` (e.g., add a comment or change some text)

5. Save the file to trigger hot module reload

6. Observe the behavior - the bug should manifest with the shared store during HMR

## Expected vs Actual Behavior

**Expected:** The shared store should maintain its state correctly during hot reload, and the component should re-render with the same data.

**Actual:** The store becomes `undefined` after HMR

## Store Configuration

The store is configured with:
- Wrapped with `shared('users', atom([...]))` function from `@it-astro:request-nanostores`
- Mock data with 3 users
- This enables request-scoped state that can be shared between server and client

## Package Versions

- `@inox-tools/request-nanostores`: Latest
- `nanostores`: Latest
- `@nanostores/react`: Latest
- `astro`: Latest
- `react`: v19.x
