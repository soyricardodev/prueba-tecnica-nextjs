import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import type { MarketingConfig } from '@/types'

interface MarketingLayoutProps {
  children: React.ReactNode
}

const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Features',
      href: '/#features'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]
}

export default async function MarketingLayout ({
  children
}: MarketingLayoutProps): Promise<JSX.Element> {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container z-40 bg-background'>
        <div className='flex h-20 items-center justify-between py-6'>
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href='/login'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
