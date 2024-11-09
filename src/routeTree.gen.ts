/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ApgarScoreIndexImport } from './routes/apgar-score/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const HomeIndexLazyImport = createFileRoute('/home/')()
const DiceRollIndexLazyImport = createFileRoute('/dice-roll/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const HomeIndexLazyRoute = HomeIndexLazyImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/home/index.lazy').then((d) => d.Route))

const DiceRollIndexLazyRoute = DiceRollIndexLazyImport.update({
  id: '/dice-roll/',
  path: '/dice-roll/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/dice-roll/index.lazy').then((d) => d.Route),
)

const ApgarScoreIndexRoute = ApgarScoreIndexImport.update({
  id: '/apgar-score/',
  path: '/apgar-score/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/apgar-score/': {
      id: '/apgar-score/'
      path: '/apgar-score'
      fullPath: '/apgar-score'
      preLoaderRoute: typeof ApgarScoreIndexImport
      parentRoute: typeof rootRoute
    }
    '/dice-roll/': {
      id: '/dice-roll/'
      path: '/dice-roll'
      fullPath: '/dice-roll'
      preLoaderRoute: typeof DiceRollIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/apgar-score': typeof ApgarScoreIndexRoute
  '/dice-roll': typeof DiceRollIndexLazyRoute
  '/home': typeof HomeIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/apgar-score': typeof ApgarScoreIndexRoute
  '/dice-roll': typeof DiceRollIndexLazyRoute
  '/home': typeof HomeIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/apgar-score/': typeof ApgarScoreIndexRoute
  '/dice-roll/': typeof DiceRollIndexLazyRoute
  '/home/': typeof HomeIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/apgar-score' | '/dice-roll' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/apgar-score' | '/dice-roll' | '/home'
  id: '__root__' | '/' | '/apgar-score/' | '/dice-roll/' | '/home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ApgarScoreIndexRoute: typeof ApgarScoreIndexRoute
  DiceRollIndexLazyRoute: typeof DiceRollIndexLazyRoute
  HomeIndexLazyRoute: typeof HomeIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ApgarScoreIndexRoute: ApgarScoreIndexRoute,
  DiceRollIndexLazyRoute: DiceRollIndexLazyRoute,
  HomeIndexLazyRoute: HomeIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/apgar-score/",
        "/dice-roll/",
        "/home/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/apgar-score/": {
      "filePath": "apgar-score/index.tsx"
    },
    "/dice-roll/": {
      "filePath": "dice-roll/index.lazy.tsx"
    },
    "/home/": {
      "filePath": "home/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */