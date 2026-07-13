/// <reference types="vite/client" />

// Permite importar arquivos .asset.json sem erro de tipagem
declare module "*.asset.json" {
  const value: { url: string };
  export default value;
}

// (Opcional) Se quiser evitar erros em imagens comuns também:
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}
