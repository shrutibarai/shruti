import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: `base` must match how the site is served on GitHub Pages.
//  - Project site (github.com/<user>/<repo> -> <user>.github.io/<repo>/):
//      base: '/<repo-name>/'
//  - User/organization site (a repo literally named <user>.github.io):
//      base: '/'
// Update REPO_NAME below to your actual repository name before deploying.
const REPO_NAME = 'shruti'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
})
