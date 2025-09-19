declare var window: any;

export const environment = {
    
  production: true,
  USUARIO_API: window.__env?.USUARIO_API,
  MENSAJE_API: window.__env?.MENSAJE_API
};
