import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';

/**
 * getAuthority() 从本地存储返回型如['admin','user']的权限信息
 * RenderAuthorize(getAuthority()) 返回的是一个'函数'：
 * 此'函数'接收当前用户的权限信息，返回'src\utils\Authorized.js'组件。
 * !todo 理解'src\utils\Authorized.js'组件的作用
 *
 * 'src\utils\Authorized.js'组件自身挂着'src\components\Authorized\CheckPermissions.js'组件
 */
let Authorized = RenderAuthorize(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorize(getAuthority());
};

export { reloadAuthorized };
export default Authorized;
