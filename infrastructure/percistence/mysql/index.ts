import { connectToMySQL } from './connection';

async function initializeMySQL(): Promise<void> {
    try {
        await connectToMySQL();
        console.log('MySQL connection initialized successfully');
    } catch (error) {
        console.error('Error initializing MySQL connection:', error);
    }
}

export { initializeMySQL };