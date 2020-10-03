import { NavigationCtxType } from '../types/navigation';
import { createCtx } from '../../helpers/createCtx';

export const [useNavigationCtx, NavigationCtxProvider] = createCtx<NavigationCtxType>();
