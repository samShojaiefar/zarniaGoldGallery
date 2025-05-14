import localFont from 'next/font/local';

export const IranSansX = localFont({
  src: '../../assets/fonts/IRANSansWeb.ttf',
  display: 'swap',
  variable: '--font-IranSansX',
  declarations: [
    {
      prop: 'font-variation-settings',
      value: '"dots" 1',
    },
  ],
});