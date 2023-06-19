import {getEnvironment} from '@/utils/get-environment';

export const apiUrl = getEnvironment('API_URL', 'http://localhost:3000');
