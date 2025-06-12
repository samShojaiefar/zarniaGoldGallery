// src/app/(main)/(common)/context/AuthContext.jsx
"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [showAuthModal, setShowAuthModal] = useState(false);

    return (
        <AuthContext.Provider value={{ showAuthModal, setShowAuthModal }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}