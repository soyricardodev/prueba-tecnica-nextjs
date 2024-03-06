import { Icons } from '@/components/icons'

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
    href: string
    items?: never
  }
  | {
    href?: string
    items: NavItem[]
  }
)

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface MarketingConfig {
  mainNav: MainNavItem[]
}

export interface DashboardConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
