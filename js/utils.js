

// Initialize Supabase Client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// --- Configuration ---
// IMPORTANT: Replace with your actual Supabase URL and Anon Key
const SUPABASE_URL = 'https://nugxkqclzusgibyqemou.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51Z3hrcWNsenVzZ2lieXFlbW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjA4MTgsImV4cCI6MjA4MDIzNjgxOH0.j9bvd-zyTqNg2aGhpwmuzeHZaZl4xzSOSsD0TRp79Xc';



const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const auth = supabase.auth;

// Check if user is authenticated and redirect if necessary
async function requireAuth(redirectPath = '/admin-login.html') {
    const { data: { user } } = await auth.getUser();
    if (!user) {
        window.location.href = redirectPath;
        return null;
    }
    return user;
}

// Global utility for displaying simple messages
function showMessage(elementId, message, isError = false) {
    const msgElement = document.getElementById(elementId);
    msgElement.textContent = message;
    msgElement.classList.remove('hidden', 'text-green-600', 'text-red-600');
    msgElement.classList.add(isError ? 'text-red-600' : 'text-green-600', 'block');
    setTimeout(() => {
        msgElement.classList.add('hidden');
    }, 5000);
}

// Function to safely sign out
async function signOut() {
    await auth.signOut();
    window.location.href = '/admin-login.html';
}


export { supabase, auth, requireAuth, showMessage, signOut, SUPABASE_URL };
