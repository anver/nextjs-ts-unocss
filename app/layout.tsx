import '@/styles/globals.css';

export const metadata = {
  title: 'App Title',
  description: 'App',
};

import { Menu } from '@/components/menu';
import { StyleSwitcher } from '@/components/style-switcher';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className='bg-black overflow-clip'>
      <head />
      <body className='font-sans antialiased bg-transparent overflow-clip scrollbar-none'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='h-screen overflow-clip'>
            <Menu />
            <div
              className={cn(
                'h-screen overflow-auto border-t bg-background pb-8',
                // "scrollbar-none"
                'scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md'
              )}
            >
              {children}
            </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <StyleSwitcher />
      </body>
    </html>
  );
}
