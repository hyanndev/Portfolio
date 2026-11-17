// Resolve arquivos da pasta /public respeitando o "base" do Vite (funciona em qualquer hospedagem).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
