const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

// School Profile
export const getSchoolProfile = async (schoolId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/profile`, {
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
};

export const updateSchoolProfile = async (schoolId, data) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/profile`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update profile');
    return response.json();
};

// Gallery
export const getGallery = async (schoolId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/gallery`, {
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch gallery');
    return response.json();
};

export const uploadPhoto = async (schoolId, data) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/gallery`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to upload photo');
    return response.json();
};

export const deletePhoto = async (photoId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/gallery/${photoId}`, {
        method: 'DELETE',
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to delete photo');
    return response.json();
};

// Updates
export const getUpdates = async (schoolId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/updates`, {
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch updates');
    return response.json();
};

export const createUpdate = async (schoolId, data) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/updates`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create update');
    return response.json();
};

export const updateUpdate = async (updateId, data) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/updates/${updateId}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update update');
    return response.json();
};

export const deleteUpdate = async (updateId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/updates/${updateId}`, {
        method: 'DELETE',
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to delete update');
    return response.json();
};

// Events
export const getEvents = async (schoolId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/events`, {
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
};

export const createEvent = async (schoolId, data) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/events`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create event');
    return response.json();
};

export const updateEvent = async (eventId, data) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/events/${eventId}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update event');
    return response.json();
};

export const deleteEvent = async (eventId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/events/${eventId}`, {
        method: 'DELETE',
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to delete event');
    return response.json();
};

// Analytics
export const getAnalytics = async (schoolId) => {
    const response = await fetch(`${API_BASE_URL}/school-dashboard/${schoolId}/analytics`, {
        headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch analytics');
    return response.json();
};
