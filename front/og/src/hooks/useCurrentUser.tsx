'use client';
import { useState, useEffect } from "react";
import axios,{ AxiosError } from 'axios';
import { apiAuthRequiredBaseUrl } from "@/libs/nextauth"

export function useCurrentUser() {
    let currentUser = null;
    let isAuthChecking = false;
    const fetchUser = async () => {
        try {
        const apiPath = `v1/auth/users/me/`;
        const response = await axios.get(`${apiAuthRequiredBaseUrl}/${apiPath}`);
        if (response.data.status === 200) {
            currentUser = response.data.data;
            isAuthChecking = true;
        }
        } catch (error) {
        } finally {
    }
    };
    fetchUser();

  return {
    isAuthChecking,
    currentUser
  };
}