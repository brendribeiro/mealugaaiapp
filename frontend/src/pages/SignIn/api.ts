import axios from 'axios';
const API_URL = 'https://mealugaaiapp.cyclic.app';

// Configurar o Axios para incluir o token de autenticação em todas as requisições
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Função de Login
export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/signin`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

// Função de Registro
export async function register(
  username: string,
  firstName: string,
  lastName: string,
  password: string,
) {
  const response = await axios.post(`${API_URL}/auth/signup`, {
    username,
    firstName,
    lastName,
    password,
  });
  // Armazene os dados do usuário no localStorage
  localStorage.setItem('user', JSON.stringify(response.data));
  return response.data;
}

// Funções adicionais para interagir com a API (exemplo: atualização de perfil)
export async function updateProfile(profileData: { [key: string]: string }) {
  const response = await axios.patch(`${API_URL}/user`, profileData);
  return response.data;
}

// Função para obter informações do usuário
export async function getUser() {
  const response = await axios.get(`${API_URL}/user`);
  return response.data;
}
