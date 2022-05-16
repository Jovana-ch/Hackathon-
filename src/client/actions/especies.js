import { checkStatus, parseJSON } from './base';

export function getAll(success, loading) {
    return fetch('/hackathon-api/allAnimales', {
        credentials: 'same-origin',
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    }).then(checkStatus)
        .then(res => res.json())
        .then(success);
};