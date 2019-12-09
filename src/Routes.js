import loadable from '@loadable/component'

export const CountApp = loadable(() => import('./Container/CountApp'));
export const TodoApp = loadable(() => import('./Container/TodoAppListApp'));
export const WebRTCAPP = loadable(() => import('./Container/WebRTCAPP'));