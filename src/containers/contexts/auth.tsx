import { AuthCtxType } from '../types/auth';
import { createCtx } from '../../helpers/createCtx';

export const [useAuthCtx, AuthCtxProvider] = createCtx<AuthCtxType>();
