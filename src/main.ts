import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const MIN_LOADING_TIME = 4000;
const start = performance.now();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    const elapsed = performance.now() - start;
    const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => {
      const loader = document.getElementById('preloader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, remainingTime);
  })
  .catch((err) => console.error(err));
