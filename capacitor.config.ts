import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.designedtoproduce.app',
  appName: 'Designed To Produce',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

