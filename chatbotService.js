// Chatbot API service
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

/**
 * Send a message to the chatbot
 * @param {string} message - The user's message
 * @param {string} sessionId - Session ID for conversation continuity
 * @param {string} language - User's preferred language
 * @returns {Promise<Object>} Response from the chatbot
 */
export const sendMessage = async (message, sessionId = null, language = 'en') => {
    try {
        const response = await fetch(`${API_BASE_URL}/chatbot/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                sessionId,
                language
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

/**
 * Get suggested questions
 * @returns {Promise<Array>} Array of suggested questions
 */
export const getSuggestions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/chatbot/suggestions`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.suggestions || [];
    } catch (error) {
        console.error('Error getting suggestions:', error);
        return [];
    }
};

/**
 * Clear conversation history
 * @param {string} sessionId - Session ID to clear
 * @returns {Promise<Object>} Response from the server
 */
export const clearHistory = async (sessionId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/chatbot/clear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error clearing history:', error);
        throw error;
    }
};

/**
 * Save conversation to session storage
 * @param {string} sessionId - Session ID
 * @param {Array} messages - Array of messages
 */
export const saveConversation = (sessionId, messages) => {
    try {
        sessionStorage.setItem(`chatbot_${sessionId}`, JSON.stringify(messages));
    } catch (error) {
        console.error('Error saving conversation:', error);
    }
};

/**
 * Load conversation from session storage
 * @param {string} sessionId - Session ID
 * @returns {Array} Array of messages
 */
export const loadConversation = (sessionId) => {
    try {
        const saved = sessionStorage.getItem(`chatbot_${sessionId}`);
        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        console.error('Error loading conversation:', error);
        return null;
    }
};

/**
 * Clear conversation from session storage
 * @param {string} sessionId - Session ID
 */
export const clearSavedConversation = (sessionId) => {
    try {
        sessionStorage.removeItem(`chatbot_${sessionId}`);
    } catch (error) {
        console.error('Error clearing saved conversation:', error);
    }
};
