import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { TooltipProvider } from './components/ui/tooltip';

const appName = import.meta.env.VITE_APP_NAME || 'Garba';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    if (import.meta.env.SSR) {
      hydrateRoot(el, <App {...props} />);
      return;
    }

    createRoot(el).render(
      <TooltipProvider>
        <App {...props} />
      </TooltipProvider>,
    );
  },
  progress: {
    color: '#4B5563',
    showSpinner: true,
  },
});
