import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Workflow/",  // Update this if your GitHub repository is named "Workflow"
});
